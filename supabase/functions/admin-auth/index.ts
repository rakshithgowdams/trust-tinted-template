import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const ADMIN_EMAIL = "rakesh@rsmedicalagency.com";
const OTP_EXPIRY_MIN = 10;
const SESSION_EXPIRY_HRS = 24;

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/admin-auth/, "");

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    if (path === "/request-otp" && req.method === "POST") {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const otpHash = await sha256(otp);
      const expiresAt = new Date(Date.now() + OTP_EXPIRY_MIN * 60 * 1000).toISOString();

      // Invalidate all previous unused OTPs
      await supabase.from("admin_otps").update({ used: true }).eq("used", false);

      await supabase.from("admin_otps").insert({ otp_hash: otpHash, expires_at: expiresAt });

      const resendKey = Deno.env.get("RESEND_API_KEY");
      if (!resendKey) throw new Error("RESEND_API_KEY not set");

      const emailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:20px;color:#333">
  <div style="background:#1a3a5c;padding:20px 24px;border-radius:8px 8px 0 0">
    <h2 style="color:#fff;margin:0;font-size:18px">RS Medical — Admin Login</h2>
  </div>
  <div style="background:#f9f9f9;padding:28px 24px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
    <p style="margin:0 0 16px;color:#444">Your one-time login code for the RS Medical Admin Dashboard:</p>
    <div style="background:#1a3a5c;color:#fff;font-size:40px;font-weight:bold;letter-spacing:14px;text-align:center;padding:24px;border-radius:8px;margin-bottom:20px">
      ${otp}
    </div>
    <p style="margin:0;font-size:13px;color:#888">This code expires in <strong>${OTP_EXPIRY_MIN} minutes</strong>. Do not share it with anyone.</p>
  </div>
</body>
</html>`;

      const senders = [
        "RS Medical Admin <noreply@rsmedicalagency.com>",
        "RS Medical Admin <onboarding@resend.dev>",
      ];

      let sent = false;
      for (const from of senders) {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from,
            to: [ADMIN_EMAIL],
            subject: `${otp} — RS Medical Admin Login Code`,
            html: emailHtml,
            text: `Your RS Medical Admin login code: ${otp}\n\nExpires in ${OTP_EXPIRY_MIN} minutes. Do not share this code.`,
          }),
        });
        const body = await res.text();
        console.log(`OTP send [${res.status}] from=${from}:`, body);
        if (res.ok) {
          sent = true;
          break;
        }
      }

      if (!sent) throw new Error("Failed to send OTP email");

      return json({ success: true });
    }

    if (path === "/verify-otp" && req.method === "POST") {
      const { otp } = await req.json();
      if (!otp) return json({ error: "OTP required" }, 400);

      const otpHash = await sha256(String(otp).trim());
      const now = new Date().toISOString();

      const { data: record } = await supabase
        .from("admin_otps")
        .select("id")
        .eq("otp_hash", otpHash)
        .eq("used", false)
        .gt("expires_at", now)
        .maybeSingle();

      if (!record) {
        return json({ error: "Invalid or expired code. Please request a new one." }, 401);
      }

      await supabase.from("admin_otps").update({ used: true }).eq("id", record.id);

      const rawToken = crypto.randomUUID() + "-" + crypto.randomUUID();
      const tokenHash = await sha256(rawToken);
      const sessionExpiry = new Date(Date.now() + SESSION_EXPIRY_HRS * 3600 * 1000).toISOString();

      await supabase.from("admin_sessions").insert({ token_hash: tokenHash, expires_at: sessionExpiry });

      return json({ success: true, token: rawToken });
    }

    return json({ error: "Not found" }, 404);
  } catch (err) {
    console.error("admin-auth error:", err);
    return json({ error: "Internal server error" }, 500);
  }
});

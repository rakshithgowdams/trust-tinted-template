import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT = "rakesh@rsmedicalagency.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(JSON.stringify({ error: "Email service not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Save to database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { error: dbError } = await supabase.from("enquiries").insert({ name, email, phone, message });
    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    const n = escapeHtml(name);
    const e = escapeHtml(email);
    const p = escapeHtml(phone);
    const m = escapeHtml(message);

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#333">
  <div style="background:#1a3a5c;padding:20px 28px;border-radius:8px 8px 0 0">
    <h1 style="color:#ffffff;margin:0;font-size:20px">New Website Enquiry</h1>
    <p style="color:#a8c8e8;margin:6px 0 0;font-size:13px">RS Medical Agency</p>
  </div>
  <div style="background:#f9f9f9;padding:24px 28px;border:1px solid #e0e0e0;border-top:none">
    <table style="width:100%;border-collapse:collapse">
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #eee;width:100px;font-weight:bold;color:#555;font-size:14px">Name</td>
        <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px">${n}</td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;color:#555;font-size:14px">Email</td>
        <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px"><a href="mailto:${e}" style="color:#1a6fb5">${e}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #eee;font-weight:bold;color:#555;font-size:14px">Phone</td>
        <td style="padding:10px 0;border-bottom:1px solid #eee;font-size:14px"><a href="tel:${p}" style="color:#1a6fb5">${p}</a></td>
      </tr>
      <tr>
        <td style="padding:10px 0;font-weight:bold;color:#555;font-size:14px;vertical-align:top">Message</td>
        <td style="padding:10px 0;font-size:14px;white-space:pre-wrap">${m}</td>
      </tr>
    </table>
  </div>
  <div style="background:#e8f0f7;padding:12px 28px;border:1px solid #e0e0e0;border-top:none;border-radius:0 0 8px 8px">
    <p style="margin:0;font-size:12px;color:#888">Reply directly to this email to respond to ${n}.</p>
  </div>
</body>
</html>`;

    const text = `New enquiry from RS Medical website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    // Try sending from verified domain first, fallback to Resend shared domain
    const senders = [
      "RS Medical Agency <noreply@rsmedicalagency.com>",
      "RS Medical Agency <onboarding@resend.dev>",
    ];

    let lastResendError = "";
    for (const from of senders) {
      const payload = {
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `New enquiry from ${name} — RS Medical`,
        html,
        text,
      };

      console.log(`Attempting to send from: ${from}`);
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify(payload),
      });

      const resBody = await res.text();
      console.log(`Resend response [${res.status}] from=${from}:`, resBody);

      if (res.ok) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      lastResendError = resBody;
    }

    console.error("All senders failed. Last error:", lastResendError);
    return new Response(JSON.stringify({ error: "Failed to send email.", detail: lastResendError }), {
      status: 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-enquiry unhandled error:", err);
    return new Response(JSON.stringify({ error: "Internal server error." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

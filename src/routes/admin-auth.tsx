import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const ADMIN_EMAIL = "rakesh@rsmedicalagency.com";
const TOKEN_KEY = "rs_admin_token";

async function apiPost(endpoint: string, body: unknown) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/admin-auth${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error ?? "Request failed");
  return data;
}

function AdminAuthPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"send" | "verify">("send");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [cooldown, setCooldown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(TOKEN_KEY)) {
      navigate({ to: "/dashboard" });
    }
  }, [navigate]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  async function handleSendOtp() {
    setLoading(true);
    try {
      await apiPost("/request-otp", {});
      toast.success(`Code sent to ${ADMIN_EMAIL}`);
      setStep("verify");
      setCooldown(30);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send code");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerify() {
    const code = otp.join("");
    if (code.length < 6) {
      toast.error("Enter the full 6-digit code");
      return;
    }
    setLoading(true);
    try {
      const data = await apiPost("/verify-otp", { otp: code });
      localStorage.setItem(TOKEN_KEY, data.token);
      toast.success("Logged in successfully");
      navigate({ to: "/dashboard" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid code");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  }

  function handleOtpChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter") handleVerify();
  }

  function handleOtpPaste(e: React.ClipboardEvent) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    e.preventDefault();
    const next = [...otp];
    for (let i = 0; i < 6; i++) next[i] = pasted[i] ?? "";
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gradient-to-br from-[#0f2233] to-[#1a3a5c] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo area */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center size-14 rounded-2xl bg-white/10 border border-white/20 mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="size-7 text-white" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">RS Medical</h1>
            <p className="text-white/50 text-sm mt-1">Admin Dashboard</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {step === "send" ? (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Sign in</h2>
                <p className="text-sm text-gray-500 mb-6">
                  We'll send a one-time code to the admin email address.
                </p>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Admin Email
                  </label>
                  <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <svg className="size-4 text-gray-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">{ADMIN_EMAIL}</span>
                  </div>
                </div>

                <button
                  onClick={handleSendOtp}
                  disabled={loading}
                  className="w-full rounded-xl bg-[#1a3a5c] text-white font-semibold py-3.5 text-sm hover:bg-[#0f2233] transition-colors disabled:opacity-60"
                >
                  {loading ? "Sending code…" : "Send Login Code"}
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Enter your code</h2>
                <p className="text-sm text-gray-500 mb-6">
                  A 6-digit code was sent to <span className="font-medium text-gray-700">{ADMIN_EMAIL}</span>
                </p>

                <div className="flex gap-2 justify-between mb-6" onPaste={handleOtpPaste}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { inputRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className="w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/20 outline-none transition-colors bg-gray-50"
                    />
                  ))}
                </div>

                <button
                  onClick={handleVerify}
                  disabled={loading || otp.join("").length < 6}
                  className="w-full rounded-xl bg-[#1a3a5c] text-white font-semibold py-3.5 text-sm hover:bg-[#0f2233] transition-colors disabled:opacity-60 mb-4"
                >
                  {loading ? "Verifying…" : "Verify & Sign In"}
                </button>

                <div className="text-center">
                  <button
                    onClick={handleSendOtp}
                    disabled={loading || cooldown > 0}
                    className="text-sm text-gray-500 hover:text-[#1a3a5c] disabled:opacity-50 transition-colors"
                  >
                    {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
                  </button>
                </div>

                <button
                  onClick={() => { setStep("send"); setOtp(["", "", "", "", "", ""]); }}
                  className="mt-3 w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  ← Back
                </button>
              </>
            )}
          </div>

          <p className="text-center text-white/30 text-xs mt-6">
            RS Medical Agency — Admin access only
          </p>
        </div>
      </div>
    </>
  );
}

export const Route = createFileRoute("/admin-auth")({
  component: AdminAuthPage,
});

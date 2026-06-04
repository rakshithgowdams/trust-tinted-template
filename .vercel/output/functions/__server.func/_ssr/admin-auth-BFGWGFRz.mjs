import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { T as Toaster } from "./sonner-DeNSN9-c.mjs";
import { s as supabase } from "./supabase-Cw3Pkn2f.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const ADMIN_EMAIL = "rakesh@rsmedicalagency.com";
function AdminAuthPage() {
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState("send");
  const [loading, setLoading] = reactExports.useState(false);
  const [otp, setOtp] = reactExports.useState(["", "", "", "", "", ""]);
  const [cooldown, setCooldown] = reactExports.useState(0);
  const inputRefs = reactExports.useRef([]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    supabase.auth.getSession().then(({
      data
    }) => {
      if (data.session) navigate({
        to: "/dashboard"
      });
    });
  }, [navigate]);
  reactExports.useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1e3);
    return () => clearTimeout(t);
  }, [cooldown]);
  async function handleSendOtp() {
    setLoading(true);
    try {
      const {
        error
      } = await supabase.auth.signInWithOtp({
        email: ADMIN_EMAIL,
        options: {
          shouldCreateUser: true
        }
      });
      if (error) throw error;
      toast.success(`Code sent to ${ADMIN_EMAIL}`);
      setStep("verify");
      setCooldown(60);
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
      const {
        error
      } = await supabase.auth.verifyOtp({
        email: ADMIN_EMAIL,
        token: code,
        type: "email"
      });
      if (error) throw error;
      navigate({
        to: "/dashboard"
      });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Invalid or expired code");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  }
  function handleOtpChange(index, value) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 5) inputRefs.current[index + 1]?.focus();
  }
  function handleOtpKeyDown(index, e) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter") handleVerify();
  }
  function handleOtpPaste(e) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    e.preventDefault();
    const next = [...otp];
    for (let i = 0; i < 6; i++) next[i] = pasted[i] ?? "";
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, 5)]?.focus();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-[#0f2233] to-[#1a3a5c] flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center size-14 rounded-2xl bg-white/10 border border-white/20 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", className: "size-7 text-white", stroke: "currentColor", strokeWidth: 2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white tracking-tight", children: "RS Medical" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm mt-1", children: "Admin Dashboard" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-2xl shadow-2xl p-8", children: step === "send" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-1", children: "Sign in" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 mb-6", children: "We'll send a one-time login code to the admin email." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5", children: "Admin Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "size-4 text-gray-400 shrink-0", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "22,6 12,13 2,6" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-700 font-medium", children: ADMIN_EMAIL })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSendOtp, disabled: loading, className: "w-full rounded-xl bg-[#1a3a5c] text-white font-semibold py-3.5 text-sm hover:bg-[#0f2233] transition-colors disabled:opacity-60", children: loading ? "Sending code…" : "Send Login Code" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-1", children: "Enter your code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 mb-6", children: [
          "A 6-digit code was sent to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-gray-700", children: ADMIN_EMAIL }),
          ". Check your inbox and spam folder."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 justify-between mb-6", onPaste: handleOtpPaste, children: otp.map((digit, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: (el) => {
          inputRefs.current[i] = el;
        }, type: "text", inputMode: "numeric", maxLength: 1, value: digit, onChange: (e) => handleOtpChange(i, e.target.value), onKeyDown: (e) => handleOtpKeyDown(i, e), className: "w-12 h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-[#1a3a5c] focus:ring-2 focus:ring-[#1a3a5c]/20 outline-none transition-colors bg-gray-50" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleVerify, disabled: loading || otp.join("").length < 6, className: "w-full rounded-xl bg-[#1a3a5c] text-white font-semibold py-3.5 text-sm hover:bg-[#0f2233] transition-colors disabled:opacity-60 mb-4", children: loading ? "Verifying…" : "Verify & Sign In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSendOtp, disabled: loading || cooldown > 0, className: "text-sm text-gray-500 hover:text-[#1a3a5c] disabled:opacity-50 transition-colors", children: cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setStep("send");
          setOtp(["", "", "", "", "", ""]);
        }, className: "mt-3 w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors", children: "← Back" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-white/30 text-xs mt-6", children: "RS Medical Agency — Admin access only" })
    ] }) })
  ] });
}
export {
  AdminAuthPage as component
};

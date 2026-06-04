import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FontAwesomeIcon } from "../_libs/fortawesome__react-fontawesome.mjs";
import { m as faLocationDot, n as faEnvelope, o as faPhone } from "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
import { a as faFacebookF, b as faInstagram, c as faLinkedinIn } from "../_libs/@fortawesome/free-brands-svg-icons+[...].mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/@fortawesome/fontawesome-svg-core+[...].mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const SUPABASE_URL = "https://hbnhvggsqketbtfwnsxe.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhibmh2Z2dzcWtldGJ0Znduc3hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1NDc2MjQsImV4cCI6MjA5NjEyMzYyNH0.Yix27nv7cQ4OnX3A7Ix1xpie20XR33ThmKY5PVHhAnk";
async function sendEnquiry(data) {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/send-enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Apikey: SUPABASE_ANON_KEY
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error ?? "Failed to send enquiry. Please try again later.");
  }
}
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(100),
  email: stringType().trim().email("Please enter a valid email").max(255),
  phone: stringType().trim().min(7, "Please enter a valid phone").max(20),
  message: stringType().trim().min(10, "Message must be at least 10 characters").max(1e3)
});
function ContactBase() {
  const [submitting, setSubmitting] = reactExports.useState(false);
  const root = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(".js-contact-field", {
          opacity: 0,
          y: 16,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: ".js-contact-form", start: "top 80%", invalidateOnRefresh: true }
        });
        gsapWithCSS.from(".js-contact-info > li, .js-contact-info-tail > *", {
          opacity: 0,
          x: -16,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: root.current, start: "top 75%", invalidateOnRefresh: true }
        });
        const btn = root.current?.querySelector(".js-magnetic");
        if (btn) {
          const move = (e) => {
            const r = btn.getBoundingClientRect();
            const x = e.clientX - (r.left + r.width / 2);
            const y = e.clientY - (r.top + r.height / 2);
            gsapWithCSS.to(btn, { x: x * 0.2, y: y * 0.3, duration: 0.4, ease: "power3.out" });
          };
          const reset = () => gsapWithCSS.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", reset);
        }
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root }
  );
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message")
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    try {
      await sendEnquiry(parsed.data);
      toast.success("Thanks — we'll be in touch within 24 hours.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: root, id: "contact", className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-brand-blue-deep text-white p-8 md:p-14 shadow-soft-lg relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute -top-32 -right-32 size-96 rounded-full bg-brand-green/20 blur-3xl"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-2 gap-10 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.2em] text-brand-green-light uppercase mb-3", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5", children: "Have an inquiry or want to partner with us?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 mb-10 max-w-md", children: "We typically respond within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "js-contact-info space-y-5 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faLocationDot, className: "size-5 text-brand-green-light shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50", children: "Office" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/95", children: "AVK College Road, Indian Bank Backside, Hanuman Building, 3rd Floor, Hassan 573201" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faEnvelope, className: "size-5 text-brand-green-light shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:rakesh@rsmedicalagency.com", className: "text-white/95 hover:text-brand-green-light", children: "rakesh@rsmedicalagency.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faPhone, className: "size-5 text-brand-green-light shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/95", children: "+91 63601 07599" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-contact-info-tail", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-white/50 mb-3", children: "Follow us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [faFacebookF, faInstagram, faLinkedinIn].map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              "aria-label": "Social link",
              className: "size-10 rounded-full border border-white/20 grid place-items-center hover:bg-brand-green hover:border-brand-green transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: I, className: "size-4" })
            },
            i
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit,
          className: "js-contact-form rounded-2xl bg-white text-ink p-6 md:p-8 space-y-4 shadow-soft-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "js-contact-field font-display font-bold text-brand-blue text-2xl mb-2", children: "Send an enquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-contact-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-ink-soft uppercase tracking-wider", htmlFor: "name", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "name",
                  name: "name",
                  required: true,
                  maxLength: 100,
                  className: "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-contact-field grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-ink-soft uppercase tracking-wider", htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    required: true,
                    maxLength: 255,
                    className: "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-ink-soft uppercase tracking-wider", htmlFor: "phone", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "phone",
                    name: "phone",
                    type: "tel",
                    required: true,
                    maxLength: 20,
                    className: "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-contact-field", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-ink-soft uppercase tracking-wider", htmlFor: "message", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  id: "message",
                  name: "message",
                  required: true,
                  rows: 5,
                  maxLength: 1e3,
                  className: "mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                disabled: submitting,
                className: "js-magnetic js-contact-field w-full rounded-full bg-brand-green px-6 py-3.5 font-semibold text-white shadow-soft hover:bg-brand-green-light transition-colors disabled:opacity-60",
                children: submitting ? "Sending…" : "Send Enquiry"
              }
            )
          ]
        }
      )
    ] })
  ] }) }) }) });
}
const Contact = reactExports.memo(ContactBase);
export {
  Contact
};

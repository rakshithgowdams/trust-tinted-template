import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import "../_libs/sonner.mjs";
import "../_libs/fortawesome__react-fontawesome.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/@fortawesome/fontawesome-svg-core+[...].mjs";
function LeadershipBase() {
  const root = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(".js-founder-bio > *", {
          opacity: 0,
          y: 18,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".js-founder-bio", start: "top 80%", invalidateOnRefresh: true }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: root, id: "leadership", className: "bg-bg-soft py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "Leadership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3", children: "Meet Our Leadership" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft text-base md:text-lg", children: "Leading with experience, serving with care." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-founder-bio text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-3xl md:text-4xl leading-tight mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-blue", children: "Building trust," }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-green", children: "one delivery at a time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-ink-soft leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "With over 25+ years of dedicated experience in the healthcare distribution industry, our leadership has built RS Medical Agency on a foundation of integrity, reliability, and an unwavering commitment to patient outcomes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We believe ethical leadership shapes ethical operations — and that the partners and people we serve deserve a distributor who values their trust as much as their business." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From regional pharmacies to international hospitals, every relationship is treated with the same care, transparency, and accountability that has defined our company from day one." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-line", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-brand-blue text-xl", children: "Rakesh K C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.2em] text-brand-green uppercase mt-1", children: "Founder" })
      ] })
    ] }) }) })
  ] }) });
}
const Leadership = reactExports.memo(LeadershipBase);
export {
  Leadership
};

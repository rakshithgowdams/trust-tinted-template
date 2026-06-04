import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FontAwesomeIcon } from "../_libs/fortawesome__react-fontawesome.mjs";
import { c as faTruck, d as faGlobe, e as faCheck } from "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import "../_libs/sonner.mjs";
import "../_libs/@fortawesome/fontawesome-svg-core+[...].mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const cards = [
  {
    icon: faTruck,
    title: "Seamless Delivery",
    desc: "End-to-end logistics built for sensitive healthcare cargo.",
    bullets: ["Real-Time Tracking", "Temperature-Controlled Transport", "Doorstep Delivery"]
  },
  {
    icon: faGlobe,
    title: "Worldwide Connectivity",
    desc: "An always-on supply network spanning continents.",
    bullets: ["24×7 Supply Coverage", "Domestic & International Reach", "Technology-Backed Distribution"]
  }
];
function ServicesBase() {
  const root = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        root.current?.querySelectorAll(".js-service-card").forEach((card, i) => {
          gsapWithCSS.from(card.querySelectorAll(".js-svc-icon, h3, p, li, a"), {
            opacity: 0,
            y: 18,
            duration: 0.55,
            ease: "power3.out",
            stagger: 0.07,
            scrollTrigger: { trigger: card, start: "top 80%", invalidateOnRefresh: true }
          });
          gsapWithCSS.from(card.querySelector(".js-svc-icon"), {
            scale: 0.6,
            duration: 0.6,
            ease: "back.out(2)",
            delay: i * 0.05,
            scrollTrigger: { trigger: card, start: "top 80%", invalidateOnRefresh: true }
          });
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: root, id: "services", className: "bg-bg-soft py-20 md:py-28 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-[0.04]",
        style: {
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--brand-blue) 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "What We Do" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3", children: "Services We Offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft text-base md:text-lg", children: "Because dependability isn't optional in healthcare." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 md:gap-8", children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "js-service-card group h-full rounded-2xl bg-white border border-line p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "js-svc-icon size-14 rounded-2xl bg-brand-green/10 grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: c.icon, className: "size-7 text-brand-green" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-brand-blue text-2xl md:text-3xl mb-3", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft mb-6", children: c.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-8", children: c.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-ink", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 size-5 rounded-full bg-brand-green grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faCheck, className: "size-3 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm md:text-base", children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center rounded-full border-2 border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white",
            children: "View service details"
          }
        )
      ] }) }, c.title)) })
    ] })
  ] });
}
const Services = reactExports.memo(ServicesBase);
export {
  Services
};

import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FontAwesomeIcon } from "../_libs/fortawesome__react-fontawesome.mjs";
import { g as faLayerGroup, c as faTruck, h as faHeadphones, i as faLightbulb, j as faRocket, k as faArrowTrendUp } from "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
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
const items = [
  { icon: faLayerGroup, title: "Integrated Platform", desc: "Order, transact, and track in one seamless place built for healthcare buyers." },
  { icon: faTruck, title: "Streamlined Delivery", desc: "Reliable multi-channel logistics that move fast and stay hassle-free." },
  { icon: faHeadphones, title: "Customer Service", desc: "Long-term relationships powered by dependable support at every stage." },
  { icon: faLightbulb, title: "Driven by Innovation", desc: "New technology that simplifies and strengthens distribution operations." },
  { icon: faRocket, title: "Future Ready", desc: "Constantly adapting and adding value with every step we take together." },
  { icon: faArrowTrendUp, title: "Growth Focussed", desc: "Setting and beating the industry standard, every time, for every partner." }
];
function WhyUsBase() {
  const grid = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(grid.current?.querySelectorAll(".js-whyus-icon") ?? [], {
          scale: 0.5,
          rotate: -15,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(2)",
          stagger: { each: 0.06, grid: "auto", from: "start" },
          scrollTrigger: { trigger: grid.current, start: "top 75%", invalidateOnRefresh: true }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: grid }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-us", className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "The RS Difference" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3", children: "Why Us?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft text-base md:text-lg", children: "A partnership built on excellence." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: grid, className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i % 3 * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full rounded-2xl bg-white border border-line p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "js-whyus-icon size-12 rounded-xl bg-brand-green/10 grid place-items-center mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: it.icon, className: "size-6 text-brand-green group-hover:text-white transition-colors" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-brand-blue text-xl mb-2", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft text-sm leading-relaxed", children: it.desc })
    ] }) }, it.title)) })
  ] }) });
}
const WhyUs = reactExports.memo(WhyUsBase);
export {
  WhyUs
};

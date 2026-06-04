import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
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
const brands = [
  "Sun Pharma",
  "Cipla",
  "Dr. Reddy's",
  "Lupin",
  "Mankind",
  "Zydus",
  "Torrent",
  "Glenmark",
  "Abbott",
  "Alkem",
  "Pfizer",
  "GSK"
];
function BrandTile({ name }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 rounded-xl border border-line bg-white grid place-items-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:shadow-soft transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-brand-blue text-base md:text-lg text-center tracking-tight", children: name }) });
}
function PartnersBase() {
  const [showAll, setShowAll] = reactExports.useState(false);
  const visible = showAll ? brands : brands.slice(0, 6);
  const marqueeRef = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const track = marqueeRef.current?.querySelector(".js-marquee-track");
        if (!track) return;
        const distance = track.scrollWidth / 2;
        const tween = gsapWithCSS.to(track, {
          x: -distance,
          duration: 30,
          ease: "none",
          repeat: -1
        });
        const onEnter = () => tween.timeScale(0.2);
        const onLeave = () => tween.timeScale(1);
        marqueeRef.current?.addEventListener("mouseenter", onEnter);
        marqueeRef.current?.addEventListener("mouseleave", onLeave);
        return () => {
          marqueeRef.current?.removeEventListener("mouseenter", onEnter);
          marqueeRef.current?.removeEventListener("mouseleave", onLeave);
        };
      });
    },
    { scope: marqueeRef, dependencies: [showAll] }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-bg-soft py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "Trusted Partners" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-brand-blue text-3xl md:text-5xl", children: "Our Companies" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: showAll ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4", children: visible.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BrandTile, { name: b }, b)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: marqueeRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "js-marquee-track flex gap-4 w-max", children: [...brands, ...brands].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-44 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandTile, { name: b }) }, b + i)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setShowAll((s) => !s),
        className: "inline-flex items-center rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-green-light transition-colors",
        children: showAll ? "Show Less" : "Show All"
      }
    ) })
  ] }) });
}
const Partners = reactExports.memo(PartnersBase);
export {
  Partners
};

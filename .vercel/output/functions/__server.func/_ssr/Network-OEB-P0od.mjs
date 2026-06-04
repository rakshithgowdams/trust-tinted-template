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
const hubs = [
  "Bagalkot",
  "Ballari",
  "Belagavi",
  "Bengaluru Rural",
  "Bengaluru Urban",
  "Bidar",
  "Chamarajanagar",
  "Chikkaballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Kalaburagi",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysuru",
  "Raichur",
  "Ramanagara",
  "Shivamogga",
  "Tumakuru",
  "Udupi",
  "Uttara Kannada",
  "Vijayanagara",
  "Vijayapura",
  "Yadgir"
];
function NetworkBase() {
  const mapRef = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(mapRef.current?.querySelector("img") ?? [], {
          opacity: 0,
          scale: 0.94,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%", invalidateOnRefresh: true }
        });
        gsapWithCSS.from(".js-hub", {
          opacity: 0,
          y: 12,
          scale: 0.9,
          duration: 0.45,
          ease: "back.out(1.6)",
          stagger: { each: 0.025, from: "random" },
          scrollTrigger: { trigger: mapRef.current, start: "top 70%", invalidateOnRefresh: true }
        });
        gsapWithCSS.to(".js-hub-dot", {
          scale: 1.4,
          opacity: 0.6,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.08, from: "random" },
          transformOrigin: "center"
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: mapRef }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "network", className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "Our Reach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3", children: "Distribution Network Across Karnataka" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft text-base md:text-lg", children: "Connecting healthcare partners across every district." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ink-soft leading-relaxed", children: [
        "With ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-brand-green", children: "180+" }),
        " dedicated vehicles and a fleet built for healthcare-grade cold-chain integrity, we move sensitive cargo without a missed beat — from manufacturer to last-mile."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ink-soft leading-relaxed", children: [
        "Backed by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-brand-green", children: "30,000+" }),
        " SKUs and a roster of trusted global logistics partners, our network delivers consistency, traceability, and speed across every corridor we serve."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: mapRef, className: "relative rounded-2xl bg-bg-soft border border-line p-6 md:p-10 shadow-soft overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/karnataka-map.png",
          alt: "Karnataka districts distribution map",
          className: "mx-auto w-full max-w-xl h-auto object-contain",
          loading: "lazy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-2", children: hubs.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "js-hub inline-flex items-center rounded-full border border-line bg-background px-4 py-1.5 text-sm font-medium text-brand-blue shadow-sm",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "js-hub-dot mr-2 size-1.5 rounded-full bg-brand-green" }),
            h
          ]
        },
        h
      )) })
    ] }) })
  ] }) });
}
const Network = reactExports.memo(NetworkBase);
export {
  Network
};

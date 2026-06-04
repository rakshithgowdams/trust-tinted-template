import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const steps = [
  "Client Onboarding",
  "Order Placement",
  "Order Processing & Verification",
  "Dispatch",
  "Delivery & Tracking",
  "Support & Issue Resolution"
];
function JourneyBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-bg-soft py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-sky-brand text-3xl md:text-5xl", children: "Your Order Journey" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-x-6 gap-y-12", children: steps.map((s, i) => {
      const row = Math.floor(i / 3);
      const inRow = i % 3;
      const reverse = row % 2 === 1;
      const orderInRow = reverse ? 2 - inRow : inRow;
      const filled = i % 2 === 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { order: orderInRow }, className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `shrink-0 size-12 rounded-full grid place-items-center font-display font-bold text-lg ${filled ? "bg-brand-green text-white" : "bg-white text-brand-blue border-2 border-brand-blue"}`,
            children: i + 1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `flex-1 rounded-full px-6 py-4 font-semibold text-sm md:text-base ${filled ? "bg-brand-green text-white shadow-soft" : "bg-white text-brand-blue border-2 border-brand-blue/20 shadow-soft"}`,
            children: s
          }
        )
      ] }) }, s);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute top-2 bottom-2 w-0 border-l-2 border-dashed border-brand-green/40",
          style: { left: "24px" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: steps.map((s, i) => {
        const filled = i % 2 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `shrink-0 size-12 rounded-full grid place-items-center font-display font-bold relative z-10 ${filled ? "bg-brand-green text-white" : "bg-white text-brand-blue border-2 border-brand-blue"}`,
              children: i + 1
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `flex-1 rounded-full px-5 py-3 text-sm font-semibold ${filled ? "bg-brand-green text-white" : "bg-white text-brand-blue border-2 border-brand-blue/20"}`,
              children: s
            }
          )
        ] }) }, s);
      }) })
    ] })
  ] }) });
}
const Journey = reactExports.memo(JourneyBase);
export {
  Journey
};

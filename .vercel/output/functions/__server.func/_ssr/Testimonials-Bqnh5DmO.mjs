import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { F as FontAwesomeIcon } from "../_libs/fortawesome__react-fontawesome.mjs";
import { l as faQuoteLeft } from "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
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
  {
    quote: "RS Medical has been our most reliable supply partner for over a decade. Their commitment to cold-chain integrity and on-time delivery is unmatched in the industry — we never have to worry about stockouts.",
    name: "Dr. Ananya Iyer",
    company: "Apollo Pharmacy Network"
  },
  {
    quote: "What sets them apart isn't just logistics — it's the people. Every order feels personal, every issue resolved the same day. That's rare in distribution.",
    name: "Rohan Mehta",
    company: "MediCare Hospitals"
  },
  {
    quote: "Their international shipping arm helped us launch in three new markets in under a year. Documentation, customs, last-mile — all handled flawlessly.",
    name: "Sarah Lin",
    company: "Pacific Health Group"
  },
  {
    quote: "From a 200-bed hospital to procurement at scale, RS Medical adapts to our volume and our urgency without ever compromising quality.",
    name: "Dr. Vikram Shah",
    company: "Shree Krishna Hospital"
  },
  {
    quote: "Their digital platform makes reordering effortless. We see real-time stock, track shipments live, and reconcile invoices in minutes, not days.",
    name: "Priya Nair",
    company: "WellLife Pharmacies"
  },
  {
    quote: "Trust is everything in healthcare distribution. RS Medical has earned ours, again and again.",
    name: "Mohammed Al-Rashid",
    company: "Gulf Medical Trading"
  }
];
function Card({ quote, name, company }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const truncated = quote.length > 160 && !expanded;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "break-inside-avoid mb-5 rounded-2xl bg-white border border-line p-6 md:p-7 shadow-soft hover:shadow-soft-lg transition-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faQuoteLeft, className: "size-7 text-brand-green/40 mb-3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink leading-relaxed text-sm md:text-base", children: truncated ? quote.slice(0, 160) + "…" : quote }),
    quote.length > 160 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setExpanded((e) => !e),
        className: "mt-2 text-xs font-semibold text-brand-green hover:underline",
        children: expanded ? "Show less ▴" : "Read more ▾"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-line", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-brand-blue", children: [
        "~ ",
        name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-soft mt-1", children: company })
    ] })
  ] });
}
function TestimonialsBase() {
  const grid = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(grid.current?.children ?? [], {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: grid.current, start: "top 80%", invalidateOnRefresh: true }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: grid }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "Voices" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-brand-blue text-3xl md:text-5xl mb-3", children: "Customer Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft text-base md:text-lg", children: "Our customers' words reflect our commitment to excellence." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: grid, className: "columns-1 md:columns-2 lg:columns-3 gap-5", children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { ...t }, t.name)) }) })
  ] }) });
}
const Testimonials = reactExports.memo(TestimonialsBase);
export {
  Testimonials
};

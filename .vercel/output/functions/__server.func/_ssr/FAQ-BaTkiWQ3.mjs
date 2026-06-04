import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as cn } from "./index-S0qCP7px.mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import "../_libs/sonner.mjs";
import "../_libs/fortawesome__react-fontawesome.mjs";
import { C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "./router-byMkjgV4.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "./sonner-DeNSN9-c.mjs";
import "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
import "../_libs/@fortawesome/free-brands-svg-icons+[...].mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/@fortawesome/fontawesome-svg-core+[...].mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const faqs = [
  {
    q: "Who can purchase from RS Medical Agency?",
    a: "We supply licensed pharmacies, hospitals, clinics, government institutions, NGOs, and international healthcare distributors. We do not sell directly to individual consumers."
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes — every enquiry receives a tailored, no-obligation quote based on volume, geography, and product mix, typically within 24 hours."
  },
  {
    q: "How quickly is my order delivered?",
    a: "Most domestic orders ship within 24 hours; metro deliveries arrive same-day or next-day. International shipments depend on destination and customs, with full live tracking throughout."
  },
  {
    q: "Do you provide a guarantee?",
    a: "Every shipment is fully insured and quality-assured. Cold-chain products are temperature-monitored end-to-end, with documented compliance for every batch."
  },
  {
    q: "What's your target fulfilment rate?",
    a: "We consistently maintain a 99.6%+ order-fulfilment rate across our active SKUs — one of the strongest in the regional distribution industry."
  },
  {
    q: "How large is your product range and how many brands do you distribute?",
    a: "Our active catalogue spans 30,000+ SKUs across 500+ manufacturers and brands, from leading multinationals to specialised local producers."
  }
];
function FAQBase() {
  const list = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(list.current?.querySelectorAll(".js-faq-item") ?? [], {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: list.current, start: "top 80%", invalidateOnRefresh: true }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: list }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "bg-bg-soft py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: list, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AccordionItem,
      {
        value: `item-${i}`,
        className: "js-faq-item border border-line bg-white rounded-2xl mb-3 px-6 shadow-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "font-display font-semibold text-brand-blue text-left hover:no-underline py-5", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-ink-soft leading-relaxed pb-5", children: f.a })
        ]
      },
      i
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-brand-green text-3xl md:text-4xl leading-tight mb-4", children: [
        "Answering",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "your questions"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-soft mb-7", children: "Got more questions? Send us your enquiry below and we'll get back to you within 24 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#contact",
          className: "inline-flex items-center rounded-full bg-brand-blue-deep px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-blue transition-colors",
          children: "Contact Us"
        }
      )
    ] }) })
  ] }) }) });
}
const FAQ = reactExports.memo(FAQBase);
export {
  FAQ
};

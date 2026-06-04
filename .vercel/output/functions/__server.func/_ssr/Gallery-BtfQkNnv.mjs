import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as cn } from "./index--3cEvR0F.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { R as Reveal } from "./Reveal-g4hVftO3.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import "../_libs/sonner.mjs";
import "../_libs/fortawesome__react-fontawesome.mjs";
import { A as ArrowLeft, a as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "./router-C4_t1HXN.mjs";
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
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./sonner-DeNSN9-c.mjs";
import "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
import "../_libs/@fortawesome/free-brands-svg-icons+[...].mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/@fortawesome/fontawesome-svg-core+[...].mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const images = [
  { src: "/gallery/maball-500-zoom.jpeg", alt: "Maball 500 - Rituximab 500 mg Hetero Oncology" },
  { src: "/gallery/bryxta-300.jpeg", alt: "Bryxta 300 - Bevacizumab Injection 300 mg/12 mL" },
  { src: "/gallery/bryxta-300-back.jpeg", alt: "Bryxta 300 - composition and prescribing information" },
  { src: "/gallery/cazanat-60.jpeg", alt: "Cazanat 60 - Cabozantinib Tablets I.P. 60 mg" },
  { src: "/gallery/cazanat-60-front.jpeg", alt: "Cazanat 60 - Cabozantinib 60 mg front pack" },
  { src: "/gallery/capetero-500-blister.jpeg", alt: "Capetero-500 - Capecitabine 500 mg blister pack" },
  { src: "/gallery/dyronib-50.jpeg", alt: "Dyronib - Dasatinib Tablets 50 mg" },
  { src: "/gallery/daslemia-100.jpeg", alt: "Daslemia 100 - Dasatinib Tablets 100 mg" },
  { src: "/gallery/herti-440.jpeg", alt: "Herti - Trastuzumab for Injection 440 mg" },
  { src: "/gallery/herti-440-pack.jpeg", alt: "Herti 440 - Trastuzumab combi pack" },
  { src: "/gallery/trabec.jpeg", alt: "Trabec - Trabectedin powder for infusion 1 mg/vial" },
  { src: "/gallery/bandrone-150.jpeg", alt: "Bandrone 150 - Ibandronic Acid Tablets" },
  { src: "/gallery/mabtas-n-500.jpeg", alt: "Mabtas N 500 - Rituximab Concentrate 500 mg/50 mL" },
  { src: "/gallery/reditux-500.jpeg", alt: "Reditux 500 - Rituximab Injection 500 mg/50 mL" },
  { src: "/gallery/enzana-80.jpeg", alt: "Enzana 80 - Enzalutamide Capsules 80 mg" },
  { src: "/gallery/tishtha-100-back.jpeg", alt: "Tishtha - Nivolumab Injection 100 mg/10 mL" },
  { src: "/gallery/ahabir-250.jpeg", alt: "Ahabir - Abiraterone Acetate Tablets IP 250 mg" },
  { src: "/gallery/cabotres-60.jpeg", alt: "Cabotres 60 - Cabozantinib Tablets 60 mg (Cipla)" }
];
function GalleryBase() {
  const root = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(".js-gallery-frame", {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", invalidateOnRefresh: true }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref: root, className: "bg-background py-20 md:py-28 overflow-x-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3", children: "A Look Inside" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-brand-blue text-3xl md:text-5xl", children: "Gallery" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { loop: true }, className: "max-w-5xl mx-auto px-10 sm:px-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "js-gallery-frame rounded-2xl overflow-hidden shadow-soft-lg bg-muted flex items-center justify-center h-[60vw] max-h-[600px] sm:h-[50vw] md:h-[480px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: img.alt, className: "max-h-full max-w-full w-auto h-auto object-contain", loading: "lazy" }) }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "bg-white/90 hover:bg-white text-brand-blue border-brand-blue/20 left-3 md:left-4 z-10 shadow-md" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "bg-white/90 hover:bg-white text-brand-blue border-brand-blue/20 right-3 md:right-4 z-10 shadow-md" })
    ] }) })
  ] }) });
}
const Gallery = reactExports.memo(GalleryBase);
export {
  Gallery
};

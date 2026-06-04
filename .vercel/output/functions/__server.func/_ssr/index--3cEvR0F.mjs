import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SITE_URL } from "./router-C4_t1HXN.mjs";
import { T as Toaster } from "./sonner-DeNSN9-c.mjs";
import { F as FontAwesomeIcon } from "../_libs/fortawesome__react-fontawesome.mjs";
import { f as faBars, a as faXmark, b as faChevronDown } from "../_libs/@fortawesome/free-solid-svg-icons+[...].mjs";
import { f as faWhatsapp, a as faFacebookF, b as faInstagram } from "../_libs/@fortawesome/free-brands-svg-icons+[...].mjs";
import { S as ScrollTrigger, g as gsapWithCSS } from "../_libs/gsap.mjs";
import { u as useGSAP } from "../_libs/gsap__react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
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
import "../_libs/sonner.mjs";
import "../_libs/@fortawesome/fontawesome-svg-core+[...].mjs";
function LogoBase({ className = "h-10" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "flex items-center gap-2", "aria-label": "RS Medical Agency home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/rs-logo.webp",
      alt: "RS Medical Agency",
      width: 600,
      height: 600,
      loading: "eager",
      decoding: "async",
      fetchPriority: "high",
      className: `${className} w-auto object-contain`
    }
  ) });
}
const Logo = reactExports.memo(LogoBase);
const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#network", label: "Network" },
  { href: "#leadership", label: "Leadership" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];
function NavbarBase() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${open ? "bg-background" : scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: scrolled ? "h-14" : "h-16" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-7", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                className: `text-sm font-medium transition-colors ${scrolled ? "text-ink hover:text-brand-blue" : "text-white/90 hover:text-white"}`,
                children: l.label
              },
              l.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "ml-2 inline-flex items-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-brand-green-light",
                children: "Query"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Open menu",
              onClick: () => setOpen(true),
              className: `lg:hidden p-2 rounded-md ${scrolled ? "text-brand-blue" : "text-white"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faBars, className: "size-7" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[60] bg-white animate-in fade-in slide-in-from-top-4 duration-500 ease-out", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 h-20 bg-white animate-in fade-in slide-in-from-top-2 duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Close menu", onClick: () => setOpen(false), className: "p-2 text-brand-blue", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faXmark, className: "size-7" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 pt-10 bg-white", children: [
            links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "text-xl font-display font-semibold text-ink hover:text-brand-green transition-colors opacity-0 animate-fade-in",
                style: { animationDelay: `${120 + i * 60}ms`, animationFillMode: "forwards" },
                children: l.label
              },
              l.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                onClick: () => setOpen(false),
                className: "mt-4 inline-flex items-center rounded-full bg-brand-green px-7 py-3 text-base font-semibold text-white shadow-soft opacity-0 animate-fade-in transition-transform hover:scale-[1.03]",
                style: { animationDelay: `${120 + links.length * 60}ms`, animationFillMode: "forwards" },
                children: "Query"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Navbar = reactExports.memo(NavbarBase);
if (typeof window !== "undefined") {
  gsapWithCSS.registerPlugin(ScrollTrigger, useGSAP);
  ScrollTrigger.config({ ignoreMobileResize: true });
}
function FooterBase() {
  const root = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsapWithCSS.from(".js-footer-col", {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: "top 90%", invalidateOnRefresh: true }
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { ref: root, className: "bg-brand-blue-deep text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/95 rounded-xl p-2 inline-flex items-center justify-center mb-4 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-20" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm leading-relaxed max-w-xs", children: "Delivering healthcare the world can trust — every order, every partner, every day." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold mb-4 text-brand-green-light", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-white", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "hover:text-white", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#network", className: "hover:text-white", children: "Network" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#leadership", className: "hover:text-white", children: "Leadership" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold mb-4 text-brand-green-light", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#testimonials", className: "hover:text-white", children: "Testimonials" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-white", children: "FAQ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "hover:text-white", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "js-footer-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold mb-4 text-brand-green-light", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "AVK College Road, Indian Bank Backside, Hanuman Building, 3rd Floor, Hassan 573201" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:rakesh@rsmedicalagency.com", className: "hover:text-white", children: "rakesh@rsmedicalagency.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+91 63601 07599" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-5", children: [faFacebookF, faInstagram, faWhatsapp].map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": "Social",
            className: "size-9 rounded-full border border-white/20 grid place-items-center hover:bg-brand-green hover:border-brand-green transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: I, className: "size-4" })
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 RS Medical Agency. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Designed & developed by |",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.mydesignnexus.in",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-brand-green-light hover:text-white transition-colors",
            children: "www.mydesignnexus.in"
          }
        )
      ] })
    ] }) })
  ] });
}
const Footer = reactExports.memo(FooterBase);
const PHONE = "916360107599";
const MESSAGE = "Hello! I'd like to know more about RS Medical Agency.";
function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      style: { bottom: "calc(1.25rem + 20px)" },
      className: "fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faWhatsapp, className: "relative h-8 w-8" })
      ]
    }
  );
}
const heroBg = "data:image/jpeg;base64,";
function HeroBase() {
  const root = reactExports.useRef(null);
  useGSAP(
    () => {
      const mm = gsapWithCSS.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsapWithCSS.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".js-hero-eyebrow", { y: 18, opacity: 0, duration: 0.6 }).from(".js-hero-title", { y: 36, opacity: 0, duration: 0.9 }, "-=0.3").from(".js-hero-cta > *", { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");
        gsapWithCSS.to(".js-hero-bg", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
        gsapWithCSS.to(".js-hero-content", {
          opacity: 0,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      });
    },
    { scope: root }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref: root, id: "top", className: "relative min-h-[100dvh] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroBg,
        alt: "Medical distribution warehouse",
        className: "js-hero-bg absolute inset-0 size-full object-cover",
        width: 1920,
        height: 1280
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/85 via-brand-blue/70 to-brand-blue/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "js-hero-content relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[100dvh] flex flex-col justify-center items-start py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl text-left", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "js-hero-eyebrow text-[11px] md:text-xs font-semibold tracking-[0.2em] text-brand-green-light uppercase mb-5", children: "Trusted Today • Healthier Tomorrow • Together Worldwide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "js-hero-title font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8", children: [
        "Delivering ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-green-light", children: "Oncology Medicines" }),
        ",",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-green-light", children: "HIV Products" }),
        ",",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-green-light", children: "Nephrology Products" }),
        " &",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-green-light", children: "Vaccines" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "js-hero-cta flex flex-wrap gap-4 sm:gap-6 justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#services",
          className: "inline-flex items-center rounded-full border-2 border-white/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue",
          children: "Explore Services"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#about",
        "aria-label": "Scroll to about",
        className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FontAwesomeIcon, { icon: faChevronDown, className: "size-7" })
      }
    )
  ] });
}
const Hero = reactExports.memo(HeroBase);
const pfizer = "data:image/png;base64,";
const natco = "data:image/png;base64,";
const zydus = "data:image/png;base64,";
const abbott = "data:image/png;base64,";
const hetero = "data:image/png;base64,";
const cipla = "data:image/png;base64,";
const roche = "data:image/png;base64,";
const logos = [
  { src: pfizer, alt: "Pfizer" },
  { src: natco, alt: "Natco" },
  { src: zydus, alt: "Zydus" },
  { src: abbott, alt: "Abbott" },
  { src: hetero, alt: "Hetero" },
  { src: cipla, alt: "Cipla" },
  { src: roche, alt: "Roche" }
];
function DealingWith() {
  const loop = [...logos, ...logos];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 bg-background border-y border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center text-foreground", children: "We Are Dealing With" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-16 items-center", children: loop.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: l.src,
        alt: l.alt,
        loading: "lazy",
        className: "h-16 md:h-20 w-auto object-contain shrink-0"
      },
      i
    )) }) })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("animate-pulse rounded-md bg-primary/10", className), ...props });
}
function DefaultSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-72 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-96 max-w-full mx-auto" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6 h-[320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-2xl size-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-2xl size-full hidden md:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-2xl size-full hidden md:block" })
    ] })
  ] }) });
}
const cache = /* @__PURE__ */ new Map();
const inflight = /* @__PURE__ */ new Map();
function prefetch(exportName, load) {
  if (cache.has(exportName)) return Promise.resolve(cache.get(exportName));
  let p = inflight.get(exportName);
  if (!p) {
    p = load().then((mod) => {
      const C = mod[exportName];
      if (C) cache.set(exportName, C);
      inflight.delete(exportName);
      return C;
    });
    inflight.set(exportName, p);
  }
  return p;
}
function LazySectionBase({
  load,
  exportName,
  fallback,
  rootMargin = "200px",
  prefetchMargin = "1200px"
}) {
  const ref = reactExports.useRef(null);
  const [Comp, setComp] = reactExports.useState(() => cache.get(exportName) ?? null);
  reactExports.useEffect(() => {
    if (Comp || !ref.current) return;
    const node = ref.current;
    const prefetchIO = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          prefetchIO.disconnect();
          prefetch(exportName, load);
        }
      },
      { rootMargin: prefetchMargin }
    );
    prefetchIO.observe(node);
    const mountIO = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          mountIO.disconnect();
          prefetch(exportName, load).then((C) => {
            if (C) setComp(() => C);
          });
        }
      },
      { rootMargin }
    );
    mountIO.observe(node);
    return () => {
      prefetchIO.disconnect();
      mountIO.disconnect();
    };
  }, [Comp, rootMargin, prefetchMargin, exportName, load]);
  const placeholder = fallback ?? /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultSkeleton, {});
  if (Comp) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: placeholder, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, {}) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children: placeholder });
}
const LazySection = reactExports.memo(LazySectionBase);
function ScrollRefresherBase() {
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const refresh = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    refresh();
    window.addEventListener("load", refresh);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh).catch(() => {
      });
    }
    let t = null;
    const ro = new ResizeObserver(() => {
      if (t) clearTimeout(t);
      t = setTimeout(refresh, 120);
    });
    ro.observe(document.body);
    const bar = document.createElement("div");
    bar.setAttribute("aria-hidden", "true");
    bar.style.cssText = "position:fixed;top:0;left:0;height:2px;width:0;background:var(--brand-green);z-index:100;transition:width 80ms linear;pointer-events:none";
    document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? h.scrollTop / max * 100 : 0;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      if (t) clearTimeout(t);
      cancelAnimationFrame(raf);
      bar.remove();
    };
  }, []);
  return null;
}
const ScrollRefresher = reactExports.memo(ScrollRefresherBase);
function Header({ wide = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-3 mb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-32 mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: `h-10 mx-auto ${wide ? "w-96" : "w-72"} max-w-full` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-80 max-w-full mx-auto" })
  ] });
}
function Shell({ children, soft = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `${soft ? "bg-bg-soft" : "bg-background"} py-20 md:py-28`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children }) });
}
function AboutSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-28" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-5/6" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full mt-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-6 grid-rows-6 gap-3 h-[460px] md:h-[540px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "col-span-3 row-span-4 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "col-span-3 row-span-2 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "col-span-3 row-span-2 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "col-span-3 row-span-2 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "col-span-3 row-span-2 rounded-2xl" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 rounded-2xl" }, i)) })
  ] });
}
function ServicesSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { soft: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 md:gap-8", children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[420px] rounded-2xl" }, i)) })
  ] });
}
function WhyUsSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 rounded-2xl" }, i)) })
  ] });
}
function JourneySkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { soft: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 rounded-2xl" }, i)) })
  ] });
}
function NetworkSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { wide: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-[420px] w-full rounded-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3 justify-center mt-8", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-28 rounded-full" }, i)) })
  ] });
}
function LeadershipSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { soft: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80 rounded-2xl" }, i)) })
  ] });
}
function GallerySkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "max-w-5xl mx-auto aspect-[16/9] rounded-2xl" })
  ] });
}
function PartnersSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { soft: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6", children: Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, i)) })
  ] });
}
function TestimonialsSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 md:columns-2 lg:columns-3 gap-5", children: [200, 260, 180, 240, 220, 280].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-2xl mb-5 w-full", style: { height: h } }, i)) })
  ] });
}
function FAQSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Shell, { soft: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto space-y-3", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 rounded-xl" }, i)) })
  ] });
}
function ContactSkeletonBase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Shell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "rounded-3xl h-[640px] w-full" }) });
}
const AboutSkeleton = reactExports.memo(AboutSkeletonBase);
const ServicesSkeleton = reactExports.memo(ServicesSkeletonBase);
const WhyUsSkeleton = reactExports.memo(WhyUsSkeletonBase);
const JourneySkeleton = reactExports.memo(JourneySkeletonBase);
const NetworkSkeleton = reactExports.memo(NetworkSkeletonBase);
const LeadershipSkeleton = reactExports.memo(LeadershipSkeletonBase);
const GallerySkeleton = reactExports.memo(GallerySkeletonBase);
const PartnersSkeleton = reactExports.memo(PartnersSkeletonBase);
const TestimonialsSkeleton = reactExports.memo(TestimonialsSkeletonBase);
const FAQSkeleton = reactExports.memo(FAQSkeletonBase);
const ContactSkeleton = reactExports.memo(ContactSkeletonBase);
const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RS Medical Agency",
  url: SITE_URL,
  description: "Trusted healthcare distribution partner connecting pharmacies, hospitals, and institutions with essential medicines worldwide."
});
const websiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RS Medical Agency",
  url: SITE_URL
});
const faqEntries = [{
  q: "Who can purchase from RS Medical Agency?",
  a: "We supply licensed pharmacies, hospitals, clinics, government institutions, NGOs, and international healthcare distributors. We do not sell directly to individual consumers."
}, {
  q: "Do you offer free quotes?",
  a: "Yes — every enquiry receives a tailored, no-obligation quote based on volume, geography, and product mix, typically within 24 hours."
}, {
  q: "How quickly is my order delivered?",
  a: "Most domestic orders ship within 24 hours; metro deliveries arrive same-day or next-day. International shipments depend on destination and customs, with full live tracking throughout."
}, {
  q: "Do you provide a guarantee?",
  a: "Every shipment is fully insured and quality-assured. Cold-chain products are temperature-monitored end-to-end, with documented compliance for every batch."
}, {
  q: "What's your target fulfilment rate?",
  a: "We consistently maintain a 99.6%+ order-fulfilment rate across our active SKUs — one of the strongest in the regional distribution industry."
}, {
  q: "How large is your product range and how many brands do you distribute?",
  a: "Our active catalogue spans 30,000+ SKUs across 500+ manufacturers and brands, from leading multinationals to specialised local producers."
}];
const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a
    }
  }))
});
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollRefresher, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DealingWith, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: organizationSchema
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: websiteSchema
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: faqSchema
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "About", load: () => import("./About-DzN-xzYL.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Services", load: () => import("./Services-C2rqbm9i.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "WhyUs", load: () => import("./WhyUs-SK2Ftnwg.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUsSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Journey", load: () => import("./Journey-kXKUtABM.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(JourneySkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Network", load: () => import("./Network-CI-vw6eM.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(NetworkSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Leadership", load: () => import("./Leadership-B8okXQ0F.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadershipSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Gallery", load: () => import("./Gallery-BtfQkNnv.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(GallerySkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Partners", load: () => import("./Partners-wP35OvQm.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(PartnersSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Testimonials", load: () => import("./Testimonials-Bqnh5DmO.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "FAQ", load: () => import("./FAQ-CUYVovGe.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSkeleton, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LazySection, { exportName: "Contact", load: () => import("./Contact-OKccEkAi.mjs"), fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSkeleton, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: Index
}, Symbol.toStringTag, { value: "Module" }));
export {
  cn as c,
  index as i
};

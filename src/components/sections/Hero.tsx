import { useRef, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import heroBg from "@/assets/hero-bg.jpg";
import { gsap, useGSAP } from "@/lib/gsap";

function HeroBase() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".js-hero-eyebrow", { y: 18, opacity: 0, duration: 0.6 })
          .from(".js-hero-title", { y: 36, opacity: 0, duration: 0.9 }, "-=0.3")
          .from(".js-hero-cta > *", { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");

        gsap.to(".js-hero-bg", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".js-hero-content", {
          opacity: 0,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="relative min-h-[100dvh] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Medical distribution warehouse"
        className="js-hero-bg absolute inset-0 size-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/85 via-brand-blue/70 to-brand-blue/30" />

      <div className="js-hero-content relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[100dvh] flex flex-col justify-center py-24">
        <div className="max-w-3xl">
          <p className="js-hero-eyebrow text-[11px] md:text-xs font-semibold tracking-[0.2em] text-brand-green-light uppercase mb-5">
            Trusted Today • Healthier Tomorrow • Together Worldwide
          </p>
          <h1 className="js-hero-title font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            Delivering Healthcare<br />the World Can Trust
          </h1>

          <div className="js-hero-cta flex flex-wrap gap-4 sm:gap-6">
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-white/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
      >
        <FontAwesomeIcon icon={faChevronDown} className="size-7" />
      </a>
    </section>
  );
}

export const Hero = memo(HeroBase);

import { useRef } from "react";
import founder from "@/assets/founder.jpg";
import { Reveal } from "../Reveal";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export function Leadership() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".js-founder-img", {
          clipPath: "inset(0% 100% 0% 0%)",
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".js-founder-img", start: "top 80%", invalidateOnRefresh: true },
        });
        gsap.to(".js-founder-img", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        gsap.from(".js-founder-bio > *", {
          opacity: 0,
          y: 18,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".js-founder-bio", start: "top 80%", invalidateOnRefresh: true },
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="leadership" className="bg-bg-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">Leadership</p>
            <h2 className="font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3">Meet Our Leadership</h2>
            <p className="text-ink-soft text-base md:text-lg">Leading with experience, serving with care.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-brand-green/10 -z-10" />
              <img
                src={founder}
                alt="Founder of RS Medical Agency"
                className="js-founder-img rounded-2xl shadow-soft-lg w-full max-w-md mx-auto object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="js-founder-bio">
            <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6">
              <span className="text-brand-blue">Building trust,</span>
              <br />
              <span className="text-brand-green">one delivery at a time.</span>
            </h3>
            <div className="space-y-4 text-ink-soft leading-relaxed">
              <p>
                With over 25+ years of dedicated experience in the healthcare distribution industry,
                our leadership has built RS Medical Agency on a foundation of integrity, reliability, and
                an unwavering commitment to patient outcomes.
              </p>
              <p>
                We believe ethical leadership shapes ethical operations — and that the partners and people
                we serve deserve a distributor who values their trust as much as their business.
              </p>
              <p>
                From regional pharmacies to international hospitals, every relationship is treated with the
                same care, transparency, and accountability that has defined our company from day one.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-line">
              <p className="font-display font-bold text-brand-blue text-xl">[Founder Name]</p>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand-green uppercase mt-1">Founder</p>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
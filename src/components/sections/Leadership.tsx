import founder from "@/assets/founder.jpg";
import { Reveal } from "../Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="bg-bg-soft py-20 md:py-28">
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
                className="rounded-2xl shadow-soft-lg w-full max-w-md mx-auto object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
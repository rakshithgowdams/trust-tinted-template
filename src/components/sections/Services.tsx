import { Check, Truck, Globe2 } from "lucide-react";
import { Reveal } from "../Reveal";

const cards = [
  {
    icon: Truck,
    title: "Seamless Delivery",
    desc: "End-to-end logistics built for sensitive healthcare cargo.",
    bullets: ["Real-Time Tracking", "Temperature-Controlled Transport", "Doorstep Delivery"],
  },
  {
    icon: Globe2,
    title: "Worldwide Connectivity",
    desc: "An always-on supply network spanning continents.",
    bullets: ["24×7 Supply Coverage", "Domestic & International Reach", "Technology-Backed Distribution"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bg-soft py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--brand-blue) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">What We Do</p>
            <h2 className="font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3">Services We Offer</h2>
            <p className="text-ink-soft text-base md:text-lg">Because dependability isn't optional in healthcare.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group h-full rounded-2xl bg-white border border-line p-8 md:p-10 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1">
                <div className="size-14 rounded-2xl bg-brand-green/10 grid place-items-center mb-6">
                  <c.icon className="size-7 text-brand-green" />
                </div>
                <h3 className="font-display font-bold text-brand-blue text-2xl md:text-3xl mb-3">{c.title}</h3>
                <p className="text-ink-soft mb-6">{c.desc}</p>
                <ul className="space-y-3 mb-8">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-ink">
                      <span className="mt-0.5 size-5 rounded-full bg-brand-green grid place-items-center shrink-0">
                        <Check className="size-3 text-white" strokeWidth={3} />
                      </span>
                      <span className="text-sm md:text-base">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border-2 border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                >
                  Learn More
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
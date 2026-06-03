import { Briefcase, Package, Users, Heart } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";
import about4 from "@/assets/about-4.jpg";
import about5 from "@/assets/about-5.jpg";
import { Reveal } from "../Reveal";

const stats = [
  { icon: Briefcase, num: "25+", label: "Years of Experience" },
  { icon: Package, num: "30K+", label: "Products / SKUs" },
  { icon: Users, num: "1000+", label: "Partners Served" },
  { icon: Heart, num: "10K+", label: "Happy Customers" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-4">About Us</p>
            <h2 className="font-display font-bold text-brand-blue text-3xl md:text-5xl leading-tight mb-6">
              Healthcare partners the world has trusted for over two decades.
            </h2>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-5">
              RS Medical Agency is a trusted name in healthcare distribution, connecting manufacturers,
              pharmacies, hospitals, and institutions with the medicines and medical supplies they depend on.
              With deep industry relationships and a commitment to quality, we deliver reliability at every step.
            </p>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed">
              We go the extra mile for every partner — because in healthcare, trust isn't assumed, it's earned,
              one delivery at a time.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[460px] md:h-[540px]">
              <img src={about1} alt="Medical delivery truck" className="col-span-3 row-span-4 size-full object-cover rounded-2xl shadow-soft" loading="lazy" />
              <img src={about2} alt="Pharmacy shelves" className="col-span-3 row-span-2 size-full object-cover rounded-2xl shadow-soft" loading="lazy" />
              <img src={about3} alt="Warehouse scanner" className="col-span-3 row-span-2 size-full object-cover rounded-2xl shadow-soft" loading="lazy" />
              <img src={about4} alt="Handshake" className="col-span-3 row-span-2 size-full object-cover rounded-2xl shadow-soft" loading="lazy" />
              <img src={about5} alt="Office team" className="col-span-3 row-span-2 size-full object-cover rounded-2xl shadow-soft" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl bg-bg-soft border border-line p-6 md:p-8 text-center hover:shadow-soft transition-shadow">
                <s.icon className="size-7 mx-auto mb-3 text-brand-green" />
                <div className="font-display font-bold text-brand-green text-3xl md:text-4xl">{s.num}</div>
                <div className="text-ink-soft text-sm mt-2">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faTruck, faHeadphones, faLightbulb, faRocket, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "../Reveal";

const items = [
  { icon: faLayerGroup, title: "Integrated Platform", desc: "Order, transact, and track in one seamless place built for healthcare buyers." },
  { icon: faTruck, title: "Streamlined Delivery", desc: "Reliable multi-channel logistics that move fast and stay hassle-free." },
  { icon: faHeadphones, title: "Customer Service", desc: "Long-term relationships powered by dependable support at every stage." },
  { icon: faLightbulb, title: "Driven by Innovation", desc: "New technology that simplifies and strengthens distribution operations." },
  { icon: faRocket, title: "Future Ready", desc: "Constantly adapting and adding value with every step we take together." },
  { icon: faArrowTrendUp, title: "Growth Focussed", desc: "Setting and beating the industry standard, every time, for every partner." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">The RS Difference</p>
            <h2 className="font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3">Why Us?</h2>
            <p className="text-ink-soft text-base md:text-lg">A partnership built on excellence.</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl bg-white border border-line p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all">
                <div className="size-12 rounded-xl bg-brand-green/10 grid place-items-center mb-5 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <FontAwesomeIcon icon={it.icon} className="size-6 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-brand-blue text-xl mb-2">{it.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  {
    quote:
      "RS Medical has been our most reliable supply partner for over a decade. Their commitment to cold-chain integrity and on-time delivery is unmatched in the industry — we never have to worry about stockouts.",
    name: "Dr. Ananya Iyer",
    company: "Apollo Pharmacy Network",
  },
  {
    quote:
      "What sets them apart isn't just logistics — it's the people. Every order feels personal, every issue resolved the same day. That's rare in distribution.",
    name: "Rohan Mehta",
    company: "MediCare Hospitals",
  },
  {
    quote:
      "Their international shipping arm helped us launch in three new markets in under a year. Documentation, customs, last-mile — all handled flawlessly.",
    name: "Sarah Lin",
    company: "Pacific Health Group",
  },
  {
    quote:
      "From a 200-bed hospital to procurement at scale, RS Medical adapts to our volume and our urgency without ever compromising quality.",
    name: "Dr. Vikram Shah",
    company: "Shree Krishna Hospital",
  },
  {
    quote:
      "Their digital platform makes reordering effortless. We see real-time stock, track shipments live, and reconcile invoices in minutes, not days.",
    name: "Priya Nair",
    company: "WellLife Pharmacies",
  },
  {
    quote:
      "Trust is everything in healthcare distribution. RS Medical has earned ours, again and again.",
    name: "Mohammed Al-Rashid",
    company: "Gulf Medical Trading",
  },
];

function Card({ quote, name, company }: { quote: string; name: string; company: string }) {
  const [expanded, setExpanded] = useState(false);
  const truncated = quote.length > 160 && !expanded;
  return (
    <div className="break-inside-avoid mb-5 rounded-2xl bg-white border border-line p-6 md:p-7 shadow-soft hover:shadow-soft-lg transition-shadow">
      <Quote className="size-7 text-brand-green/40 mb-3" />
      <p className="text-ink leading-relaxed text-sm md:text-base">
        {truncated ? quote.slice(0, 160) + "…" : quote}
      </p>
      {quote.length > 160 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-xs font-semibold text-brand-green hover:underline"
        >
          {expanded ? "Show less ▴" : "Read more ▾"}
        </button>
      )}
      <div className="mt-5 pt-4 border-t border-line">
        <p className="font-semibold text-brand-blue">~ {name}</p>
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-soft mt-1">{company}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">Voices</p>
            <h2 className="font-display font-bold text-brand-blue text-3xl md:text-5xl mb-3">
              Customer Testimonials
            </h2>
            <p className="text-ink-soft text-base md:text-lg">
              Our customers' words reflect our commitment to excellence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {items.map((t) => (
              <Card key={t.name} {...t} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
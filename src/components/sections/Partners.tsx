import { useState } from "react";
import { Reveal } from "../Reveal";

const brands = [
  "Sun Pharma", "Cipla", "Dr. Reddy's", "Lupin", "Mankind", "Zydus",
  "Torrent", "Glenmark", "Abbott", "Alkem", "Pfizer", "GSK",
];

function BrandTile({ name }: { name: string }) {
  return (
    <div className="h-20 rounded-xl border border-line bg-white grid place-items-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:shadow-soft transition-all">
      <span className="font-display font-bold text-brand-blue text-base md:text-lg text-center tracking-tight">
        {name}
      </span>
    </div>
  );
}

export function Partners() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? brands : brands.slice(0, 6);
  return (
    <section className="bg-bg-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">Trusted Partners</p>
            <h2 className="font-display font-bold text-brand-blue text-3xl md:text-5xl">Our Companies</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {visible.map((b) => (
              <BrandTile key={b} name={b} />
            ))}
          </div>
        </Reveal>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="inline-flex items-center rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white shadow-soft hover:bg-brand-green-light transition-colors"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      </div>
    </section>
  );
}
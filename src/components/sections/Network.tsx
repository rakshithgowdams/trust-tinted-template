import { useRef } from "react";
import { Reveal } from "../Reveal";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const hubs = [
  "Bagalkot",
  "Ballari",
  "Belagavi",
  "Bengaluru Rural",
  "Bengaluru Urban",
  "Bidar",
  "Chamarajanagar",
  "Chikkaballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davanagere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Kalaburagi",
  "Kodagu",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mysuru",
  "Raichur",
  "Ramanagara",
  "Shivamogga",
  "Tumakuru",
  "Udupi",
  "Uttara Kannada",
  "Vijayanagara",
  "Vijayapura",
  "Yadgir",
];

export function Network() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(mapRef.current?.querySelector("img") ?? [], {
          opacity: 0,
          scale: 0.94,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%", invalidateOnRefresh: true },
        });
        gsap.from(".js-hub", {
          opacity: 0,
          y: 12,
          scale: 0.9,
          duration: 0.45,
          ease: "back.out(1.6)",
          stagger: { each: 0.025, from: "random" },
          scrollTrigger: { trigger: mapRef.current, start: "top 70%", invalidateOnRefresh: true },
        });
        gsap.to(".js-hub-dot", {
          scale: 1.4,
          opacity: 0.6,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: { each: 0.08, from: "random" },
          transformOrigin: "center",
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: mapRef },
  );

  return (
    <section id="network" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">Our Reach</p>
            <h2 className="font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3">
              Distribution Network Across Karnataka
            </h2>
            <p className="text-ink-soft text-base md:text-lg">
              Connecting healthcare partners across every district.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-4xl mx-auto">
          <Reveal>
            <p className="text-ink-soft leading-relaxed">
              With <span className="font-bold text-brand-green">180+</span> dedicated vehicles and a fleet
              built for healthcare-grade cold-chain integrity, we move sensitive cargo without a missed beat —
              from manufacturer to last-mile.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-soft leading-relaxed">
              Backed by <span className="font-bold text-brand-green">30,000+</span> SKUs and a roster of
              trusted global logistics partners, our network delivers consistency, traceability, and speed
              across every corridor we serve.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div ref={mapRef} className="relative rounded-2xl bg-bg-soft border border-line p-6 md:p-10 shadow-soft overflow-hidden">
            <img
              src="/karnataka-map.png"
              alt="Karnataka districts distribution map"
              className="mx-auto w-full max-w-xl h-auto object-contain"
              loading="lazy"
            />
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {hubs.map((h) => (
                <span
                  key={h}
                  className="js-hub inline-flex items-center rounded-full border border-line bg-background px-4 py-1.5 text-sm font-medium text-brand-blue shadow-sm"
                >
                  <span className="js-hub-dot mr-2 size-1.5 rounded-full bg-brand-green" />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
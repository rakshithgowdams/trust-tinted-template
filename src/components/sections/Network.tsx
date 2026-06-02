import { Reveal } from "../Reveal";

const hubs = [
  { name: "Bengaluru", x: 70, y: 58 },
  { name: "Delhi", x: 67, y: 42 },
  { name: "Mumbai", x: 66, y: 54 },
  { name: "Dubai", x: 58, y: 47 },
  { name: "Singapore", x: 78, y: 64 },
  { name: "London", x: 46, y: 32 },
];

export function Network() {
  return (
    <section id="network" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">Our Reach</p>
            <h2 className="font-display font-bold text-sky-brand text-3xl md:text-5xl mb-3">
              Worldwide Distribution Network
            </h2>
            <p className="text-ink-soft text-base md:text-lg">
              Connecting healthcare partners across the globe.
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
          <div className="relative rounded-2xl bg-bg-soft border border-line p-6 md:p-10 shadow-soft overflow-hidden">
            <svg viewBox="0 0 100 60" className="w-full h-auto" aria-label="World distribution map">
              {/* simplified continents */}
              <g fill="#D6E2F2">
                <path d="M5,18 Q12,12 22,14 L28,20 L26,28 L18,32 L8,28 Z" />
                <path d="M22,38 L30,38 L34,52 L26,56 L18,50 Z" />
                <path d="M40,14 Q52,10 64,14 L70,22 L66,32 L52,36 L42,30 Z" />
                <path d="M50,40 Q56,38 62,42 L60,52 L52,54 L48,48 Z" />
                <path d="M64,32 Q72,30 80,34 L82,46 L74,52 L66,46 Z" />
                <path d="M82,46 L92,46 L94,54 L86,56 Z" />
              </g>
              {/* India highlight */}
              <path d="M64,42 Q68,40 71,44 L70,52 L66,54 L63,50 Z" fill="#4FA130" opacity="0.7" />

              {/* connection lines */}
              {hubs.slice(1).map((h, i) => (
                <line
                  key={i}
                  x1={hubs[0].x}
                  y1={hubs[0].y}
                  x2={h.x}
                  y2={h.y}
                  stroke="#4FA130"
                  strokeWidth="0.25"
                  strokeDasharray="1 1"
                  opacity="0.6"
                />
              ))}

              {/* hubs */}
              {hubs.map((h) => (
                <g key={h.name}>
                  <circle cx={h.x} cy={h.y} r="1.4" fill="#4FA130">
                    <animate attributeName="r" values="1.4;2.2;1.4" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={h.x} cy={h.y} r="0.8" fill="#16367C" />
                  <text x={h.x + 1.6} y={h.y + 0.6} fontSize="1.6" fill="#16367C" fontWeight="600" className="font-display">
                    {h.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
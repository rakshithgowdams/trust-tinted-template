import { Reveal } from "../Reveal";

const steps = [
  "Client Onboarding",
  "Order Placement",
  "Order Processing & Verification",
  "Dispatch",
  "Delivery & Tracking",
  "Support & Issue Resolution",
];

export function Journey() {
  return (
    <section className="bg-bg-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">Process</p>
            <h2 className="font-display font-bold text-sky-brand text-3xl md:text-5xl">Your Order Journey</h2>
          </div>
        </Reveal>

        {/* Desktop snake layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-x-6 gap-y-12">
            {steps.map((s, i) => {
              const row = Math.floor(i / 3);
              const inRow = i % 3;
              const reverse = row % 2 === 1;
              const orderInRow = reverse ? 2 - inRow : inRow;
              const filled = i % 2 === 0;
              return (
                <Reveal key={s} delay={i * 0.08}>
                  <div style={{ order: orderInRow }} className="flex items-center gap-4">
                    <div
                      className={`shrink-0 size-12 rounded-full grid place-items-center font-display font-bold text-lg ${
                        filled ? "bg-brand-green text-white" : "bg-white text-brand-blue border-2 border-brand-blue"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`flex-1 rounded-full px-6 py-4 font-semibold text-sm md:text-base ${
                        filled
                          ? "bg-brand-green text-white shadow-soft"
                          : "bg-white text-brand-blue border-2 border-brand-blue/20 shadow-soft"
                      }`}
                    >
                      {s}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative pl-4">
          <div className="absolute left-[27px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-brand-green/40" />
          <div className="space-y-5">
            {steps.map((s, i) => {
              const filled = i % 2 === 0;
              return (
                <Reveal key={s} delay={i * 0.05}>
                  <div className="flex items-center gap-4 relative">
                    <div
                      className={`shrink-0 size-12 rounded-full grid place-items-center font-display font-bold relative z-10 ${
                        filled ? "bg-brand-green text-white" : "bg-white text-brand-blue border-2 border-brand-blue"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <div
                      className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold ${
                        filled
                          ? "bg-brand-green text-white"
                          : "bg-white text-brand-blue border-2 border-brand-blue/20"
                      }`}
                    >
                      {s}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
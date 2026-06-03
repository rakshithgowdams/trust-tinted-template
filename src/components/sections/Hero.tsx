import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Medical distribution warehouse"
        className="absolute inset-0 size-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-deep/85 via-brand-blue/70 to-brand-blue/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 min-h-[100dvh] flex flex-col justify-center py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-brand-green-light uppercase mb-5">
            Trusted Today • Healthier Tomorrow • Together Worldwide
          </p>
          <h1 className="font-display font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            Delivering Healthcare<br />the World Can Trust
          </h1>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-brand-green px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-brand-green-light"
            >
              Partner With Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-white/80 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand-blue"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white animate-bounce"
      >
        <FontAwesomeIcon icon={faChevronDown} className="size-7" />
      </a>
    </section>
  );
}
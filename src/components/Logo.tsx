import { memo } from "react";
function LogoBase({ className = "h-10" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="RS Medical Agency home">
      <img
        src="/rs-logo.webp"
        alt="RS Medical Agency"
        width={600}
        height={600}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className={`${className} w-auto object-contain`}
      />
    </a>
  );
}

export const Logo = memo(LogoBase);

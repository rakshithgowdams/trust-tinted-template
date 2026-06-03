import logoAsset from "@/assets/rs-logo.webp.asset.json";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="RS Medical Agency home">
      <img
        src={logoAsset.url}
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
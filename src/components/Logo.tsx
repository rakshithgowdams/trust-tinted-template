import logoAsset from "@/assets/rs-logo.asset.json";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="RS Medical Agency home">
      <img src={logoAsset.url} alt="RS Medical Agency" className={`${className} w-auto object-contain`} />
    </a>
  );
}
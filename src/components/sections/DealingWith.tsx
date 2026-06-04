import brand36 from "@/assets/brands/brand_36.png.asset.json";
import brand37 from "@/assets/brands/brand_37.png.asset.json";
import brand38 from "@/assets/brands/brand_38.png.asset.json";
import brand39 from "@/assets/brands/brand_39.png.asset.json";
import brand40 from "@/assets/brands/brand_40.png.asset.json";
import brand41 from "@/assets/brands/brand_41.png.asset.json";
import brand42 from "@/assets/brands/brand_42.png.asset.json";

const logos = [
  { src: brand36.url, alt: "Pfizer" },
  { src: brand37.url, alt: "Natco" },
  { src: brand38.url, alt: "Zydus" },
  { src: brand39.url, alt: "Abbott" },
  { src: brand40.url, alt: "Hetero" },
  { src: brand41.url, alt: "Cipla" },
  { src: brand42.url, alt: "Roche" },
];

export function DealingWith() {
  const loop = [...logos, ...logos];
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          We Are Dealing With
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 items-center">
          {loop.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className="h-16 md:h-20 w-auto object-contain shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DealingWith;
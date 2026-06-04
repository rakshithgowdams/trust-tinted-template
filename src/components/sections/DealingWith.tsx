import pfizer from "@/assets/brands/Rectangle_36.png";
import natco from "@/assets/brands/Rectangle_37.png";
import zydus from "@/assets/brands/Rectangle_38.png";
import abbott from "@/assets/brands/Rectangle_39.png";
import hetero from "@/assets/brands/Rectangle_40.png";
import cipla from "@/assets/brands/Rectangle_41.png";
import roche from "@/assets/brands/Rectangle_42.png";

const logos = [
  { src: pfizer, alt: "Pfizer" },
  { src: natco, alt: "Natco" },
  { src: zydus, alt: "Zydus" },
  { src: abbott, alt: "Abbott" },
  { src: hetero, alt: "Hetero" },
  { src: cipla, alt: "Cipla" },
  { src: roche, alt: "Roche" },
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
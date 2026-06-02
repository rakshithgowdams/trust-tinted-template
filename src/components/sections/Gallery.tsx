import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import a1 from "@/assets/about-1.jpg";
import a5 from "@/assets/about-5.jpg";
import { Reveal } from "../Reveal";

const images = [
  { src: g1, alt: "Pharmaceutical inventory" },
  { src: g2, alt: "Cold chain storage" },
  { src: g3, alt: "Hospital delivery" },
  { src: a1, alt: "Delivery fleet" },
  { src: a5, alt: "Team meeting" },
];

export function Gallery() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">A Look Inside</p>
            <h2 className="font-display font-bold text-brand-blue text-3xl md:text-5xl">Gallery</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ loop: true }} className="max-w-5xl mx-auto">
            <CarouselContent>
              {images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-2xl overflow-hidden shadow-soft-lg aspect-[16/9]">
                    <img src={img.src} alt={img.alt} className="size-full object-cover" loading="lazy" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-brand-blue border-brand-blue/20 -left-4 md:-left-12" />
            <CarouselNext className="bg-white text-brand-blue border-brand-blue/20 -right-4 md:-right-12" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
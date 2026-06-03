import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
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
  { src: "/gallery/maball-500.jpeg", alt: "Maball 500 - Rituximab Injection 500 mg/50 mL" },
  { src: "/gallery/bryxta-300.jpeg", alt: "Bryxta 300 - Bevacizumab Injection 300 mg/12 mL" },
  { src: "/gallery/bryxta-300-back.jpeg", alt: "Bryxta 300 - composition and prescribing information" },
  { src: "/gallery/cazanat-60.jpeg", alt: "Cazanat 60 - Cabozantinib Tablets I.P. 60 mg" },
  { src: "/gallery/capetero-500.jpeg", alt: "Capetero-500 - Capecitabine Tablets IP 500 mg" },
  { src: "/gallery/dyronib-50.jpeg", alt: "Dyronib - Dasatinib Tablets 50 mg" },
  { src: "/gallery/daslemia-100.jpeg", alt: "Daslemia 100 - Dasatinib Tablets 100 mg" },
  { src: "/gallery/herti-440.jpeg", alt: "Herti - Trastuzumab for Injection 440 mg" },
  { src: "/gallery/trabec.jpeg", alt: "Trabec - Trabectedin powder for infusion 1 mg/vial" },
  { src: "/gallery/bandrone-150.jpeg", alt: "Bandrone 150 - Ibandronic Acid Tablets" },
  { src: "/gallery/capetero-500-blister.jpeg", alt: "Capetero-500 - Capecitabine 500 mg blister pack" },
  { src: "/gallery/mabtas-n-500.jpeg", alt: "Mabtas N 500 - Rituximab Concentrate 500 mg/50 mL" },
  { src: "/gallery/herti-440-pack.jpeg", alt: "Herti 440 - Trastuzumab combi pack" },
  { src: "/gallery/reditux-500.jpeg", alt: "Reditux 500 - Rituximab Injection 500 mg/50 mL" },
  { src: "/gallery/cazanat-60-front.jpeg", alt: "Cazanat 60 - Cabozantinib 60 mg front pack" },
  { src: "/gallery/maball-500-zoom.jpeg", alt: "Maball 500 - Rituximab 500 mg Hetero Oncology" },
  { src: "/gallery/enzana-80.jpeg", alt: "Enzana 80 - Enzalutamide Capsules 80 mg" },
];

export function Gallery() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".js-gallery-frame", {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", invalidateOnRefresh: true },
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-background py-20 md:py-28 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">A Look Inside</p>
            <h2 className="font-display font-bold text-brand-blue text-3xl md:text-5xl">Gallery</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Carousel opts={{ loop: true }} className="max-w-5xl mx-auto px-10 sm:px-0">
            <CarouselContent>
              {images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="js-gallery-frame rounded-2xl overflow-hidden shadow-soft-lg aspect-[16/9]">
                    <img src={img.src} alt={img.alt} className="size-full object-cover" loading="lazy" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-brand-blue border-brand-blue/20 left-0 md:-left-12" />
            <CarouselNext className="bg-white text-brand-blue border-brand-blue/20 right-0 md:-right-12" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
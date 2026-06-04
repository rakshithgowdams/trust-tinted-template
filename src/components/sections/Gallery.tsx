import { useRef, memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { Reveal } from "../Reveal";

const images = [
  { src: "/gallery/maball-500-zoom.jpeg", alt: "Maball 500 - Rituximab 500 mg Hetero Oncology" },
  { src: "/gallery/bryxta-300.jpeg", alt: "Bryxta 300 - Bevacizumab Injection 300 mg/12 mL" },
  { src: "/gallery/bryxta-300-back.jpeg", alt: "Bryxta 300 - composition and prescribing information" },
  { src: "/gallery/cazanat-60.jpeg", alt: "Cazanat 60 - Cabozantinib Tablets I.P. 60 mg" },
  { src: "/gallery/cazanat-60-front.jpeg", alt: "Cazanat 60 - Cabozantinib 60 mg front pack" },
  { src: "/gallery/capetero-500-blister.jpeg", alt: "Capetero-500 - Capecitabine 500 mg blister pack" },
  { src: "/gallery/dyronib-50.jpeg", alt: "Dyronib - Dasatinib Tablets 50 mg" },
  { src: "/gallery/daslemia-100.jpeg", alt: "Daslemia 100 - Dasatinib Tablets 100 mg" },
  { src: "/gallery/herti-440.jpeg", alt: "Herti - Trastuzumab for Injection 440 mg" },
  { src: "/gallery/herti-440-pack.jpeg", alt: "Herti 440 - Trastuzumab combi pack" },
  { src: "/gallery/trabec.jpeg", alt: "Trabec - Trabectedin powder for infusion 1 mg/vial" },
  { src: "/gallery/bandrone-150.jpeg", alt: "Bandrone 150 - Ibandronic Acid Tablets" },
  { src: "/gallery/mabtas-n-500.jpeg", alt: "Mabtas N 500 - Rituximab Concentrate 500 mg/50 mL" },
  { src: "/gallery/reditux-500.jpeg", alt: "Reditux 500 - Rituximab Injection 500 mg/50 mL" },
  { src: "/gallery/enzana-80.jpeg", alt: "Enzana 80 - Enzalutamide Capsules 80 mg" },
  { src: "/gallery/tishtha-100-back.jpeg", alt: "Tishtha - Nivolumab Injection 100 mg/10 mL" },
  { src: "/gallery/ahabir-250.jpeg", alt: "Ahabir - Abiraterone Acetate Tablets IP 250 mg" },
  { src: "/gallery/cabotres-60.jpeg", alt: "Cabotres 60 - Cabozantinib Tablets 60 mg (Cipla)" },
];

function GalleryBase() {
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
                  <div className="js-gallery-frame rounded-2xl overflow-hidden shadow-soft-lg bg-muted flex items-center justify-center h-[60vw] max-h-[600px] sm:h-[50vw] md:h-[480px]">
                    <img src={img.src} alt={img.alt} className="max-h-full max-w-full w-auto h-auto object-contain" loading="lazy" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/90 hover:bg-white text-brand-blue border-brand-blue/20 left-3 md:left-4 z-10 shadow-md" />
            <CarouselNext className="bg-white/90 hover:bg-white text-brand-blue border-brand-blue/20 right-3 md:right-4 z-10 shadow-md" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

export const Gallery = memo(GalleryBase);

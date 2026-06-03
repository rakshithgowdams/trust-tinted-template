import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Reveal } from "../Reveal";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const faqs = [
  {
    q: "Who can purchase from RS Medical Agency?",
    a: "We supply licensed pharmacies, hospitals, clinics, government institutions, NGOs, and international healthcare distributors. We do not sell directly to individual consumers.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes — every enquiry receives a tailored, no-obligation quote based on volume, geography, and product mix, typically within 24 hours.",
  },
  {
    q: "How quickly is my order delivered?",
    a: "Most domestic orders ship within 24 hours; metro deliveries arrive same-day or next-day. International shipments depend on destination and customs, with full live tracking throughout.",
  },
  {
    q: "Do you provide a guarantee?",
    a: "Every shipment is fully insured and quality-assured. Cold-chain products are temperature-monitored end-to-end, with documented compliance for every batch.",
  },
  {
    q: "What's your target fulfilment rate?",
    a: "We consistently maintain a 99.6%+ order-fulfilment rate across our active SKUs — one of the strongest in the regional distribution industry.",
  },
  {
    q: "How large is your product range and how many brands do you distribute?",
    a: "Our active catalogue spans 30,000+ SKUs across 500+ manufacturers and brands, from leading multinationals to specialised local producers.",
  },
];

export function FAQ() {
  const list = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(list.current?.querySelectorAll(".js-faq-item") ?? [], {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: list.current, start: "top 80%", invalidateOnRefresh: true },
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: list },
  );

  return (
    <section id="faq" className="bg-bg-soft py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <Reveal>
            <Accordion ref={list} type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="js-faq-item border border-line bg-white rounded-2xl mb-3 px-6 shadow-soft"
                >
                  <AccordionTrigger className="font-display font-semibold text-brand-blue text-left hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-soft leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold tracking-[0.18em] text-brand-green uppercase mb-3">FAQ</p>
              <h2 className="font-display font-bold text-brand-green text-3xl md:text-4xl leading-tight mb-4">
                Answering<br />your questions
              </h2>
              <p className="text-ink-soft mb-7">
                Got more questions? Send us your enquiry below and we'll get back to you within 24 hours.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-brand-blue-deep px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-blue transition-colors"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
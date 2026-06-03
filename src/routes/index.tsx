import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { LazySection } from "@/components/LazySection";
import {
  AboutSkeleton,
  ServicesSkeleton,
  WhyUsSkeleton,
  JourneySkeleton,
  NetworkSkeleton,
  LeadershipSkeleton,
  GallerySkeleton,
  PartnersSkeleton,
  TestimonialsSkeleton,
  FAQSkeleton,
  ContactSkeleton,
} from "@/components/SectionSkeletons";

const SITE_URL = "https://trust-tinted-template.lovable.app";

const organizationSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RS Medical Agency",
  url: SITE_URL,
  description:
    "Trusted healthcare distribution partner connecting pharmacies, hospitals, and institutions with essential medicines worldwide.",
});

const websiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RS Medical Agency",
  url: SITE_URL,
});

const faqEntries = [
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

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Medical Agency — Trusted Healthcare Distribution" },
      {
        name: "description",
        content:
          "RS Medical Agency is a trusted healthcare distribution partner connecting pharmacies, hospitals, and institutions with essential medicines worldwide.",
      },
      { property: "og:title", content: "RS Medical Agency — Global Healthcare Distribution" },
      {
        property: "og:description",
        content:
          "A trusted distribution partner connecting pharmacies, hospitals, and institutions with essential medicines worldwide.",
      },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizationSchema }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteSchema }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
        <LazySection exportName="About" load={() => import("@/components/sections/About")} fallback={<AboutSkeleton />} />
        <LazySection exportName="Services" load={() => import("@/components/sections/Services")} fallback={<ServicesSkeleton />} />
        <LazySection exportName="WhyUs" load={() => import("@/components/sections/WhyUs")} fallback={<WhyUsSkeleton />} />
        <LazySection exportName="Journey" load={() => import("@/components/sections/Journey")} fallback={<JourneySkeleton />} />
        <LazySection exportName="Network" load={() => import("@/components/sections/Network")} fallback={<NetworkSkeleton />} />
        <LazySection exportName="Leadership" load={() => import("@/components/sections/Leadership")} fallback={<LeadershipSkeleton />} />
        <LazySection exportName="Gallery" load={() => import("@/components/sections/Gallery")} fallback={<GallerySkeleton />} />
        <LazySection exportName="Partners" load={() => import("@/components/sections/Partners")} fallback={<PartnersSkeleton />} />
        <LazySection exportName="Testimonials" load={() => import("@/components/sections/Testimonials")} fallback={<TestimonialsSkeleton />} />
        <LazySection exportName="FAQ" load={() => import("@/components/sections/FAQ")} fallback={<FAQSkeleton />} />
        <LazySection exportName="Contact" load={() => import("@/components/sections/Contact")} fallback={<ContactSkeleton />} />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
}

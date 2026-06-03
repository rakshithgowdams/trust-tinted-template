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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RS Medical Agency — Trusted Today, Healthier Tomorrow, Together Worldwide" },
      {
        name: "description",
        content:
          "RS Medical Agency is a trusted healthcare distribution partner — connecting manufacturers, pharmacies, hospitals, and institutions with the medicines they depend on, worldwide.",
      },
      { property: "og:title", content: "RS Medical Agency" },
      { property: "og:description", content: "Delivering healthcare the world can trust." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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

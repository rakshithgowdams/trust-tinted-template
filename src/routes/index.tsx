import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Journey } from "@/components/sections/Journey";
import { Network } from "@/components/sections/Network";
import { Leadership } from "@/components/sections/Leadership";
import { Gallery } from "@/components/sections/Gallery";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

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
        <About />
        <Services />
        <WhyUs />
        <Journey />
        <Network />
        <Leadership />
        <Gallery />
        <Partners />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </>
  );
}

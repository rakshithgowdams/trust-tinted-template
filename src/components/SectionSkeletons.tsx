import { memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Header({ wide = false }: { wide?: boolean }) {
  return (
    <div className="text-center space-y-3 mb-12">
      <Skeleton className="h-3 w-32 mx-auto" />
      <Skeleton className={`h-10 mx-auto ${wide ? "w-96" : "w-72"} max-w-full`} />
      <Skeleton className="h-4 w-80 max-w-full mx-auto" />
    </div>
  );
}

function Shell({ children, soft = false }: { children: React.ReactNode; soft?: boolean }) {
  return (
    <section className={`${soft ? "bg-bg-soft" : "bg-background"} py-20 md:py-28`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

function AboutSkeletonBase() {
  return (
    <Shell>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-5/6" />
          <Skeleton className="h-4 w-full mt-4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[460px] md:h-[540px]">
          <Skeleton className="col-span-3 row-span-4 rounded-2xl" />
          <Skeleton className="col-span-3 row-span-2 rounded-2xl" />
          <Skeleton className="col-span-3 row-span-2 rounded-2xl" />
          <Skeleton className="col-span-3 row-span-2 rounded-2xl" />
          <Skeleton className="col-span-3 row-span-2 rounded-2xl" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 rounded-2xl" />
        ))}
      </div>
    </Shell>
  );
}

function ServicesSkeletonBase() {
  return (
    <Shell soft>
      <Header />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="h-[420px] rounded-2xl" />
        ))}
      </div>
    </Shell>
  );
}

function WhyUsSkeletonBase() {
  return (
    <Shell>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-48 rounded-2xl" />
        ))}
      </div>
    </Shell>
  );
}

function JourneySkeletonBase() {
  return (
    <Shell soft>
      <Header />
      <div className="space-y-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-2xl" />
        ))}
      </div>
    </Shell>
  );
}

function NetworkSkeletonBase() {
  return (
    <Shell>
      <Header wide />
      <Skeleton className="h-[420px] w-full rounded-2xl" />
      <div className="flex flex-wrap gap-3 justify-center mt-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-28 rounded-full" />
        ))}
      </div>
    </Shell>
  );
}

function LeadershipSkeletonBase() {
  return (
    <Shell soft>
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-80 rounded-2xl" />
        ))}
      </div>
    </Shell>
  );
}

function GallerySkeletonBase() {
  return (
    <Shell>
      <Header />
      <Skeleton className="max-w-5xl mx-auto aspect-[16/9] rounded-2xl" />
    </Shell>
  );
}

function PartnersSkeletonBase() {
  return (
    <Shell soft>
      <Header />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-20 rounded-xl" />
        ))}
      </div>
    </Shell>
  );
}

function TestimonialsSkeletonBase() {
  return (
    <Shell>
      <Header />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
        {[200, 260, 180, 240, 220, 280].map((h, i) => (
          <Skeleton key={i} className="rounded-2xl mb-5 w-full" style={{ height: h }} />
        ))}
      </div>
    </Shell>
  );
}

function FAQSkeletonBase() {
  return (
    <Shell soft>
      <Header />
      <div className="max-w-3xl mx-auto space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-14 rounded-xl" />
        ))}
      </div>
    </Shell>
  );
}

function ContactSkeletonBase() {
  return (
    <Shell>
      <Skeleton className="rounded-3xl h-[640px] w-full" />
    </Shell>
  );
}

export const AboutSkeleton = memo(AboutSkeletonBase);
export const ServicesSkeleton = memo(ServicesSkeletonBase);
export const WhyUsSkeleton = memo(WhyUsSkeletonBase);
export const JourneySkeleton = memo(JourneySkeletonBase);
export const NetworkSkeleton = memo(NetworkSkeletonBase);
export const LeadershipSkeleton = memo(LeadershipSkeletonBase);
export const GallerySkeleton = memo(GallerySkeletonBase);
export const PartnersSkeleton = memo(PartnersSkeletonBase);
export const TestimonialsSkeleton = memo(TestimonialsSkeletonBase);
export const FAQSkeleton = memo(FAQSkeletonBase);
export const ContactSkeleton = memo(ContactSkeletonBase);

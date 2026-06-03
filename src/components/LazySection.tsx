import { Suspense, useEffect, useRef, useState, type ComponentType, type ReactNode, memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  load: () => Promise<{ [key: string]: ComponentType<any> }>;
  exportName: string;
  fallback?: ReactNode;
  /** Margin at which to mount the real component (close to viewport). */
  rootMargin?: string;
  /** Larger margin at which to start prefetching the chunk in the background. */
  prefetchMargin?: string;
};

function DefaultSkeleton() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-3">
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-10 w-72 mx-auto" />
          <Skeleton className="h-4 w-96 max-w-full mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 h-[320px]">
          <Skeleton className="rounded-2xl size-full" />
          <Skeleton className="rounded-2xl size-full hidden md:block" />
          <Skeleton className="rounded-2xl size-full hidden md:block" />
        </div>
      </div>
    </section>
  );
}

const cache = new Map<string, ComponentType<any>>();
const inflight = new Map<string, Promise<ComponentType<any> | undefined>>();

function prefetch(
  exportName: string,
  load: () => Promise<{ [key: string]: ComponentType<any> }>,
) {
  if (cache.has(exportName)) return Promise.resolve(cache.get(exportName));
  let p = inflight.get(exportName);
  if (!p) {
    p = load().then((mod) => {
      const C = mod[exportName];
      if (C) cache.set(exportName, C);
      inflight.delete(exportName);
      return C;
    });
    inflight.set(exportName, p);
  }
  return p;
}

function LazySectionBase({
  load,
  exportName,
  fallback,
  rootMargin = "200px",
  prefetchMargin = "1200px",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [Comp, setComp] = useState<ComponentType<any> | null>(() => cache.get(exportName) ?? null);

  // Early prefetch: start downloading the chunk well before the section is shown.
  useEffect(() => {
    if (Comp || !ref.current) return;
    const node = ref.current;
    const prefetchIO = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          prefetchIO.disconnect();
          prefetch(exportName, load);
        }
      },
      { rootMargin: prefetchMargin },
    );
    prefetchIO.observe(node);

    // Mount switch: swap skeleton for the real component when close to/in viewport.
    const mountIO = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          mountIO.disconnect();
          prefetch(exportName, load).then((C) => {
            if (C) setComp(() => C);
          });
        }
      },
      { rootMargin },
    );
    mountIO.observe(node);

    return () => {
      prefetchIO.disconnect();
      mountIO.disconnect();
    };
  }, [Comp, rootMargin, prefetchMargin, exportName, load]);

  const placeholder = fallback ?? <DefaultSkeleton />;

  if (Comp) {
    return <Suspense fallback={placeholder}>{<Comp />}</Suspense>;
  }

  return <div ref={ref}>{placeholder}</div>;
}

export const LazySection = memo(LazySectionBase);

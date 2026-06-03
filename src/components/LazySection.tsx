import { Suspense, useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  load: () => Promise<{ [key: string]: ComponentType<any> }>;
  exportName: string;
  fallback?: ReactNode;
  rootMargin?: string;
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

export function LazySection({ load, exportName, fallback, rootMargin = "300px" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [Comp, setComp] = useState<ComponentType<any> | null>(() => cache.get(exportName) ?? null);

  useEffect(() => {
    if (Comp || !ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [Comp, rootMargin]);

  useEffect(() => {
    if (!visible || Comp) return;
    let cancelled = false;
    load().then((mod) => {
      if (cancelled) return;
      const C = mod[exportName];
      if (C) {
        cache.set(exportName, C);
        setComp(() => C);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [visible, Comp, load, exportName]);

  const placeholder = fallback ?? <DefaultSkeleton />;

  if (Comp) {
    return <Suspense fallback={placeholder}>{<Comp />}</Suspense>;
  }

  return <div ref={ref}>{placeholder}</div>;
}
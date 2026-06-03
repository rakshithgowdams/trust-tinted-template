import { useEffect, memo } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Global ScrollTrigger refresher. Lazy-mounted sections in this app cause
 * trigger start/end positions to go stale. We refresh on window load,
 * font ready, and on debounced body resize.
 */
function ScrollRefresherBase() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const refresh = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    refresh();
    window.addEventListener("load", refresh);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }

    let t: ReturnType<typeof setTimeout> | null = null;
    const ro = new ResizeObserver(() => {
      if (t) clearTimeout(t);
      t = setTimeout(refresh, 120);
    });
    ro.observe(document.body);

    // Scroll progress bar
    const bar = document.createElement("div");
    bar.setAttribute("aria-hidden", "true");
    bar.style.cssText =
      "position:fixed;top:0;left:0;height:2px;width:0;background:var(--brand-green);z-index:100;transition:width 80ms linear;pointer-events:none";
    document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      if (t) clearTimeout(t);
      cancelAnimationFrame(raf);
      bar.remove();
    };
  }, []);

  return null;
}

export const ScrollRefresher = memo(ScrollRefresherBase);

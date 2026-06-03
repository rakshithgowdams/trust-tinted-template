import { useRef, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Logo } from "./Logo";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

function FooterBase() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".js-footer-col", {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: root.current, start: "top 90%", invalidateOnRefresh: true },
        });
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root },
  );

  return (
    <footer ref={root} className="bg-brand-blue-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="js-footer-col">
          <div className="bg-white/95 rounded-xl p-2 inline-flex items-center justify-center mb-4 overflow-hidden">
            <Logo className="h-20" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Delivering healthcare the world can trust — every order, every partner, every day.
          </p>
        </div>

        <div className="js-footer-col">
          <h4 className="font-display font-semibold mb-4 text-brand-green-light">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#network" className="hover:text-white">Network</a></li>
            <li><a href="#leadership" className="hover:text-white">Leadership</a></li>
          </ul>
        </div>

        <div className="js-footer-col">
          <h4 className="font-display font-semibold mb-4 text-brand-green-light">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div className="js-footer-col">
          <h4 className="font-display font-semibold mb-4 text-brand-green-light">Reach Us</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>AVK College Road, Indian Bank Backside Road, Hassan</li>
            <li><a href="mailto:rakesh@rsmedicalagency.com" className="hover:text-white">rakesh@rsmedicalagency.com</a></li>
            <li>+91 63601 07599</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[faFacebookF, faInstagram, faLinkedinIn, faWhatsapp].map((I, i) => (
              <a key={i} href="#" aria-label="Social"
                className="size-9 rounded-full border border-white/20 grid place-items-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <FontAwesomeIcon icon={I} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <span>© 2026 RS Medical Agency. All rights reserved.</span>
          <span>
            Designed &amp; developed by |{" "}
            <a
              href="https://www.mydesignnexus.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green-light hover:text-white transition-colors"
            >
              www.mydesignnexus.in
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterBase);

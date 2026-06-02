import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="bg-white/95 rounded-xl p-3 inline-block mb-4">
            <Logo className="h-10" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Delivering healthcare the world can trust — every order, every partner, every day.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-brand-green-light">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#network" className="hover:text-white">Network</a></li>
            <li><a href="#leadership" className="hover:text-white">Leadership</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-brand-green-light">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-brand-green-light">Reach Us</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>[Add address line]</li>
            <li><a href="mailto:info@rsmedicalagency.com" className="hover:text-white">info@rsmedicalagency.com</a></li>
            <li>[+91 00000 00000]</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, MessageCircle].map((I, i) => (
              <a key={i} href="#" aria-label="Social"
                className="size-9 rounded-full border border-white/20 grid place-items-center hover:bg-brand-green hover:border-brand-green transition-colors">
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-white/60 text-center">
          © 2026 RS Medical Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
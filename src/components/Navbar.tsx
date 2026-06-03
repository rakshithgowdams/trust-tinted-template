import { useEffect, useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#network", label: "Network" },
  { href: "#leadership", label: "Leadership" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

function NavbarBase() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        open
          ? "bg-background"
          : scrolled
            ? "bg-background/95 backdrop-blur shadow-soft"
            : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo className={scrolled ? "h-14" : "h-16"} />

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-ink hover:text-brand-blue" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-brand-green-light"
          >
            Partner With Us
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-brand-blue" : "text-white"}`}
        >
          <FontAwesomeIcon icon={faBars} className="size-7" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] bg-white animate-in fade-in slide-in-from-top-4 duration-500 ease-out">
          <div className="flex items-center justify-between px-6 h-20 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
            <Logo />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 text-brand-blue">
              <FontAwesomeIcon icon={faXmark} className="size-7" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 pt-10 bg-white">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-display font-semibold text-brand-blue opacity-0 animate-fade-in"
                style={{ animationDelay: `${120 + i * 60}ms`, animationFillMode: "forwards" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center rounded-full bg-brand-green px-7 py-3 text-base font-semibold text-white shadow-soft opacity-0 animate-fade-in transition-transform hover:scale-[1.03]"
              style={{ animationDelay: `${120 + links.length * 60}ms`, animationFillMode: "forwards" }}
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export const Navbar = memo(NavbarBase);

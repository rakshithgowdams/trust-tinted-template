import { useRef, useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "../Reveal";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(20),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactBase() {
  const [submitting, setSubmitting] = useState(false);
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".js-contact-field", {
          opacity: 0,
          y: 16,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: ".js-contact-form", start: "top 80%", invalidateOnRefresh: true },
        });
        gsap.from(".js-contact-info > li, .js-contact-info-tail > *", {
          opacity: 0,
          x: -16,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: root.current, start: "top 75%", invalidateOnRefresh: true },
        });

        // Magnetic submit button
        const btn = root.current?.querySelector<HTMLButtonElement>(".js-magnetic");
        if (btn) {
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            const x = e.clientX - (r.left + r.width / 2);
            const y = e.clientY - (r.top + r.height / 2);
            gsap.to(btn, { x: x * 0.2, y: y * 0.3, duration: 0.4, ease: "power3.out" });
          };
          const reset = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" });
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", reset);
        }
        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: root },
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSubmitting(true);
    console.log("[RS Medical Contact]", parsed.data);
    setTimeout(() => {
      toast.success("Thanks — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <section ref={root} id="contact" className="bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="rounded-3xl bg-brand-blue-deep text-white p-8 md:p-14 shadow-soft-lg relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-32 -right-32 size-96 rounded-full bg-brand-green/20 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-brand-green-light uppercase mb-3">
                  Get In Touch
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
                  Have an inquiry or want to partner with us?
                </h2>
                <p className="text-white/70 mb-10 max-w-md">
                  We typically respond within 24 hours.
                </p>

                <ul className="js-contact-info space-y-5 mb-10">
                  <li className="flex gap-4">
                    <FontAwesomeIcon icon={faLocationDot} className="size-5 text-brand-green-light shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">Office</p>
                      <p className="text-white/95">AVK College Road, Indian Bank Backside, Hanuman Building, 3rd Floor, Hassan 573201</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <FontAwesomeIcon icon={faEnvelope} className="size-5 text-brand-green-light shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">Email</p>
                      <a href="mailto:rakesh@rsmedicalagency.com" className="text-white/95 hover:text-brand-green-light">
                        rakesh@rsmedicalagency.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <FontAwesomeIcon icon={faPhone} className="size-5 text-brand-green-light shrink-0 mt-1" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">Phone</p>
                      <p className="text-white/95">+91 63601 07599</p>
                    </div>
                  </li>
                </ul>

                <div className="js-contact-info-tail">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Follow us</p>
                  <div className="flex gap-3">
                    {[faFacebookF, faInstagram, faLinkedinIn].map((I, i) => (
                      <a
                        key={i}
                        href="#"
                        aria-label="Social link"
                        className="size-10 rounded-full border border-white/20 grid place-items-center hover:bg-brand-green hover:border-brand-green transition-colors"
                      >
                        <FontAwesomeIcon icon={I} className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <form
                onSubmit={onSubmit}
                className="js-contact-form rounded-2xl bg-white text-ink p-6 md:p-8 space-y-4 shadow-soft-lg"
              >
                <h3 className="js-contact-field font-display font-bold text-brand-blue text-2xl mb-2">Send an enquiry</h3>
                <div className="js-contact-field">
                  <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider" htmlFor="name">Name</label>
                  <input id="name" name="name" required maxLength={100}
                    className="mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
                </div>
                <div className="js-contact-field grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required maxLength={255}
                      className="mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider" htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required maxLength={20}
                      className="mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" />
                  </div>
                </div>
                <div className="js-contact-field">
                  <label className="text-xs font-semibold text-ink-soft uppercase tracking-wider" htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={5} maxLength={1000}
                    className="mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 resize-none" />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="js-magnetic js-contact-field w-full rounded-full bg-brand-green px-6 py-3.5 font-semibold text-white shadow-soft hover:bg-brand-green-light transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const Contact = memo(ContactBase);

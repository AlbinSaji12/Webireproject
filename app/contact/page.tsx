import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer, { IconFacebook, IconInstagram, IconLinkedin, IconX } from "@/components/Footer";
import PageHero from "@/components/inner/PageHero";
import ContactForm from "@/components/inner/ContactForm";
import CtaBanner from "@/components/inner/CtaBanner";
import RevealWords from "@/components/RevealWords";

export const metadata: Metadata = {
  title: "Contact | Webire",
  description: "Have a project in mind or just want to say hello? We’d love to hear from you.",
};

const CONTACT_DETAILS = [
  { icon: MapPin, label: "Our Location", value: "Adoor, Kerala, India", href: undefined },
  { icon: Mail, label: "Email Us", value: "hello@webire.in", href: "mailto:hello@webire.in" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: IconLinkedin },
  { label: "Instagram", href: "https://instagram.com", Icon: IconInstagram },
  { label: "X (Twitter)", href: "https://x.com", Icon: IconX },
  { label: "Facebook", href: "https://facebook.com", Icon: IconFacebook },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-[#9EFF00] selection:text-black">
      <Header />
      <PageHero
        crumb="Contact"
        title="Get in Touch"
        subtitle="Have a project in mind or just want to say hello? We’d love to hear from you."
        icon={Mail}
        image="/banners/contact.png"
      />

      {/* Form + Contact Details */}
      <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8">
            <span
              data-reveal="up"
              className="inline-flex items-center gap-2 text-[#4d8f00] text-xs font-semibold uppercase tracking-wide mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#9EFF00] shadow-[0_0_10px_rgba(158,255,0,0.8)]" />
              Contact Us
            </span>
            <h2
              data-reveal="words"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-4"
            >
              <RevealWords lines={["Let’s Talk"]} delay={100} />
            </h2>
            <p
              data-reveal="up"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mb-10"
            >
              Fill out the form and we’ll get back to you as soon as possible.
            </p>
            <div data-reveal="up" style={{ "--reveal-delay": "250ms" } as CSSProperties}>
              <ContactForm />
            </div>
          </div>

          {/* Contact Details Card */}
          <aside
            data-reveal="right"
            style={{ "--reveal-delay": "150ms" } as CSSProperties}
            className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-[2rem] p-8 flex flex-col gap-8"
          >
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="group flex items-start gap-4">
                <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-[#9EFF00] text-black shadow-[0_0_20px_rgba(158,255,0,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-black">{label}</h3>
                  {href ? (
                    <a href={href} className="text-gray-600 text-sm hover:text-black transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-base font-bold text-black mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl bg-[#181918] text-white hover:bg-[#9EFF00] hover:text-black flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:-rotate-6"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Map */}
        <div
          data-reveal="up"
          className="max-w-7xl mx-auto mt-16 rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-lg h-[320px] sm:h-[400px]"
        >
          <iframe
            title="Webire location map"
            src="https://www.google.com/maps?q=Adoor,+Kerala,+India&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <CtaBanner
        variant="dark"
        title="Let’s Create Together"
        subtitle="Your next big idea starts here."
        cta="Get Started"
        href="#contact-form"
        image="/works/image.png"
      />
      <Footer />
    </main>
  );
}

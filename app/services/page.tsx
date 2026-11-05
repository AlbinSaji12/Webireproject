import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CodeXml,
  Layers,
  LayoutTemplate,
  MessagesSquare,
  Monitor,
  Palette,
  PenTool,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/inner/PageHero";
import SectionHeading from "@/components/inner/SectionHeading";
import CtaBanner from "@/components/inner/CtaBanner";
import Faq from "@/components/inner/Faq";

export const metadata: Metadata = {
  title: "Our Services | Webire",
  description: "Modern solutions to help you build, grow and stand out online.",
};

const SERVICES = [
  { icon: Monitor, title: "Web Design", description: "Stunning, user-focused designs that convert." },
  { icon: LayoutTemplate, title: "WordPress Development", description: "Powerful and flexible WordPress solutions." },
  { icon: PenTool, title: "UI/UX Design", description: "Intuitive and engaging user experiences." },
  { icon: Palette, title: "Branding", description: "Build a strong and memorable brand." },
  { icon: CodeXml, title: "Development", description: "Custom solutions for your unique needs." },
  { icon: MessagesSquare, title: "Consulting", description: "Strategic guidance to grow your business." },
];

const FAQS = [
  {
    question: "What services does Webire offer?",
    answer:
      "We design and build websites, WordPress sites, web apps and brand identities, and offer strategic consulting to help your business grow online.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites launch in 2–6 weeks depending on scope. After a quick discovery call we share a clear timeline before any work begins.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We stay in the loop after launch with maintenance, updates and improvements so your site keeps performing.",
  },
  {
    question: "Can I request a custom solution?",
    answer:
      "Absolutely. Every project is tailored to your goals, from custom features and integrations to fully bespoke designs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-[#9EFF00] selection:text-black">
      <Header />
      <PageHero
        crumb="Services"
        title="Our Services"
        subtitle="Modern solutions to help you build, grow and stand out online."
        icon={Layers}
        image="/banners/services.png"
      />

      {/* Services Grid */}
      <section className="w-full bg-white pt-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading tag="What We Offer" title="Comprehensive Digital Services" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
            {SERVICES.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                data-reveal="up"
                style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
              >
                <article
                  data-tilt
                  className="group h-full bg-[#f7fdf0] border border-[#e2f9c3] rounded-[2rem] p-7 sm:p-8 transition-all duration-300 hover:bg-[#e5fcc8] hover:border-[#b6e87d] hover:shadow-xl cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#9EFF00] text-black shadow-[0_0_20px_rgba(158,255,0,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-6 h-6" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-black group-hover:rotate-45" />
                  </div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-black tracking-tight mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-[14.5px] leading-relaxed">{description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        variant="dark"
        title="Let’s Build Something Great"
        subtitle="Turn your ideas into reality with Webire."
        cta="Get Started"
        href="/contact"
        image="/process/Develop.png"
      />

      {/* FAQ */}
      <section className="w-full bg-white pb-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionHeading tag="FAQ" title="Frequently Asked Questions" align="left" />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black shrink-0 transition-colors"
            >
              Ask Us Anything
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

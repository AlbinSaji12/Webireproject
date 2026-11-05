import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Building2, Lightbulb, ShieldCheck, TrendingUp, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/inner/PageHero";
import SectionHeading from "@/components/inner/SectionHeading";
import CtaBanner from "@/components/inner/CtaBanner";
import CountUp from "@/components/inner/CountUp";
import RevealWords from "@/components/RevealWords";

export const metadata: Metadata = {
  title: "About Webire",
  description: "A creative studio focused on building meaningful digital experiences.",
};

const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years of Experience" },
];

const VALUES = [
  { icon: Lightbulb, title: "Innovation", subtitle: "Always" },
  { icon: Users, title: "Collaboration", subtitle: "Together" },
  { icon: ShieldCheck, title: "Quality", subtitle: "First" },
  { icon: TrendingUp, title: "Growth", subtitle: "Forward" },
];

const TEAM_IMAGES = [
  "/process/Discover.png",
  "/process/Design.png",
  "/process/Develop.png",
  "/process/LaunchSupport.png",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col selection:bg-[#9EFF00] selection:text-black">
      <Header />
      <PageHero
        crumb="About"
        title="About Webire"
        subtitle="A creative studio focused on building meaningful digital experiences."
        icon={Building2}
        image="/banners/about.png"
      />

      {/* Our Story */}
      <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            data-reveal="left"
            className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-2xl"
          >
            <Image src="/process/Discover.png" alt="The Webire studio" fill className="object-cover" />
          </div>

          <div className="flex flex-col items-start">
            <span
              data-reveal="up"
              className="inline-flex items-center gap-2 text-[#4d8f00] text-xs font-semibold uppercase tracking-wide mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#9EFF00] shadow-[0_0_10px_rgba(158,255,0,0.8)]" />
              Our Story
            </span>
            <h2
              data-reveal="words"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6"
            >
              <RevealWords lines={["Turning Ideas", "Into Impact"]} delay={100} />
            </h2>
            <p
              data-reveal="up"
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
              className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              We’re a passionate team of designers and developers, dedicated to creating modern,
              accessible and high-performing web experiences.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal="up"
              style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
              className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 text-center hover:border-[#b6e87d] hover:bg-[#f7fdf0] transition-colors duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading tag="Our Values" title="Our Values" subtitle="Driven by creativity, built on trust." />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-14">
            {VALUES.map(({ icon: Icon, title, subtitle }, index) => (
              <div
                key={title}
                data-reveal="up"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div
                  data-tilt
                  className="group h-full bg-[#f7fdf0] border border-[#e2f9c3] rounded-[2rem] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#e5fcc8] hover:border-[#b6e87d] hover:shadow-xl"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#9EFF00] text-black mb-5 shadow-[0_0_20px_rgba(158,255,0,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-7 h-7" />
                  </span>
                  <h3 className="text-xl font-bold text-black tracking-tight">{title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full bg-white pt-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <SectionHeading
            tag="Our Team"
            title="A Team That Cares"
            subtitle="A small team with big ideas, working together to bring your vision to life."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-14">
            {TEAM_IMAGES.map((src, index) => (
              <div
                key={src}
                data-reveal="scale"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-lg"
              >
                <Image
                  src={src}
                  alt="Webire team at work"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        variant="lime"
        title="Let’s Work Together"
        subtitle="Bring your ideas, and we’ll make it happen."
        cta="Get in Touch"
        href="/contact"
        image="/works/image-2.png"
      />
      <Footer />
    </main>
  );
}

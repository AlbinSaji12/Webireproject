import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

const BADGES = [
  {
    label: "Smart Design",
    position: "-top-4 left-2 sm:left-6 md:-left-4 lg:-left-12",
    tilt: "-rotate-12 hover:-rotate-6",
    depth: 40,
    delay: 700,
  },
  {
    label: "Fast Design",
    position: "-top-4 right-2 sm:right-6 md:-right-4 lg:-right-12",
    tilt: "rotate-12 hover:rotate-6",
    depth: -32,
    delay: 820,
  },
  {
    label: "Bold Branding",
    position: "bottom-16 left-0 sm:left-4 md:-left-8 lg:-left-16",
    tilt: "-rotate-12 hover:-rotate-6",
    depth: -48,
    delay: 940,
  },
  {
    label: "Build Web",
    position: "bottom-16 right-0 sm:right-4 md:-right-8 lg:-right-16",
    tilt: "rotate-12 hover:rotate-6",
    depth: 36,
    delay: 1060,
  },
];

const HEADLINE_DELAYS = [150, 280, 410];

export default function Hero() {
  return (
    <section
      data-spotlight
      data-parallax-root
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#181918]"
    >
      {/* Background Graphic from b1.svg */}
      <div
        style={{ "--depth": -20 } as CSSProperties}
        className="parallax hero-bg absolute -inset-6 z-0 pointer-events-none select-none"
      >
        <Image
          src="/home-hero/b1.svg"
          alt="Hero Background Pattern"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Cursor-following glow */}
      <div className="spotlight z-[1]" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center my-auto">

        {/* Main Headline Wrapper with Floating Badges */}
        <div className="relative w-full flex flex-col items-center py-6 md:py-10">

          {/* Floating Badges: parallax wrapper > entrance > hover tilt > idle float */}
          {BADGES.map((badge, index) => (
            <div
              key={badge.label}
              style={{ "--depth": badge.depth } as CSSProperties}
              className={`parallax absolute ${badge.position} z-20`}
            >
              <div
                className="hero-pop"
                style={{ "--d": `${badge.delay}ms` } as CSSProperties}
              >
                <div
                  className={`${badge.tilt} transition-transform duration-300 hover:scale-110 cursor-pointer`}
                >
                  <span
                    className="float inline-block bg-[#2f4e15]/85 border border-[#528424]/60 text-[#9EFF00] text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full backdrop-blur-md shadow-lg"
                    style={{ "--float-delay": `${index * -1.3}s` } as CSSProperties}
                  >
                    {badge.label}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Headline Text: each line slides up from behind a mask */}
          <h1
            style={{ "--depth": 10 } as CSSProperties}
            className="parallax text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl"
          >
            <span className="hero-line">
              <span style={{ "--d": `${HEADLINE_DELAYS[0]}ms` } as CSSProperties}>
                Your{" "}
                <span className="font-serif italic font-normal text-white">
                  Brand
                </span>
                , Elevated
              </span>
            </span>
            <span className="hero-line">
              <span style={{ "--d": `${HEADLINE_DELAYS[1]}ms` } as CSSProperties}>
                — Let’s Build What
              </span>
            </span>
            <span className="hero-line">
              <span style={{ "--d": `${HEADLINE_DELAYS[2]}ms` } as CSSProperties}>
                Matters.
              </span>
            </span>
          </h1>

        </div>

        {/* Hero Primary CTA: Let's Talk */}
        <div
          className="hero-fade-up mt-6 md:mt-10 z-20"
          style={{ "--d": "650ms" } as CSSProperties}
        >
          <Link
            href="#contact"
            data-magnetic
            className="cta-pulse group relative inline-flex items-center gap-3 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-bold text-base md:text-lg pl-6 pr-2.5 py-3 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(158,255,0,0.4)] hover:shadow-[0_0_45px_rgba(158,255,0,0.65)] hover:scale-105"
          >
            <span>Let’s Talk</span>
            <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";
import RevealWords from "@/components/RevealWords";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#9EFF00] text-black py-24 sm:py-32 md:py-40 px-6 sm:px-10 overflow-hidden flex flex-col items-center justify-center selection:bg-black selection:text-[#9EFF00]"
    >
      {/* Decorative Rotated Mockup Cards - Left Edge */}
      <div className="absolute -left-20 sm:-left-32 md:-left-40 top-1/2 -translate-y-1/2 flex flex-col gap-12 pointer-events-none select-none z-0 opacity-90">
        {/* Top-Left Card */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] drift rounded-[2.5rem] bg-[#121312] border-4 border-[#9EFF00] shadow-2xl overflow-hidden -rotate-[38deg] relative"
          style={{ "--drift-delay": "0s" } as CSSProperties}>
          <Image
            src="/works/image-1.png"
            alt="Work preview"
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom-Left Card */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] drift rounded-[2.5rem] bg-[#121312] border-4 border-[#9EFF00] shadow-2xl overflow-hidden -rotate-[38deg] relative"
          style={{ "--drift-delay": "-2.2s" } as CSSProperties}>
          <Image
            src="/works/image.png"
            alt="Work preview"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Decorative Rotated Mockup Cards - Right Edge */}
      <div className="absolute -right-20 sm:-right-32 md:-right-40 top-1/2 -translate-y-1/2 flex flex-col gap-12 pointer-events-none select-none z-0 opacity-90">
        {/* Top-Right Card */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] drift rounded-[2.5rem] bg-[#121312] border-4 border-[#9EFF00] shadow-2xl overflow-hidden -rotate-[38deg] relative"
          style={{ "--drift-delay": "-4.4s" } as CSSProperties}>
          <Image
            src="/works/image-2.png"
            alt="Work preview"
            fill
            className="object-cover"
          />
        </div>
        {/* Bottom-Right Card */}
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] drift rounded-[2.5rem] bg-[#121312] border-4 border-[#9EFF00] shadow-2xl overflow-hidden -rotate-[38deg] relative"
          style={{ "--drift-delay": "-6.6000000000000005s" } as CSSProperties}>
          <Image
            src="/works/image-1.png"
            alt="Work preview"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Center Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Top Tag Pill */}
        <div data-reveal="up" className="mb-6 inline-flex items-center">
          <span className="bg-black/10 text-black text-xs sm:text-sm font-semibold px-5 py-1.5 rounded-full tracking-wide">
            About Webire
          </span>
        </div>

        {/* Main Headline */}
        <h2
          data-reveal="words"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-extrabold text-black tracking-tight leading-[1.1] mb-8 max-w-3xl">
          <RevealWords
            lines={["We’re Designers,", "Developers & Builders", "for Bold Ideas"]}
            delay={100}
          />
        </h2>

        {/* Description Paragraph */}
        <p
          data-reveal="up"
          style={{ "--reveal-delay": "220ms" } as CSSProperties}
          className="text-black/80 font-medium text-base sm:text-lg md:text-[19px] leading-relaxed max-w-2xl">
          Webire was founded to help emerging businesses get online, fast — and
          stand out. We combine strong design, smart development, and lean
          strategy to deliver launch-ready digital products with zero fluff.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#181918]">
      {/* Background Graphic from b1.svg */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/home-hero/b1.svg"
          alt="Hero Background Pattern"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center my-auto">
        
        {/* Main Headline Wrapper with Floating Badges */}
        <div className="relative w-full flex flex-col items-center py-6 md:py-10">

          {/* Floating Badge 1: Top Left - Smart Design */}
          <div className="absolute -top-4 left-2 sm:left-6 md:-left-4 lg:-left-12 -rotate-12 z-20 transition-transform duration-300 hover:scale-110 hover:-rotate-6 cursor-pointer">
            <span className="inline-block bg-[#2f4e15]/85 border border-[#528424]/60 text-[#9EFF00] text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full backdrop-blur-md shadow-lg">
              Smart Design
            </span>
          </div>

          {/* Floating Badge 2: Top Right - Fast Design */}
          <div className="absolute -top-4 right-2 sm:right-6 md:-right-4 lg:-right-12 rotate-12 z-20 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
            <span className="inline-block bg-[#2f4e15]/85 border border-[#528424]/60 text-[#9EFF00] text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full backdrop-blur-md shadow-lg">
              Fast Design
            </span>
          </div>

          {/* Headline Text */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-white tracking-tight leading-[1.15] max-w-4xl">
            Your{" "}
            <span className="font-serif italic font-normal text-white">
              Brand
            </span>
            , Elevated
            <br />
            — Let’s Build What
            <br />
            Matters.
          </h1>

          {/* Floating Badge 3: Bottom Left - Bold Branding */}
          <div className="absolute bottom-16 left-0 sm:left-4 md:-left-8 lg:-left-16 -rotate-12 z-20 transition-transform duration-300 hover:scale-110 hover:-rotate-6 cursor-pointer">
            <span className="inline-block bg-[#2f4e15]/85 border border-[#528424]/60 text-[#9EFF00] text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full backdrop-blur-md shadow-lg">
              Bold Branding
            </span>
          </div>

          {/* Floating Badge 4: Bottom Right - Build Web */}
          <div className="absolute bottom-16 right-0 sm:right-4 md:-right-8 lg:-right-16 rotate-12 z-20 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
            <span className="inline-block bg-[#2f4e15]/85 border border-[#528424]/60 text-[#9EFF00] text-xs sm:text-sm md:text-base font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full backdrop-blur-md shadow-lg">
              Build Web
            </span>
          </div>

        </div>

        {/* Hero Primary CTA: Let's Talk */}
        <div className="mt-6 md:mt-10 z-20">
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-bold text-base md:text-lg pl-6 pr-2.5 py-3 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(158,255,0,0.4)] hover:shadow-[0_0_45px_rgba(158,255,0,0.65)] hover:scale-105"
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

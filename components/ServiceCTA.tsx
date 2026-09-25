import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden flex items-center justify-center">
      {/* Background Wavy Lines SVG */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7ad700" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8ee600" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#5fb800" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* 11 Parallel Wavy Lines */}
          {[15, 33, 51, 69, 87, 105, 123, 141, 159, 177, 195, 213, 231].map(
            (y, index) => (
              <path
                key={index}
                d={`M -100 ${y} C 120 ${y - 32}, 280 ${y + 32}, 480 ${y} C 680 ${y - 32}, 840 ${y + 32}, 1040 ${y} C 1240 ${y - 32}, 1400 ${y + 32}, 1600 ${y}`}
                stroke="url(#lineGrad)"
                strokeWidth="1.6"
                fill="none"
              />
            )
          )}
        </svg>
      </div>

      {/* Center CTA Text Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-center">
        {/* Left Text */}
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-black tracking-tight leading-none">
          Want to
        </span>

        {/* Discuss Button */}
        <Link
          href="#contact"
          className="group inline-flex items-center gap-2.5 sm:gap-3 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] pl-5 pr-2 py-1.5 sm:pl-7 sm:pr-2.5 sm:py-2 md:pl-8 md:pr-3 md:py-2.5 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(158,255,0,0.55)] hover:shadow-[0_0_45px_rgba(158,255,0,0.8)] hover:scale-105 my-1"
        >
          <span>Discuss</span>
          <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </span>
        </Link>

        {/* Right Text */}
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-black tracking-tight leading-none">
          your needs?
        </span>
      </div>
    </section>
  );
}

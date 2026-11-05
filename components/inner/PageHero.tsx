import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import RevealWords from "@/components/RevealWords";

export default function PageHero({
  crumb,
  title,
  subtitle,
  icon: Icon,
  image,
}: {
  crumb: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** Banner artwork in /public; falls back to the icon tile until the file exists. */
  image?: string;
}) {
  const hasImage = !!image && fs.existsSync(path.join(process.cwd(), "public", image));

  return (
    <section
      data-spotlight
      className="relative w-full overflow-hidden bg-[#181918] text-white pt-36 pb-20 sm:pb-24 px-6 sm:px-10 lg:px-16"
    >
      {/* Green glow accents */}
      <div className="breathe absolute -right-32 -top-24 w-[560px] h-[560px] rounded-full bg-[#9EFF00]/20 blur-[120px] pointer-events-none" />
      <div className="absolute -left-40 bottom-0 w-[380px] h-[380px] rounded-full bg-[#9EFF00]/10 blur-[110px] pointer-events-none" />

      {/* Cursor-following glow */}
      <div className="spotlight z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-10">
        <div className="max-w-xl">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            data-reveal="up"
            className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-5"
          >
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{crumb}</span>
          </nav>

          {/* Title */}
          <h1
            data-reveal="words"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5"
          >
            <RevealWords lines={[title]} delay={100} />
          </h1>

          {/* Subtitle */}
          <p
            data-reveal="up"
            style={{ "--reveal-delay": "250ms" } as CSSProperties}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-md"
          >
            {subtitle}
          </p>
        </div>

        {hasImage ? (
          /* Banner artwork */
          <div aria-hidden className="hero-pop hidden md:block relative w-72 h-60 lg:w-[420px] lg:h-72 shrink-0">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="420px"
              className="float object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        ) : (
          /* Floating glass icon tile */
          <div aria-hidden className="hero-pop hidden md:block relative w-60 h-60 lg:w-72 lg:h-72 shrink-0 mr-4 lg:mr-10">
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-[#9EFF00] to-[#3d6b00] rotate-12 opacity-80 blur-[1px]" />
            <div
              className="float absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#2a2c2a]/90 to-[#0f100f]/90 border border-white/10 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] -rotate-6 flex items-center justify-center"
            >
              <Icon className="w-24 h-24 lg:w-28 lg:h-28 text-[#9EFF00] drop-shadow-[0_0_25px_rgba(158,255,0,0.45)]" strokeWidth={1.25} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

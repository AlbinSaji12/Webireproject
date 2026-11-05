import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner({
  title,
  subtitle,
  cta,
  href,
  image,
  variant = "lime",
}: {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  variant?: "lime" | "dark";
}) {
  const lime = variant === "lime";

  return (
    <section className="w-full bg-white px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
      <div
        data-reveal="up"
        className={`relative max-w-7xl mx-auto overflow-hidden rounded-[2.5rem] min-h-[260px] flex items-center ${
          lime ? "bg-[#9EFF00] text-black" : "bg-[#121312] text-white"
        }`}
      >
        {/* Right Side: Image fading into the banner colour */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden sm:block">
          <Image src={image} alt="" fill className="object-cover" />
          <div
            className={`absolute inset-0 bg-gradient-to-r to-transparent ${
              lime ? "from-[#9EFF00] via-[#9EFF00]/50" : "from-[#121312] via-[#121312]/50"
            }`}
          />
        </div>

        {/* Glow accent on dark banners */}
        {!lime && (
          <div className="breathe absolute -left-20 -bottom-24 w-[420px] h-[420px] rounded-full bg-[#9EFF00]/25 blur-[110px] pointer-events-none" />
        )}

        <div className="relative z-10 p-8 sm:p-12 lg:p-14 max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3">
            {title}
          </h2>
          <p className={`text-base sm:text-lg mb-8 ${lime ? "text-black/75" : "text-zinc-400"}`}>
            {subtitle}
          </p>
          <Link
            href={href}
            data-magnetic
            className="group inline-flex items-center gap-2.5 bg-white text-black font-semibold text-sm lg:text-base pl-5 pr-2 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>{cta}</span>
            <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

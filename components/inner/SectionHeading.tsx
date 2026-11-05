import type { CSSProperties } from "react";
import RevealWords from "@/components/RevealWords";

/** Small green tag, word-reveal heading and optional subtitle used on inner pages. */
export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
}: {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}>
      <span
        data-reveal="up"
        className="inline-flex items-center gap-2 text-[#4d8f00] text-xs font-semibold uppercase tracking-wide mb-4"
      >
        <span className="w-2 h-2 rounded-full bg-[#9EFF00] shadow-[0_0_10px_rgba(158,255,0,0.8)]" />
        {tag}
      </span>
      <h2
        data-reveal="words"
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] max-w-3xl"
      >
        <RevealWords lines={[title]} delay={100} />
      </h2>
      {subtitle && (
        <p
          data-reveal="up"
          style={{ "--reveal-delay": "200ms" } as CSSProperties}
          className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4 max-w-xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

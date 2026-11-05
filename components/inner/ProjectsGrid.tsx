"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Category = "web" | "wordpress" | "branding" | "development";

const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Design" },
  { key: "wordpress", label: "WordPress" },
  { key: "branding", label: "Branding" },
  { key: "development", label: "Development" },
];

const PROJECTS: {
  title: string;
  type: string;
  image: string;
  categories: Category[];
}[] = [
  { title: "Equine Miracles", type: "WordPress · Elementor", image: "/works/image.png", categories: ["wordpress", "web"] },
  { title: "Corporate Website", type: "WordPress · Custom CSS", image: "/works/image-1.png", categories: ["wordpress", "development"] },
  { title: "TurnAround Inc", type: "Nonprofit Website", image: "/works/image-2.png", categories: ["web", "branding"] },
  { title: "Catherine’s Cause", type: "Charity Website", image: "/works/image.png", categories: ["web", "wordpress"] },
  { title: "Community Wealth", type: "Community Platform", image: "/works/image-1.png", categories: ["development"] },
  { title: "Contruent", type: "Business Website", image: "/works/image-2.png", categories: ["branding", "web"] },
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const visible =
    filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.categories.includes(filter));

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div data-reveal="up" className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {FILTERS.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => setFilter(item.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === item.key
                ? "bg-[#9EFF00] text-black shadow-[0_0_20px_rgba(158,255,0,0.45)] scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {visible.map((project, index) => (
          <div
            key={project.title}
            data-reveal="up"
            style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as CSSProperties}
          >
            <article className="group h-full bg-white border border-gray-200 rounded-[2rem] p-4 sm:p-5 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#b6e87d] transition-all duration-500 ease-out cursor-pointer">
              <div className="relative w-full aspect-[16/10] rounded-[1.4rem] overflow-hidden bg-gray-100 mb-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-1">
                <div>
                  <h3 className="text-xl sm:text-[22px] font-bold text-black tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{project.type}</p>
                </div>
                <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-gray-100 text-black transition-all duration-300 group-hover:bg-[#9EFF00] group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// --- Tool Icons ---

function ToolIconAi() {
  return (
    <div
      title="Adobe Illustrator"
      className="w-5 h-5 rounded bg-[#330000] border border-[#ff7700]/30 flex items-center justify-center text-[#ff9900] font-bold text-[9px] leading-none"
    >
      Ai
    </div>
  );
}

function ToolIconPs() {
  return (
    <div
      title="Adobe Photoshop"
      className="w-5 h-5 rounded bg-[#001e36] border border-[#00c8ff]/30 flex items-center justify-center text-[#31a8ff] font-bold text-[9px] leading-none"
    >
      Ps
    </div>
  );
}

function ToolIconFigma() {
  return (
    <div title="Figma" className="w-5 h-5 flex items-center justify-center">
      <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none">
        <path
          d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
    </div>
  );
}

function ToolIconFlutter() {
  return (
    <div
      title="Flutter"
      className="w-5 h-5 rounded bg-[#02569b] flex items-center justify-center text-[#47c5fb]"
    >
      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 18.014 3.686h-3.7zM14.314 11.857L8.6 17.571l5.714 5.715h3.7L12.3 17.571l5.714-5.714h-3.7z" />
      </svg>
    </div>
  );
}

function ToolIconReact() {
  return (
    <div
      title="React"
      className="w-5 h-5 rounded bg-[#20232a] flex items-center justify-center text-[#61dafb]"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2" />
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    </div>
  );
}

// --- Projects Data ---

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Project 1",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    image: "/works/image.png",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    image: "/works/image-1.png",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    image: "/works/image-2.png",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    image: "/works/image.png",
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    image: "/works/image-1.png",
  },
  {
    id: 6,
    title: "Project 6",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    image: "/works/image-2.png",
  },
];

export default function Works() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="projects"
      className="w-full bg-[#181918] text-white py-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Tag & Title */}
        <div data-reveal="up" className="flex flex-col items-center mb-8 sm:mb-12">
          <span className="bg-[#2a2c2a] text-zinc-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-zinc-700/40 mb-4 tracking-wide">
            Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center">
            Work Showcase
          </h2>
        </div>

        {/* Carousel Navigation Buttons Top-Right */}
        <div data-reveal="right" className="flex justify-end items-center gap-3 mb-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Slide"
            className="w-13 h-8 sm:w-14 sm:h-9 rounded-full bg-[#9EFF00] hover:bg-[#8ee600] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(158,255,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Slide"
            className="w-13 h-8 sm:w-14 sm:h-9 rounded-full bg-[#9EFF00] hover:bg-[#8ee600] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(158,255,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Continuous Swiper Carousel */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          data-reveal="up"
          style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          className="w-full pb-6"
        >
          {PROJECTS_DATA.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="bg-[#121312] border border-zinc-800/80 rounded-[2rem] p-5 sm:p-6 flex flex-col justify-between h-full group hover:border-[#9EFF00]/50 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(158,255,0,0.12)] transition-all duration-500 ease-out shadow-xl">
                {/* Project Image Box */}
                <div>
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-5 bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-zinc-400 text-sm sm:text-[14.5px] leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Tools Footer */}
                <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/60">
                  <span className="text-xs font-semibold text-zinc-400 mr-1">
                    Tools :
                  </span>
                  <div className="flex items-center gap-1.5">
                    <ToolIconAi />
                    <ToolIconFigma />
                    <ToolIconPs />
                    <ToolIconFlutter />
                    <ToolIconReact />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

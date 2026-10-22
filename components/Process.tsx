"use client";

import React from "react";
import Image from "next/image";

const PROCESS_STEPS = [
  {
    step: "Step 1",
    title: "Step 1: Discover",
    description:
      "We start with a quick call to understand your idea, brand, and needs.",
    image: "/process/Discover.png",
  },
  {
    step: "Step 2",
    title: "Step 2: Design",
    description:
      "We build wireframes, visuals, and prototypes to test quickly and iterate fast.",
    image: "/process/Design.png",
  },
  {
    step: "Step 3",
    title: "Step 3: Develop",
    description:
      "Websites and apps coded for performance, mobile responsiveness, and growth.",
    image: "/process/Develop.png",
  },
  {
    step: "Step 4",
    title: "Step 4: Launch + Support",
    description:
      "We stay in the loop post-launch to help optimize and improve.",
    image: "/process/LaunchSupport.png",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-[#181918] text-white py-20 px-4 sm:px-8 lg:px-16 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Tag & Section Header */}
        <div data-reveal="up" className="flex flex-col items-center mb-12 sm:mb-16">
          <span className="bg-[#2a2c2a] text-zinc-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-zinc-700/40 mb-4 tracking-wide">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight text-center">
            Our Workflow: Built for Startups
          </h2>
        </div>

        {/* Stacked Cards Container */}
        <div className="w-full flex flex-col gap-8 relative pb-12">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              data-reveal="scale"
              style={{
                top: `calc(7rem + ${index * 1.5}rem)`,
              }}
              className="sticky z-10 w-full bg-[#121312] border border-zinc-800/80 rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[280px] md:min-h-[320px] shadow-2xl transition-all duration-300 group hover:border-zinc-700"
            >
              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-14 z-20 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Right Side: Image with Gradient Blend */}
              <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-full relative overflow-hidden flex items-center justify-end">
                {/* Subtle Gradient Blend Mask on Left Edge */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-[#121312] via-[#121312]/80 to-transparent z-10 pointer-events-none" />

                {/* Process Image */}
                <div className="relative w-full h-full min-h-[240px] md:min-h-[320px] rounded-r-[2.2rem] sm:rounded-r-[2.8rem] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

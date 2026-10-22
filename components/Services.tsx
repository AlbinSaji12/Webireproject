"use client";

import React, { useState } from "react";

// --- Tool Icon Components ---

function ToolIconAi() {
  return (
    <div
      title="Adobe Illustrator"
      className="w-6 h-6 rounded bg-[#330000] border border-[#ff7700]/30 flex items-center justify-center text-[#ff9900] font-bold text-[10px] leading-none shadow-xs transition-transform hover:scale-110"
    >
      Ai
    </div>
  );
}

function ToolIconPs() {
  return (
    <div
      title="Adobe Photoshop"
      className="w-6 h-6 rounded bg-[#001e36] border border-[#00c8ff]/30 flex items-center justify-center text-[#31a8ff] font-bold text-[10px] leading-none shadow-xs transition-transform hover:scale-110"
    >
      Ps
    </div>
  );
}

function ToolIconXd() {
  return (
    <div
      title="Adobe XD"
      className="w-6 h-6 rounded bg-[#2e001f] border border-[#ff269e]/30 flex items-center justify-center text-[#ff61d2] font-bold text-[10px] leading-none shadow-xs transition-transform hover:scale-110"
    >
      Xd
    </div>
  );
}

function ToolIconFigma() {
  return (
    <div
      title="Figma"
      className="w-6 h-6 flex items-center justify-center transition-transform hover:scale-110"
    >
      <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
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

function ToolIconFramer() {
  return (
    <div
      title="Framer"
      className="w-6 h-6 rounded bg-black flex items-center justify-center text-white transition-transform hover:scale-110"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    </div>
  );
}

function ToolIconVSCode() {
  return (
    <div
      title="VS Code / Code Editor"
      className="w-6 h-6 rounded bg-[#007acc] flex items-center justify-center text-white transition-transform hover:scale-110"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.12a.999.999 0 0 0-1.276.07L.346 7.24a1 1 0 0 0 .07 1.464l4.24 3.73-4.24 3.73a1 1 0 0 0-.07 1.464l1.303 1.153a.999.999 0 0 0 1.276.07l4.12-3.12 9.46 8.63a1.494 1.494 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.92V3.08a1.5 1.5 0 0 0-.85-1.493z" />
      </svg>
    </div>
  );
}

function ToolIconWordPress() {
  return (
    <div
      title="WordPress"
      className="w-6 h-6 rounded-full bg-[#21759b] flex items-center justify-center text-white font-bold text-xs transition-transform hover:scale-110"
    >
      W
    </div>
  );
}

function ToolIconWebflow() {
  return (
    <div
      title="Webflow"
      className="w-6 h-6 rounded bg-[#146ef5] flex items-center justify-center text-white font-bold text-xs transition-transform hover:scale-110"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.7 5.3 12 18.7 7.3 5.3H2l6.8 17.4h6.4L22 5.3h-5.3z" />
      </svg>
    </div>
  );
}

function ToolIconReact() {
  return (
    <div
      title="React"
      className="w-6 h-6 rounded bg-[#20232a] flex items-center justify-center text-[#61dafb] transition-transform hover:scale-110"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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

function ToolIconNextjs() {
  return (
    <div
      title="Next.js"
      className="w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-bold text-[11px] transition-transform hover:scale-110"
    >
      N
    </div>
  );
}

function ToolIconFlutter() {
  return (
    <div
      title="Flutter"
      className="w-6 h-6 rounded bg-[#02569b] flex items-center justify-center text-[#47c5fb] transition-transform hover:scale-110"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 18.014 3.686h-3.7zM14.314 11.857L8.6 17.571l5.714 5.715h3.7L12.3 17.571l5.714-5.714h-3.7z" />
      </svg>
    </div>
  );
}

function ToolIconXcode() {
  return (
    <div
      title="Swift / Xcode"
      className="w-6 h-6 rounded bg-[#1575f9] flex items-center justify-center text-white transition-transform hover:scale-110"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.7 19.5c-2.2 2-5.4 2.8-8.1 1.7 3-1.6 5.4-4 6.7-7-3.2 2.6-7.3 3.6-11 2.2C11 14.5 16 10.4 18 5c-3.5 3-7.8 4.1-12 3 6.6-4.5 14.3-1.6 12.7 11.5z" />
      </svg>
    </div>
  );
}

function ToolIconNotion() {
  return (
    <div
      title="Notion"
      className="w-6 h-6 rounded bg-black flex items-center justify-center text-white font-serif font-bold text-xs transition-transform hover:scale-110"
    >
      N
    </div>
  );
}

function ToolIconCanva() {
  return (
    <div
      title="Canva"
      className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8] flex items-center justify-center text-white font-semibold text-xs italic transition-transform hover:scale-110"
    >
      C
    </div>
  );
}

function ToolIconGoogle() {
  return (
    <div
      title="Google Tools"
      className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-2xs transition-transform hover:scale-110"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.27v3.13C3.25 21.3 7.31 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.63H1.27C.46 8.24 0 10.06 0 12s.46 3.76 1.27 5.37l4.01-3.13z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.63l4.01 3.13c.95-2.85 3.6-4.96 6.72-4.96z"
        />
      </svg>
    </div>
  );
}

function ToolIconAhrefs() {
  return (
    <div
      title="Ahrefs / Analytics"
      className="w-6 h-6 rounded bg-[#ff6b00] flex items-center justify-center text-white font-bold text-[10px] transition-transform hover:scale-110"
    >
      a
    </div>
  );
}

function ToolIconSurfer() {
  return (
    <div
      title="SEO Tools"
      className="w-6 h-6 rounded-full bg-[#1b1c30] flex items-center justify-center text-[#ff3366] transition-transform hover:scale-110"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="7" />
      </svg>
    </div>
  );
}

function ToolIconMailchimp() {
  return (
    <div
      title="Mailchimp"
      className="w-6 h-6 rounded-full bg-[#ffe01b] flex items-center justify-center text-black font-bold text-xs transition-transform hover:scale-110"
    >
      🐵
    </div>
  );
}

function ToolIconBrevo() {
  return (
    <div
      title="Brevo / Email"
      className="w-6 h-6 rounded bg-[#009253] flex items-center justify-center text-white font-bold text-[11px] transition-transform hover:scale-110"
    >
      B
    </div>
  );
}

function ToolIconMeta() {
  return (
    <div
      title="Meta Ads"
      className="w-6 h-6 rounded bg-[#0081fb] flex items-center justify-center text-white transition-transform hover:scale-110"
    >
      <span className="font-bold text-xs leading-none">∞</span>
    </div>
  );
}

// --- Services Data Structure ---

export interface ServiceItem {
  id: string;
  category: "design" | "development" | "marketing";
  title: string;
  description: string;
  icon: React.ReactNode;
  tools: React.ReactNode[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "branding",
    category: "design",
    title: "Branding & Identity",
    description:
      "Logo design, typography, brand color systems, and brand guidelines.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a3 3 0 1 0-6 0" />
      </svg>
    ),
    tools: [<ToolIconAi key="ai" />, <ToolIconFigma key="fg" />, <ToolIconPs key="ps" />],
  },
  {
    id: "uiux",
    category: "design",
    title: "UI/UX Design",
    description:
      "Wireframes, visual UI, user flows, and prototypes for web & mobile.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
      </svg>
    ),
    tools: [
      <ToolIconAi key="ai" />,
      <ToolIconFigma key="fg" />,
      <ToolIconFramer key="fr" />,
      <ToolIconPs key="ps" />,
      <ToolIconXd key="xd" />,
    ],
  },
  {
    id: "webdev",
    category: "development",
    title: "Website Development",
    description: "Custom, fast, responsive websites with or without CMS.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    tools: [
      <ToolIconFramer key="fr" />,
      <ToolIconVSCode key="vc" />,
      <ToolIconWordPress key="wp" />,
      <ToolIconWebflow key="wf" />,
      <ToolIconReact key="rc" />,
      <ToolIconNextjs key="nx" />,
    ],
  },
  {
    id: "appdev",
    category: "development",
    title: "App Design & Development",
    description: "UI/UX and front-end for mobile apps (iOS/Android).",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
      </svg>
    ),
    tools: [
      <ToolIconFigma key="fg" />,
      <ToolIconFlutter key="fl" />,
      <ToolIconReact key="rc" />,
      <ToolIconXcode key="xc" />,
    ],
  },
  {
    id: "smm",
    category: "marketing",
    title: "Social Media Management",
    description:
      "Post designs, caption writing, content strategy, scheduling.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M7 14s1.5-3 3.5-3 3.5 3 5.5 3 2.5-1.5 2.5-1.5" />
      </svg>
    ),
    tools: [<ToolIconNotion key="nt" />, <ToolIconFigma key="fg" />, <ToolIconCanva key="cv" />],
  },
  {
    id: "seo",
    category: "marketing",
    title: "SEO & Content Strategy",
    description:
      "Keyword research, on-page SEO, blogs, basic content planning.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    tools: [
      <ToolIconGoogle key="gg" />,
      <ToolIconAhrefs key="ah" />,
      <ToolIconSurfer key="sf" />,
    ],
  },
  {
    id: "email",
    category: "marketing",
    title: "Email Marketing & Automation",
    description: "Newsletters, drip campaigns, lead nurturing setups.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    tools: [<ToolIconMailchimp key="mc" />, <ToolIconBrevo key="bv" />],
  },
  {
    id: "ads",
    category: "marketing",
    title: "Performance Ads & Growth",
    description: "Paid campaigns across Google and social platforms.",
    icon: (
      <svg
        className="w-9 h-9 text-[#56cd00]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    tools: [
      <ToolIconGoogle key="gg" />,
      <ToolIconMeta key="mt" />,
      <ToolIconNotion key="nt" />,
      <ToolIconCanva key="cv" />,
    ],
  },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredServices =
    activeFilter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeFilter);

  return (
    <section
      id="services"
      className="w-full bg-white text-black py-20 px-6 sm:px-10 lg:px-16 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Pill Badge */}
        <div data-reveal="up" className="mb-4 inline-flex items-center">
          <span className="bg-[#e2f9c3] text-[#375215] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
            Services
          </span>
        </div>

        {/* Section Heading */}
        <h2
          data-reveal="up"
          style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight text-center mb-10"
        >
          What We Do
        </h2>

        {/* Dynamic Category Filter Tabs */}
        <div
          data-reveal="up"
          style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {[
            { key: "all", label: "All Services" },
            { key: "design", label: "Design" },
            { key: "development", label: "Development" },
            { key: "marketing", label: "Marketing & Growth" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.key
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              data-reveal="up"
              style={{ "--reveal-delay": `${(index % 4) * 90}ms` } as React.CSSProperties}
            >
              <div
                data-tilt
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-[#e5fcc8] rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between h-full min-h-[300px] transition-all duration-300 border border-[#d2f3a6]/60 cursor-pointer ${
                  hoveredCard === service.id
                    ? "-translate-y-2 shadow-xl border-[#b6e87d] bg-[#def9bd]"
                    : "shadow-xs hover:shadow-md"
                }`}
              >
                {/* Card Top Section: Icon & Title & Description */}
                <div>
                  {/* Service Icon */}
                  <div className="mb-6 flex items-center justify-start">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-black tracking-tight mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-700 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom Section: Tools */}
                <div className="mt-8 pt-4 flex items-center gap-2 border-t border-[#d1f2a3]/60">
                  <span className="text-xs font-semibold text-gray-600 mr-1">
                    Tools :
                  </span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {service.tools.map((tool, idx) => (
                      <React.Fragment key={idx}>{tool}</React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

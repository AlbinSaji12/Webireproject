import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Instagram Icon Component
function IconInstagram() {
  return (
    <svg
      className="w-4 h-4 stroke-current fill-none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// X (Twitter) Icon Component
function IconX() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// LinkedIn Icon Component
function IconLinkedin() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.16.89-2.07 2-2.07s1.95.88 1.95 2.07v4.93h2.79M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
    </svg>
  );
}

// Facebook Icon Component
function IconFacebook() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Google Icon Component
function IconGoogle() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#181918] text-white pt-12 pb-8 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Floating Dark Card Container */}
        <div className="bg-[#0f100f] border border-zinc-800/80 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          {/* Left Column: Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4 tracking-tight">
              Navigate:
            </h4>
            <ul className="flex flex-col gap-2.5 text-zinc-400 font-medium text-sm sm:text-base">
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-white transition-colors duration-200"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Column: Logo, Tagline & Social Links */}
          <div className="flex flex-col items-center text-center w-full md:w-1/3">
            <Link href="/" className="mb-3 inline-block">
              <Image
                src="/logo/logo.png"
                alt="Webire Logo"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm font-normal max-w-xs leading-relaxed mb-6">
              Built with strategy, crafted
              <br />
              with love.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#1c1e1c] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#9EFF00] hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <IconInstagram />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-xl bg-[#1c1e1c] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#9EFF00] hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <IconX />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#1c1e1c] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#9EFF00] hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#1c1e1c] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#9EFF00] hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <IconFacebook />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="w-9 h-9 rounded-xl bg-[#1c1e1c] border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#9EFF00] hover:bg-black flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110"
              >
                <IconGoogle />
              </a>
            </div>
          </div>

          {/* Right Column: CTA */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/3">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">
              A Project?
            </h4>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-extrabold text-sm sm:text-base pl-6 pr-2 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(158,255,0,0.35)] hover:shadow-[0_0_35px_rgba(158,255,0,0.65)] hover:scale-105 cursor-pointer"
            >
              <span>Contact Us</span>
              <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Text */}
        <div className="text-center pt-8 text-zinc-400 text-xs sm:text-sm font-normal">
          © {new Date().getFullYear()} Webire. All rights reserved.
        </div>
      </div>

      {/* Bottom Wavy Contour Lines Background */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none select-none overflow-hidden z-0 opacity-40">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="footerWaveGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8ee600" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#9EFF00" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#5fb800" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {[20, 40, 60, 80, 100, 120, 140].map((y, idx) => (
            <path
              key={idx}
              d={`M -100 ${y} C 140 ${y - 25}, 320 ${y + 25}, 500 ${y} C 680 ${y - 25}, 860 ${y + 25}, 1040 ${y} C 1220 ${y - 25}, 1400 ${y + 25}, 1600 ${y}`}
              stroke="url(#footerWaveGrad)"
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>
      </div>
    </footer>
  );
}

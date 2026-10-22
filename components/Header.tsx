import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 transition-all duration-300 backdrop-blur-xs bg-black/10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo/logo.png"
          alt="Webire Logo"
          width={130}
          height={40}
          className="h-8 md:h-10 w-auto object-contain"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-zinc-300 font-medium text-sm lg:text-base">
        <Link
          href="#projects"
          className="nav-link hover:text-white transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="#services"
          className="nav-link hover:text-white transition-colors duration-200"
        >
          Services
        </Link>
        <Link
          href="#about"
          className="nav-link hover:text-white transition-colors duration-200"
        >
          About
        </Link>
      </nav>

      {/* Contact CTA Button */}
      <Link
        href="#contact"
        data-magnetic
        className="group relative inline-flex items-center gap-2.5 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-semibold text-sm lg:text-base pl-5 pr-2 py-2 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(158,255,0,0.35)] hover:shadow-[0_0_35px_rgba(158,255,0,0.6)] hover:scale-105"
      >
        <span>Contact</span>
        <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </Link>
    </header>
  );
}

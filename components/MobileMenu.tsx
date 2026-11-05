"use client";

import { useEffect, useState, useSyncExternalStore, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const subscribeNoop = () => () => {};

/**
 * Hamburger button + full-screen menu for widths of 1024px and below.
 * The panel is portalled to <body> because the header's backdrop-filter would
 * otherwise trap a fixed-position child inside the header's box.
 */
export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);

  // Lock page scroll while open; close on Escape or when resized to desktop.
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 1025px)");
    const onResize = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="relative z-10 flex min-[1025px]:hidden items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 transition-colors duration-300 cursor-pointer"
      >
        <span className="relative block w-5 h-3.5">
          <span
            className={`absolute left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            data-open={open}
            aria-hidden={!open}
            inert={!open}
            className="mobile-menu fixed inset-0 z-40 min-[1025px]:hidden bg-[#121312]/95 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-10 pt-32 pb-10 overflow-y-auto"
          >
            {/* Green glow accent */}
            <div className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full bg-[#9EFF00]/15 blur-[110px] pointer-events-none" />

            <nav className="relative flex flex-col gap-2">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  style={{ "--i": index } as CSSProperties}
                  className="mobile-menu-item group flex items-center justify-between border-b border-white/10 py-5 text-4xl sm:text-5xl font-extrabold text-white tracking-tight hover:text-[#9EFF00] transition-colors duration-300"
                >
                  {link.label}
                  <ArrowUpRight className="w-8 h-8 text-zinc-500 transition-all duration-300 group-hover:text-[#9EFF00] group-hover:rotate-45" />
                </Link>
              ))}
            </nav>

            <div
              style={{ "--i": links.length } as CSSProperties}
              className="mobile-menu-item relative mt-10"
            >
              <Link
                href="/contact"
                onClick={close}
                className="group inline-flex items-center gap-3 bg-[#9EFF00] hover:bg-[#8ee600] text-black font-bold text-base pl-6 pr-2.5 py-3 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(158,255,0,0.4)]"
              >
                <span>Get Started</span>
                <span className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

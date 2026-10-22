"use client";

import { useEffect, useRef } from "react";

/**
 * Drives the home page's interactive motion through data attributes, so
 * server components can opt in without becoming client components:
 *
 *   data-reveal="up|down|left|right|scale|fade"  animate in when scrolled into view
 *   data-magnetic                                 element drifts toward the pointer
 *   data-tilt                                     3D tilt that follows the pointer
 *   data-spotlight                                exposes --spot-x / --spot-y to CSS
 *   data-parallax-root + .parallax (--depth: n)   pointer parallax for children
 */
export default function MotionProvider() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    // Scroll reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const observeReveals = (scope: ParentNode) => {
      scope
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => revealObserver.observe(el));
    };
    observeReveals(document);

    // Catch elements mounted later (e.g. filtered service cards).
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-reveal]:not([data-revealed])")) {
            revealObserver.observe(node);
          }
          observeReveals(node);
        });
      }
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Scroll progress + header state
    let scrollFrame = 0;
    const onScroll = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        progressRef.current?.style.setProperty("--progress", String(progress));
        root.toggleAttribute("data-scrolled", window.scrollY > 24);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Pointer-driven effects
    let pointerFrame = 0;
    let lastEvent: PointerEvent | null = null;
    let activeMagnetic: HTMLElement | null = null;
    let activeTilt: HTMLElement | null = null;

    const resetMagnetic = () => {
      if (activeMagnetic) activeMagnetic.style.translate = "";
      activeMagnetic = null;
    };
    const resetTilt = () => {
      if (activeTilt) activeTilt.style.transform = "";
      activeTilt = null;
    };

    const applyPointer = () => {
      const e = lastEvent;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const magnetic = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (magnetic !== activeMagnetic) resetMagnetic();
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        magnetic.style.translate = `${dx * 0.25}px ${dy * 0.35}px`;
        activeMagnetic = magnetic;
      }

      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilt !== activeTilt) resetTilt();
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        tilt.style.transform = `perspective(900px) rotateX(${-py * 8}deg) rotateY(${px * 8}deg)`;
        tilt.style.setProperty("--glare-x", `${(px + 0.5) * 100}%`);
        tilt.style.setProperty("--glare-y", `${(py + 0.5) * 100}%`);
        activeTilt = tilt;
      }

      const spotlight = target?.closest<HTMLElement>("[data-spotlight]");
      if (spotlight) {
        const rect = spotlight.getBoundingClientRect();
        spotlight.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        spotlight.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
      }

      const parallax = target?.closest<HTMLElement>("[data-parallax-root]");
      if (parallax) {
        const rect = parallax.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / rect.width - 0.5;
        const my = (e.clientY - rect.top) / rect.height - 0.5;
        parallax.style.setProperty("--mx", mx.toFixed(3));
        parallax.style.setProperty("--my", my.toFixed(3));
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      lastEvent = e;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(applyPointer);
    };
    const onPointerLeave = () => {
      resetMagnetic();
      resetTilt();
    };

    const pointerEffects = finePointer && !reduceMotion;
    if (pointerEffects) {
      document.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(pointerFrame);
      if (pointerEffects) {
        document.removeEventListener("pointermove", onPointerMove);
        document.documentElement.removeEventListener(
          "pointerleave",
          onPointerLeave
        );
      }
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden />;
}

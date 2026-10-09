"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

function shouldSkipLoader() {
  if (typeof window === "undefined") return false;
  if (window.self !== window.top) return true;
  return new URLSearchParams(window.location.search).has("preview");
}

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [skipLoader, setSkipLoader] = useState(false);

  // Refs for zero-rerender direct DOM updates (hardware clock execution, 0 React re-renders)
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const hasClosedRef = useRef(false);

  useEffect(() => {
    if (shouldSkipLoader()) {
      setSkipLoader(true);
      setIsVisible(false);
      return;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setSkipLoader(true);
      setIsVisible(false);
      return;
    }

    // Lock page scroll while loader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const triggerClose = () => {
      if (hasClosedRef.current) return;
      hasClosedRef.current = true;
      setIsOpening(true);

      // Restore body overflow as curtain starts lifting
      document.body.style.overflow = originalOverflow;

      setTimeout(() => {
        setIsVisible(false);
      }, 750);
    };

    // Hard fallback safety timer (2.0s): guarantees loader never blocks user
    const safetyTimer = setTimeout(() => {
      triggerClose();
    }, 2000);

    // Fast, responsive progress counter (~700ms total duration)
    const startTime = performance.now();
    const duration = 720;
    let animId: number;

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Clean easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentPercent = Math.round(eased * 100);

      // Direct DOM update: 0 React re-renders, 60fps/120fps hardware clock execution
      if (percentTextRef.current) {
        percentTextRef.current.textContent = `${currentPercent}`;
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${currentPercent}%`;
      }

      if (progress < 1) {
        animId = requestAnimationFrame(frame);
      } else {
        setTimeout(() => {
          clearTimeout(safetyTimer);
          triggerClose();
        }, 90);
      }
    };

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible || skipLoader) return null;

  // Editorial curtain lift: smooth upward slide revealing the hydrated portfolio underneath
  const curtainStyle: React.CSSProperties = {
    transform: isOpening ? "translate3d(0, -100%, 0)" : "translate3d(0, 0, 0)",
    transition: "transform 720ms cubic-bezier(0.85, 0, 0.15, 1)",
    willChange: "transform",
  };

  const contentStyle: React.CSSProperties = {
    opacity: isOpening ? 0 : 1,
    transform: isOpening ? "translate3d(0, -14px, 0)" : "translate3d(0, 0, 0)",
    transition: "opacity 320ms ease, transform 420ms cubic-bezier(0.25, 1, 0.5, 1)",
    pointerEvents: isOpening ? "none" : "auto",
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none"
      style={{ pointerEvents: isOpening ? "none" : "auto" }}
    >
      {/* Editorial Obsidian Curtain Panel */}
      <div
        className="absolute inset-0 bg-[#080F1E] border-b border-white/10"
        style={curtainStyle}
      />

      {/* Centered Editorial Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-lg"
        style={contentStyle}
      >
        {/* Subtle Brand Emblem with Soft Ambient Border */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.35rem] bg-white/[0.04] border border-white/15 p-3.5 sm:p-4 flex items-center justify-center shadow-xl mb-6 sm:mb-7">
          <Image
            src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png"
            alt="Samrit Mukherjee Logo"
            width={80}
            height={80}
            priority
            unoptimized
            className="w-full h-full object-contain"
          />
        </div>

        {/* Typographic Title & Identity */}
        <div className="space-y-2 mb-7 sm:mb-8">
          <h2 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-[0.24em] sm:tracking-[0.28em] uppercase font-display">
            Samrit Mukherjee
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-serif italic tracking-wide">
            AI Systems &amp; Full-Stack Engineering
          </p>
        </div>

        {/* Minimal Progress Line & Numeric Indicator */}
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Crisp progress track */}
          <div className="w-44 sm:w-56 md:w-60 h-[2px] bg-white/20 overflow-hidden relative rounded-full">
            <div
              ref={progressBarRef}
              className="h-full bg-white transition-none"
              style={{ width: "0%" }}
            />
          </div>

          {/* Minimal Monospaced Counter & Context Tag */}
          <div className="flex items-center justify-between w-44 sm:w-56 md:w-60 text-xs sm:text-sm font-mono text-neutral-400">
            <span>
              <span ref={percentTextRef}>0</span>
              <span className="text-neutral-400/80">%</span>
            </span>
            <span className="text-neutral-400/80 tracking-widest uppercase">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

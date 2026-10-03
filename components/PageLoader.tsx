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

  // Refs for 0-rerender direct DOM updates (eliminates React Fiber bottleneck during hydration)
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

    // Lock page scroll while loader is visible to prevent scroll events fighting during hydration
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const triggerClose = () => {
      if (hasClosedRef.current) return;
      hasClosedRef.current = true;
      setIsOpening(true);

      // Restore scroll right as curtains start opening
      document.body.style.overflow = originalOverflow;

      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    };

    // Hard fallback safety timer (2.5s): guarantees loader NEVER gets stuck under any network condition
    const safetyTimer = setTimeout(() => {
      triggerClose();
    }, 2500);

    // Smooth counter animation from 0% to 100% over ~950ms via direct DOM manipulation
    const startTime = performance.now();
    const duration = 950;
    let animId: number;

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentPercent = Math.round(eased * 100);

      // Direct DOM update: ZERO React re-renders, 60fps/120fps hardware clock execution
      if (percentTextRef.current) {
        percentTextRef.current.textContent = `${currentPercent}%`;
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
        }, 100);
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

  const leftPanelStyle: React.CSSProperties = {
    transform: isOpening ? "translate3d(-100%, 0, 0)" : "translate3d(0, 0, 0)",
    transition: "transform 750ms cubic-bezier(0.77, 0, 0.175, 1)",
    willChange: "transform",
  };

  const rightPanelStyle: React.CSSProperties = {
    transform: isOpening ? "translate3d(100%, 0, 0)" : "translate3d(0, 0, 0)",
    transition: "transform 750ms cubic-bezier(0.77, 0, 0.175, 1)",
    willChange: "transform",
  };

  const contentStyle: React.CSSProperties = {
    opacity: isOpening ? 0 : 1,
    transform: isOpening ? "scale(0.95) translate3d(0, -10px, 0)" : "scale(1) translate3d(0, 0, 0)",
    transition: "opacity 320ms ease, transform 420ms cubic-bezier(0.25, 1, 0.5, 1)",
    pointerEvents: isOpening ? "none" : "auto",
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none"
      style={{ pointerEvents: isOpening ? "none" : "auto" }}
    >
      <style>{`
        .loader-boxes-wrap {
          --size: 26px;
          --duration: 800ms;
          height: 70px;
          width: 90px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-boxes {
          height: calc(var(--size) * 2);
          width: calc(var(--size) * 3);
          position: relative;
          transform-style: preserve-3d;
          transform-origin: 50% 50%;
          transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
          will-change: transform;
        }
        .loader-boxes .loader-box {
          width: var(--size);
          height: var(--size);
          top: 0;
          left: 0;
          position: absolute;
          transform-style: preserve-3d;
          will-change: transform;
          backface-visibility: hidden;
        }
        .loader-boxes .loader-box:nth-child(1) {
          transform: translate3d(100%, 0, 0);
          animation: ldr-box1 var(--duration) linear infinite;
        }
        .loader-boxes .loader-box:nth-child(2) {
          transform: translate3d(0, 100%, 0);
          animation: ldr-box2 var(--duration) linear infinite;
        }
        .loader-boxes .loader-box:nth-child(3) {
          transform: translate3d(100%, 100%, 0);
          animation: ldr-box3 var(--duration) linear infinite;
        }
        .loader-boxes .loader-box:nth-child(4) {
          transform: translate3d(200%, 0, 0);
          animation: ldr-box4 var(--duration) linear infinite;
        }
        .loader-boxes .loader-box > div {
          --background: #FF0000;
          --top: auto;
          --right: auto;
          --bottom: auto;
          --left: auto;
          --translateZ: calc(var(--size) / 2);
          --rotateY: 0deg;
          --rotateX: 0deg;
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--background);
          top: var(--top);
          right: var(--right);
          bottom: var(--bottom);
          left: var(--left);
          transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translate3d(0, 0, var(--translateZ));
          will-change: transform;
          backface-visibility: hidden;
        }
        .loader-boxes .loader-box > div:nth-child(1) {
          --top: 0;
          --left: 0;
        }
        .loader-boxes .loader-box > div:nth-child(2) {
          --background: #D90000;
          --right: 0;
          --rotateY: 90deg;
        }
        .loader-boxes .loader-box > div:nth-child(3) {
          --background: #A60000;
          --rotateX: -90deg;
        }
        .loader-boxes .loader-box > div:nth-child(4) {
          --background: #400000;
          --top: 0;
          --left: 0;
          --translateZ: calc(var(--size) * 3 * -1);
        }
        @keyframes ldr-box1 {
          0%, 50% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(200%, 0, 0); }
        }
        @keyframes ldr-box2 {
          0% { transform: translate3d(0, 100%, 0); }
          50% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(100%, 0, 0); }
        }
        @keyframes ldr-box3 {
          0%, 50% { transform: translate3d(100%, 100%, 0); }
          100% { transform: translate3d(0, 100%, 0); }
        }
        @keyframes ldr-box4 {
          0% { transform: translate3d(200%, 0, 0); }
          50% { transform: translate3d(200%, 100%, 0); }
          100% { transform: translate3d(100%, 100%, 0); }
        }
        @media (max-width: 640px) {
          .loader-boxes-wrap {
            --size: 22px;
          }
        }
      `}</style>

      {/* Hardware-Accelerated Split-Curtain Panels */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#000000] border-r border-[#FF0000]/15"
        style={leftPanelStyle}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#000000] border-l border-[#FF0000]/15"
        style={rightPanelStyle}
      />

      {/* Subtle Center Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF0000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div
        className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-7"
        style={contentStyle}
      >
        {/* Futuristic S M Orbit Emblem (Preloaded & Unoptimized for instant rendering) */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_24px_rgba(255,0,0,0.4)]">
          <Image
            src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png"
            alt="Samrit Mukherjee Logo Emblem"
            width={80}
            height={80}
            priority
            unoptimized
            className="w-full h-full object-contain"
          />
        </div>

        {/* Name & Identity */}
        <div className="text-center space-y-1">
          <h2 className="text-white text-base sm:text-lg font-bold tracking-[0.22em] uppercase">
            Samrit Mukherjee
          </h2>
          <p className="text-neutral-400 text-xs tracking-[0.16em] uppercase">
            AI Systems <span className="text-[#FF0000] mx-1">•</span> Full-Stack
          </p>
        </div>

        {/* 3D Isometric Jumping Boxes Loader — Isolated Container with zero overlap */}
        <div className="loader-boxes-wrap my-1">
          <div className="loader-boxes">
            <div className="loader-box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="loader-box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="loader-box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="loader-box">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>

        {/* Clear Numeric Progress Counter & Fill Bar (DOM ref driven, zero re-renders) */}
        <div className="flex flex-col items-center gap-2.5">
          <div className="w-44 h-1 bg-white/10 overflow-hidden rounded-full relative">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-[#FF0000] via-[#FF4D4D] to-white rounded-full"
              style={{ width: "0%" }}
            />
          </div>
          <span
            ref={percentTextRef}
            className="font-mono text-xs font-semibold text-neutral-400 tracking-wider"
          >
            0%
          </span>
        </div>
      </div>
    </div>
  );
}

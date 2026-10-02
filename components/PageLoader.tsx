"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

function shouldSkipLoader() {
  if (typeof window === "undefined") return false;
  if (window.self !== window.top) return true;
  return new URLSearchParams(window.location.search).has("preview");
}

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [percent, setPercent] = useState(0);
  const [skipLoader, setSkipLoader] = useState(false);

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

    // Smooth counter animation from 0% to 100% over ~1200ms
    const startTime = performance.now();
    const duration = 1200;

    let animId: number;
    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercent(Math.round(eased * 100));

      if (progress < 1) {
        animId = requestAnimationFrame(frame);
      } else {
        setTimeout(() => {
          handleClose();
        }, 150);
      }
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleClose = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsOpening(false);
    }, 850);
  };

  if (!isVisible || skipLoader) return null;

  const leftPanelStyle = {
    transform: isOpening ? "translateX(-100%)" : "translateX(0%)",
    transition: "transform 800ms cubic-bezier(0.85, 0, 0.15, 1)",
  };

  const rightPanelStyle = {
    transform: isOpening ? "translateX(100%)" : "translateX(0%)",
    transition: "transform 800ms cubic-bezier(0.85, 0, 0.15, 1)",
  };

  const contentStyle = {
    opacity: isOpening ? 0 : 1,
    transform: isOpening ? "scale(0.92) translateY(-10px)" : "scale(1) translateY(0px)",
    transition: "opacity 350ms ease, transform 450ms cubic-bezier(0.25, 1, 0.5, 1)",
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none"
      style={{ pointerEvents: isOpening ? "none" : "auto" }}
    >
      {/* Split-Curtain Panels */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[#000000] border-r border-[#FF0000]/15" style={leftPanelStyle} />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[#000000] border-l border-[#FF0000]/15" style={rightPanelStyle} />

      {/* Subtle Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF0000]/10 rounded-full blur-[140px] pointer-events-none" />

      <div
        className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-10"
        style={contentStyle}
      >
        {/* Samrit's Official Logo Emblem */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_20px_rgba(255,0,0,0.35)] transition-all duration-500">
          <Image
            src="https://res.cloudinary.com/duxrcy3jn/image/upload/q_auto/f_auto/v1777463452/SAMRIT_FEBICON_hxnczn.png"
            alt="Samrit Mukherjee - AI & ML Developer Logo"
            width={80}
            height={80}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        {/* Name & Identity */}
        <div className="text-center space-y-1.5">
          <h2 className="text-white text-base sm:text-lg font-bold tracking-[0.2em] uppercase">
            Samrit Mukherjee
          </h2>
          <p className="text-neutral-400 text-xs tracking-[0.16em] uppercase">
            AI Systems <span className="text-[#FF0000] mx-1">•</span> Full-Stack
          </p>
        </div>

        {/* 3D Isometric Jumping Boxes Loader */}
        <StyledWrapper>
          <div className="boxes">
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="box">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </StyledWrapper>

        {/* Clear Numeric Progress Counter & Fill Bar */}
        <div className="flex flex-col items-center gap-2.5 mt-2">
          <div className="w-44 h-1 bg-white/10 overflow-hidden rounded-full relative">
            <div
              className="h-full bg-gradient-to-r from-[#FF0000] via-[#FF4D4D] to-white rounded-full transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="font-mono text-xs font-semibold text-neutral-400 tracking-wider">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  .boxes {
    --size: 28px;
    --duration: 800ms;
    height: calc(var(--size) * 2);
    width: calc(var(--size) * 3);
    position: relative;
    transform-style: preserve-3d;
    transform-origin: 50% 50%;
    margin-top: calc(var(--size) * 1.5 * -1);
    transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
    will-change: transform;
  }

  .boxes .box {
    width: var(--size);
    height: var(--size);
    top: 0;
    left: 0;
    position: absolute;
    transform-style: preserve-3d;
    will-change: transform;
    backface-visibility: hidden;
  }

  .boxes .box:nth-child(1) {
    transform: translate3d(100%, 0, 0);
    animation: box1 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(2) {
    transform: translate3d(0, 100%, 0);
    animation: box2 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(3) {
    transform: translate3d(100%, 100%, 0);
    animation: box3 var(--duration) linear infinite;
  }

  .boxes .box:nth-child(4) {
    transform: translate3d(200%, 0, 0);
    animation: box4 var(--duration) linear infinite;
  }

  .boxes .box > div {
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
    box-shadow: none;
    will-change: transform;
    backface-visibility: hidden;
  }

  .boxes .box > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }

  .boxes .box > div:nth-child(2) {
    --background: #CC0000;
    --right: 0;
    --rotateY: 90deg;
  }

  .boxes .box > div:nth-child(3) {
    --background: #990000;
    --rotateX: -90deg;
  }

  .boxes .box > div:nth-child(4) {
    --background: #330000;
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }

  @media (max-width: 768px), (pointer: coarse) {
    .boxes {
      --size: 22px;
      --duration: 1000ms;
      transform: rotateX(55deg) rotateZ(45deg) translate3d(0, 0, 0);
    }
  }

  @keyframes box1 {
    0%, 50% { transform: translate3d(100%, 0, 0); }
    100% { transform: translate3d(200%, 0, 0); }
  }

  @keyframes box2 {
    0% { transform: translate3d(0, 100%, 0); }
    50% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(100%, 0, 0); }
  }

  @keyframes box3 {
    0%, 50% { transform: translate3d(100%, 100%, 0); }
    100% { transform: translate3d(0, 100%, 0); }
  }

  @keyframes box4 {
    0% { transform: translate3d(200%, 0, 0); }
    50% { transform: translate3d(200%, 100%, 0); }
    100% { transform: translate3d(100%, 100%, 0); }
  }
`;

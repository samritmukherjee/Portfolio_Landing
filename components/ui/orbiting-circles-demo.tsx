"use client";

import React from "react";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

// All project logos provided by user
const LOGOS = {
  portfolio: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png",
  avento: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024370/Avento-Vertical-Orange_ka1rff.png",
  custodian: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024043/2_short_moemw1.png",
  sukalyaAI: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024414/logoSukalya.ai_kkyjii.png",
  cosmicCanvas: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024413/cosmiccanvas_qxav5r.png",
  sovereign: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024871/Sovereign-Icon-Black_y2adx8.png",
  upcomingAstra: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024925/logo_zkwhb6.png",
};

// SVG for favicon_xzk2wt.svg rendered dynamically with currentColor so it's black in light mode and white in dark mode
export function ZenithArcSvg({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} fill-neutral-900 dark:fill-white transition-colors duration-200`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224.877 77.2469C224.877 78.7345 223.78 79.9956 222.311 80.2353C141.066 93.5003 79.0519 164.177 79.0519 249.374C79.0519 344.023 155.588 420.75 250 420.75C302.709 420.75 349.845 396.835 381.203 359.239C382.148 358.107 383.768 357.802 385.046 358.538L449.111 395.389C450.658 396.279 451.091 398.316 450.021 399.744C404.411 460.621 331.793 499.999 250 499.999C111.929 499.999 0 387.791 0 249.374C0 120.595 96.8857 14.5021 221.57 0.352999C223.334 0.152867 224.877 1.54017 224.877 3.31508V77.2469Z" />
      <path d="M275.124 3.31509C275.124 1.54018 276.667 0.152872 278.431 0.353008C403.115 14.5024 500 120.595 500 249.374C500 285.394 492.419 319.638 478.772 350.593C478.059 352.21 476.099 352.837 474.567 351.956L410.682 315.207C409.383 314.46 408.837 312.869 409.38 311.472C416.849 292.218 420.949 271.276 420.949 249.374C420.949 164.177 358.934 93.5006 277.689 80.2353C276.221 79.9956 275.124 78.7346 275.124 77.247V3.31509Z" />
    </svg>
  );
}

export function OrbitingCirclesDemo() {
  return (
    /* Completely borderless container with NO outer card box, flowing directly into the webpage */
    <div className="relative flex h-[360px] sm:h-[400px] w-full flex-col items-center justify-center overflow-visible">
      {/* Central Brand Badge: Samrit's Portfolio Logo */}
      <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black border-2 border-[#2563EB] dark:border-[#3B82F6] flex items-center justify-center p-3 shadow-md group transition-transform duration-200 hover:scale-105">
        <Image
          src={LOGOS.portfolio}
          alt="Samrit Mukherjee Portfolio Logo"
          width={80}
          height={80}
          className="w-full h-full object-contain"
          priority
        />
        <div className="absolute -bottom-2.5 px-2.5 py-0.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] text-[9px] font-mono font-bold text-white uppercase tracking-wider shadow-sm">
          SAMRIT.DEV
        </div>
      </div>

      {/* Outer Orbit: Primary Flagship Systems */}
      <OrbitingCircles iconSize={44} radius={155} duration={28}>
        {/* Cosmic Canvas */}
        <div
          title="Cosmic Canvas"
          className="w-11 h-11 p-1 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <Image
            src={LOGOS.cosmicCanvas}
            alt="Cosmic Canvas AI Design Platform"
            width={38}
            height={38}
            className="w-full h-full object-contain"
          />
        </div>

        {/* SUKALYA.ai */}
        <div
          title="SUKALYA.ai"
          className="w-11 h-11 p-1.5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <Image
            src={LOGOS.sukalyaAI}
            alt="SUKALYA.ai Health Guidance System"
            width={38}
            height={38}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Custodian ERP */}
        <div
          title="Custodian"
          className="w-11 h-11 p-1 rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <Image
            src={LOGOS.custodian}
            alt="Custodian Asset Management Platform"
            width={38}
            height={38}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Avento AI */}
        <div
          title="Avento AI"
          className="w-11 h-11 p-1.5 rounded-2xl bg-white border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <Image
            src={LOGOS.avento}
            alt="Avento AI Customer Support SaaS"
            width={38}
            height={38}
            className="w-full h-full object-contain"
          />
        </div>
      </OrbitingCircles>

      {/* Inner Orbit (Reversed & Faster): Upcoming & Infrastructure */}
      <OrbitingCircles iconSize={36} radius={95} reverse speed={1.5} duration={22}>
        {/* Sovereign (Black Squircle with white 'S') */}
        <div
          title="Sovereign"
          className="w-9 h-9 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-white/30 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <Image
            src={LOGOS.sovereign}
            alt="Sovereign AI Architecture"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Upcoming Astra (White 'A' + Orange Orbit — dark pill for 100% contrast in both modes) */}
        <div
          title="Upcoming Labs (Astra)"
          className="w-9 h-9 p-1.5 rounded-xl bg-neutral-950 border border-neutral-700 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <Image
            src={LOGOS.upcomingAstra}
            alt="Astra AI Upcoming System"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Upcoming Zenith Arc (SVG that flips black in light mode and white in dark mode) */}
        <div
          title="Upcoming AI Architecture"
          className="w-9 h-9 p-1.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:scale-115 transition-transform cursor-pointer"
        >
          <ZenithArcSvg />
        </div>
      </OrbitingCircles>
    </div>
  );
}

export default OrbitingCirclesDemo;

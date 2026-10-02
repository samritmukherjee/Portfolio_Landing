"use client";

import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiTerminal, FiGrid, FiSliders, FiMonitor } from "react-icons/fi";

export function PortfolioOS() {
  return (
    <section id="portfolio-os" className="section-rhythm border-t border-[var(--theme-border)]">
      <div className="container-custom">
        {/* Editorial Eyebrow */}
        <div className="section-eyebrow">05 / Alternate Layer</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8 space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--theme-text)] font-display">
              Portfolio OS — An Interactive Desktop Workstation
            </h2>
            <p className="text-base text-[var(--theme-text-secondary)] max-w-2xl leading-relaxed">
              Step into a second dimension of my portfolio. A complete browser-based operating system designed to explore my software systems through draggable windows, a functional command-line terminal, and interactive desktop apps.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="https://samrit-portfolio-os.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent px-6 py-3 text-sm font-semibold rounded-lg shadow-sm"
            >
              <FiMonitor size={16} />
              <span>Boot OS Experience</span>
              <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Memorable OS Desktop Workstation Frame */}
        <div className="editorial-card overflow-hidden bg-[#0A0B0E] border-white/10 shadow-2xl">
          {/* OS Top Menu Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#121318] border-b border-white/10 text-xs font-mono text-stone-400">
            <div className="flex items-center gap-4">
              <span className="text-[#FF7A00] font-bold">SAMRIT_OS</span>
              <span className="hidden sm:inline">Finder</span>
              <span className="hidden sm:inline">Windows</span>
              <span className="hidden sm:inline">Terminal</span>
              <span className="hidden sm:inline">Help</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[0.6875rem]">v2.6_STABLE</span>
            </div>
          </div>

          {/* OS Desktop Area Preview */}
          <div className="relative aspect-[16/9] w-full bg-[#0D0E12]">
            <Image
              src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png"
              alt="Samrit Mukherjee Portfolio OS — Desktop interface preview"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center opacity-90"
            />

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* In-Frame Action Banner */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-white text-sm sm:text-base font-bold font-display">
                  Multi-Window Architecture & Terminal Simulation
                </p>
                <p className="text-stone-300 text-xs max-w-xl">
                  Inspect source directories, run custom commands, launch audio apps, and view project logs in an authentic retro-modern desktop environment.
                </p>
              </div>

              <a
                href="https://samrit-portfolio-os.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent px-5 py-2.5 text-xs font-semibold rounded-lg shrink-0 self-start sm:self-auto"
              >
                <span>Launch samrit-portfolio-os</span>
                <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Feature Pillars Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#121318] text-xs">
            <div className="p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/15 flex items-center justify-center text-[#FF7A00] shrink-0">
                <FiTerminal size={16} />
              </div>
              <div>
                <p className="text-white font-semibold">Unix Terminal</p>
                <p className="text-stone-400 text-[0.6875rem]">CLI commands & filesystem navigation</p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/15 flex items-center justify-center text-[#FF7A00] shrink-0">
                <FiGrid size={16} />
              </div>
              <div>
                <p className="text-white font-semibold">Window Manager</p>
                <p className="text-stone-400 text-[0.6875rem]">Draggable, resizable process windows</p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/15 flex items-center justify-center text-[#FF7A00] shrink-0">
                <FiSliders size={16} />
              </div>
              <div>
                <p className="text-white font-semibold">System Utilities</p>
                <p className="text-stone-400 text-[0.6875rem]">Live diagnostics and app launcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

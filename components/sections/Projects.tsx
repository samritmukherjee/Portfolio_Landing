"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, ExternalLink, Cpu, GitBranch, Terminal, ShieldAlert, Sparkles } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import { ZenithArcSvg } from "@/components/ui/orbiting-circles-demo";
import { projectsData, ProjectData } from "@/lib/projects-data";

interface ExtendedProject extends ProjectData {
  logoUrl?: string;
  year?: string;
}

// 5 Core Live Projects
const LIVE_PROJECTS: ExtendedProject[] = [
  {
    ...projectsData[0], // Cosmic Canvas
    logoUrl: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024413/cosmiccanvas_qxav5r.png",
    year: "2025",
  },
  {
    ...projectsData[1], // SUKALYA.ai
    logoUrl: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024414/logoSukalya.ai_kkyjii.png",
    year: "2026",
  },
  {
    ...projectsData[2], // Portfolio OS
    logoUrl: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png",
    year: "2026",
  },
  {
    ...projectsData[3], // Avento AI
    logoUrl: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024370/Avento-Vertical-Orange_ka1rff.png",
    year: "2026",
  },
  {
    ...projectsData[4], // Custodian
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791013160/Screenshot_2026-10-03_123913_hzru2f.png",
    logoUrl: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024043/2_short_moemw1.png",
    year: "2025",
  },
];

// Exactly 6 Tabs: 5 Specific Project Names + 1 Upcoming Tab
const TAB_ITEMS = [
  { id: "cosmic-canvas", title: "Cosmic Canvas" },
  { id: "sukalya-ai", title: "SUKALYA.ai" },
  { id: "portfolio-os", title: "Portfolio OS" },
  { id: "avento-ai", title: "Avento AI" },
  { id: "custodian", title: "Custodian" },
  { id: "upcoming", title: "Upcoming" },
];

// Smart Logo Badge ensuring 100% visibility across themes
function ProjectLogoBadge({ project }: { project: ExtendedProject }) {
  const isLightOnlyBg = project.id === "avento-ai" || project.id === "custodian";

  return (
    <div
      title={project.title}
      className={`w-9 h-9 rounded-xl border border-neutral-200 dark:border-neutral-700 p-1.5 flex items-center justify-center shrink-0 shadow-xs ${
        isLightOnlyBg ? "bg-white" : "bg-white dark:bg-neutral-900"
      }`}
    >
      {project.logoUrl && (
        <Image
          src={project.logoUrl}
          alt={project.title}
          width={32}
          height={32}
          unoptimized
          priority
          loading="eager"
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
}

export function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  // Pre-warm browser cache with all project images and logos immediately on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      LIVE_PROJECTS.forEach((p) => {
        if (p.image) {
          const img = new window.Image();
          img.src = p.image;
        }
        if (p.logoUrl) {
          const logo = new window.Image();
          logo.src = p.logoUrl;
        }
      });
      // Preload upcoming logos
      const up1 = new window.Image();
      up1.src = "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024871/Sovereign-Icon-Black_y2adx8.png";
      const up2 = new window.Image();
      up2.src = "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024925/logo_zkwhb6.png";
    }
  }, []);

  return (
    <section id="projects" className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 sm:py-24">
      {/* SVG Gooey Filter instance specifically for project visual controls */}
      <GooeySvgFilter id="projects-folder-gooey-filter" strength={12} />

      {/* Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3"
      >
        <div className="section-eyebrow">Portfolio Works</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
          Explore individual production systems, architectural details, and upcoming research prototypes.
        </p>
      </motion.div>

      {/* Gooey Folder Section (Fitting screen left-to-right) */}
      <div className="w-full mx-auto relative mt-6">
        {/* Gooey Filter Layer: fuses active tab pill & content panel into one organic folder */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ filter: "url(#projects-folder-gooey-filter)" }}
        >
          {/* Top Tab track in filter layer */}
          <div className="flex w-full overflow-x-auto no-scrollbar">
            {TAB_ITEMS.map((_, index) => (
              <div key={index} className="relative flex-1 min-w-[130px] sm:min-w-0 h-12 sm:h-14">
                {activeTab === index && (
                  <motion.div
                    layoutId="active-folder-tab-pill"
                    className="absolute inset-0 bg-[#efefef] dark:bg-[#18181b] rounded-t-3xl"
                    transition={{
                      type: "spring",
                      bounce: 0.05,
                      duration: 0.35,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Content panel in background: merged organically with active tab */}
          <div className="w-full h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] bg-[#efefef] dark:bg-[#18181b] rounded-b-3xl rounded-tr-3xl" />
        </div>

        {/* Interactive Text Overlay: Unfiltered, crisp typography */}
        <div className="relative flex w-full overflow-x-auto no-scrollbar">
          {TAB_ITEMS.map((tab, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveTab(index)}
              className="flex-1 min-w-[130px] sm:min-w-0 h-12 sm:h-14 flex items-center justify-center cursor-pointer select-none z-10 px-2 sm:px-4"
            >
              <span
                className={`font-mono text-xs sm:text-sm tracking-wider uppercase transition-colors duration-200 truncate ${
                  activeTab === index
                    ? "text-black dark:text-white font-black"
                    : "text-neutral-500 hover:text-black dark:hover:text-white font-medium"
                }`}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Folder Content Panel (Edge-to-Edge inside folder) */}
        <div className="relative w-full rounded-b-3xl rounded-tr-3xl p-6 sm:p-10 md:p-12 min-h-[460px] text-neutral-900 dark:text-neutral-100">
          {/* PERSISTENT MOUNT: All 5 projects stay mounted in DOM for instant 0ms switching */}
          {LIVE_PROJECTS.map((project, idx) => {
            const isSelected = activeTab === idx;

            return (
              <div
                key={project.id}
                aria-hidden={!isSelected}
                className={`transition-opacity duration-200 ${
                  isSelected ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" : "hidden"
                }`}
              >
                {/* Left Column: Specific Project Details */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Metadata Header */}
                  <div className="flex items-center gap-3">
                    <ProjectLogoBadge project={project} />
                    <div>
                      <div className="flex items-center gap-2">
                        {project.year && (
                          <span className="font-mono text-xs font-bold text-[#FF0000] px-2.5 py-0.5 rounded-md bg-[#FF0000]/10 border border-[#FF0000]/20">
                            {project.year}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white mt-1 tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div>
                    <p className="text-sm font-semibold text-[#FF0000] uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-neutral-200/80 dark:bg-neutral-800 border border-neutral-300/80 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#CC0000] text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300 shadow-md shadow-[#FF0000]/20 hover:scale-[1.02]"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-sm font-semibold flex items-center gap-2 transition-all border border-neutral-300 dark:border-neutral-700"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Large Instant-Loading Project Banner */}
                <div className="lg:col-span-7">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-700/80 shadow-xl bg-neutral-950 transition-transform duration-500 hover:shadow-2xl"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      unoptimized
                      priority
                      loading="eager"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-mono font-bold backdrop-blur-md border border-white/20 flex items-center gap-2">
                        <span>Open Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FF0000]" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Tab ("Upcoming"): High-Tech Under Active Development Showcase (No AI Generated Art) */}
          <div
            aria-hidden={activeTab !== 5}
            className={`transition-opacity duration-200 ${
              activeTab === 5 ? "block space-y-8" : "hidden"
            }`}
          >
            {/* Engineering Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-300/70 dark:border-neutral-800">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/25 text-[#FF0000] text-xs font-mono font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0000] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0000]" />
                  </span>
                  <span>Active Prototyping Pipeline</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight">
                  3 Systems Under Active Development
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">
                  Engineering next-generation AI agent architectures, streaming inference engines, and decentralized coordination protocols.
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200/80 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 text-xs font-mono shrink-0">
                <Clock className="w-4 h-4 text-[#FF0000]" />
                <span className="text-neutral-700 dark:text-neutral-300">Phase: Model Training &amp; Benchmarks</span>
              </div>
            </div>

            {/* 3 Authentic Engineering Pods Featuring User's Provided Logos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Pod 1: Sovereign Architecture */}
              <div className="p-6 rounded-2xl border border-neutral-300/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-md hover:shadow-xl hover:border-[#FF0000]/50 transition-all duration-300 flex flex-col justify-between gap-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-white/20 flex items-center justify-center shadow-xs">
                      <Image
                        src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024871/Sovereign-Icon-Black_y2adx8.png"
                        alt="Upcoming System"
                        width={36}
                        height={36}
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-bold">
                      v0.9 • Pipeline Active
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF0000]">
                      System 01 / Agentic Core
                    </span>
                    <h4 className="text-lg font-bold text-black dark:text-white mt-0.5">
                      Autonomous Task Orchestration Architecture
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      Deterministic agentic workflow execution, memory stores, tool-calling governance, and self-healing multi-agent chains.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span>Engineering Progress</span>
                    <span className="font-bold text-[#FF0000]">88%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-[#FF0000] rounded-full w-[88%]" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      Python
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      LangChain
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      Vector Store
                    </span>
                  </div>
                </div>
              </div>

              {/* Pod 2: Astra Neural Core */}
              <div className="p-6 rounded-2xl border border-neutral-300/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-md hover:shadow-xl hover:border-[#FF0000]/50 transition-all duration-300 flex flex-col justify-between gap-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 p-2 rounded-xl bg-neutral-950 border border-neutral-700 flex items-center justify-center shadow-xs">
                      <Image
                        src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024925/logo_zkwhb6.png"
                        alt="Upcoming System"
                        width={36}
                        height={36}
                        unoptimized
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-[11px] font-mono font-bold">
                      v0.7 • Model Training
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-500">
                      System 02 / Neural Inference
                    </span>
                    <h4 className="text-lg font-bold text-black dark:text-white mt-0.5">
                      Low-Latency Streaming Vision Engine
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      Optimized CUDA tensor pipelines, multimodal vision synthesis, and real-time inference serving for embedded environments.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span>Engineering Progress</span>
                    <span className="font-bold text-amber-500">72%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full w-[72%]" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      PyTorch
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      CUDA
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      FastAPI
                    </span>
                  </div>
                </div>
              </div>

              {/* Pod 3: Zenith Swarm Coordinator */}
              <div className="p-6 rounded-2xl border border-neutral-300/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-md hover:shadow-xl hover:border-[#FF0000]/50 transition-all duration-300 flex flex-col justify-between gap-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-white/20 flex items-center justify-center shadow-xs">
                      <ZenithArcSvg className="w-7 h-7" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 text-[11px] font-mono font-bold">
                      v0.5 • Architecture Review
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-500">
                      System 03 / Swarm Protocol
                    </span>
                    <h4 className="text-lg font-bold text-black dark:text-white mt-0.5">
                      Multi-Agent Consensus &amp; Swarm Protocol
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      Decentralized multi-model consensus layer, event-driven WebSocket bus, and distributed state synchronization.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span>Engineering Progress</span>
                    <span className="font-bold text-cyan-500">58%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full w-[58%]" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      TypeScript
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      WebSockets
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/80 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                      Docker
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter";
import { ZenithArcSvg } from "@/components/ui/orbiting-circles-demo";
import { BlobButton } from "@/components/ui/BlobButton";
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
          alt={`${project.title} Logo`}
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
  const [isDesktop, setIsDesktop] = useState(false);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Synchronize screen size for layout switching (lg breakpoint: 1024px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Track horizontal scroll progress for mobile carousel
  const handleMobileScroll = () => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    setScrollProgress(el.scrollLeft / maxScroll);
  };

  return (
    <section id="projects" className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14 sm:py-16 md:py-20">
      {/* SVG Gooey Filter instance specifically for desktop project visual controls */}
      <GooeySvgFilter id="projects-folder-gooey-filter" strength={12} />

      {/* Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 space-y-3"
      >
        <div className="mb-2">
          <span className="section-eyebrow">Portfolio Works</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--theme-text)] leading-[1.05]">
          Featured <span className="font-serif italic text-gradient-primary">Projects</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
          Explore individual production systems, architectural details, and upcoming research prototypes.
        </p>
      </motion.div>

      {/* ========================================================================= */}
      {/* 1. DESKTOP VIEW: Gooey Folder with 6 Tabs (Preserved Desktop Architecture) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={isDesktop ? "w-full mx-auto relative mt-6 block" : "hidden"}
      >
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
                    className="absolute inset-0 bg-[#EFF6FF] dark:bg-[#111D32] rounded-t-3xl"
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
          <div className="w-full h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] bg-[#EFF6FF] dark:bg-[#111D32] rounded-b-3xl rounded-tr-3xl" />
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
                          <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] px-2.5 py-0.5 rounded-md bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/20 dark:border-[#3B82F6]/30">
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
                    <p className="text-sm font-semibold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider">
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
                      <BlobButton
                        variant="primary"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs !py-2 !px-4"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </BlobButton>
                    )}
                    {project.github && (
                      <BlobButton
                        variant="secondary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs !py-2 !px-4"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </BlobButton>
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
                      alt={`${project.title} — Interface Screenshot`}
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
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Tab ("Upcoming"): 3 Logos and "Work in Progress" ONLY */}
          <div
            aria-hidden={activeTab !== 5}
            className={`transition-opacity duration-200 ${
              activeTab === 5 ? "flex flex-col items-center justify-center min-h-[380px] sm:min-h-[420px] py-12 px-4" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-8 max-w-xl mx-auto text-center">
              {/* Preserved 3 authentic upcoming-project logos */}
              <div className="flex items-center justify-center gap-6 sm:gap-10">
                {/* Logo 1: Sovereign Architecture Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3.5 flex items-center justify-center shadow-md">
                  <Image
                    src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024871/Sovereign-Icon-Black_y2adx8.png"
                    alt="Sovereign Architecture AI System"
                    width={48}
                    height={48}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Logo 2: Neural Core Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-neutral-950 border border-neutral-700/80 p-3.5 flex items-center justify-center shadow-md">
                  <Image
                    src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024925/logo_zkwhb6.png"
                    alt="Neural Core AI Platform"
                    width={48}
                    height={48}
                    unoptimized
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Logo 3: Zenith Swarm Coordinator SVG */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3.5 flex items-center justify-center shadow-md">
                  <ZenithArcSvg className="w-9 h-9 sm:w-11 sm:h-11" />
                </div>
              </div>

              {/* Text: Work in Progress */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/25 dark:border-[#3B82F6]/35 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] dark:bg-[#3B82F6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB] dark:bg-[#3B82F6]" />
                  </span>
                  <span>Active</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black dark:text-white">
                  Work in Progress
                </h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. MOBILE VIEW: Horizontal Snap-Scroll (Matching Hackathon Wins Pattern)   */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={!isDesktop ? "w-full block" : "hidden"}
      >
        <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          data-lenis-prevent
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* 5 Live Project Cards */}
          {LIVE_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="w-[85vw] max-w-[360px] flex-shrink-0 snap-start"
            >
              <div className="relative h-full min-h-[490px] rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-5 flex flex-col justify-between shadow-sm">
                <div>
                  {/* Top Project Banner Image */}
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[var(--theme-border)] bg-neutral-950 mb-4 shadow-sm">
                    <Image
                      src={project.image}
                      alt={`${project.title} — Interface Screenshot`}
                      fill
                      sizes="360px"
                      unoptimized
                      priority={idx < 2}
                      className="object-cover object-top"
                    />
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-[#2563EB] dark:hover:bg-[#3B82F6] transition-colors"
                        aria-label={`Open ${project.title} live demo`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Metadata Header: Logo + Year + Title */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <ProjectLogoBadge project={project} />
                    <div>
                      <div className="flex items-center gap-2">
                        {project.year && (
                          <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] px-2 py-0.5 rounded-md bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/20 dark:border-[#3B82F6]/30">
                            {project.year}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--theme-text)] mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider mb-2">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--theme-text-muted)]">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-[var(--theme-surface-2)] border border-[var(--theme-border)] text-[var(--theme-text)] shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono rounded-md text-[var(--theme-text-muted)]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-3 border-t border-[var(--theme-border)] flex items-center gap-2 mt-auto">
                  {project.link && (
                    <BlobButton
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-xs !py-1.5 !px-3 shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </BlobButton>
                  )}
                  {project.github && (
                    <BlobButton
                      variant="secondary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs !py-1.5 !px-3"
                    >
                      <FiGithub className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </BlobButton>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: Upcoming Projects ("Work in Progress" only) */}
          <div className="w-[85vw] max-w-[360px] flex-shrink-0 snap-start">
            <div className="relative h-full min-h-[490px] rounded-[1.5rem] border border-[var(--theme-border)] bg-[var(--theme-card)] p-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-6 my-auto text-center flex flex-col items-center justify-center">
                {/* 3 Upcoming Logos */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2.5 flex items-center justify-center shadow-md">
                    <Image
                      src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024871/Sovereign-Icon-Black_y2adx8.png"
                      alt="Sovereign Architecture AI System"
                      width={36}
                      height={36}
                      unoptimized
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-neutral-950 border border-neutral-700/80 p-2.5 flex items-center justify-center shadow-md">
                    <Image
                      src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791024925/logo_zkwhb6.png"
                      alt="Neural Core AI Platform"
                      width={36}
                      height={36}
                      unoptimized
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2.5 flex items-center justify-center shadow-md">
                    <ZenithArcSvg className="w-8 h-8" />
                  </div>
                </div>

                {/* Only "Work in Progress" text */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/25 dark:border-[#3B82F6]/35 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] dark:bg-[#3B82F6] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB] dark:bg-[#3B82F6]" />
                    </span>
                    <span>Active</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[var(--theme-text)]">
                    Work in Progress
                  </h3>
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--theme-border)] text-center">
                <span className="text-[11px] font-mono text-[var(--theme-text-secondary)] uppercase tracking-wider">
                  Upcoming Deployments
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll progress bar (Matching Hackathon Wins) */}
        <div className="w-full max-w-xs mx-auto h-1 bg-[var(--theme-border)] rounded-full mt-4 overflow-hidden relative">
          <div
            className="h-full bg-[#2563EB] dark:bg-[#3B82F6] rounded-full transition-transform duration-75 origin-left"
            style={{
              width: "100%",
              transform: `scaleX(${Math.max(scrollProgress, 0.16)})`,
            }}
          />
        </div>
        <p className="text-center text-[11px] font-mono text-[var(--theme-text-secondary)] mt-2">
          ← Swipe horizontally to explore all projects →
        </p>
      </motion.div>
    </section>
  );
}

export default Projects;

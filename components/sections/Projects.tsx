"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Clock, Layers } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/lib/projects-data";
import { GooeySvgFilter } from "@/components/ui/gooey-svg-filter";

type ProjectCategory = "all" | "ai" | "web";

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "ai", label: "AI Systems" },
  { id: "web", label: "Web Applications" },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "all") return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
      {/* SVG Gooey Filter instance specifically for project visual controls */}
      <GooeySvgFilter id="projects-gooey-filter" strength={6} />

      {/* Header & Category Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <div className="section-eyebrow">Portfolio Works</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 text-[var(--theme-text)]">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-[var(--theme-text-secondary)] max-w-2xl text-base md:text-lg">
            Production AI systems, full-stack platforms, and operational software built with scalable engineering and thoughtful interfaces.
          </p>
        </motion.div>

        {/* Gooey Interactive Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center md:justify-end"
        >
          <div
            className="inline-flex p-1.5 rounded-2xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] relative"
            style={{ filter: "url(#projects-gooey-filter)" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 text-xs font-bold rounded-xl transition-colors duration-200 z-10 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategoryPill"
                      className="absolute inset-0 bg-[#FF0000] rounded-xl shadow-[0_2px_12px_rgba(255,0,0,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Grid: 2 columns on tablet/desktop */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isUpcoming = Boolean(project.isUpcoming);

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <div
                  className={`group relative rounded-2xl overflow-hidden border border-[var(--theme-border)] bg-[var(--theme-card)] transition-all duration-300 hover:border-[#FF0000]/50 hover:shadow-[0_12px_36px_rgba(255,0,0,0.12)] flex flex-col h-full ${
                    isUpcoming ? "border-dashed" : ""
                  }`}
                >
                  {/* Visual Preview Container */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-[var(--theme-border)]">
                    {project.image.startsWith("http") || project.image.startsWith("/") ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-neutral-950 text-neutral-600">
                        <Clock className="w-12 h-12" />
                      </div>
                    )}

                    {/* Gradient Overlay for subtle depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />

                    {/* Upcoming tag if applicable */}
                    {isUpcoming && (
                      <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700 text-[11px] font-semibold text-neutral-300 backdrop-blur-md flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#FF0000]" />
                        <span>In Development</span>
                      </div>
                    )}
                  </div>

                  {/* Content & Actions */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--theme-accent)]">
                          {project.subtitle}
                        </span>
                        {!isUpcoming && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="w-8 h-8 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-2)] flex items-center justify-center text-[var(--theme-text)] hover:text-[#FF0000] hover:border-[#FF0000]/60 transition-colors"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--theme-text)] group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Pills & Link Buttons */}
                    <div className="pt-2 border-t border-[var(--theme-border)]/50 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[var(--theme-surface-2)] border border-[var(--theme-border)] text-[var(--theme-text-muted)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {!isUpcoming ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--theme-text)] hover:text-primary transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-[var(--theme-text-muted)] italic">
                          Preview soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Projects;

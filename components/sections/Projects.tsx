"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Monitor, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/lib/projects-data";

export function Projects() {
  return (
    <section id="projects" className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16 text-center md:text-left"
      >
        <div className="section-eyebrow">Portfolio Works</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--theme-text)]">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl text-base md:text-lg">
          Production AI systems, full-stack platforms, and operational software built with scalable engineering and thoughtful interfaces.
        </p>
      </motion.div>

      {/* Grid: 2 columns on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
        {projectsData.map((project, idx) => {
          const isUpcoming = Boolean(project.isUpcoming);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
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
      </div>

      {/* Portfolio OS Terminal Showcase Callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 rounded-2xl glass-panel border border-[var(--theme-border)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/30 flex items-center justify-center text-primary flex-shrink-0">
            <Monitor className="w-6 h-6 text-[#FF0000]" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[var(--theme-text)]">
              Experience Samrit&apos;s Portfolio OS
            </h4>
            <p className="text-sm text-[var(--theme-text-secondary)]">
              Explore projects through an interactive browser desktop with multi-window multitasking and simulated terminal.
            </p>
          </div>
        </div>

        <a
          href="https://samrit-portfolio-os.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--theme-text)] text-[var(--theme-bg)] font-semibold text-sm hover:bg-[#FF0000] hover:text-white transition-colors duration-200 flex-shrink-0 shadow-sm"
        >
          <span>Launch Portfolio OS</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;

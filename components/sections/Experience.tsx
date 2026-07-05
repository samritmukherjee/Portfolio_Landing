"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollRevealText } from "@/components/animations/ScrollRevealText";

interface ExperienceEntry {
  id: number;
  role: string;
  organization: string;
  duration: string;
  type: "work" | "volunteer" | "leadership";
  highlights: string[];
}

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: "Technical Advisor (Internship)",
    organization: "Mount Litera Zee School",
    duration: "2024 – Present",
    type: "work",
    highlights: [
      "Provided technical guidance on digital systems and infrastructure",
      "Assisted in improving technology-driven learning workflows",
      "Collaborated on designing and structuring the school's website and ERP system",
      "Supported troubleshooting and implementation of technical solutions"
    ]
  },
  {
    id: 2,
    role: "Member — Hackerspace (MSIT)",
    organization: "Designer & Web Contributor",
    duration: "2023 – Present",
    type: "work",
    highlights: [
      "Designed visual assets and creative collateral for community events",
      "Contributed to structured technical documentation for community platforms",
      "Maintained design consistency across various digital touchpoints",
      "Supported web-related tasks and minor development contributions"
    ]
  }
];

function TimelineItem({
  exp,
  index,
  isDesktop,
}: {
  exp: ExperienceEntry;
  index: number;
  isDesktop: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when 20% of the item is in view
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col ${
        isDesktop ? (isLeft ? "lg:flex-row" : "lg:flex-row-reverse") : ""
      } items-stretch w-full gap-8 mb-12`}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute ${
          isDesktop ? "lg:left-1/2 lg:-translate-x-1/2" : "left-4 -translate-x-1/2"
        } top-8 z-10`}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 border-accent-500 transition-colors duration-500 ${
            inView ? "bg-accent-500" : "bg-[var(--theme-surface)]"
          }`}
        />
      </div>

      {/* Card Element */}
      <motion.div
        initial={{
          opacity: 0,
          x: isDesktop ? (isLeft ? -40 : 40) : -16,
        }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full ${isDesktop ? "lg:w-[calc(50%-2rem)]" : "pl-10"}`}
      >
        <div className="glass-card p-5 sm:p-7 lg:p-9 group border-l-2 border-l-[var(--theme-border)] hover:border-l-accent-500 hover:shadow-[0_24px_50px_-30px_var(--theme-shadow-soft)] hover:translate-y-[-4px] hover:scale-[1.01] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-500 mb-2 block transition-all group-hover:translate-x-1 duration-300">
                  {exp.duration}
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--theme-text)] group-hover:text-accent-400 transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-sm text-[var(--theme-text-muted)] font-medium mt-1">
                  {exp.organization}
                </p>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[var(--theme-text-muted)] text-xs sm:text-sm items-start transition-all duration-300 group-hover:translate-x-0.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[color-mix(in_oklch,var(--theme-border)_80%,transparent)] mt-1.5 flex-shrink-0 group-hover:bg-accent-500 group-hover:scale-110 transition-all duration-300" />
                    <span className="group-hover:text-[var(--theme-text)] transition-colors duration-300">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-shrink-0">
              <span className="px-4 py-1.5 bg-[color-mix(in_oklch,var(--theme-surface-2)_80%,transparent)] group-hover:bg-accent-500/10 group-hover:border-accent-500/40 text-[var(--theme-text)] group-hover:text-accent-400 text-xs font-bold rounded-full border border-[var(--theme-border)] uppercase tracking-tighter transition-all duration-300">
                {exp.type}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer to keep layout balanced on Desktop */}
      {isDesktop && <div className="hidden lg:block w-[calc(50%-2rem)]" />}
    </div>
  );
}

export const Experience = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="experience" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom max-w-full overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-[var(--theme-text)] flex flex-wrap gap-x-2">
              <ScrollRevealText text="Professional" />
              <ScrollRevealText text="Journey" className="gradient-accent" />
            </h2>
            <p className="text-[var(--theme-text-muted)] max-w-xl">
              A timeline of my professional work, volunteer efforts, and leadership roles.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-[color-mix(in_oklch,var(--theme-border)_70%,transparent)] mx-8 mb-4" />
        </div>

        <div className="relative mt-8">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[var(--theme-border)]" />

          {experiences.map((exp, idx) => (
            <TimelineItem key={exp.id} exp={exp} index={idx} isDesktop={isDesktop} />
          ))}
        </div>
      </div>
    </section>
  );
};

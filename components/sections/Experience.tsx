"use client";
import React from "react";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  role: string;
  organization: string;
  duration: string;
  type: "work" | "volunteer" | "leadership";
  highlights: string[];
}

const experiences: Experience[] = [
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

export const Experience = () => {
  return (
    <section id="experience" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom max-w-full overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-[var(--theme-text)]">Professional <span className="gradient-accent">Journey</span></h2>
            <p className="text-[var(--theme-text-muted)] max-w-xl">
              A timeline of my professional work, volunteer efforts, and leadership roles.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-[color-mix(in_oklch,var(--theme-border)_70%,transparent)] mx-8 mb-4" />
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="glass-card p-5 sm:p-7 lg:p-9 group border-l-2 border-l-[var(--theme-border)]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-500 mb-2 block">
                      {exp.duration}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--theme-text)] group-hover:text-accent-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--theme-text-muted)] font-medium">{exp.organization}</p>
                  </div>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-[var(--theme-text-muted)] text-xs sm:text-sm items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[color-mix(in_oklch,var(--theme-border)_80%,transparent)] mt-1.5 flex-shrink-0 group-hover:bg-accent-500 transition-colors" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-shrink-0">
                   <span className="px-4 py-1.5 bg-[color-mix(in_oklch,var(--theme-surface-2)_80%,transparent)] text-[var(--theme-text)] text-xs font-bold rounded-full border border-[var(--theme-border)] uppercase tracking-tighter">
                      {exp.type}
                   </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

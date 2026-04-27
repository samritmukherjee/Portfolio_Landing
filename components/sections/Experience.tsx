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
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-stone-50">Professional <span className="gradient-accent">Journey</span></h2>
            <p className="text-stone-400 max-w-xl">
              A timeline of my professional work, volunteer efforts, and leadership roles.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-stone-800 mx-8 mb-4" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-4 sm:p-6 lg:p-8 lg:p-10 group transition-all border-l-4 border-l-stone-800 hover:border-l-accent-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent-500 mb-2 block">
                      {exp.duration}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-stone-50 group-hover:text-accent-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-stone-400 font-medium">{exp.organization}</p>
                  </div>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-stone-500 dark:text-stone-500 text-xs sm:text-sm items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-800 mt-1.5 flex-shrink-0 group-hover:bg-accent-500 transition-colors" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-shrink-0">
                   <span className="px-4 py-1.5 bg-theme-surface text-stone-900 text-xs font-bold rounded-full border border-theme-border uppercase tracking-tighter">
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

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

interface ExperienceEntry {
  id: number;
  role: string;
  organization: string;
  duration: string;
  type: "Technical Advisor" | "Community & Design";
  highlights: string[];
}

const experiences: ExperienceEntry[] = [
  {
    id: 1,
    role: "Technical Advisor (Internship)",
    organization: "Mount Litera Zee School",
    duration: "2024 – Present",
    type: "Technical Advisor",
    highlights: [
      "Provide technical guidance on digital systems, school technology infrastructure, and educational workflows.",
      "Contribute to the planning and development of school websites and ERP-related systems.",
      "Assist with digitizing administrative processes and improving technology-driven operations.",
      "Support requirement analysis, workflow planning, implementation, troubleshooting, and coordination with development teams.",
    ],
  },
  {
    id: 2,
    role: "Member — Hackerspace (MSIT)",
    organization: "Designer & Web Contributor",
    duration: "2023 – Present",
    type: "Community & Design",
    highlights: [
      "Design visual assets, banners, and creative materials for community events and initiatives.",
      "Contribute to technical documentation and structured content for internal and external use.",
      "Help maintain design consistency across community platforms and media.",
      "Support web-related tasks and development contributions when required.",
    ],
  },
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
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col ${
        isDesktop ? (isLeft ? "lg:flex-row" : "lg:flex-row-reverse") : ""
      } items-stretch w-full gap-8 mb-12 last:mb-0`}
    >
      {/* Timeline Node Dot with Reversible Active Glow */}
      <div
        className={`absolute ${
          isDesktop ? "lg:left-1/2 lg:-translate-x-1/2" : "left-4 -translate-x-1/2"
        } top-8 z-10`}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 border-primary transition-all duration-300 ${
            inView
              ? "bg-primary ring-4 ring-primary/25 scale-110"
              : "bg-[var(--theme-surface)] scale-100"
          }`}
        />
      </div>

      {/* Card Element with Reversible Lateral Reveal */}
      <motion.div
        initial={{
          opacity: 0,
          x: isDesktop ? (isLeft ? -35 : 35) : -15,
        }}
        animate={
          inView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isDesktop ? (isLeft ? -35 : 35) : -15 }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full ${isDesktop ? "lg:w-[calc(50%-2rem)]" : "pl-10"}`}
      >
        <div className="glass-card p-6 sm:p-8 rounded-2xl group border border-[var(--theme-border)] border-l-4 border-l-primary hover:-translate-y-0.5 transition-all duration-200 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-primary block">
                {exp.duration}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--theme-text)] group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold text-[var(--theme-text-secondary)]">
                {exp.organization}
              </p>
            </div>

            <span className="px-3.5 py-1 bg-primary/10 text-primary border border-primary/25 text-xs font-bold rounded-full uppercase tracking-wider self-start">
              {exp.type}
            </span>
          </div>

          <ul className="space-y-2.5 pt-3 border-t border-[var(--theme-border)]/60">
            {exp.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[var(--theme-text-secondary)] text-xs sm:text-sm items-start leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Spacer to keep layout balanced on Desktop */}
      {isDesktop && <div className="hidden lg:block w-[calc(50%-2rem)]" />}
    </div>
  );
}

export function Experience() {
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section
      ref={sectionRef}
      id="career"
      className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 md:py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 space-y-3"
      >
        <div className="mb-2">
          <span className="section-eyebrow">Professional History</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--theme-text)] leading-[1.05]">
          Professional <span className="font-serif italic text-gradient-primary">Journey</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-xl mx-auto text-base md:text-lg">
          A track record of technical advisory, educational systems architecture, and community design contributions.
        </p>
      </motion.div>

      <div className="relative mt-8">
        {/* Continuous Connecting Line Background Track */}
        <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-[var(--theme-border)]" />

        {/* Scroll-Linked Downward Animated Timeline Line */}
        <motion.div
          style={{ scaleY: scrollYProgress, willChange: "transform" }}
          className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 origin-top bg-gradient-to-b from-primary via-[#FF3333] to-[#FF6666] z-[5]"
        />

        {experiences.map((exp, idx) => (
          <TimelineItem key={exp.id} exp={exp} index={idx} isDesktop={isDesktop} />
        ))}
      </div>
    </section>
  );
}

export default Experience;

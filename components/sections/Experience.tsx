"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";

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
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col ${
        isDesktop ? (isLeft ? "lg:flex-row" : "lg:flex-row-reverse") : ""
      } items-stretch w-full gap-8 mb-12 last:mb-0`}
    >
      {/* Timeline Node Dot */}
      <div
        className={`absolute ${
          isDesktop ? "lg:left-1/2 lg:-translate-x-1/2" : "left-4 -translate-x-1/2"
        } top-8 z-10`}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 border-[#FF0000] transition-all duration-500 ${
            inView
              ? "bg-[#FF0000] shadow-[0_0_12px_rgba(255,0,0,0.8)] scale-110"
              : "bg-[var(--theme-surface)]"
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
        <div className="glass-card p-6 sm:p-8 rounded-2xl group border border-[var(--theme-border)] border-l-4 border-l-[#FF0000] hover:shadow-[0_16px_40px_rgba(255,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF0000] block">
                {exp.duration}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--theme-text)] group-hover:text-primary transition-colors">
                {exp.role}
              </h3>
              <p className="text-sm font-semibold text-[var(--theme-text-secondary)]">
                {exp.organization}
              </p>
            </div>

            <span className="px-3.5 py-1 bg-[#FF0000]/10 text-primary border border-[#FF0000]/25 text-xs font-bold rounded-full uppercase tracking-wider self-start">
              {exp.type}
            </span>
          </div>

          <ul className="space-y-2.5 pt-3 border-t border-[var(--theme-border)]/60">
            {exp.highlights.map((highlight, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[var(--theme-text-secondary)] text-xs sm:text-sm items-start leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] mt-2 flex-shrink-0" />
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

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      id="career"
      className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-16 gap-4">
        <div className="space-y-3 text-center md:text-left">
          <div className="section-eyebrow">Professional History</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--theme-text)]">
            Professional <span className="text-gradient-primary">Journey</span>
          </h2>
          <p className="text-[var(--theme-text-secondary)] max-w-xl text-base md:text-lg">
            A track record of technical advisory, educational systems architecture, and community design contributions.
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-[var(--theme-border)] mx-8 mb-4" />
      </div>

      <div className="relative mt-8">
        {/* Continuous Connecting Line Background Track */}
        <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-[var(--theme-border)]" />

        {/* Scroll-Linked Downward Animated Timeline Line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 origin-top bg-gradient-to-b from-[#FF0000] via-[#FF4D4D] to-[#FF0000] shadow-[0_0_12px_rgba(255,0,0,0.8)] z-[5]"
        />

        {experiences.map((exp, idx) => (
          <TimelineItem key={exp.id} exp={exp} index={idx} isDesktop={isDesktop} />
        ))}
      </div>
    </section>
  );
}

export default Experience;

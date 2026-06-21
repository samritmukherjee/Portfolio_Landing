"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LEARNING_NOW = ["WebMCP", "RAG Pipelines", "Edge AI", "Open Source"];

function TiltProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative w-full sm:max-w-sm lg:max-w-md aspect-[4/5] rounded-3xl lg:rounded-[2.75rem] overflow-hidden shadow-lg lg:shadow-2xl transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-[var(--theme-surface)]">
        <img
          src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133776/samrit-profile_hrusin.jpg"
          alt="Samrit Mukherjee — AI & ML Developer at MSIT portrait"
          width={480}
          height={600}
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg)] via-transparent to-transparent opacity-60" />
      </div>
      <div
        className="absolute inset-0 border-[10px] border-[var(--theme-border)] pointer-events-none rounded-[2.75rem]"
        aria-hidden
      />
      <div className="absolute bottom-8 left-8 right-8 p-5 glass-card !rounded-2xl backdrop-blur-md border-white/10">
        <p className="text-[var(--theme-text)] font-bold text-sm mb-1 uppercase tracking-wider">
          Samrit Mukherjee
        </p>
        <p className="text-accent-400 text-[0.65rem] font-black uppercase tracking-widest">
          AI · Full Stack · Kolkata
        </p>
      </div>
    </div>
  );
}

export const About = () => {
  return (
    <section id="about" className="section-wrapper overflow-hidden min-h-screen">
      <div className="container-custom">
        <blockquote className="philosophy-quote mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--theme-text)] leading-snug italic">
            &ldquo;Build tools that matter, for people who need them.&rdquo;
          </p>
        </blockquote>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-[var(--theme-text)] mb-6 max-w-2xl">
              Turning complex ideas into{" "}
              <span className="gradient-accent">Simple Solutions.</span>
            </h2>

            <div className="space-y-4 text-[var(--theme-text-muted)]">
              <p>
                I&apos;m Samrit Mukherjee, a BTech Computer Science & Engineering (AI & ML) student at Meghnad Saha Institute of Technology (MSIT) and an AI & ML Developer. I focus on bridging the gap between complex technology and real-world usability.
              </p>
              <p>
                As a founder and educator, I teach Computer Science through a project-based
                approach, emphasizing practical implementation over theory. I actively participate in open source contributions, including programs like GSSoC (GirlScript Summer of Code), and have secured multiple Hackathon achievements by building innovative solutions.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--theme-text-muted)] mb-3">
                Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {LEARNING_NOW.map((tech) => (
                  <span
                    key={tech}
                    className="learning-pill px-4 py-2 rounded-full text-sm font-semibold text-accent-300 border border-accent-500/30 bg-accent-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-8 sm:mt-12">
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-[var(--theme-text)]">8+</h4>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--theme-text-muted)] font-semibold mt-1">
                  Projects Built
                </p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-[var(--theme-text)]">8</h4>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--theme-text-muted)] font-semibold mt-1">
                  Hackathon Wins
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <TiltProfileCard />
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl -z-10"
              aria-hidden
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { DotGrid } from "@/components/ui/DotGrid";
import { LanyardBadge } from "@/components/ui/LanyardBadge";
import { BlobButton } from "@/components/ui/BlobButton";
import { scrollToElement } from "@/lib/scrollToElement";

export function Hero() {
  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/samritmukherjee",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/samrit-mukherjee/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:samritmukherjee05@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 md:pt-32 pb-12 overflow-hidden bg-[var(--theme-bg)] transition-colors duration-500"
    >
      {/* Background Dot Grid with subtle red ambient center glow */}
      <DotGrid width={24} height={24} cx={1.25} cy={1.25} cr={1.25} glow={true} />

      <div className="relative z-10 w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pb-6">
        {/* Left Column: Typography, Status, CTA & Socials */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status & Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full glass-panel border border-[var(--theme-border)] text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[var(--theme-text-muted)]">Available for New Projects</span>
            </div>
          </motion.div>

          {/* Headline with Large Red Gradient Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-3 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-2 text-[var(--theme-text)]">
              Hi, I&apos;m
            </h1>
            <span className="text-gradient-primary font-extrabold text-[clamp(2.75rem,6.5vw,5.5rem)] leading-none tracking-tight block pb-2 select-none">
              Samrit Mukherjee
            </span>
          </motion.div>

          {/* Tagline & Subtitle from myself.txt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="space-y-3 mb-6 w-full"
          >
            <p className="text-sm sm:text-base tracking-[0.14em] uppercase text-[var(--theme-accent)] font-bold">
              AI Systems <span className="text-[var(--theme-text-muted)] mx-1">•</span> Full-Stack Engineering{" "}
              <span className="text-[var(--theme-text-muted)] mx-1">•</span> Product Development
            </p>

            <p className="text-base sm:text-lg text-[var(--theme-text-secondary)] max-w-2xl leading-relaxed font-normal">
              Building intelligent, scalable software that transforms ambitious ideas into practical, user-focused products. I develop AI-powered applications, full-stack platforms, intelligent automation systems, and production-oriented software, combining AI engineering, backend architecture, and thoughtful user experiences to solve real-world problems.
            </p>

            {/* Authentic Portfolio Stats Banner from myself.txt */}
            <div className="pt-1">
              <span className="inline-block px-3.5 py-1.5 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface-2)] text-xs font-semibold text-[var(--theme-text)] shadow-sm">
                11× Hackathon Wins <span className="text-[var(--theme-accent)] mx-1.5">|</span> 8 Projects Built <span className="text-[var(--theme-accent)] mx-1.5">|</span> 5 Projects Featured <span className="text-[var(--theme-accent)] mx-1.5">|</span> 3 More Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Restored Liquid Gooey Blob Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full lg:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <BlobButton
              type="button"
              variant="primary"
              onClick={() => scrollToElement("projects")}
              className="min-h-[2.85rem] px-6 text-sm"
            >
              <span>View Work</span>
              <ArrowDown className="w-4 h-4 ml-1" />
            </BlobButton>

            <BlobButton
              href="/Resume.pdf?v=20261003"
              variant="secondary"
              download="Samrit_Mukherjee_Resume.pdf"
              className="min-h-[2.85rem] px-6 text-sm"
            >
              <span>Resume</span>
              <FileText className="w-4 h-4 ml-1" />
            </BlobButton>
          </motion.div>

          {/* Social Links Row (Twitter/X completely removed) */}
          <motion.div
            className="flex items-center gap-4 justify-center lg:justify-start w-full lg:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full glass-panel border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-text-muted)] hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: Physics-based Swinging Lanyard ID Badge */}
        <motion.div
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LanyardBadge
            name="Samrit Mukherjee"
            role="AI Systems • Full Stack Dev"
            badgeId="SM-2026-DEV"
            accentColor="#FF0000"
            ropeLength={75}
            ropeColor="#1A1A1A"
            cardWidth="w-72 sm:w-80 md:w-84"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

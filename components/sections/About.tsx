"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, Layers, Sparkles } from "lucide-react";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

import { OrbitingCirclesDemo } from "@/components/ui/orbiting-circles-demo";

export function About() {
  const stats = [
    {
      icon: <Trophy className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />,
      value: "11×",
      label: "Hackathon Wins & Top Placements",
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />,
      value: "8×",
      label: "Production & Research Projects Built",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />,
      value: "5",
      label: "Featured Platforms & Systems",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#2563EB] dark:text-[#60A5FA]" />,
      value: "3",
      label: "New AI Solutions Coming Soon",
    },
  ];

  return (
    <section id="about" className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 md:py-16">
      {/* Centered Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-8 sm:mb-10"
      >
        <div className="mb-2">
          <span className="section-eyebrow">About Samrit</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-[var(--theme-text)] leading-[1.05]">
          Turning Complex Ideas into{" "}
          <span className="font-serif italic text-gradient-primary">Practical Solutions</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
          AI systems engineer and full-stack developer dedicated to building scalable enterprise platforms, agentic workflows, and high-impact software products.
        </p>
      </motion.div>

      {/* 2-Column: Story Narrative & Borderless Orbiting Projects Component */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Column: Authentic Narrative with Text Highlighter & Reversible Slide */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-4 text-base md:text-lg text-[var(--theme-text-secondary)] leading-relaxed">
            <p>
              I&apos;m Samrit Mukherjee, a{" "}
              <TextHighlighter
                highlightColor="rgba(255, 0, 0, 0.14)"
                useInViewOptions={{ once: false, initial: false, amount: 0.2 }}
              >
                B.Tech Computer Science and Engineering student (AI &amp; ML) at Meghnad Saha Institute of Technology (MSIT)
              </TextHighlighter>
              , Kolkata under MAKAUT, graduating in 2028.
              <span className="font-accent text-xs sm:text-sm text-primary ml-2 inline-block">
                ~ class of &apos;28
              </span>
            </p>
            <p>
              I build AI-powered products, full-stack applications, automation systems, and management platforms. My interests include{" "}
              <TextHighlighter
                highlightColor="rgba(255, 0, 0, 0.14)"
                useInViewOptions={{ once: false, initial: false, amount: 0.2 }}
              >
                agentic AI, Retrieval-Augmented Generation (RAG), computer vision, intelligent workflows
              </TextHighlighter>
              , and scalable software architecture.
            </p>
            <p>
              From developing AI-driven SaaS platforms to building administrative systems and computer vision applications, I enjoy working across the complete development lifecycle—from understanding requirements and designing architectures to implementation, testing, and deployment.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 py-1 text-[var(--theme-text)]">
              <span className="font-serif italic text-lg sm:text-xl font-normal block leading-snug">
                &ldquo;Build tools that matter, for people who need them.&rdquo;
              </span>
              <span className="font-accent text-xs sm:text-sm text-[var(--theme-text-muted)] mt-1.5 block">
                — Samrit Mukherjee
              </span>
            </blockquote>
          </div>
        </motion.div>

        {/* Right Column: Orbiting Circles Component with Reversible Scale */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <OrbitingCirclesDemo />
        </motion.div>
      </div>

      {/* Bottom Row: 4 Authentic Key Stats Cards with Reversible Stagger */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8 sm:mt-10">
        {stats.map((item, idx) => (
          <motion.div
            key={idx}
            className="glass-panel p-6 rounded-2xl border border-[var(--theme-border)] hover:border-primary/40 transition-colors duration-200 group relative overflow-hidden shadow-xs"
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Icon Container */}
            <div className="text-primary mb-3.5 p-2.5 bg-primary/10 border border-primary/20 w-max rounded-xl">
              {item.icon}
            </div>

            {/* Stat Value & Label */}
            <h3 className="text-3xl font-extrabold text-[var(--theme-text)] mb-1">
              {item.value}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[var(--theme-text-secondary)] leading-snug">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;

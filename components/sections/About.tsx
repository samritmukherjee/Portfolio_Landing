"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, Layers, Sparkles } from "lucide-react";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

export function About() {
  const stats = [
    {
      icon: <Trophy className="w-6 h-6 text-[#FF0000]" />,
      value: "11×",
      label: "Hackathon Wins & Top Placements",
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#FF0000]" />,
      value: "8×",
      label: "Production & Research Projects Built",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#FF0000]" />,
      value: "5",
      label: "Featured Platforms & Systems",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF0000]" />,
      value: "3",
      label: "New AI Solutions Coming Soon",
    },
  ];

  return (
    <section id="about" className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
      <motion.div
        className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Heading and Narrative with Text Highlighter */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="section-eyebrow">About Samrit</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--theme-text)]">
              Turning Complex Ideas into{" "}
              <span className="text-gradient-primary">Practical Solutions</span>
            </h2>

            <div className="space-y-4 text-base md:text-lg text-[var(--theme-text-secondary)] leading-relaxed">
              <p>
                I&apos;m Samrit Mukherjee, a{" "}
                <TextHighlighter highlightColor="rgba(255, 0, 0, 0.18)">
                  B.Tech Computer Science and Engineering student (AI &amp; ML) at Meghnad Saha Institute of Technology (MSIT)
                </TextHighlighter>
                , Kolkata under MAKAUT, graduating in 2027.
              </p>
              <p>
                I build AI-powered products, full-stack applications, automation systems, and management platforms. My interests include{" "}
                <TextHighlighter highlightColor="rgba(255, 0, 0, 0.18)">
                  agentic AI, Retrieval-Augmented Generation (RAG), computer vision, intelligent workflows
                </TextHighlighter>
                , and scalable software architecture.
              </p>
              <p>
                From developing AI-driven SaaS platforms to building administrative systems and computer vision applications, I enjoy working across the complete development lifecycle—from understanding requirements and designing architectures to implementation, testing, and deployment.
              </p>
              <blockquote className="border-l-2 border-[#FF0000] pl-4 py-1 italic text-[var(--theme-text)] font-medium">
                &ldquo;Build tools that matter, for people who need them.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Stat Cards matching myself.txt */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-[var(--theme-border)] hover:border-[#FF0000]/50 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(255,0,0,0.12)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Glowing Orb */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#FF0000]/10 rounded-full blur-2xl group-hover:bg-[#FF0000]/20 transition-colors pointer-events-none" />

              {/* Icon Container */}
              <div className="text-primary mb-4 p-3 bg-[#FF0000]/10 border border-[#FF0000]/25 w-max rounded-xl">
                {item.icon}
              </div>

              {/* Stat Value & Label */}
              <h3 className="text-3xl font-extrabold text-[var(--theme-text)] mb-1">
                {item.value}
              </h3>
              <p className="text-sm font-medium text-[var(--theme-text-muted)] leading-snug">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;

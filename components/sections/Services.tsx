"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, ShieldCheck, Cpu, GitMerge } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Boxes,
      title: "Product Design & Engineering",
      description:
        "Architecting AI-driven SaaS applications and practical platforms from concept to deployment. Combining modern Next.js/React frontends with resilient backends, thoughtful user workflows, and dependable system architecture.",
    },
    {
      icon: Cpu,
      title: "ERP & Management Systems",
      description:
        "Designing administrative platforms, asset management systems, and institutional digital workflows. Implementing structured databases, inventory tracking, approval lifecycles, and operational software.",
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Access Control & Security",
      description:
        "Engineering permission-driven architectures, multi-tier authentication, audit trails, and policy-based resource protection to ensure accountability and integrity across enterprise software.",
    },
    {
      icon: GitMerge,
      title: "Workflow Automation & Intelligent AI",
      description:
        "Building intelligent agentic workflows, Retrieval-Augmented Generation (RAG) pipelines, conversational support systems, and automated API integrations that streamline business operations.",
    },
  ];

  return (
    <section id="services" className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 md:py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 sm:mb-12 text-center max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="section-eyebrow">Expertise &amp; Disciplines</span>
          <span className="font-sans font-medium text-xs sm:text-sm text-[var(--theme-text-muted)] tracking-wide hidden sm:inline">
            • what I do
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-[var(--theme-text)] leading-[1.05]">
          Product Engineering &amp;{" "}
          <span className="font-serif italic text-gradient-primary">Enterprise Systems</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
          Transforming ambitious concepts into practical, production-ready software with disciplined engineering, automation, and enterprise-grade reliability.
        </p>
      </motion.div>

      {/* 2x2 Grid of Refined Cards with Reversible Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isLeft ? -24 : 24, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <div className="group relative h-full p-7 sm:p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] transition-all duration-200 hover:border-primary/40 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden shadow-xs">
                {/* Subtle top edge accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] group-hover:border-primary/30 flex items-center justify-center mb-6 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--theme-text)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[var(--theme-text-secondary)] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;

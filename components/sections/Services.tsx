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
    <section id="services" className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="mb-14 sm:mb-16 text-center"
      >
        <div className="section-eyebrow">Expertise &amp; Disciplines</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--theme-text)]">
          Product Engineering &amp;{" "}
          <span className="text-gradient-primary">Enterprise Systems</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
          Transforming ambitious concepts into practical, production-ready software with disciplined engineering, automation, and enterprise-grade reliability.
        </p>
      </motion.div>

      {/* 2x2 Grid of Refined Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <div className="group relative h-full p-7 sm:p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] transition-all duration-300 hover:border-[#FF0000]/50 hover:shadow-[0_12px_36px_rgba(255,0,0,0.06)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                {/* Subtle top edge accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF0000] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] group-hover:border-[#FF0000]/40 group-hover:bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] mb-6 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 text-[#FF0000] transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--theme-text)] group-hover:text-primary transition-colors">
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

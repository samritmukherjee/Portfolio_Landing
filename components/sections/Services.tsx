"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, ShieldCheck, Cpu, GitMerge } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

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
    <section id="services" className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-14 sm:mb-16 text-center"
      >
        <div className="section-eyebrow">Expertise & Disciplines</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--theme-text)]">
          Product Engineering &amp;{" "}
          <span className="text-gradient-primary">Enterprise Systems</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
          Transforming ambitious concepts into practical, production-ready software with disciplined engineering, automation, and enterprise-grade reliability.
        </p>
      </motion.div>

      {/* 2x2 Grid of Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <SpotlightCard
                className="h-full p-7 sm:p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] hover:border-[#FF0000]/40 transition-colors shadow-sm flex flex-col justify-between"
                gradientColor="rgba(255, 0, 0, 0.08)"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/25 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-6 h-6 text-[#FF0000]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--theme-text)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--theme-text-secondary)] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;

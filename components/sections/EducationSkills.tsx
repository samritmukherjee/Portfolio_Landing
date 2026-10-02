"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  Building2,
  CheckCircle2,
  Code2,
  Server,
  Layout,
  Wrench,
  Palette,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function EducationSkills() {
  const educationItems = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      school: "Meghnad Saha Institute of Technology (MSIT), Kolkata",
      year: "2023 – 2027",
      badge: "Google Solution Challenge Top 106",
      badgeColor: "text-[#FF7A00] bg-[#FF7A00]/10 border-[#FF7A00]/30",
      icon: GraduationCap,
      details: [
        "Specializing in Artificial Intelligence, Machine Learning, Deep Neural Architectures, and Cloud Computing",
        "Core Coursework: Advanced Data Structures & Algorithms (DSA), Operating Systems, DBMS, Computer Networks",
        "Google Solution Challenge 2026 Global Finalist representing MSIT with the SUKALYA.ai platform",
        "Member at Hackerspace (MSIT), contributing to community web tools and student tech mentorship",
      ],
    },
    {
      degree: "Higher Secondary Education (Science & Computer Science)",
      school: "Higher Secondary STEM Board, Kolkata",
      year: "2021 – 2023",
      badge: "Excellence in STEM",
      badgeColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
      icon: Award,
      details: [
        "Rigorous foundation in Mathematics, Physics, Chemistry, and Computer Science (Java & Python)",
        "Consistent academic excellence across regional board STEM examinations",
        "Constructed early algorithmic programs, data structure implementations, and interactive tools",
        "Active participant in scholastic science symposiums, mathematics contests, and coding clubs",
      ],
    },
  ];

  // Authentic skill categories from lib/skills-data.ts & myself.txt (No fake percentage bars)
  const technicalCategories = [
    {
      label: "Languages",
      icon: Code2,
      skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"],
    },
    {
      label: "Frontend & UI",
      icon: Layout,
      skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
    },
    {
      label: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "FastAPI", "Flask", "REST APIs", "SQL", "MongoDB"],
    },
    {
      label: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "Vercel", "AWS", "Render", "Razorpay"],
    },
  ];

  const coreConcepts = [
    {
      label: "Core Concepts",
      icon: Lightbulb,
      skills: [
        "Data Structures & Algorithms (DSA)",
        "AI Systems & RAG Workflows",
        "Full Stack Web Architecture",
        "Rapid Prototyping",
      ],
    },
    {
      label: "Design & Media",
      icon: Palette,
      skills: ["Figma", "UI/UX Design", "Adobe Photoshop", "After Effects", "Filmora"],
    },
  ];

  return (
    <section id="education" className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-24 space-y-20">
      {/* PART 1: Academic Background */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/25 flex items-center justify-center text-[#FF7A00] shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--theme-text)]">
              Academic <span className="text-gradient-primary">Background</span>
            </h2>
          </div>
          <p className="text-[var(--theme-text-secondary)] text-base md:text-lg max-w-2xl">
            Building the theoretical foundation, mathematical rigor, and engineering
            methodologies that empower practical software development.
          </p>
        </motion.div>

        {/* 2 Academic Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <SpotlightCard
                  className="h-full p-8 rounded-[2.25rem] border border-[var(--theme-border)] bg-[var(--theme-surface)]/90 shadow-xl"
                  gradientSize={300}
                  gradientColor="rgba(255, 122, 0, 0.12)"
                  gradientFrom="#FF7A00"
                  gradientTo="#FFA043"
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      {/* Top icon and badge */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/25 text-[#FF7A00] flex items-center justify-center shadow-sm">
                          <Icon className="w-7 h-7 text-[#FF7A00]" />
                        </div>
                        <span
                          className={`px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${item.badgeColor}`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>{item.badge}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-[var(--theme-text)] tracking-tight mb-2">
                        {item.degree}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[var(--theme-text-muted)] mb-6 pb-4 border-b border-[var(--theme-border)]/60">
                        <span className="flex items-center gap-1.5 text-[var(--theme-text)] font-bold">
                          <Building2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                          {item.school}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 font-mono text-[#FF7A00] font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                      </div>

                      <ul className="space-y-3.5">
                        {item.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-sm text-[var(--theme-text-secondary)] flex items-start gap-3 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                            <span className="text-[var(--theme-text)]/90 font-medium">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PART 2: Technical Arsenal & Core Competencies (Ground-truth Categorized Badges) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Technical Arsenal Categorized Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-6 glass-panel p-8 rounded-[2.25rem] border border-[var(--theme-border)] shadow-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--theme-text)] mb-2 flex items-center gap-2">
              <span>Technical</span>
              <span className="text-gradient-primary">Arsenal</span>
            </h3>
            <p className="text-sm text-[var(--theme-text-muted)] mb-6">
              Verified technical capabilities across languages, frontend frameworks, backend
              architectures, and deployment tooling.
            </p>

            <div className="space-y-5">
              {technicalCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--theme-text)] uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-[#FF7A00]" />
                      <span>{cat.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] text-xs font-medium text-[var(--theme-text)] hover:border-[#FF7A00]/40 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right: Core Concepts & Design Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="lg:col-span-6 glass-panel p-8 rounded-[2.25rem] border border-[var(--theme-border)] shadow-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-extrabold text-[var(--theme-text)] mb-2 flex items-center gap-2">
              <span>Core</span>
              <span className="text-gradient-primary">Competencies</span>
            </h3>
            <p className="text-sm text-[var(--theme-text-muted)] mb-6">
              Algorithmic problem solving, system design intuition, and creative multimedia
              capabilities.
            </p>

            <div className="space-y-5 mb-8">
              {coreConcepts.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--theme-text)] uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-[#FF7A00]" />
                      <span>{cat.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-xl bg-[#FF7A00]/10 border border-[#FF7A00]/25 text-xs font-semibold text-[var(--theme-text)] hover:border-[#FF7A00]/50 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Callout Banner */}
          <div className="pt-6 border-t border-[var(--theme-border)]/60">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FF7A00]/10 via-amber-500/5 to-transparent border border-[#FF7A00]/20 flex items-start gap-3.5 shadow-sm">
              <div className="p-2 rounded-xl bg-[#FF7A00]/20 text-[#FF7A00] shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5 text-[#FF7A00]" />
              </div>
              <div>
                <strong className="text-[var(--theme-text)] font-bold text-sm block mb-0.5">
                  Constant Learner &amp; Practical Builder
                </strong>
                <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                  Continuously engineering with modern AI workflows, distributed web
                  systems, and human-centered design principles.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default EducationSkills;

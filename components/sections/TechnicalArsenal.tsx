"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Layout,
  Brain,
  Database,
  Share2,
  Palette,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function TechnicalArsenal() {
  const technicalCategories = [
    {
      label: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "Prolog"],
    },
    {
      label: "Frontend Development",
      icon: Layout,
      skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    },
    {
      label: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "Flask", "FastAPI", "REST APIs", "SQL", "MongoDB", "Firebase", "Firestore"],
    },
    {
      label: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "LLM APIs",
        "RAG Pipelines",
        "LangChain",
        "LangGraph",
        "Agentic AI",
        "Semantic Search",
        "Vector Databases",
        "Computer Vision",
        "MediaPipe",
        "OpenCV",
        "NumPy",
        "Pandas",
      ],
    },
    {
      label: "Databases, Cloud & DevOps",
      icon: Database,
      skills: ["MongoDB Atlas", "Pinecone", "AWS", "Vercel", "Render", "Git", "GitHub", "Docker"],
    },
    {
      label: "Integrations & APIs",
      icon: Share2,
      skills: ["OpenAI", "Gemini", "Hugging Face", "VAPI", "Twilio", "Razorpay", "WhatsApp APIs", "OpenRouter"],
    },
    {
      label: "Design & Creative Tools",
      icon: Palette,
      skills: ["Figma", "Canva", "Adobe Photoshop", "Filmora", "UI/UX Architecture"],
    },
  ];

  const coreCompetencies = [
    "Data Structures & Algorithms (DSA)",
    "Full-Stack Software Architecture",
    "Agentic AI & Autonomous Workflows",
    "ERP & Management Information Systems",
    "Workflow Automation & Operations",
    "Authentication & Role-Based Access Control (RBAC)",
    "Real-Time Applications & WebSockets",
    "Testing, Debugging & Production Deployment",
  ];

  return (
    <section id="arsenal" className="w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-14 sm:mb-16 text-center md:text-left"
      >
        <div className="section-eyebrow">Skills & Capabilities</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--theme-text)]">
          Technical <span className="text-gradient-primary">Arsenal</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl text-base md:text-lg">
          A disciplined toolkit spanning AI engineering, full-stack web platforms, database infrastructure, and robust API development.
        </p>
      </motion.div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
        {technicalCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="h-full"
            >
              <SpotlightCard
                className="h-full p-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] hover:border-[#FF0000]/40 transition-colors shadow-sm flex flex-col justify-between"
                gradientColor="rgba(255, 0, 0, 0.06)"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#FF0000]/10 border border-[#FF0000]/25 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#FF0000]" />
                    </div>
                    <h3 className="font-bold text-base text-[var(--theme-text)]">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Skill Badges (No fake percentages) */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[var(--theme-surface-2)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[#FF0000]/40 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* Core Competencies Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)]"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/30 flex items-center justify-center text-primary flex-shrink-0">
            <Cpu className="w-5 h-5 text-[#FF0000]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--theme-text)]">
              Core Competencies &amp; Engineering Principles
            </h3>
            <p className="text-xs sm:text-sm text-[var(--theme-text-muted)]">
              Foundational problem-solving, architectural standards, and practical implementation practices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {coreCompetencies.map((comp) => (
            <div
              key={comp}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)]/70 text-xs sm:text-sm font-medium text-[var(--theme-text-secondary)]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#FF0000] mt-0.5 flex-shrink-0" />
              <span>{comp}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechnicalArsenal;

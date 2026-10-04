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
  Layers,
  ShieldCheck,
  Workflow,
  Activity,
  Binary,
  Bot,
  Terminal,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

// Official verified logo URLs (Cloudinary & curated SVG devicons)
const LOGO_MAPPING: Record<string, string> = {
  "Python": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290723/python_f6sscg.png",
  "Java": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290714/java_cnmsjh.png",
  "C": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290702/C_taksuc.png",
  "C++": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290701/C_b2ywco.png",
  "JavaScript": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290715/JavaScript_ethjvw.png",
  "TypeScript": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290731/TypeScript_ain5oj.png",
  "Prolog": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290722/Prolog_yhilc4.png",
  "HTML5": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290712/HTML_axt134.png",
  "CSS3": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290704/CSS_uesiai.png",
  "React": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290726/React_obvvrf.png",
  "Next.js": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290717/next_wbifwa.png",
  "Tailwind CSS": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290730/Tailwind_CSS_vuykpr.png",
  "Framer Motion": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290709/framer-motion-seeklogo_abmlue.png",
  "Node.js": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290719/node_knawyq.png",
  "Flask": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290708/Flask_jw5xsp.png",
  "FastAPI": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290705/Fast_Apis_dsg40u.png",
  "REST APIs": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290727/REST_APIs_fgrgf0.png",
  "SQL": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290728/SQL_jx1ajv.png",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Firestore": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "LLM APIs": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290716/LLM_Apis_opmdgn.png",
  "RAG Pipelines": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290724/Rag_Systems_kbru7l.png",
  "LangChain": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290724/Rag_Systems_kbru7l.png",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "NumPy": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290720/NumPy_ghnpp5.png",
  "Pandas": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290721/Pandas_qn30sl.png",
  "MongoDB Atlas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "AWS": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290702/AWS_pyunr1.png",
  "Vercel": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290717/next_wbifwa.png",
  "Git": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290711/Git_hxvl6p.png",
  "GitHub": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290712/GitHub_fcloga.png",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "OpenAI": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290716/LLM_Apis_opmdgn.png",
  "Razorpay": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290725/Razorpay_howinj.png",
  "Figma": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290706/Figma_u3ijmh.png",
  "Canva": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290703/Canva_hn9hta.png",
  "Adobe Photoshop": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290701/Adobe_Photoshop_tiduxp.png",
  "Filmora": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290707/Filmora_umde5o.png",
  "UI/UX Architecture": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290732/UIUX_lfot7i.png",
};

interface ArsenalCategory {
  label: string;
  icon: LucideIcon;
  skills: string[];
}

export function TechnicalArsenal() {
  const technicalCategories: ArsenalCategory[] = [
    {
      label: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "Prolog"],
    },
    {
      label: "Frontend Engineering",
      icon: Layout,
      skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      label: "Backend & Server Runtimes",
      icon: Server,
      skills: ["Node.js", "Flask", "FastAPI", "REST APIs", "SQL", "MongoDB", "Firebase"],
    },
    {
      label: "AI, Machine Learning & RAG",
      icon: Brain,
      skills: ["LLM APIs", "RAG Pipelines", "LangChain", "OpenCV", "NumPy", "Pandas"],
    },
    {
      label: "Databases, Cloud & DevOps",
      icon: Database,
      skills: ["MongoDB Atlas", "AWS", "Vercel", "Git", "GitHub", "Docker"],
    },
    {
      label: "Integrations & APIs",
      icon: Share2,
      skills: ["OpenAI", "Razorpay", "REST APIs"],
    },
    {
      label: "Design & Creative Systems",
      icon: Palette,
      skills: ["Figma", "Adobe Photoshop", "Canva", "Filmora", "UI/UX Architecture"],
    },
  ];

  const coreCompetencies = [
    { title: "Data Structures & Algorithms (DSA)", icon: Binary },
    { title: "Full-Stack Software Architecture", icon: Layers },
    { title: "Agentic AI & Autonomous Workflows", icon: Bot },
    { title: "ERP & Management Information Systems", icon: Terminal },
    { title: "Workflow Automation & Pipeline Design", icon: Workflow },
    { title: "Authentication & Role-Based Access Control (RBAC)", icon: ShieldCheck },
    { title: "Real-Time Event Streams & WebSockets", icon: Activity },
    { title: "Production Deployment & Observability", icon: CheckCircle2 },
  ];

  return (
    <section id="arsenal" className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-14 sm:mb-16 text-center max-w-3xl mx-auto"
      >
        <div className="section-eyebrow">Skills &amp; Capabilities</div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--theme-text)]">
          Technical <span className="text-gradient-primary">Arsenal</span>
        </h2>
        <p className="text-[var(--theme-text-secondary)] max-w-2xl mx-auto text-base md:text-lg">
          A disciplined toolkit spanning AI engineering, full-stack web platforms, database infrastructure, and robust API development.
        </p>
      </motion.div>

      {/* Categorized Skills Grid - Unified single hardware-accelerated container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12"
      >
        {technicalCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.label} className="h-full">
              <div className="group h-full p-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/50 transition-colors duration-200 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[var(--theme-border)]">
                    <div className="w-9 h-9 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] group-hover:border-[#2563EB]/40 dark:group-hover:border-[#3B82F6]/50 group-hover:bg-[#2563EB]/8 dark:group-hover:bg-[#3B82F6]/15 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] flex-shrink-0 transition-colors duration-200 shadow-sm">
                      <Icon className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[var(--theme-text)] transition-colors">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Skills Grid: Official Logo + Clear Name */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => {
                      const logoUrl = LOGO_MAPPING[skill];
                      return (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[var(--theme-surface-2)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)]/40 transition-colors shadow-sm"
                        >
                          {logoUrl ? (
                            <span className="relative w-4 h-4 flex-shrink-0">
                              <img
                                src={logoUrl}
                                alt=""
                                width={16}
                                height={16}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-contain pointer-events-none"
                              />
                            </span>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)] flex-shrink-0" />
                          )}
                          <span className="text-xs font-semibold text-[var(--theme-text)]">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Core Competencies & Engineering Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-6 sm:p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] shadow-sm"
      >
        <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[var(--theme-border)]">
          <div className="w-10 h-10 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-accent)] flex-shrink-0 shadow-sm">
            <Cpu className="w-5 h-5 text-[var(--theme-accent)]" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--theme-text)]">
              Core Competencies &amp; Engineering Principles
            </h3>
            <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)]">
              Architectural methodologies, systems principles, and engineering disciplines practiced across all projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {coreCompetencies.map((comp) => {
            const CompIcon = comp.icon;
            return (
              <div
                key={comp.title}
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-[var(--theme-surface-2)] border border-[var(--theme-border)] hover:border-[var(--theme-accent)]/40 transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--theme-card)] border border-[var(--theme-border)] group-hover:border-[var(--theme-accent)]/40 flex items-center justify-center text-[var(--theme-accent)] flex-shrink-0 transition-colors">
                  <CompIcon className="w-4 h-4 text-[var(--theme-accent)]" />
                </div>
                <span className="text-xs font-semibold text-[var(--theme-text)] leading-snug">
                  {comp.title}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default TechnicalArsenal;

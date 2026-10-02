"use client";

import React from "react";
import Image from "next/image";
import {
  Code2,
  Layout,
  Server,
  Brain,
  Wrench,
  Palette,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

// Map skills to official icon URLs
const LOGO_MAPPING: Record<string, string> = {
  "UI/UX": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290732/UIUX_lfot7i.png",
  "TypeScript": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290731/TypeScript_ain5oj.png",
  "Tailwind CSS": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290730/Tailwind_CSS_vuykpr.png",
  "SQL": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290728/SQL_jx1ajv.png",
  "REST APIs": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290727/REST_APIs_fgrgf0.png",
  "React": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290726/React_obvvrf.png",
  "Razorpay": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290725/Razorpay_howinj.png",
  "RAG Systems": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290724/Rag_Systems_kbru7l.png",
  "Python": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290723/python_f6sscg.png",
  "Prolog": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290722/Prolog_yhilc4.png",
  "Pandas": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290721/Pandas_qn30sl.png",
  "NumPy": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290720/NumPy_ghnpp5.png",
  "Node.js": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290719/node_knawyq.png",
  "Next.js": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290717/next_wbifwa.png",
  "LLM APIs": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290716/LLM_Apis_opmdgn.png",
  "JavaScript": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290715/JavaScript_ethjvw.png",
  "Java": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290714/java_cnmsjh.png",
  "HTML": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290712/HTML_axt134.png",
  "GitHub": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290712/GitHub_fcloga.png",
  "Git": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290711/Git_hxvl6p.png",
  "Framer Motion": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290709/framer-motion-seeklogo_abmlue.png",
  "Flask": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290708/Flask_jw5xsp.png",
  "Filmora": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290707/Filmora_umde5o.png",
  "Figma": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290706/Figma_u3ijmh.png",
  "FastAPI": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290705/Fast_Apis_dsg40u.png",
  "CSS": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290704/CSS_uesiai.png",
  "Canva": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290703/Canva_hn9hta.png",
  "AWS": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290702/AWS_pyunr1.png",
  "C": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290702/C_taksuc.png",
  "Adobe Photoshop": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290701/Adobe_Photoshop_tiduxp.png",
  "C++": "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290701/C_b2ywco.png",
};

interface ArsenalCategory {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  skills: string[];
}

const ARSENAL_CATEGORIES: ArsenalCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Core syntax & system languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Prolog"],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "LLM integration, RAG & data manipulation",
    icon: Brain,
    skills: ["NumPy", "Pandas", "LLM APIs", "RAG Systems"],
  },
  {
    title: "Frontend Engineering",
    subtitle: "Modern client-side development",
    icon: Layout,
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML", "CSS"],
  },
  {
    title: "Backend & Systems",
    subtitle: "APIs, server runtimes & data storage",
    icon: Server,
    skills: ["Node.js", "Flask", "FastAPI", "REST APIs", "SQL"],
  },
  {
    title: "Tools & Cloud Platforms",
    subtitle: "Version control, deployment & payment rails",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "AWS", "Razorpay"],
  },
  {
    title: "Design & Media",
    subtitle: "Prototyping, visual assets & editing",
    icon: Palette,
    skills: ["Figma", "Adobe Photoshop", "Canva", "Filmora", "UI/UX"],
  },
];

const CORE_CONCEPTS = [
  "Data Structures & Algorithms (DSA)",
  "AI Systems Architecture",
  "Full Stack Engineering",
  "Product Development",
  "Vector Search & Retrieval (RAG)",
];

export function Skills() {
  return (
    <section id="skills" className="section-rhythm border-t border-[var(--theme-border)]">
      <div className="container-custom">
        {/* Editorial Eyebrow */}
        <div className="section-eyebrow">06 / Arsenal</div>

        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--theme-text)] font-display">
            Technical Arsenal
          </h2>
          <p className="mt-3 text-base text-[var(--theme-text-secondary)]">
            An engineer&apos;s practical toolbox. Competence is demonstrated through working software, not self-assigned percentage bars.
          </p>
        </div>

        {/* Structured Toolbox Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARSENAL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="editorial-card p-6 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[var(--theme-border)]">
                    <div className="w-9 h-9 rounded-lg bg-[var(--theme-surface-2)] border border-[var(--theme-border)] flex items-center justify-center text-[#FF7A00]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[var(--theme-text)]">
                        {cat.title}
                      </h3>
                      <p className="text-[0.6875rem] text-[var(--theme-text-muted)]">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid: Logo + VISIBLE Name */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const logoUrl = LOGO_MAPPING[skill];
                      return (
                        <div
                          key={skill}
                          className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[var(--theme-surface-2)] border border-[var(--theme-border)] text-xs font-medium text-[var(--theme-text)] transition-colors hover:border-[#FF7A00]/40"
                        >
                          {logoUrl && (
                            <span className="relative w-4 h-4 shrink-0">
                              <Image
                                src={logoUrl}
                                alt={`${skill} logo`}
                                width={16}
                                height={16}
                                className="w-full h-full object-contain"
                              />
                            </span>
                          )}
                          <span className="leading-none">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Architectural Disciplines Footer */}
        <div className="mt-8 p-6 sm:p-7 editorial-card bg-[var(--theme-surface)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FF7A00]/10 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] shrink-0">
                <Lightbulb size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--theme-text)]">
                  Core Engineering Disciplines
                </h3>
                <p className="text-xs text-[var(--theme-text-muted)]">
                  Foundational principles guiding my system design and problem solving.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {CORE_CONCEPTS.map((concept) => (
                <span
                  key={concept}
                  className="px-3 py-1.5 rounded-md bg-[var(--theme-surface-2)] border border-[var(--theme-border)] text-xs font-mono font-semibold text-[var(--theme-text)]"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

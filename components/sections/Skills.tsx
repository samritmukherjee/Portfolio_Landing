"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCog, FaCode, FaChartBar, FaTools, FaPalette, FaBrain } from "react-icons/fa";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: <FaReact className="text-blue-400 text-2xl" />
  },
  {
    category: "Backend",
    skills: ["Node.js", "Flask", "FastAPI", "REST APIs", "SQL"],
    icon: <FaCog className="text-green-400 text-2xl" />
  },
  {
    category: "Programming",
    skills: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript", "Prolog"],
    icon: <FaCode className="text-blue-400 text-2xl" />
  },
  {
    category: "Data & Scientific Computing",
    skills: ["NumPy", "Pandas"],
    icon: <FaChartBar className="text-yellow-400 text-2xl" />
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "AWS"],
    icon: <FaTools className="text-orange-400 text-2xl" />
  },
  {
    category: "Design",
    skills: ["Figma", "Canva", "Adobe Photoshop", "Filmora", "UI/UX"],
    icon: <FaPalette className="text-pink-400 text-2xl" />
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "AI Systems", "Full Stack Engineering", "Product Development"],
    icon: <FaBrain className="text-purple-400 text-2xl" />
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper overflow-hidden">
      {/* Background decoration */}
      <div className="premium-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[56vw] h-[56vw] bg-accent-500/10 opacity-10" />

      <div className="container-custom max-w-full overflow-x-hidden">
        <div className="text-center mb-16 md:mb-20 space-y-3 sm:space-y-4">
          <h2 className="text-[var(--theme-text)]">Technical <span className="gradient-accent">Arsenal</span></h2>
          <p className="text-[var(--theme-text-muted)] max-w-2xl mx-auto">
            A comprehensive overview of the tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-5 sm:p-7 lg:p-8 group hover-lift hover:border-accent-500/30"
            >
              <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-lg sm:text-2xl group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {category.icon}
                </div>
                <h3 className="text-base sm:text-xl font-bold text-[var(--theme-text)]">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[color-mix(in_oklch,var(--theme-surface-2)_85%,transparent)] text-[var(--theme-text-muted)] text-xs sm:text-sm rounded-lg border border-[var(--theme-border)] group-hover:text-accent-400 group-hover:border-accent-500/30 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

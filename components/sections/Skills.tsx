"use client";
import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "C", "C++", "Python", "JavaScript", "TypeScript"],
    icon: <span className="text-blue-400">{"<>"}</span>
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: <span className="text-cyan-400">{"⚛"}</span>
  },
  {
    category: "Backend",
    skills: ["Node.js", "REST APIs", "SQL", "MongoDB"],
    icon: <span className="text-green-400">{"⚙"}</span>
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "Vercel", "Render", "AWS", "Razorpay"],
    icon: <span className="text-orange-400">{"🛠"}</span>
  },
  {
    category: "Design & Media",
    skills: ["Figma", "Photoshop", "After Effects", "Filmora", "UI/UX"],
    icon: <span className="text-pink-400">{"🎨"}</span>
  },
  {
    category: "Core Concepts",
    skills: ["DSA", "AI Systems", "Full Stack Engineering", "Product Development"],
    icon: <span className="text-purple-400">{"🧠"}</span>
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      {/* Background decoration */}
      <div className="premium-blur top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent-500/5 opacity-10" />

      <div className="container-custom">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-stone-50">Technical <span className="gradient-accent">Arsenal</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            A comprehensive overview of the tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:border-accent-500/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl w-12 h-12 rounded-xl bg-theme-surface-2 flex items-center justify-center border border-theme-border group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-50">{category.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-theme-surface-2 text-stone-400 text-sm rounded-lg border border-theme-border group-hover:text-amber-600 dark:group-hover:text-stone-200 group-hover:border-accent-500/30 transition-all duration-300"
                  >
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

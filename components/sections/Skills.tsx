"use client";

import React from "react";
import { skillCategories } from "@/lib/skills-data";
import { ScrollRevealText } from "@/components/animations/ScrollRevealText";

// Map skill names to their public/LOGOS path
const logoMapping: Record<string, string> = {
  "Java": "/LOGOS/java.png",
  "Python": "/LOGOS/python.png",
  "C": "/LOGOS/C.png",
  "C++": "/LOGOS/C++.png",
  "JavaScript": "/LOGOS/JavaScript.png",
  "TypeScript": "/LOGOS/TypeScript.png",
  "Prolog": "/LOGOS/Prolog.png",
  "HTML": "/LOGOS/HTML.png",
  "CSS": "/LOGOS/CSS.png",
  "React": "/LOGOS/React.png",
  "Next.js": "/LOGOS/next.png",
  "Tailwind CSS": "/LOGOS/Tailwind CSS.png",
  "Framer Motion": "/LOGOS/framer-motion-seeklogo.png",
  "Node.js": "/LOGOS/node.png",
  "Flask": "/LOGOS/Flask.png",
  "FastAPI": "/LOGOS/Fast Apis.png",
  "REST APIs": "/LOGOS/REST APIs.png",
  "SQL": "/LOGOS/SQL.png",
  "NumPy": "/LOGOS/NumPy.png",
  "Pandas": "/LOGOS/Pandas.png",
  "LLM APIs": "/LOGOS/LLM Apis.png",
  "RAG Systems": "/LOGOS/Rag Systems.png",
  "Git": "/LOGOS/Git.png",
  "GitHub": "/LOGOS/GitHub.png",
  "Vercel": "/LOGOS/Vercel.png",
  "AWS": "/LOGOS/AWS.png",
  "Razorpay": "/LOGOS/Razorpay.png",
  "Figma": "/LOGOS/Figma.png",
  "Canva": "/LOGOS/Canva.png",
  "Adobe Photoshop": "/LOGOS/Adobe Photoshop.png",
  "Filmora": "/LOGOS/Filmora.png",
  "UI/UX": "/LOGOS/UIUX.png",
};

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom max-w-full relative">
        <div className="text-center mb-14 md:mb-20 space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <p className="skills-section-tag">Technical stack</p>
          <h2 className="text-[var(--theme-text)] flex justify-center flex-wrap gap-x-2">
            <ScrollRevealText text="Technical" />
            <ScrollRevealText text="Arsenal" className="gradient-accent" />
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-2xl mx-auto text-base sm:text-lg">
            Tools and technologies I work with — competence shows in the projects, not
            self-ratings.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.id}
                className={`skill-card glass-card transition-all duration-300 hover:scale-[1.01] ${category.fullWidth ? "skill-card--full" : ""}`}
              >
                <div className="skill-card-header">
                  <span
                    className={`skill-card-icon-wrap skill-card-icon-wrap--${category.id} transition-transform duration-300 hover:rotate-12`}
                    aria-hidden
                  >
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="skill-card-label">{category.label}</h3>
                </div>
                <div className={`skill-pill-row ${category.id === "core" ? "justify-center" : ""}`}>
                  {category.skills.map((skill) => {
                    const logo = logoMapping[skill];
                    const isCore = category.id === "core";
                    const showLogo = logo && !isCore;
                    return (
                      <span
                        key={skill}
                        className={`skill-pill skill-pill--${category.id} flex items-center gap-2 transition-transform duration-300 hover:scale-105 ${isCore ? "core-pill" : ""}`}
                      >
                        {showLogo ? (
                          <span className="skill-logo-wrap" data-label={skill}>
                            <img
                              src={logo}
                              alt={`${skill} logo`}
                              title={skill}
                              className="skill-logo-img"
                              loading="lazy"
                            />
                          </span>
                        ) : (
                          <span className="core-skill-text">{skill}</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

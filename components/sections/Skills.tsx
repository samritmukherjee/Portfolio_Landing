"use client";

import React, { useState } from "react";
import { skillCategories } from "@/lib/skills-data";
import { ScrollRevealText } from "@/components/animations/ScrollRevealText";

// Map skill names to their new Cloudinary URLs
const logoMapping: Record<string, string> = {
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

function SkillPill({
  skill,
  logo,
  isCore,
  categoryId,
}: {
  skill: string;
  logo?: string;
  isCore: boolean;
  categoryId: string;
}) {
  const [isFlashed, setIsFlashed] = useState(false);

  const handleTouchStart = () => {
    if (window.innerWidth >= 1024) return;
    setIsFlashed(true);
    setTimeout(() => {
      setIsFlashed(false);
    }, 200);
  };

  const showLogo = logo && !isCore;

  return (
    <span
      onTouchStart={handleTouchStart}
      className={`skill-pill skill-pill--${categoryId} skill-pill-hover-glow flex items-center gap-2 transition-transform duration-300 hover:scale-105 ${
        isCore ? "core-pill" : ""
      } ${isFlashed ? "is-flashed" : ""}`}
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
}

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
                className={`skill-card glass-card transition-all duration-300 hover:scale-[1.01] ${
                  category.fullWidth ? "skill-card--full" : ""
                }`}
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
                  {category.skills.map((skill) => (
                    <SkillPill
                      key={skill}
                      skill={skill}
                      logo={logoMapping[skill]}
                      isCore={category.id === "core"}
                      categoryId={category.id}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

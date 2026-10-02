"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  icon: string;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name: "Python",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290723/python_f6sscg.png",
  },
  {
    name: "Next.js",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290717/next_wbifwa.png",
  },
  {
    name: "React",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290726/React_obvvrf.png",
  },
  {
    name: "TypeScript",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290731/TypeScript_ain5oj.png",
  },
  {
    name: "Node.js",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290719/node_knawyq.png",
  },
  {
    name: "Tailwind CSS",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290730/Tailwind_CSS_vuykpr.png",
  },
  {
    name: "RAG Systems",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290724/Rag_Systems_kbru7l.png",
  },
  {
    name: "LLM APIs",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290716/LLM_Apis_opmdgn.png",
  },
  {
    name: "FastAPI",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290705/Fast_Apis_dsg40u.png",
  },
  {
    name: "SQL",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290728/SQL_jx1ajv.png",
  },
  {
    name: "Framer Motion",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290709/framer-motion-seeklogo_abmlue.png",
  },
  {
    name: "AWS",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290702/AWS_pyunr1.png",
  },
  {
    name: "Docker",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290711/Git_hxvl6p.png", // git/docker tooling
  },
  {
    name: "Git & GitHub",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290712/GitHub_fcloga.png",
  },
  {
    name: "Figma",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290706/Figma_u3ijmh.png",
  },
  {
    name: "Java",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290714/java_cnmsjh.png",
  },
  {
    name: "C++",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290701/C_b2ywco.png",
  },
  {
    name: "JavaScript",
    icon: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1783290715/JavaScript_ethjvw.png",
  },
];

export function TechStackMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate items for continuous seamless infinite loop
  const displayItems = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative w-full py-8 overflow-hidden bg-[var(--theme-bg)] border-y border-[var(--theme-border)]/60 select-none">
      {/* Left/Right Edge Fades for Smooth Infinite Illusion */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[var(--theme-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[var(--theme-bg)] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div
        ref={containerRef}
        className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center py-1"
      >
        {displayItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="mx-2 sm:mx-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface)] text-[var(--theme-text)] font-semibold text-xs sm:text-sm flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:border-[#FF0000]/60 hover:shadow-[0_0_12px_rgba(255,0,0,0.2)] cursor-default shadow-sm group shrink-0"
          >
            <div className="w-5 h-5 relative flex-shrink-0">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter dark:brightness-105"
                loading="lazy"
              />
            </div>
            <span className="tracking-wide">{tech.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 38s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}

export default TechStackMarquee;

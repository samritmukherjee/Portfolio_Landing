"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { GlowCard } from "@/components/spotlight-card";

interface ContactCard {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  link: string;
  glowColor: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  description: string;
}

const contactCards: ContactCard[] = [
  {
    id: "github",
    label: "GitHub",
    value: "@samritmukherjee",
    icon: <FaGithub className="text-3xl" />,
    link: "https://github.com/samritmukherjee",
    glowColor: "blue",
    description: "Check out my code and projects",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Samrit Mukherjee",
    icon: <FaLinkedin className="text-3xl" />,
    link: "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
    glowColor: "blue",
    description: "Connect professionally",
  },
  {
    id: "email",
    label: "Email",
    value: "samritmukherjee05@gmail.com",
    icon: <FaEnvelope className="text-3xl" />,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=samritmukherjee05@gmail.com&su=Collaboration%20Request&body=Hello%20Samrit,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity/project.%0A%0AProject%20Details:%0A%E2%80%A2%20Type%20of%20work:%0A%E2%80%A2%20Timeline:%0A%E2%80%A2%20Budget%20(optional):%0A%0AMessage:%0A[Write%20your%20message%20here]%0A%0ABest%20regards,%0A[Your%20Name]",
    glowColor: "blue",
    description: "Send me a message directly",
  },
];

export const ContactCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full"
    >
      {contactCards.map((card) => (
        <motion.div key={card.id} variants={cardVariants} className="h-full">
          <GlowCard 
            glowColor={card.glowColor} 
            customSize 
            className="w-full h-full min-h-[280px] p-0 group glow-surface shadow-[0_20px_45px_-35px_var(--theme-shadow-soft)] hover:shadow-[0_28px_60px_-40px_var(--theme-shadow)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between h-full p-6 sm:p-7 lg:p-8 relative z-10"
            >
              <div className="space-y-6">
                <div className="text-accent-400 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left">
                  {card.icon}
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] font-black text-[var(--theme-text-muted)] group-hover:text-accent-400 transition-colors duration-300">
                    {card.label}
                  </span>
                  <div className="mt-2 bg-[color-mix(in_oklch,var(--theme-surface-2)_85%,transparent)] rounded-lg p-2.5 border border-[var(--theme-border)] max-h-[60px] overflow-y-auto">
                    <h3 className="text-sm md:text-base font-semibold text-[var(--theme-text)] leading-relaxed break-words">
                      {card.value}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-7 pt-5 border-t border-[var(--theme-border)]">
                <p className="text-sm text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text)] transition-colors duration-300">
                  {card.description}
                </p>
                <div className="w-8 h-8 rounded-full bg-[color-mix(in_oklch,var(--theme-surface-2)_85%,transparent)] flex items-center justify-center group-hover:bg-accent-500 group-hover:text-[var(--theme-bg)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-accent-400">
                  <FaArrowRight size={12} />
                </div>
              </div>
            </a>
          </GlowCard>
        </motion.div>
      ))}
    </motion.div>
  );
};


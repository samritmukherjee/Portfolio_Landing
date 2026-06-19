"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import ElectricBorder from "@/components/ElectricBorder";
import { BlobButton } from "@/components/ui/BlobButton";

interface ContactCard {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  link: string;
  description: string;
}

const contactCards: ContactCard[] = [
  {
    id: "github",
    label: "GitHub",
    value: "@samritmukherjee",
    icon: <FaGithub className="text-2xl sm:text-3xl" />,
    link: "https://github.com/samritmukherjee",
    description: "Check out my code and projects",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Samrit Mukherjee",
    icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
    link: "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
    description: "Connect professionally",
  },
  {
    id: "email",
    label: "Email",
    value: "samritmukherjee05@gmail.com",
    icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=samritmukherjee05@gmail.com&su=Collaboration%20Request&body=Hello%20Samrit,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity/project.%0A%0AProject%20Details:%0A%E2%80%A2%20Type%20of%20work:%0A%E2%80%A2%20Timeline:%0A%E2%80%A2%20Budget%20(optional):%0A%0AMessage:%0A[Write%20your%20message%20here]%0A%0ABest%20regards,%0A[Your%20Name]",
    description: "Send me a message directly",
  },
];

export const ContactCards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
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
        <motion.div key={card.id} variants={cardVariants} className="h-full min-w-0">
          <ElectricBorder
            color="#4f7cff"
            speed={0.85}
            chaos={0.1}
            borderRadius={20}
            className="h-full w-full contact-electric-border"
            style={{ borderRadius: 20 }}
          >
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card flex flex-col justify-between h-full min-h-[240px] sm:min-h-[260px] p-6 sm:p-7 group border-0"
            >
              <div className="space-y-5">
                <div className="text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text)] transition-colors">
                  {card.icon}
                </div>
                <div>
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] font-bold text-[var(--theme-text-muted)]">
                    {card.label}
                  </span>
                  <div className="mt-2 rounded-lg p-2.5 border border-[var(--theme-border)] bg-[var(--theme-surface-2)]">
                    <h3 className="text-sm md:text-base font-semibold text-[var(--theme-text)] leading-relaxed break-words">
                      {card.value}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--theme-border)]">
                <p className="text-sm text-[var(--theme-text-muted)]">{card.description}</p>
                <BlobButton variant="icon" decorative className="pointer-events-none">
                  <FaArrowRight size={12} />
                </BlobButton>
              </div>
            </a>
          </ElectricBorder>
        </motion.div>
      ))}
    </motion.div>
  );
};

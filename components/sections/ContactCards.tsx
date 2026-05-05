"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

interface ContactCard {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  link: string;
  color: string;
  description: string;
}

const contactCards: ContactCard[] = [
  {
    id: "github",
    label: "GitHub",
    value: "@samritmukherjee",
    icon: <FaGithub className="text-2xl" />,
    link: "https://github.com/samritmukherjee",
    color: "from-stone-800 to-stone-900",
    description: "Check out my code and projects",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Samrit Mukherjee",
    icon: <FaLinkedin className="text-2xl" />,
    link: "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
    color: "from-blue-600 to-blue-700",
    description: "Connect professionally",
  },
  {
    id: "email",
    label: "Email",
    value: "samritmukherjee05@gmail.com",
    icon: <FaEnvelope className="text-2xl" />,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDmBfKhgHdjbrnFQpsQtcgCPsvzmwFLhmwTtMVFwVGhCfWPqRNgKjScLSTlKsNLDFgWwjDB",
    color: "from-accent-500 to-accent-600",
    description: "Send me a message directly",
  },
];

export const ContactCards = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: prefersReducedMotion ? { opacity: 1 } : {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: prefersReducedMotion ? { opacity: 1, y: 0 } : {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full"
    >
      {contactCards.map((card) => (
        <motion.div key={card.id} variants={cardVariants}>
          <motion.a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setExpandedId(expandedId === card.id ? null : card.id)}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            className="block h-full"
          >
            <div className={`
              h-full p-6 md:p-8 rounded-2xl
              bg-gradient-to-br ${card.color}
              border border-white/10 backdrop-blur-sm
              hover:border-white/20 transition-colors duration-300
              cursor-pointer group flex flex-col justify-between
              shadow-lg hover:shadow-xl hover:shadow-stone-950/50
              active:scale-95 md:active:scale-100
              will-change-transform
            `}>
              {/* Icon */}
              <div className="mb-6">
                <div className="text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {card.icon}
                </div>
              </div>

              {/* Label & Value */}
              <div className="flex-1">
                <span className="text-xs uppercase tracking-[0.15em] font-bold text-white/60 group-hover:text-white/80 transition-colors">
                  {card.label}
                </span>
                <p className="text-lg md:text-xl font-bold text-white mt-3 break-words leading-snug">
                  {card.value}
                </p>
              </div>

              {/* Description & Arrow */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors max-w-[150px]">
                  {card.description}
                </span>
                <motion.div
                  className="text-white/70 group-hover:text-white"
                  animate={prefersReducedMotion ? {} : { x: 0 }}
                  whileHover={prefersReducedMotion ? undefined : { x: 2 }}
                >
                  <FaArrowRight size={14} />
                </motion.div>
              </div>
            </div>
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};

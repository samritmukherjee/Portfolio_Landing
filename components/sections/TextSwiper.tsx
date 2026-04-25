"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

interface TextSwiperItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  link: string;
}

const contactItems: TextSwiperItem[] = [
  {
    label: "Email",
    value: "samritmukherjee05@gmail.com",
    icon: <FaEnvelope className="text-accent-400" />,
    link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDmBfKhgHdjbrnFQpsQtcgCPsvzmwFLhmwTtMVFwVGhCfWPqRNgKjScLSTlKsNLDFgWwjDB",
  },
  {
    label: "GitHub",
    value: "@samritmukherjee",
    icon: <FaGithub className="text-stone-100" />,
    link: "https://github.com/samritmukherjee",
  },
  {
    label: "LinkedIn",
    value: "Samrit Mukherjee",
    icon: <FaLinkedin className="text-blue-500" />,
    link: "https://www.linkedin.com/in/samrit-mukherjee-412788318/",
  },
];

export const TextSwiper = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % contactItems.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + contactItems.length) % contactItems.length);

  const item = contactItems[current];

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="relative overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -10 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="glass-card p-6 sm:p-10 md:p-14 min-h-[280px] sm:min-h-[300px] flex flex-col justify-between border-accent-500/10"
          >
            <div className="space-y-4">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-accent-500 bg-accent-500/10 px-2 sm:px-3 py-1 rounded-full">
                {item.label}
              </span>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-50 break-words leading-tight">
                {item.value}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8">
              <div className="text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                {item.icon}
              </div>
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-stone-950 text-stone-100 text-sm font-bold rounded-xl border border-white/5 hover:border-accent-500/50 transition-colors flex items-center gap-2"
              >
                Connect <FaArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 bg-stone-950/80 backdrop-blur-xl border border-white/5 rounded-full flex items-center justify-center text-stone-400 hover:text-accent-400 hover:scale-110 transition-all shadow-2xl"
          >
            <FaChevronLeft size={14} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
          <button 
            onClick={handleNext}
            className="w-12 h-12 bg-stone-950/80 backdrop-blur-xl border border-white/5 rounded-full flex items-center justify-center text-stone-400 hover:text-accent-400 hover:scale-110 transition-all shadow-2xl"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      <div className="flex gap-2 justify-center mt-10">
        {contactItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === current ? 'w-12 bg-accent-500' : 'w-4 bg-stone-800 hover:bg-stone-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

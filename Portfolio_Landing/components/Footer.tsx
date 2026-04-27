"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // Placeholder visit count - connect to backend API later
  const visitCount = 1247;

  return (
    <footer className="section-surface border-t border-white/5 py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter text-stone-50">
              SAMRIT<span className="text-accent-500">.</span>
            </h3>
            <p className="text-stone-500 text-sm max-w-xs">
              Building the future of interactive web experiences and AI-driven solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/samritmukherjee"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/samrit-mukherjee-412788318/"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="text-stone-600 text-xs">
              © {currentYear} Samrit Mukherjee. Handcrafted in India.
            </p>
          </div>
        </div>
        
        {/* Visit Counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-stone-800/50 flex justify-center"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-accent-500/20 bg-accent-500/5">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-accent-400"
              />
              <span className="text-xs text-stone-400 font-medium">Visitors</span>
            </div>
            <span className="text-sm font-bold text-accent-300">{visitCount.toLocaleString()}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

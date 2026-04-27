"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FlipCountdown } from "./flip-countdown";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const visitCount = 1247;
  const [animationTrigger, setAnimationTrigger] = useState(0);

  // Trigger animation every time footer enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Increment trigger to restart animation
          setAnimationTrigger((prev) => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    const footer = document.querySelector("footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer className="section-surface border-t border-white/5 py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          {/* Left Column: Branding */}
          <div className="space-y-3 md:flex-1">
            <h3 className="text-2xl font-bold tracking-tighter text-stone-50">
              SAMRIT<span className="text-accent-500">.</span>
            </h3>
            <p className="text-stone-500 text-sm max-w-xs">
              Building the future of interactive web experiences and AI-driven solutions.
            </p>
          </div>

          {/* Center Column: Animated Visitor Counter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-widest">Visitors</span>
            <FlipCountdown
              key={animationTrigger}
              countFrom={0}
              countTo={visitCount}
              className="flip-countdown-footer"
              cardBgColor="var(--theme-surface-2)"
              textColor="var(--theme-accent-soft)"
            />
          </motion.div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4 md:flex-1">
            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/samritmukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/samrit-mukherjee-412788318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:samritmukherjee@example.com"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <p className="text-stone-600 text-xs">
              © {currentYear} Samrit Mukherjee. Handcrafted in India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

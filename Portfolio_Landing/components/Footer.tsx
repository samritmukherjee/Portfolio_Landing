"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
        

      </div>
    </footer>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { isNewVisitor, markVisit } from "@/lib/visitor";
import { scrollToElement } from "@/lib/scrollToElement";

export function Footer() {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [textIndex, setTextIndex] = useState(0);

  const morphTexts = [
    "11× Hackathon Winner",
    "Product Engineering & Enterprise Systems",
    "AI Systems & Full-Stack Developer",
    "BuildX 2026 Winner • IIT Kharagpur",
    "Google Solution Challenge Top 106",
    "Samrit Mukherjee",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % morphTexts.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [morphTexts.length]);

  useEffect(() => {
    const fetchAndUpdateCount = async () => {
      try {
        const newVisitor = isNewVisitor();
        const response = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isNewVisitor: newVisitor }),
        });

        if (response.ok) {
          const data = await response.json();
          if (typeof data.count === "number") {
            setVisitCount(data.count);
          }
          if (newVisitor) {
            markVisit();
          }
        }
      } catch (err) {
        // visitor analytics optional fallback
      }
    };

    fetchAndUpdateCount();
  }, []);

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "What I Do", href: "services" },
    { name: "Hackathons", href: "hackathons" },
    { name: "Projects", href: "projects" },
    { name: "Journey", href: "career" },
    { name: "Arsenal", href: "arsenal" },
    { name: "Let's Connect", href: "contact" },
  ];

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/samritmukherjee", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/samrit-mukherjee/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:samritmukherjee05@gmail.com", label: "Email" },
  ];

  const scrollToTop = () => {
    scrollToElement("hero");
  };

  return (
    <footer className="w-full relative z-10 pt-14 pb-12 sm:pb-14 bg-[var(--theme-surface)]/80 backdrop-blur-2xl border-t border-[var(--theme-border)] shadow-2xl rounded-t-[2.5rem] sm:rounded-t-[3rem] overflow-hidden">
      {/* Background Ambient Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#FF0000]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 flex flex-col gap-8">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[var(--theme-border)]">
          <div className="flex items-center gap-3.5">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 shadow-sm">
              <img
                src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png"
                alt="Samrit Mukherjee Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-[var(--theme-text)] text-base leading-none">
                Samrit Mukherjee
              </span>
              <span className="text-[10px] font-mono font-bold text-[#FF0000] tracking-wider uppercase mt-1">
                AI Systems • Full Stack Engineering
              </span>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs font-mono font-bold text-[var(--theme-text)] hover:text-[#FF0000] hover:border-[#FF0000]/50 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF0000]" />
          </motion.button>
        </div>

        {/* Center Big Morphing Banner */}
        <div className="py-8 px-6 rounded-3xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-center flex flex-col items-center justify-center my-1 shadow-sm">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF0000] mb-3 bg-[#FF0000]/10 px-3.5 py-1.5 rounded-full border border-[#FF0000]/25 shadow-sm">
            Focus &amp; Vision
          </span>

          <div className="relative h-14 sm:h-18 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--theme-text)] font-extrabold text-center tracking-tight block"
              >
                {morphTexts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-4 border-t border-[var(--theme-border)] flex flex-wrap items-center justify-center gap-5 md:gap-8 text-xs sm:text-sm font-semibold text-[var(--theme-text-secondary)]">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToElement(link.href)}
              className="hover:text-[#FF0000] transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Bottom Colophon & Visitor Badge */}
        <div className="pt-4 border-t border-[var(--theme-border)] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[var(--theme-text-secondary)]">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full bg-[var(--theme-card)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-text-secondary)] hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:scale-110 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Visitor Counter Pill */}
          {visitCount !== null && visitCount > 0 ? (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
              <span>{visitCount.toLocaleString()} global visits</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs font-mono font-medium text-[var(--theme-text-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live portfolio</span>
            </div>
          )}

          {/* Copyright: Exactly "© 2026 Samrit Mukherjee." */}
          <div className="font-medium text-center md:text-right text-[var(--theme-text-secondary)]">
            © 2026 Samrit Mukherjee.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

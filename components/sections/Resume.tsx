"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck } from "lucide-react";

export function Resume() {
  const handleTrackDownload = () => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        "resume_download",
        { event_category: "conversion", event_label: "resume_section" }
      );
    }
  };

  return (
    <section id="resume" className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="glass-panel p-8 sm:p-12 lg:p-14 rounded-[2.5rem] border border-[var(--theme-border)] relative overflow-hidden shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Actions */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#FF7A00] tracking-wider uppercase bg-[#FF7A00]/10 px-3 py-1 rounded-full border border-[#FF7A00]/20 inline-block mb-1">
                VERIFIED CURRICULUM VITAE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--theme-text)]">
                Looking for a full record of my technical credentials?
              </h2>
              <p className="text-base text-[var(--theme-text-secondary)] leading-relaxed max-w-2xl pt-1">
                Download my comprehensive resume for a structured overview of technical
                proficiencies, production software builds, academic track record at MSIT, and
                competition awards.
              </p>
            </div>

            {/* Verified Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--theme-text-secondary)] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#FF7A00] shrink-0 w-4 h-4" />
                <span>AI Systems, RAG Workflows &amp; Full Stack Web</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#FF7A00] shrink-0 w-4 h-4" />
                <span>Double Slash 4.0 &amp; ShowcaseX Winner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#FF7A00] shrink-0 w-4 h-4" />
                <span>Google Solution Challenge 2026 Top 106</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#FF7A00] shrink-0 w-4 h-4" />
                <span>DSA Problem Solving (Java, C++, Python)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="/Resume.pdf"
                download="Samrit_Mukherjee_Resume.pdf"
                onClick={handleTrackDownload}
                className="rounded-full px-7 h-12 bg-[#FF7A00] text-white font-semibold flex items-center gap-2 hover:bg-[#E66E00] transition-all shadow-[0_0_20px_rgba(255,122,0,0.3)] hover:-translate-y-1 cursor-pointer active:translate-y-0"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 h-12 glass-panel text-[var(--theme-text)] font-semibold flex items-center gap-2 hover:bg-[var(--theme-surface-2)] transition-all hover:-translate-y-1 border border-[var(--theme-border)] cursor-pointer shadow-sm active:translate-y-0"
              >
                <ExternalLink className="w-4 h-4 text-[var(--theme-text-secondary)]" />
                <span>View Online</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Spec & File Metadata */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl glass-panel bg-[var(--theme-surface-2)]/60 border border-[var(--theme-border)] space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--theme-border)]/60">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/25 flex items-center justify-center text-[#FF7A00] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--theme-text)]">Resume.pdf</p>
                  <p className="text-xs text-[var(--theme-text-muted)] font-mono">
                    123 KB • Verified Document
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-[var(--theme-text-muted)]">
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="text-[var(--theme-text)] font-semibold">Adobe PDF</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> 2026 Edition
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Author:</span>
                  <span className="text-[var(--theme-text)] font-semibold">Samrit Mukherjee</span>
                </div>
                <div className="flex justify-between">
                  <span>Direct URI:</span>
                  <span className="text-[#FF7A00] font-semibold">samrit.dev/resume.pdf</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Resume;

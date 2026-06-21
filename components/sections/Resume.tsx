"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiFileDownloadLine } from "react-icons/ri";
import { BlobButton } from "@/components/ui/BlobButton";

export const Resume = () => {
  return (
    <section id="resume" className="section-wrapper">
      <div className="container-custom">
        <div className="glass-card p-10 sm:p-12 md:p-14 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/15 blur-[110px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-5">
              <h2 className="text-[var(--theme-text)] leading-tight">
                Interested in working <br />
                <span className="gradient-accent">With Me?</span>
              </h2>
              <p className="text-[var(--theme-text-muted)] text-base sm:text-lg">
                Download my comprehensive resume to learn more about my technical expertise, academic background, and project experience.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <BlobButton
                  href="/Resume.pdf"
                  download
                  variant="primary"
                  className="inline-flex items-center gap-3"
                  onClick={() => {
                    if (typeof window !== "undefined" && "gtag" in window) {
                      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
                        "event",
                        "resume_download",
                        { event_category: "conversion", event_label: "resume_section" }
                      );
                    }
                  }}
                >
                  <RiFileDownloadLine className="text-xl" />
                  Download PDF
                </BlobButton>
                <BlobButton
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="inline-flex"
                >
                  View Online
                </BlobButton>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <motion.div 
                whileHover={{ rotate: 2, scale: 1.01 }}
                className="w-72 h-[420px] bg-[var(--theme-surface)] rounded-2xl border border-[var(--theme-border)] shadow-[0_24px_60px_-35px_var(--theme-shadow)] relative overflow-hidden group hover-lift"
              >
                <img 
                  src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133968/portfolio-os_rqsksy.png" 
                  alt="Resume Preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-surface)] to-transparent flex items-end justify-center p-8 opacity-100 group-hover:opacity-0 transition-opacity">
                   <span className="text-accent-400 font-bold uppercase tracking-[0.3em] text-xs">Preview</span>
                </div>
              </motion.div>
            </div>
          </div>
          
             <div className="mt-12 pt-8 border-t border-[var(--theme-border)] flex flex-wrap gap-8">
             <div className="flex flex-col">
                 <span className="text-xs text-[var(--theme-text-muted)] uppercase tracking-widest font-bold">Latest Edition</span>
                 <span className="text-[var(--theme-text)]">22 JUNE 2026</span>
             </div>
             <div className="flex flex-col">
                 <span className="text-xs text-[var(--theme-text-muted)] uppercase tracking-widest font-bold">Format</span>
                 <span className="text-[var(--theme-text)]">PDF</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

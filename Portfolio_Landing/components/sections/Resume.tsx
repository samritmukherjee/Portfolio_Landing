"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiFileDownloadLine } from "react-icons/ri";

export const Resume = () => {
  return (
    <section id="resume" className="section-wrapper">
      <div className="container-custom">
        <div className="glass-card p-12 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-stone-50 leading-tight">
                Interested in working <br />
                <span className="gradient-accent">With Me?</span>
              </h2>
              <p className="text-stone-400 text-lg">
                Download my comprehensive resume to learn more about my technical expertise, academic background, and project experience.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://drive.google.com/file/d/1example-resume-id/view" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-3 inline-flex">
                  <RiFileDownloadLine className="text-xl" />
                  Download PDF
                </a>
                <a href="https://drive.google.com/file/d/1example-resume-id/view" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
                  View Online
                </a>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-end">
              <motion.div 
                whileHover={{ rotate: 3, scale: 1.02 }}
                className="w-72 h-[420px] bg-stone-950 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden group"
              >
                <img 
                  src="/resume-preview.png" 
                  alt="Resume Preview" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent flex items-end justify-center p-8 opacity-100 group-hover:opacity-0 transition-opacity">
                   <span className="text-accent-400 font-bold uppercase tracking-[0.3em] text-xs">Preview</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8">
             <div className="flex flex-col">
                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Latest Edition</span>
                <span className="text-stone-300">April 2024</span>
             </div>
             <div className="flex flex-col">
                <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Format</span>
                <span className="text-stone-300">PDF, 1.2 MB</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

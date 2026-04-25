"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DecryptedText } from "@/components/animations/DecryptedText";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { scrollToElement } from "@/lib/scrollToElement";

export const HeroGlassmorphism = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const easeOut = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: easeOut,
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: easeOut },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden surface-noise">
      <div className="absolute inset-0 z-0">
        <div className="premium-blur top-8 left-[2%] w-[32vw] h-[32vw] bg-accent-500/15 animate-pulse-slow" />
        <div className="premium-blur bottom-10 right-[2%] w-[38vw] h-[38vw] bg-slate-300/10 animate-pulse-slow [animation-delay:1.2s]" />
        <div className="absolute top-[16%] right-[12%] h-20 w-20 rounded-full border border-accent-200/30" />
        <div className="absolute bottom-[22%] left-[10%] h-16 w-16 rounded-sm rotate-12 border border-stone-500/30" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <motion.div variants={childVariants} className="brand-chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400"></span>
              </span>
              Available For New Projects
            </motion.div>

            <motion.div variants={childVariants} className="space-y-5">
              <h1 className="text-stone-50 uppercase">
                <DecryptedText 
                  text="SAMRIT" 
                  animateOn="view"
                  revealDirection="center"
                  className="inline-block"
                />
                <br />
                <span className="text-accent-300">MUKHERJEE</span>
              </h1>
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-stone-400 font-bold">
                AI Systems • Full Stack Engineering • Product Development
              </p>
            </motion.div>

            <motion.p variants={childVariants} className="text-base sm:text-lg md:text-xl text-stone-300 font-medium leading-relaxed max-w-xl">
              Building intelligent, scalable software that transforms ambitious ideas into practical, user-focused products.
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-wrap items-center gap-5 pt-2">
              <motion.button
                onClick={() => scrollToElement('resume')}
                whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="btn-primary"
              >
                Download Resume
              </motion.button>
              <motion.button
                onClick={() => scrollToElement('contact')}
                className="btn-secondary hover:shadow-[0_0_20px_rgba(239,178,74,0.15)] hover:border-accent-300 transition-all"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div variants={childVariants} className="flex items-center gap-4 md:gap-8 pt-10">
              <a href="https://github.com/samritmukherjee" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-accent-300 transition-colors duration-300 hover:-translate-y-1 transform">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/samrit-mukherjee-412788318/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-accent-300 transition-colors duration-300 hover:-translate-y-1 transform">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
            className="glass-card p-8 md:p-10 space-y-8 h-fit self-center"
          >
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-stone-400">Current Focus</p>
              <p className="text-stone-100 text-xl font-semibold leading-tight">
                Production AI workflows, robust APIs, and high-performance frontends.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -2 }} className="rounded-lg md:rounded-2xl border border-theme-border p-3 md:p-4 bg-theme-surface/70 flex-1 md:flex-none">
                <p className="text-stone-500 text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest font-bold mb-1">Projects</p>
                <p className="text-stone-50 font-black text-lg md:text-xl">8+</p>
              </motion.div>
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -2 }} className="rounded-lg md:rounded-2xl border border-theme-border p-3 md:p-4 bg-theme-surface/70 flex-1 md:flex-none">
                <p className="text-stone-500 text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest font-bold mb-1">Experience</p>
                <p className="text-stone-50 font-black text-lg md:text-xl">2+ Yrs</p>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-stone-700 rounded-full flex justify-center p-1">
          <motion.div 
            animate={prefersReducedMotion ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: easeOut }}
            className="w-1 h-2 bg-accent-300 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

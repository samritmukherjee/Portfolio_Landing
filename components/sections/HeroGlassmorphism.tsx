"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import { DecryptedText } from "@/components/animations/DecryptedText";
import { RotatingText } from "@/components/animations/RotatingText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToElement } from "@/lib/scrollToElement";

type AvailabilityStatus = "Available" | "Busy";

function CountUpMetric({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReducedMotion = useReducedMotion();
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }
    spring.set(value);
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [inView, value, spring, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="rounded-lg md:rounded-2xl border border-[var(--theme-border)] p-3 md:p-4 bg-[color-mix(in_oklch,var(--theme-surface-2)_80%,transparent)] flex-1"
    >
      <p className="text-[var(--theme-text-muted)] text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest font-bold mb-1">
        {label}
      </p>
      <p className="text-[var(--theme-text)] font-black text-lg md:text-xl">
        {display}
        {suffix}
      </p>
    </div>
  );
}

function AvailabilityBadge({ status }: { status: AvailabilityStatus }) {
  const isAvailable = status === "Available";
  return (
    <div className="brand-chip" role="status" aria-live="polite">
      <span className="relative flex h-2.5 w-2.5">
        {isAvailable && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            isAvailable
              ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              : "bg-amber-400"
          }`}
        />
      </span>
      {isAvailable ? "Available For New Projects" : "Limited Availability"}
    </div>
  );
}

export const HeroGlassmorphism = () => {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const auroraOpacity = useTransform(
    scrollYProgress,
    [0, 0.45],
    prefersReducedMotion ? [1, 1] : [1, 0.15]
  );

  const [availability, setAvailability] = useState<AvailabilityStatus>(() => {
    if (typeof window !== "undefined") {
      const injected = (window as Window & { __AVAILABILITY_STATUS__?: string })
        .__AVAILABILITY_STATUS__;
      if (injected === "Busy" || injected === "Available") return injected;
    }
    return "Available";
  });

  useEffect(() => {
    const injected = (window as Window & { __AVAILABILITY_STATUS__?: string })
      .__AVAILABILITY_STATUS__;
    if (injected === "Busy" || injected === "Available") {
      setAvailability(injected);
    }
  }, []);

  const trackResumeDownload = () => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        "resume_download",
        { event_category: "conversion", event_label: "hero_cta" }
      );
    }
    scrollToElement("resume");
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[var(--theme-bg)] transition-colors duration-500 animate-critical"
    >
      <div className="hero-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none hero-aurora"
        style={{ opacity: auroraOpacity }}
        aria-hidden
      >
        <div className="premium-blur top-8 left-[2%] w-[30vw] h-[30vw] bg-accent-500/20" />
        <div className="premium-blur bottom-10 right-[2%] w-[36vw] h-[36vw] bg-emerald-900/25" />
      </motion.div>

      <div className="w-full max-w-[90rem] mx-auto relative z-10 py-20 md:py-24">
        <div className="grid items-center gap-8 md:gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 sm:space-y-8">
            <AvailabilityBadge status={availability} />

            <div className="space-y-3 sm:space-y-4">
              <p className="sr-only">Samrit Mukherjee</p>
              <h1
                className="text-[var(--theme-text)] font-display font-bold tracking-tightest leading-[0.92]"
                style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
              >
                <DecryptedText
                  text="SAMRIT"
                  animateOn="view"
                  revealDirection="center"
                  className="inline-block text-[var(--theme-text)]"
                />
                <br />
                <span className="text-accent-500 dark:text-accent-300">MUKHERJEE</span>
              </h1>
              <p className="text-sm sm:text-base tracking-[0.12em] uppercase text-[var(--theme-text-muted)] font-semibold flex flex-wrap items-center gap-2">
                <span className="text-accent-400">[</span>
                <RotatingText
                  words={["AI Systems", "Full Stack", "Product"]}
                  duration={2}
                  className="text-[var(--theme-text)] min-w-[8ch]"
                />
                <span className="text-accent-400">]</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-[var(--theme-text-muted)] font-medium leading-relaxed max-w-xl">
              Samrit Mukherjee builds intelligent, scalable software that transforms ambitious
              ideas into practical, user-focused products.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={trackResumeDownload}
                className="btn-primary w-full sm:w-auto text-center"
              >
                Download Resume
              </button>
              <button
                type="button"
                onClick={() => scrollToElement("projects")}
                className="btn-secondary w-full sm:w-auto text-center"
              >
                View Work
              </button>
            </div>

            <div className="flex items-center gap-4 md:gap-6 pt-2">
              <a
                href="https://github.com/samritmukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--theme-text-muted)] hover:text-accent-300 focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
                aria-label="GitHub profile"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/samrit-mukherjee-412788318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--theme-text-muted)] hover:text-accent-300 focus-visible:ring-2 focus-visible:ring-accent-400 rounded"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          <aside className="glass-card p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 h-fit self-center w-full">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.2em] uppercase font-bold text-[var(--theme-text-muted)]">
                Current Focus
              </p>
              <p className="text-[var(--theme-text)] text-lg sm:text-xl font-semibold leading-tight">
                Production AI workflows, robust APIs, and high-performance frontends.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3">
              <CountUpMetric label="Projects" value={8} suffix="+" />
              <CountUpMetric label="Experience" value={2} suffix="+ Yrs" />
              <div className="col-span-2 sm:col-span-1">
                <CountUpMetric label="Hackathon Wins" value={3} suffix="×" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  useReducedMotion,
  useInView,
  useSpring,
} from "framer-motion";
import { DecryptedText } from "@/components/animations/DecryptedText";
import { RotatingText } from "@/components/animations/RotatingText";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToElement } from "@/lib/scrollToElement";
import { BlobButton } from "@/components/ui/BlobButton";

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
    <div className="brand-chip mx-auto lg:mx-0" role="status" aria-live="polite">
      <span
        className={`inline-flex h-2.5 w-2.5 rounded-full ${
          isAvailable ? "bg-emerald-500" : "bg-amber-500"
        }`}
      />
      {isAvailable ? "Available For New Projects" : "Limited Availability"}
    </div>
  );
}

export const HeroGlassmorphism = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
      className="hero-section relative h-full w-full flex flex-col justify-center items-center overflow-hidden bg-[var(--theme-bg)] transition-colors duration-500 animate-critical"
    >
      <div className="hero-grain absolute inset-0 z-[1] pointer-events-none" aria-hidden />

      <div className="container-custom w-full relative z-10 hero-inner py-6 sm:py-8 md:py-10">
        <div className="grid items-center gap-5 sm:gap-6 md:gap-8 lg:gap-10 lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1.12fr_0.88fr]">
          <div className="hero-main space-y-4 sm:space-y-5 md:space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
            <AvailabilityBadge status={availability} />

            <div className="space-y-3 sm:space-y-4">
              <p className="sr-only">Samrit Mukherjee</p>
              <h1
                className="text-[var(--theme-text)] font-display font-bold tracking-tightest leading-[0.92]"
                style={{ fontSize: "clamp(2rem, 4.2vh + 2.2vw, 5.75rem)" }}
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
              <p className="text-sm sm:text-base tracking-[0.12em] uppercase text-[var(--theme-text-muted)] font-semibold flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-accent-400">[</span>
                <RotatingText
                  words={["AI Systems", "Full Stack", "Product"]}
                  duration={2}
                  className="text-[var(--theme-text)] min-w-[8ch]"
                />
                <span className="text-accent-400">]</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-[var(--theme-text-muted)] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Samrit Mukherjee builds intelligent, scalable software that transforms ambitious
              ideas into practical, user-focused products.
            </p>

            <div className="flex flex-col items-center gap-3 w-full max-w-[18rem] sm:max-w-none sm:flex-row sm:items-center sm:justify-start lg:justify-start">
              <BlobButton
                type="button"
                variant="primary"
                onClick={trackResumeDownload}
                className="w-full sm:w-auto min-h-[2.75rem] px-5 text-sm sm:text-base"
              >
                Download Resume
              </BlobButton>
              <BlobButton
                type="button"
                variant="secondary"
                onClick={() => scrollToElement("projects")}
                className="w-full sm:w-auto min-h-[2.75rem] px-5 text-sm sm:text-base"
              >
                View Work
              </BlobButton>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 pt-2">
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

          <aside className="hero-aside glass-card p-5 sm:p-6 md:p-7 lg:p-8 space-y-4 sm:space-y-5 md:space-y-6 h-fit self-center w-full max-h-full overflow-hidden">
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
                <CountUpMetric label="Hackathon Wins" value={8} suffix="×" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

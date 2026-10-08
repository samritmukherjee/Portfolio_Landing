"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Trophy, Award, Globe, Sparkles, MapPin, Calendar, CheckCircle2, Image as ImageIcon } from "lucide-react";
import gsap from "gsap";

interface HackathonEvent {
  title: string;
  year: string;
  date: string;
  location: string;
  result: string;
  proof: string;
  description: string;
  image: string;
  isOngoing?: boolean;
}

const HACKATHONS_DATA: HackathonEvent[] = [
  {
    title: "Smart India Hackathon 2026 — Internal",
    year: "2026",
    date: "2026",
    location: "MSIT • Kolkata",
    result: "Panel Winner • 2nd Runner-Up Overall",
    proof: "Team Leader — Second Runner-Up overall among 143 participating teams & Won Panel 4",
    description:
      "Secured second runner-up overall among 143 participating teams at MSIT, won Panel 4, and qualified for the national Idea Submission Round with an intelligent enterprise system.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1790955452/1789109571047_qv6pzt.jpg",
  },
  {
    title: "BuildX 2026 — IIT Kharagpur",
    year: "2026",
    date: "2026",
    location: "IIT Kharagpur",
    result: "WINNER • Team Async",
    proof: "Grand Finale Champion at IIT Kharagpur — Resourcio Community",
    description:
      "Won BuildX 2026 organized by Resourcio Community, progressing through intense sprint buildathons and presenting the production-grade solution at the Grand Finale at IIT Kharagpur.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1791036358/1_9_itxutl.jpg",
  },
  {
    title: "Google Solution Challenge 2026",
    year: "2026",
    date: "2026",
    location: "Google • Global",
    result: "TOP 106 GLOBALLY",
    proof: "Global Top 106 out of 85,000+ registrations & 6,700+ submissions worldwide",
    description:
      "Selected among the Top 106 teams globally in Google Solution Challenge 2026: Build with AI, representing MSIT for SUKALYA.ai, addressing UN Sustainable Development Goals.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1781799163/Badge_solution_challenge_xbiihd.png",
    isOngoing: true,
  },
  {
    title: "GirlScript Summer of Code (GSSoC '26)",
    year: "2026",
    date: "2026",
    location: "GirlScript Foundation",
    result: "OPEN SOURCE CONTRIBUTOR",
    proof: "9th Edition — Renowned Global Open-Source Engineering Program",
    description:
      "Selected as contributor to open-source developer tooling, modular UI components, and software libraries, collaborating with global maintainers on peer code reviews and architectural refinements.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1781798869/gssoc-badge_tg1et2.png",
  },
  {
    title: "Synchronicity 2.0 — Jadavpur University",
    year: "2026",
    date: "2026",
    location: "Jadavpur University",
    result: "TRACK WINNER • BEST STARTUP",
    proof: "Best Startup Track Winner — Inter-College Innovation Challenge",
    description:
      "Secured the winning title in the Best Startup Track at Synchronicity 2.0, evaluated on market feasibility, business viability, and robust full-stack software architecture.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1781799635/Best_startup_track_xvzmjd.jpg",
  },
  {
    title: "Double Slash 4.0 — Jadavpur University",
    year: "2026",
    date: "Feb 2026",
    location: "Jadavpur University",
    result: "WINNER • Top 30 Finalist",
    proof: "Top 30 of 300+ teams — 36-hour offline hackathon champion",
    description:
      "A 36-hour offline hackathon with 300+ teams. Selected among the Top 30 finalists and secured the championship victory through strong technical execution, system resilience, and product innovation.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133900/double-slash_fn9wm5.jpg",
  },
  {
    title: "ShowcaseX × Techsprint — RCCIIT",
    year: "2026",
    date: "Jan 2026",
    location: "RCCIIT • Hack2Skill",
    result: "WINNER",
    proof: "Hack2Skill-powered sprint — rapid prototype to production-ready demo",
    description:
      "High-intensity competitive hackathon focused on rapid prototyping and production-grade software. Engineered and pitched a scalable, high-impact solution within an intense sprint.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133897/showcasex_znf9ug.jpg",
  },
  {
    title: "Hello World Hacks — RCCIIT",
    year: "2025",
    date: "Oct 2025",
    location: "GDG on Campus RCCIIT",
    result: "TRACK WINNER • BEST BEGINNER'S TEAM",
    proof: "Recognized as Best Beginner's Team — first hackathon experience",
    description:
      "Organized by GDG on Campus RCCIIT & RCCTechz. Recognized with the Best Beginner's Team Track Award for building an accessible, user-focused digital solution solving real-world challenges.",
    image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133893/hello-world_gfi0ip.jpg",
  },
];

function AchievementCard({
  event,
  index,
  isDesktop,
}: {
  event: HackathonEvent;
  index: number;
  isDesktop: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mobilePhotoRevealed, setMobilePhotoRevealed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || prefersReducedMotion) return;
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 8,
      rotateX: -y * 8,
      transformPerspective: 1000,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });

    if (image) {
      gsap.to(image, {
        scale: 1.08,
        x: -x * 16,
        y: -y * 16,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseEnter = () => {
    if (!isDesktop || prefersReducedMotion) return;
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 0.18,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0.85,
        duration: 0.18,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -6,
        duration: 0.16,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isDesktop || prefersReducedMotion) return;
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });

    if (image) {
      gsap.to(image, {
        scale: 1.0,
        x: 0,
        y: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto",
      });
    }

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto",
      });
    }

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: isDesktop ? "preserve-3d" : "flat" }}
      className={`relative group ${isDesktop ? "h-full" : "w-[85vw] max-w-[360px] flex-shrink-0 snap-start"}`}
    >
      <div className="relative h-full min-h-[360px] sm:min-h-[380px] rounded-[1.5rem] lg:rounded-[2rem] border border-[var(--theme-border)] bg-[var(--theme-card)] overflow-hidden transition-all duration-200 shadow-sm hover:border-[var(--theme-accent)]/50 flex flex-col justify-between">
        {/* Background Revealed Image Layer — Zero delay immediate response */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            ref={imageRef}
            src={event.image}
            alt={`${event.title} - Winning Moment`}
            loading="eager"
            decoding="async"
            className={`w-full h-full object-cover ${
              !isDesktop && mobilePhotoRevealed ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Subtle gradient vignette over revealed image so title badge is visible */}
          <div
            ref={overlayRef}
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none ${
              !isDesktop && mobilePhotoRevealed ? "opacity-85" : "opacity-0"
            }`}
          />
        </div>

        {/* Revealed Image Tag (Top Corner) */}
        <div
          className={`absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-300 ${
            (!isDesktop && mobilePhotoRevealed) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#2563EB] dark:bg-[#3B82F6] text-white shadow-lg shadow-[#2563EB]/30 dark:shadow-[#3B82F6]/30">
            <CheckCircle2 className="w-3 h-3" />
            Verified Winning Moment
          </span>
        </div>

        {/* Revealed Bottom Caption */}
        <div
          className={`absolute bottom-4 left-4 right-4 z-20 pointer-events-none transition-opacity duration-300 ${
            (!isDesktop && mobilePhotoRevealed) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white">
            <p className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider">{event.result}</p>
            <p className="text-sm font-semibold text-white mt-0.5 line-clamp-1">{event.title}</p>
            <p className="text-[11px] text-white/70 line-clamp-1">{event.location}</p>
          </div>
        </div>

        {/* Front Content Layer */}
        <div
          ref={contentRef}
          className={`relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
            !isDesktop && mobilePhotoRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="space-y-4">
            {/* Top row: Icon + Year badge */}
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 border border-[#2563EB]/25 dark:border-[#3B82F6]/35 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] group-hover:scale-110 group-hover:bg-[#2563EB] dark:group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 shadow-sm">
                <Trophy className="w-5 h-5" />
              </div>

              {event.isOngoing ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/30 dark:border-[#3B82F6]/40">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] dark:bg-[#3B82F6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB] dark:bg-[#3B82F6]"></span>
                  </span>
                  Ongoing
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[var(--theme-surface)] text-[var(--theme-text-secondary)] border border-[var(--theme-border)]">
                  <Calendar className="w-3 h-3 text-[#2563EB] dark:text-[#60A5FA]" />
                  {event.year}
                </span>
              )}
            </div>

            {/* Title & Result */}
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] block mb-1">
                {event.result}
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--theme-text)] leading-snug">
                {event.title}
              </h3>
            </div>

            {/* Location & Proof Quote */}
            <div className="flex items-center gap-1.5 text-xs text-[var(--theme-text-secondary)] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA] flex-shrink-0" />
              <span>{event.location}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--theme-surface)] border-l-2 border-[#2563EB] dark:border-[#3B82F6] text-xs text-[var(--theme-text-secondary)] italic">
              &ldquo;{event.proof}&rdquo;
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed line-clamp-3">
              {event.description}
            </p>
          </div>

          {/* Footer note: hover hint for desktop, toggle button for mobile */}
          <div className="pt-4 border-t border-[var(--theme-border)] mt-4 flex items-center justify-between">
            <span className="text-[10px] font-mono text-[var(--theme-text-secondary)] uppercase tracking-wider">
              {event.date}
            </span>

            {isDesktop ? (
              <span className="text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Hover for photo →
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setMobilePhotoRevealed(!mobilePhotoRevealed)}
                className="text-[11px] font-mono font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:text-[#1D4ED8] dark:hover:text-[#93C5FD] flex items-center gap-1 underline underline-offset-2 py-1 px-2 rounded focus:outline-none"
              >
                <ImageIcon className="w-3 h-3" />
                {mobilePhotoRevealed ? "Hide Photo" : "View Photo"}
              </button>
            )}
          </div>
        </div>

        {/* Mobile revealed close button */}
        {!isDesktop && mobilePhotoRevealed && (
          <button
            type="button"
            onClick={() => setMobilePhotoRevealed(false)}
            className="absolute top-4 left-4 z-30 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-black/80 text-white border border-white/20 shadow-md backdrop-blur-md"
          >
            ← Back to details
          </button>
        )}
      </div>
    </div>
  );
}

export function Hackathons() {
  const [isDesktop, setIsDesktop] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Preload all hackathon award images for instant hover display with zero network lag
    if (typeof window !== "undefined") {
      HACKATHONS_DATA.forEach((item) => {
        if (item.image) {
          const img = new window.Image();
          img.src = item.image;
        }
      });
    }
  }, []);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    setScrollProgress(el.scrollLeft / maxScroll);
  };

  return (
    <section id="hackathons" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 xl:px-16 w-full max-w-[96vw] 2xl:max-w-[1800px] mx-auto overflow-hidden">
      {/* Header with 11x trophy badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/30 dark:border-[#3B82F6]/35 bg-[#2563EB]/10 dark:bg-[#3B82F6]/15 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5" />
          <span>Competitive Accolades &amp; Honors</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--theme-text)]">
          Hackathons &amp; <span className="font-serif italic text-gradient-primary">Accolades</span>
        </h2>

        <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed">
          Building intensive, production-grade technical architectures under pressure. A collection of 11× hackathon victories,
          startup-track recognition, finalist placements, and open-source contributions.
        </p>

        {/* Highlight Stats Shelf */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card)] shadow-sm">
            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#2563EB] dark:text-[#60A5FA] block">11×</span>
              <span className="text-[10px] font-mono font-medium text-[var(--theme-text-secondary)] uppercase tracking-wider">Wins &amp; Honors</span>
            </div>
            <div className="h-8 w-px bg-[var(--theme-border)]" />
            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-black text-[var(--theme-text)] block">Top 106</span>
              <span className="text-[10px] font-mono font-medium text-[var(--theme-text-secondary)] uppercase tracking-wider">Google Global</span>
            </div>
            <div className="h-8 w-px bg-[var(--theme-border)]" />
            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-black text-[var(--theme-text)] block">300+</span>
              <span className="text-[10px] font-mono font-medium text-[var(--theme-text-secondary)] uppercase tracking-wider">Teams Competed</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cards: Desktop 3-column grid / Mobile & Tablet horizontal snap-scroll */}
      {isDesktop ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HACKATHONS_DATA.map((event, idx) => (
            <AchievementCard key={event.title} event={event} index={idx} isDesktop={true} />
          ))}
        </div>
      ) : (
        <div className="w-full">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            data-lenis-prevent
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {HACKATHONS_DATA.map((event, idx) => (
              <AchievementCard key={event.title} event={event} index={idx} isDesktop={false} />
            ))}
          </div>

          {/* Scroll progress bar */}
          <div className="w-full max-w-xs mx-auto h-1 bg-[var(--theme-border)] rounded-full mt-4 overflow-hidden relative">
            <div
              className="h-full bg-[#2563EB] dark:bg-[#3B82F6] rounded-full transition-transform duration-75 origin-left"
              style={{
                width: "100%",
                transform: `scaleX(${Math.max(scrollProgress, 0.15)})`,
              }}
            />
          </div>
          <p className="text-center text-[11px] font-mono text-[var(--theme-text-secondary)] mt-2">
            ← Swipe horizontally to explore all 8 achievements →
          </p>
        </div>
      )}
    </section>
  );
}

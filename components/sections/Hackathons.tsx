"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { ScrollRevealText } from "@/components/animations/ScrollRevealText";
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
}

const hackathons = {
  won: [
    {
      title: "Google Solution Challenge 2026 — Build with AI",
      year: "ONGOING",
      date: "Ongoing",
      location: "Google",
      result: "TOP 106 GLOBALLY",
      proof: "organized by google",
      description: "Selected among the Top 106 teams globally in Google Solution Challenge 2026: Build with AI, out of 85,000+ registrations and 6,700+ prototype submissions worldwide. (Event is still running. Top 10 selection process is ongoing.)",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1781799163/Badge_solution_challenge_xbiihd.png"
    },
    {
      title: "GSSoC '26",
      year: "2026",
      date: "2026",
      location: "GirlScript Foundation",
      result: "OPEN SOURCE",
      proof: "9th Edition — Global Open-Source Program",
      description: "GSSoC '26 (GirlScript Summer of Code 2026) is the 9th edition of the GirlScript Foundation's renowned three-month, global open-source program. Designed to promote diversity and skill development, it is open to all ages, skill levels, and genders.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1781798869/gssoc-badge_tg1et2.png"
    },
    {
      title: "Synchronicity 2.0",
      year: "2026",
      date: "2026",
      location: "Jadavpur University",
      result: "Track Winner",
      proof: "Best Startup Track",
      description: "Secured the Winner position in the Best Startup Track at Synchronicity 2.0 (2026), organized by Jadavpur University.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1781799635/Best_startup_track_xvzmjd.jpg"
    },
    {
      title: "Double Slash 4.0",
      year: "2026",
      date: "Feb 2026",
      location: "Jadavpur University",
      result: "WINNER",
      proof: "Top 30 of 300+ teams — winner for technical execution and innovation.",
      description:
        "A 36-hour offline hackathon with 300+ teams. Selected among the Top 30 finalists and secured the winning position through strong technical execution and innovation.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133900/double-slash_fn9wm5.jpg"
    },
    {
      title: "ShowcaseX × Techsprint",
      year: "2026",
      date: "Jan 2026",
      location: "RCCIIT",
      result: "WINNER",
      proof: "Hack2Skill-powered sprint — rapid prototype to production-ready demo.",
      description:
        "High-intensity hackathon powered by Hack2Skill, focused on rapid prototyping and building scalable solutions.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133897/showcasex_znf9ug.jpg"
    },
    {
      title: "Hello World Hacks",
      year: "2025",
      date: "Oct 2025",
      location: "RCCIIT",
      result: "Track Winner",
      proof: "Achievement: Best Beginner Team",
      description:
        "Organized by GDG on Campus RCCIIT. Recognized as Best Beginner's Team for building an impactful technical solution. Achievement: Best Beginner Team.",
      image: "https://res.cloudinary.com/duxrcy3jn/image/upload/v1777133893/hello-world_gfi0ip.jpg"
    }
  ],
  participated: []
};

function AchievementCard({ event, index, isDesktop }: { event: HackathonEvent; index: number; isDesktop: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
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
      rotateY: x * 6,
      rotateX: -y * 6,
      transformPerspective: 1000,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });

    if (image) {
      gsap.to(image, {
        scale: 1.08,
        x: -x * 12,
        y: -y * 12,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });

    if (image) {
      gsap.to(image, {
        scale: 1.0,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: isDesktop ? "preserve-3d" : "flat" }}
      className={`relative group ${isDesktop ? "h-full" : "w-[85vw] flex-shrink-0 snap-start"}`}
    >
      <div className="glass-card h-full min-h-[280px] sm:min-h-[320px] rounded-2xl lg:rounded-[2.5rem] border border-[var(--theme-border)] overflow-hidden hackathon-card-wrapper transition-all duration-500 hover:shadow-2xl">
        {/* Winning Moment Image Reveal */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={imageRef}
            src={event.image}
            alt={`Samrit Mukherjee Hackathon Winner at ${event.title}, ${event.location}, ${event.year}`}
            width={640}
            height={400}
            className="w-full h-full object-cover transition-all duration-700 ease-out opacity-0 scale-100 hackathon-card-image"
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full p-5 sm:p-6 lg:p-8 flex flex-col justify-between gap-3 sm:gap-4 lg:gap-5 bg-transparent hackathon-card-content transition-all duration-500">
          <div className="space-y-5">
            <div className="flex justify-between items-start">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-2xl bg-accent-500/10 backdrop-blur-md flex items-center justify-center border border-[var(--theme-border)] transition-all duration-500 hackathon-card-icon group-hover:scale-110 group-hover:rotate-12 group-hover:bg-accent-500/20">
                <FaTrophy className="text-lg sm:text-2xl text-accent-400 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
              </div>
              {event.year === "ONGOING" ? (
                <span className="text-[0.55rem] sm:text-[0.65rem] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 sm:px-3.5 py-1 rounded-full border border-emerald-500/30 transition-colors duration-500 flex items-center gap-1.5 hackathon-card-year" title={event.date}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  ONGOING
                </span>
              ) : (
                <span className="text-[0.55rem] sm:text-[0.65rem] font-bold text-stone-50 uppercase tracking-widest bg-[var(--theme-surface)] px-2 sm:px-3 py-1 rounded-full border border-[var(--theme-border)] transition-colors duration-500 hackathon-card-year" title={event.date}>{event.year}</span>
              )}
            </div>

            <div className="space-y-1">
              <span className="text-[0.55rem] sm:text-[0.65rem] font-black text-accent-300 uppercase tracking-[0.25em] transition-colors duration-500 hackathon-card-result">{event.result}</span>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-50 leading-tight transition-colors duration-500 hackathon-card-title">{event.title}</h4>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 pb-1 sm:pb-2 border-b border-[var(--theme-border)]">
              <MdLocationOn className="text-accent-400 text-base sm:text-lg" />
              <p className="text-[0.6rem] sm:text-[0.7rem] text-stone-50 font-black uppercase tracking-[0.2em] transition-colors duration-500 hackathon-card-location">{event.location}</p>
            </div>
            <p className="text-accent-200/90 text-xs italic border-l-2 border-amber-500/50 pl-3 mb-2 hackathon-card-proof">
              &ldquo;{event.proof}&rdquo;
            </p>
            <p className="text-stone-50 text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-500 hackathon-card-description">
              {event.description}
            </p>
            <p className="text-[0.6rem] text-stone-400 uppercase tracking-widest mt-2">{event.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Hackathons = () => {
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

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    setScrollProgress(el.scrollLeft / maxScroll);
  };

  return (
    <section id="hackathons" className="section-wrapper section-surface overflow-hidden">
      <div className="container-custom max-w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-[var(--theme-text)] flex justify-center flex-wrap gap-x-2">
            <ScrollRevealText text="Hackathons &" />
            <ScrollRevealText text="Accolades" className="gradient-accent" />
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-2xl mx-auto">
            Competitive programming and building intensive technical solutions under pressure.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="trophy-shelf glass-card p-8 md:p-10 mb-14 md:mb-16 text-center max-w-2xl mx-auto border border-amber-500/25 transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_20px_50px_-25px_rgba(245,158,11,0.15)]"
        >
          <p className="text-5xl md:text-6xl font-black text-amber-400 font-display animate-pulse">8</p>
          <p className="text-lg md:text-xl font-bold text-[var(--theme-text)] mt-2">
            8x Hackathon Winner
          </p>
          <p className="text-sm text-[var(--theme-text-muted)] mt-2">
            8× hackathon wins across various tracks and global challenges
          </p>
        </motion.div>

        {isDesktop ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 hackathon-cards">
            {hackathons.won.map((event, idx) => (
              <AchievementCard key={event.title} event={event} index={idx} isDesktop={true} />
            ))}
          </div>
        ) : (
          <div className="w-full">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {hackathons.won.map((event, idx) => (
                <AchievementCard key={event.title} event={event} index={idx} isDesktop={false} />
              ))}
            </div>

            <div className="w-full h-1 bg-[var(--theme-border)] rounded-full mt-4 overflow-hidden relative">
              <div
                className="h-full bg-accent-500 rounded-full transition-transform duration-75 origin-left"
                style={{
                  width: "100%",
                  transform: `scaleX(${scrollProgress})`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

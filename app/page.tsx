"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Hackathons } from "@/components/sections/Hackathons";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechnicalArsenal } from "@/components/sections/TechnicalArsenal";
import { ContactCards } from "@/components/sections/ContactCards";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/ui/Dock";
import { initializeWebMCP } from "@/hooks/useWebMCP";
// @ts-ignore - official React Bits PixelSwap component
import PixelSwap from "@/components/PixelSwap";

// Use official JS component cleanly in TypeScript without custom .d.ts files
const OfficialPixelSwap = PixelSwap as React.ComponentType<any>;

function ThemePixelOverlay({
  from,
  to,
  onThemeChange,
  onComplete,
}: {
  from: "dark" | "light";
  to: "dark" | "light";
  onThemeChange: () => void;
  onComplete: () => void;
}) {
  const [active, setActive] = useState(from === "dark");
  const themeAppliedRef = React.useRef(false);

  useEffect(() => {
    // 1. Trigger PixelSwap transition on next tick
    const triggerTimer = setTimeout(() => {
      setActive(to === "dark");
    }, 20);

    // 2. Change the DOM theme at transition midpoint (~200ms) beneath the active pixels
    const themeTimer = setTimeout(() => {
      if (!themeAppliedRef.current) {
        themeAppliedRef.current = true;
        onThemeChange();
      }
    }, 200);

    return () => {
      clearTimeout(triggerTimer);
      clearTimeout(themeTimer);
    };
  }, [to, onThemeChange]);

  const handleComplete = () => {
    if (!themeAppliedRef.current) {
      themeAppliedRef.current = true;
      onThemeChange();
    }
    onComplete();
  };

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden theme-pixel-transition select-none"
      aria-hidden="true"
    >
      <OfficialPixelSwap
        trigger="custom"
        initialActive={from === "dark"}
        active={active}
        duration={400}
        pixelDuration={200}
        pixelSize={80}
        gap={0}
        pixelRadius={0}
        pixelSpin={0}
        pixelScale={0.2}
        pattern="diagonal"
        fade={true}
        aspectRatio="auto"
        className="w-full h-full pointer-events-none"
        style={{ width: "100%", height: "100%" }}
        onComplete={handleComplete}
        firstContent={<div className="w-full h-full bg-[#F8FAFC]" />}
        secondContent={<div className="w-full h-full bg-[#080F1E]" />}
      />
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [themeTransition, setThemeTransition] = useState<{
    from: "dark" | "light";
    to: "dark" | "light";
  } | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // Initialize theme with light mode as default opener
  useEffect(() => {
    try {
      const sessionTheme = sessionStorage.getItem("samrit_session_theme");
      const savedTheme = localStorage.getItem("samrit_theme") as "dark" | "light" | null;
      const initialTheme = sessionTheme ? (savedTheme === "dark" ? "dark" : "light") : "light";
      
      sessionStorage.setItem("samrit_session_theme", initialTheme);
      localStorage.setItem("samrit_theme", initialTheme);
      
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }

    // Initialize WebMCP for AI agent context
    initializeWebMCP();
  }, []);

  const applyThemeToDOM = (next: "dark" | "light") => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      sessionStorage.setItem("samrit_session_theme", next);
      localStorage.setItem("samrit_theme", next);
    } catch {
      // storage unavailable
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";

    // Immediate transition if user prefers reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyThemeToDOM(next);
      return;
    }

    // Avoid triggering if already transitioning
    if (themeTransition) return;

    setThemeTransition({
      from: theme,
      to: next,
    });
  };

  // Section visibility tracking for Navbar & Dock active state (matching exact 9-section order)
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "hackathons",
      "projects",
      "career",
      "arsenal",
      "contact",
    ];

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection((prev) => (prev !== visible.target.id ? visible.target.id : prev));
        }
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: [0.1, 0.3] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

// Memoized main content to prevent re-rendering 9 sections during scroll-based activeSection changes
const MainContent = React.memo(function MainContent() {
  return (
    <>
      {/* Exact 9-section portfolio structure */}
      <main id="main" className="w-full flex flex-col border-none overflow-x-hidden">
        <Hero />
        <TechStackMarquee />
        <About />
        <Services />
        <Hackathons />
        <Projects />
        <Experience />
        <TechnicalArsenal />
        <ContactCards />
      </main>

      <Footer />
      <Dock />
    </>
  );
});

  return (
    <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300 relative selection:bg-primary selection:text-white overflow-x-hidden">
      {themeTransition && (
        <ThemePixelOverlay
          from={themeTransition.from}
          to={themeTransition.to}
          onThemeChange={() => applyThemeToDOM(themeTransition.to)}
          onComplete={() => setThemeTransition(null)}
        />
      )}

      <Navbar
        theme={themeTransition ? themeTransition.to : theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <MainContent />
    </div>
  );
}

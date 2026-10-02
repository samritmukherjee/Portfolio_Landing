"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { TechnicalArsenal } from "@/components/sections/TechnicalArsenal";
import { Hackathons } from "@/components/sections/Hackathons";
import { ContactCards } from "@/components/sections/ContactCards";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/ui/Dock";
import { initializeWebMCP } from "@/hooks/useWebMCP";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("hero");

  // Initialize theme from storage or default to dark
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("samrit_theme") as "dark" | "light" | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    // Initialize WebMCP for AI agent context
    initializeWebMCP();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("samrit_theme", next);
    } catch {
      // storage unavailable
    }
  };

  // Section visibility tracking for Navbar & Dock active state
  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "services",
      "projects",
      "career",
      "arsenal",
      "hackathons",
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
          setActiveSection(visible.target.id);
        }
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: [0.1, 0.3] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)] transition-colors duration-300 relative selection:bg-[#FF0000] selection:text-white overflow-x-hidden">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main id="main" className="w-full flex flex-col border-none overflow-x-hidden">
        <Hero />
        <TechStackMarquee />
        <About />
        <Services />
        <Projects />
        <Experience />
        <TechnicalArsenal />
        <Hackathons />
        <ContactCards />
      </main>

      <Footer />
      <Dock />
    </div>
  );
}

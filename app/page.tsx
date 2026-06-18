"use client";

import dynamic from "next/dynamic";
import { HeroGlassmorphism } from "@/components/sections/HeroGlassmorphism";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Switch from "@/components/star-wars-toggle-switch";
import { MdLocationOn } from "react-icons/md";
import { scrollToElement } from "@/lib/scrollToElement";
import { initializeWebMCP } from "@/hooks/useWebMCP";
import { ContactCards } from "@/components/sections/ContactCards";

const About = dynamic(() => import("@/components/sections/About").then((m) => m.About), {
  loading: () => <SectionPlaceholder />,
});
const Experience = dynamic(
  () => import("@/components/sections/Experience").then((m) => m.Experience),
  { loading: () => <SectionPlaceholder /> }
);
const Hackathons = dynamic(
  () => import("@/components/sections/Hackathons").then((m) => m.Hackathons),
  { loading: () => <SectionPlaceholder /> }
);
const MobileHackathons = dynamic(
  () => import("@/components/sections/mobile/MobileHackathons").then((m) => m.MobileHackathons),
  { loading: () => <SectionPlaceholder /> }
);
const CircularProjects = dynamic(
  () => import("@/components/sections/CircularProjects").then((m) => m.CircularProjects),
  { loading: () => <SectionPlaceholder /> }
);
const ContainerScrollAnimation = dynamic(
  () =>
    import("@/components/sections/ContainerScrollAnimation").then(
      (m) => m.ContainerScrollAnimation
    ),
  { loading: () => <SectionPlaceholder /> }
);
const Skills = dynamic(() => import("@/components/sections/Skills").then((m) => m.Skills), {
  loading: () => <SectionPlaceholder />,
});
const Resume = dynamic(() => import("@/components/sections/Resume").then((m) => m.Resume), {
  loading: () => <SectionPlaceholder />,
});
const Footer = dynamic(() => import("@/components/Footer").then((m) => m.Footer), {
  loading: () => null,
});

function SectionPlaceholder() {
  return <div className="section-frame min-h-[40vh] animate-pulse opacity-30" aria-hidden />;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showThemeHint, setShowThemeHint] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const navItems = ["About", "Experience", "Projects", "Skills"] as const;

  useEffect(() => {
    window.scrollTo(0, 0);
    initializeWebMCP();

    // Check for theme hint
    const hasSeenHint = localStorage.getItem("has-seen-theme-hint");
    if (!hasSeenHint) {
      const timer = setTimeout(() => setShowThemeHint(true), 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setScrolled(window.scrollY > 50);
      }, 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (showThemeHint) {
      setShowThemeHint(false);
      localStorage.setItem("has-seen-theme-hint", "true");
    }
  };

  useEffect(() => {
    const sections = [
      "about",
      "experience",
      "hackathons",
      "projects",
      "skills",
      "contact",
    ];
    const nodes = sections
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, rootMargin: "-32% 0px -52% 0px", threshold: [0.2] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const revealProps = prefersReducedMotion
    ? { initial: "visible" as const, variants: sectionVariants }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        variants: sectionVariants,
      };

  return (
    <main className="min-h-screen app-shell">
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-accent-400 origin-left z-[100]"
          style={{ scaleX }}
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-700 ${scrolled ? "py-0.5 sm:py-1" : "py-2 sm:py-2.5"}`}
      >
        <div className="container-custom flex items-center justify-between h-12 sm:h-auto px-4 sm:px-6">
          <div className="flex items-center h-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-xl font-extrabold tracking-[0.08em] text-stone-100 truncate font-display"
            >
              SAMRIT<span className="text-accent-500">.</span>
            </motion.div>
          </div>

          <div className="md:hidden">
            <div className="flex items-center pl-2 pr-2 border-l border-white/5 h-8 relative">
              <Switch checked={theme === "light"} onChange={toggleTheme} />
              {showThemeHint && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute -bottom-10 right-0 py-1 px-2.5 bg-accent-500 text-stone-950 text-[0.6rem] font-bold rounded-md whitespace-nowrap shadow-xl pointer-events-none z-[100]"
                >
                  Switch Theme
                  <div className="absolute -top-1 right-4 w-2 h-2 bg-accent-500 rotate-45" />
                </motion.div>
              )}
            </div>
          </div>

          <nav
            className={`hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full nav-shell ${scrolled ? "nav-shell-scrolled" : ""}`}
          >
            {navItems.map((item) => {
              const itemId = item.toLowerCase();
              const isActive = activeSection === itemId;
              return (
                <motion.button
                  key={item}
                  type="button"
                  onClick={() => scrollToElement(itemId)}
                  whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                  className={`nav-link text-[0.7rem] px-3 ${isActive ? "is-active" : ""}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="nav-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 36,
                        mass: 0.7,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              );
            })}
            <motion.button
              type="button"
              onClick={() => scrollToElement("contact")}
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="px-4 py-1.5 bg-accent-400 text-stone-950 text-[0.7rem] font-bold rounded-full transition-colors"
            >
              Let&apos;s Talk
            </motion.button>
            <div className="flex items-center pl-2 pr-4 ml-1 border-l border-white/5 h-10 relative">
              <Switch checked={theme === "light"} onChange={toggleTheme} />
              {showThemeHint && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute -bottom-10 right-4 py-1 px-2.5 bg-accent-500 text-stone-950 text-[0.6rem] font-bold rounded-md whitespace-nowrap shadow-xl pointer-events-none z-[100]"
                >
                  Switch Theme
                  <div className="absolute -top-1 right-4 w-2 h-2 bg-accent-500 rotate-45" />
                </motion.div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <section id="hero" className="min-h-0">
        <HeroGlassmorphism />
      </section>

      <motion.section id="about" className="section-frame animate-secondary" {...revealProps}>
        <About />
      </motion.section>

      <motion.section id="experience" className="section-frame animate-secondary" {...revealProps}>
        <Experience />
      </motion.section>

      <motion.section
        id="hackathons"
        className="section-frame hidden md:block animate-secondary"
        {...revealProps}
      >
        <Hackathons />
      </motion.section>

      <section className="md:hidden animate-secondary">
        <MobileHackathons />
      </section>

      <motion.section id="projects" className="section-frame animate-secondary" {...revealProps}>
        <CircularProjects />
      </motion.section>

      <motion.section id="os-preview" className="section-frame animate-secondary" {...revealProps}>
        <ContainerScrollAnimation />
      </motion.section>

      <motion.section id="skills" className="section-frame animate-secondary" {...revealProps}>
        <Skills />
      </motion.section>

      <motion.section id="resume" className="section-frame animate-secondary" {...revealProps}>
        <Resume />
      </motion.section>

      <motion.section
        id="contact"
        className="section-wrapper section-surface section-frame animate-secondary"
        {...revealProps}
      >
        <div className="container-custom">
          <div className="space-y-10 sm:space-y-12 text-center md:text-left">
            <div className="space-y-4 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
              <h2 className="text-[var(--theme-text)] leading-tight">
                Ready To <span className="text-[var(--theme-text-muted)]">Collaborate?</span>
              </h2>
              <p className="text-stone-400 text-base sm:text-lg">
                Whether you have a question or just want to say hi, my inbox is always open. I
                typically reply within 24–48 hours.
              </p>
            </div>

            <ContactCards />

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 text-stone-300 pt-3 sm:pt-4 max-w-4xl mx-auto md:mx-0">
              <div className="w-12 h-12 bg-theme-surface-2 rounded-xl flex items-center justify-center border border-theme-border">
                <MdLocationOn size={24} className="text-accent-400" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                  Location
                </p>
                <p className="text-lg">Kolkata, India</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}

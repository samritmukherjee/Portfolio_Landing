"use client";

import {
  About,
  Experience,
  Hackathons,
  Skills,
  Resume,
} from "@/components/sections";
import { HeroGlassmorphism } from "@/components/sections/HeroGlassmorphism";
import { CircularProjects } from "@/components/sections/CircularProjects";
import { ContainerScrollAnimation } from "@/components/sections/ContainerScrollAnimation";
import { TextSwiper } from "@/components/sections/TextSwiper";
import { Footer } from "@/components/Footer";
import { MobileHackathons } from "@/components/sections/mobile/MobileHackathons";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Switch from "@/components/star-wars-toggle-switch";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { scrollToElement } from "@/lib/scrollToElement";

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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [activeSection, setActiveSection] = useState("about");

  const navItems = ["About", "Experience", "Projects", "Skills"] as const;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = ["about", "experience", "hackathons", "projects", "skills", "contact"];
    const nodes = sections
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (!nodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
        variants: sectionVariants,
      };

  return (
    <main className="min-h-screen app-shell">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Aurora Background */}
      <div className="aurora-bg"></div>

      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-700 ${scrolled ? "py-0.5 sm:py-1" : "py-2 sm:py-2.5"}`}>
        <div className="container-custom flex items-center justify-between h-12 sm:h-auto">
          <div className="flex items-center h-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-xl font-extrabold tracking-[0.08em] text-stone-100 truncate"
            >
              SAMRIT<span className="text-accent-500">.</span>
            </motion.div>
          </div>
          
          {/* Mobile: Only Toggle */}
          <div className="md:hidden">
            <div className="flex items-center pl-2 pr-2 border-l border-white/5 h-8">
              <Switch
                checked={theme === "light"}
                onChange={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              />
            </div>
          </div>

          {/* Desktop: Full Nav Bar */}
          <nav className={`hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-full nav-shell overflow-hidden ${scrolled ? "nav-shell-scrolled" : ""}`}>
            {navItems.map((item) => {
              const itemId = item.toLowerCase();
              const isActive = activeSection === itemId;

              return (
                <motion.button
                  key={item}
                  onClick={() => scrollToElement(itemId)}
                  whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                  className={`nav-link text-[0.7rem] px-3 ${isActive ? "is-active" : ""}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="nav-active-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 36, mass: 0.7 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.button>
              );
            })}
            <motion.button 
              onClick={() => scrollToElement('contact')}
              whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              className="px-4 py-1.5 bg-accent-400 text-stone-950 text-[0.7rem] font-bold rounded-full transition-all shadow-[0_8px_20px_-12px_rgba(239,178,74,0.75)]"
            >
              Let's Talk
            </motion.button>
            <div className="flex items-center pl-2 pr-4 ml-1 border-l border-white/5 h-10">
              <Switch
                checked={theme === "light"}
                onChange={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Content Sections */}
      <section id="hero">
        <HeroGlassmorphism />
      </section>

      <motion.section id="about" className="section-frame" {...revealProps}>
        <About />
      </motion.section>

      <motion.section id="experience" className="section-frame" {...revealProps}>
        <Experience />
      </motion.section>

      {/* Desktop Hackathons Section */}
      <motion.section id="hackathons" className="section-frame hidden md:block" {...revealProps}>
        <Hackathons />
      </motion.section>

      {/* Mobile Hackathons Section */}
      <section className="md:hidden">
        <MobileHackathons />
      </section>

      {/* Projects Section - Using the provided Circular Component */}
      <motion.section id="projects" className="section-frame" {...revealProps}>
        <CircularProjects />
      </motion.section>

      {/* OS Experience Preview - Using the provided Container Scroll Component */}
      <motion.section id="os-preview" className="section-frame" {...revealProps}>
        <ContainerScrollAnimation />
      </motion.section>

      <motion.section id="skills" className="section-frame" {...revealProps}>
        <Skills />
      </motion.section>

      <motion.section id="resume" className="section-frame" {...revealProps}>
        <Resume />
      </motion.section>

      {/* Contact Section */}
      <motion.section id="contact" className="section-wrapper section-surface section-frame" {...revealProps}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-stone-50">
                  Ready To <span className="text-accent-300">Collaborate?</span>
                </h2>
                <p className="text-stone-400 text-lg">
                  Whether you have a question or just want to say hi, my inbox is always open.
                </p>
              </div>
              
              <div className="space-y-6">
                <motion.a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDmBfKhgHdjbrnFQpsQtcgCPsvzmwFLhmwTtMVFwVGhCfWPqRNgKjScLSTlKsNLDFgWwjDB"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                  className="flex items-center gap-4 text-stone-300 hover:text-accent-300 transition-colors group"
                >
                  <div className="w-12 h-12 bg-theme-surface-2 rounded-xl flex items-center justify-center border border-theme-border group-hover:border-accent-300/70 transition-colors">
                    <MdEmail size={24} className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-lg">samritmukherjee05@gmail.com</p>
                  </div>
                </motion.a>
                <div className="flex items-center gap-4 text-stone-300">
                  <div className="w-12 h-12 bg-theme-surface-2 rounded-xl flex items-center justify-center border border-theme-border">
                    <MdLocationOn size={24} className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Location</p>
                    <p className="text-lg">Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8">
               <TextSwiper />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

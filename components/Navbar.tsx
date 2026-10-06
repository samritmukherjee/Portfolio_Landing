"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/scrollToElement";
import StarWarsSwitch from "@/components/star-wars-toggle-switch";

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "What I Do", href: "services" },
  { name: "Accolades", href: "hackathons" },
  { name: "Projects", href: "projects" },
  { name: "Journey", href: "career" },
  { name: "Arsenal", href: "arsenal" },
  { name: "Contact", href: "contact" },
];

export function Navbar({ theme, onToggleTheme, activeSection }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const nextVisible = !(currentY > lastY && currentY > 90);
          setVisible((prev) => (prev !== nextVisible ? nextVisible : prev));
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToElement(id);
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1500px at 90% 5%)",
      transition: { type: "spring", stiffness: 22, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(0px at 90% 5%)",
      transition: { type: "spring", stiffness: 380, damping: 38 },
    },
  };

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
    closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 40, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          >
            <div className="glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 shadow-xl border border-foreground/10 bg-[var(--glass-bg)] pointer-events-auto">
              {/* Brand Logo & Name Alignment */}
              <a
                onClick={() => handleNavClick("hero")}
                className="cursor-pointer flex items-center gap-3 group select-none"
                aria-label="Samrit Mukherjee Home"
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://res.cloudinary.com/duxrcy3jn/image/upload/v1791022468/SamritMukherjeeLogo_wherde.png"
                    alt="Samrit Mukherjee Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                    priority
                    unoptimized
                  />
                </div>
                <div className="flex flex-col justify-center text-left leading-tight">
                  <span className="font-extrabold tracking-tight text-foreground text-sm sm:text-base leading-none group-hover:text-primary transition-colors">
                    Samrit Mukherjee
                  </span>
                  <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                    Portfolio
                  </span>
                </div>
              </a>

              {/* Desktop Nav Items */}
              <nav className="hidden lg:flex flex-1 justify-center">
                <ul className="flex space-x-7">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                      <li
                        key={item.name}
                        className="relative group text-sm font-semibold transition-colors"
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={`cursor-pointer transition-colors ${
                            isActive
                              ? "text-primary font-bold"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.name}
                        </button>
                        <motion.span
                          className="absolute -bottom-1.5 left-1/2 h-[2px] bg-[#2563EB] dark:bg-[#3B82F6] rounded-full"
                          initial={false}
                          animate={
                            isActive
                              ? { width: "100%", x: "-50%", opacity: 1 }
                              : { width: "0%", x: "-50%", opacity: 0 }
                          }
                          whileHover={{ width: "100%", x: "-50%", opacity: 1 }}
                          transition={{ duration: 0.25 }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Right Controls: Star Wars Theme Toggle + Mobile Menu Trigger */}
              <div className="flex items-center gap-3">
                {/* BB-8 Star Wars Theme Toggle Switch */}
                <div className="scale-[0.82] sm:scale-90 origin-right">
                  <StarWarsSwitch
                    checked={theme === "dark"}
                    onChange={onToggleTheme}
                  />
                </div>

                {/* Mobile Menu Hamburger */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open Navigation Menu"
                  className="lg:hidden text-foreground hover:text-primary transition-colors p-1.5 rounded-lg"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Circular clipPath overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-[var(--theme-bg)]/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center px-6"
          >
            <motion.button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="absolute top-8 right-8 text-foreground hover:text-primary p-2 transition-colors"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.15 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.ul
              variants={listVariants}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-3xl sm:text-4xl font-extrabold text-muted-foreground hover:text-primary hover:tracking-wider transition-all cursor-pointer"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

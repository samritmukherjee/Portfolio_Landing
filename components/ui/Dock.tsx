"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Layers,
  FolderGit2,
  Code2,
  Trophy,
  Mail,
} from "lucide-react";
import { scrollToElement } from "@/lib/scrollToElement";

interface DockItemProps {
  icon: React.ReactNode;
  label: string;
  colorClass: string;
  hoverGlowClass: string;
  onClick: () => void;
  mouseX: any;
  baseItemSize?: number;
  magnification?: number;
  distance?: number;
}

function DockItem({
  icon,
  label,
  colorClass,
  hoverGlowClass,
  onClick,
  mouseX,
  baseItemSize = 52,
  magnification = 74,
  distance = 140,
}: DockItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distTransform = useTransform(mouseX, (val: number) => {
    if (typeof val !== "number" || isNaN(val)) return 0;
    const rect = itemRef.current?.getBoundingClientRect() ?? { x: 0 };
    return val - rect.x - baseItemSize / 2;
  });

  const sizeTransform = useTransform(
    distTransform,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const animatedSize = useSpring(sizeTransform, {
    stiffness: 420,
    damping: 26,
  });

  return (
    <motion.div
      ref={itemRef}
      style={{ width: animatedSize, height: animatedSize }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative flex items-center justify-center rounded-2xl cursor-pointer bg-[var(--theme-surface)]/95 border border-[var(--theme-border)] shadow-md transition-all duration-200 backdrop-blur-xl ${hoverGlowClass}`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: -8, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 px-3 py-1 rounded-lg bg-zinc-950 text-white text-xs font-mono font-bold tracking-wide whitespace-nowrap shadow-2xl border border-white/15 pointer-events-none z-50"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`flex items-center justify-center pointer-events-none transition-transform duration-200 group-hover:scale-110 ${colorClass}`}>
        {icon}
      </div>
    </motion.div>
  );
}

export function Dock() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const isPastHero = currentY > window.innerHeight * 0.35;

          // Hide dock when user reaches bottom footer to avoid overlap
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = window.innerHeight;
          const isNearBottom = currentY + clientHeight >= scrollHeight - 140;

          setVisible(isPastHero && !isNearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      icon: <Home className="w-[22px] h-[22px]" />,
      label: "Home",
      colorClass: "text-[#FF0000]",
      hoverGlowClass: "hover:border-[#FF0000]/60 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:bg-[#FF0000]/10",
      onClick: () => scrollToElement("hero"),
    },
    {
      icon: <User className="w-[22px] h-[22px]" />,
      label: "About",
      colorClass: "text-indigo-500 dark:text-indigo-400",
      hoverGlowClass: "hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:bg-indigo-500/10",
      onClick: () => scrollToElement("about"),
    },
    {
      icon: <Layers className="w-[22px] h-[22px]" />,
      label: "What I Do",
      colorClass: "text-cyan-500 dark:text-cyan-400",
      hoverGlowClass: "hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500/10",
      onClick: () => scrollToElement("services"),
    },
    {
      icon: <Trophy className="w-[22px] h-[22px]" />,
      label: "Accolades",
      colorClass: "text-amber-500 dark:text-amber-400",
      hoverGlowClass: "hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-amber-500/10",
      onClick: () => scrollToElement("hackathons"),
    },
    {
      icon: <FolderGit2 className="w-[22px] h-[22px]" />,
      label: "Projects",
      colorClass: "text-rose-500 dark:text-rose-400",
      hoverGlowClass: "hover:border-rose-500/60 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:bg-rose-500/10",
      onClick: () => scrollToElement("projects"),
    },
    {
      icon: <Briefcase className="w-[22px] h-[22px]" />,
      label: "Journey",
      colorClass: "text-emerald-500 dark:text-emerald-400",
      hoverGlowClass: "hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10",
      onClick: () => scrollToElement("career"),
    },
    {
      icon: <Code2 className="w-[22px] h-[22px]" />,
      label: "Arsenal",
      colorClass: "text-purple-500 dark:text-purple-400",
      hoverGlowClass: "hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/10",
      onClick: () => scrollToElement("arsenal"),
    },
    {
      icon: <Mail className="w-[22px] h-[22px]" />,
      label: "Connect",
      colorClass: "text-pink-500 dark:text-pink-400",
      hoverGlowClass: "hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:bg-pink-500/10",
      onClick: () => scrollToElement("contact"),
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-0 right-0 z-[999] hidden md:flex justify-center px-4 pointer-events-none"
        >
          <div
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-[2.5rem] bg-[var(--theme-surface)]/95 border border-[var(--theme-border)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl pointer-events-auto"
          >
            {items.map((item, idx) => (
              <DockItem
                key={idx}
                icon={item.icon}
                label={item.label}
                colorClass={item.colorClass}
                hoverGlowClass={item.hoverGlowClass}
                onClick={item.onClick}
                mouseX={mouseX}
                baseItemSize={52}
                magnification={74}
                distance={140}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dock;

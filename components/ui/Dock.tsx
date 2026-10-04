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
  baseItemSize = 40,
  magnification = 58,
  distance = 130,
}: DockItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Measure distance from mouseX to item center
  const distTransform = useTransform(mouseX, (val: number) => {
    if (typeof val !== "number" || !Number.isFinite(val)) {
      return distance + 1000;
    }
    const rect = itemRef.current?.getBoundingClientRect();
    if (!rect) return distance + 1000;
    const itemCenter = rect.left + rect.width / 2;
    return val - itemCenter;
  });

  // Clamped transform so non-hovered items strictly stay at baseItemSize
  const sizeTransform = useTransform(
    distTransform,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
    { clamp: true }
  );

  const animatedSize = useSpring(sizeTransform, {
    stiffness: 400,
    damping: 25,
    mass: 0.1,
  });

  return (
    <motion.div
      ref={itemRef}
      style={{ width: animatedSize, height: animatedSize }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`relative flex items-center justify-center flex-shrink-0 aspect-square rounded-2xl cursor-pointer bg-[var(--theme-surface)]/95 border border-[var(--theme-border)] shadow-sm transition-all duration-200 ${hoverGlowClass}`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: -6, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 px-2.5 py-1 rounded-lg bg-zinc-950 text-white text-[11px] font-mono font-semibold tracking-wide whitespace-nowrap shadow-xl border border-white/10 pointer-events-none z-50"
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
    let cachedScrollHeight = 0;

    const measureScrollHeight = () => {
      cachedScrollHeight = document.documentElement.scrollHeight;
    };
    measureScrollHeight();
    window.addEventListener("resize", measureScrollHeight, { passive: true });

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const isPastHero = currentY > window.innerHeight * 0.35;

          // Hide dock when user reaches bottom footer to avoid overlap
          const totalHeight = cachedScrollHeight || document.body.offsetHeight;
          const isNearBottom = currentY + window.innerHeight >= totalHeight - 140;

          setVisible(isPastHero && !isNearBottom);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("resize", measureScrollHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    {
      icon: <Home className="w-4 h-4" />,
      label: "Home",
      colorClass: "text-[#EF4444] dark:text-red-400",
      hoverGlowClass: "hover:border-[#EF4444]/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:bg-[#EF4444]/10",
      onClick: () => scrollToElement("hero"),
    },
    {
      icon: <User className="w-4 h-4" />,
      label: "About",
      colorClass: "text-indigo-500 dark:text-indigo-400",
      hoverGlowClass: "hover:border-indigo-500/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:bg-indigo-500/10",
      onClick: () => scrollToElement("about"),
    },
    {
      icon: <Layers className="w-4 h-4" />,
      label: "What I Do",
      colorClass: "text-cyan-500 dark:text-cyan-400",
      hoverGlowClass: "hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500/10",
      onClick: () => scrollToElement("services"),
    },
    {
      icon: <Trophy className="w-4 h-4" />,
      label: "Accolades",
      colorClass: "text-amber-500 dark:text-amber-400",
      hoverGlowClass: "hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:bg-amber-500/10",
      onClick: () => scrollToElement("hackathons"),
    },
    {
      icon: <FolderGit2 className="w-4 h-4" />,
      label: "Projects",
      colorClass: "text-rose-500 dark:text-rose-400",
      hoverGlowClass: "hover:border-rose-500/60 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] hover:bg-rose-500/10",
      onClick: () => scrollToElement("projects"),
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Journey",
      colorClass: "text-emerald-500 dark:text-emerald-400",
      hoverGlowClass: "hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10",
      onClick: () => scrollToElement("career"),
    },
    {
      icon: <Code2 className="w-4 h-4" />,
      label: "Arsenal",
      colorClass: "text-purple-500 dark:text-purple-400",
      hoverGlowClass: "hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/10",
      onClick: () => scrollToElement("arsenal"),
    },
    {
      icon: <Mail className="w-4 h-4" />,
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
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-0 right-0 z-[999] hidden md:flex justify-center px-4 pointer-events-none"
        >
          <div
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="flex items-center gap-2 px-3 py-2 rounded-[2rem] bg-[var(--theme-surface)]/95 border border-[var(--theme-border)] shadow-2xl backdrop-blur-md pointer-events-auto"
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
                baseItemSize={40}
                magnification={58}
                distance={130}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dock;

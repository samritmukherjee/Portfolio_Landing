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
  onClick: () => void;
  mouseX: any;
  baseItemSize?: number;
  magnification?: number;
  distance?: number;
}

function DockItem({
  icon,
  label,
  onClick,
  mouseX,
  baseItemSize = 44,
  magnification = 64,
  distance = 150,
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
    stiffness: 400,
    damping: 28,
  });

  return (
    <motion.div
      ref={itemRef}
      style={{ width: animatedSize, height: animatedSize }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className="relative flex items-center justify-center rounded-2xl cursor-pointer bg-[var(--theme-surface)]/90 border border-[var(--theme-border)] text-[var(--theme-text)] hover:text-[#FF0000] hover:border-[#FF0000]/40 transition-colors shadow-lg backdrop-blur-md"
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
      <div className="flex items-center justify-center pointer-events-none">
        {icon}
      </div>
    </motion.div>
  );
}

export function Dock() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isPastHero = currentY > window.innerHeight * 0.4;

      // Hide dock when user reaches bottom footer to avoid overlap
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const isNearBottom = currentY + clientHeight >= scrollHeight - 140;

      setVisible(isPastHero && !isNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { icon: <Home className="w-4 h-4" />, label: "Home", onClick: () => scrollToElement("hero") },
    { icon: <User className="w-4 h-4" />, label: "About", onClick: () => scrollToElement("about") },
    { icon: <Layers className="w-4 h-4" />, label: "What I Do", onClick: () => scrollToElement("services") },
    { icon: <Trophy className="w-4 h-4" />, label: "Accolades", onClick: () => scrollToElement("hackathons") },
    { icon: <FolderGit2 className="w-4 h-4" />, label: "Projects", onClick: () => scrollToElement("projects") },
    { icon: <Briefcase className="w-4 h-4" />, label: "Journey", onClick: () => scrollToElement("career") },
    { icon: <Code2 className="w-4 h-4" />, label: "Arsenal", onClick: () => scrollToElement("arsenal") },
    { icon: <Mail className="w-4 h-4" />, label: "Connect", onClick: () => scrollToElement("contact") },
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
            className="flex items-center gap-2 px-3 py-2 rounded-[2rem] bg-[var(--theme-surface)]/90 border border-[var(--theme-border)] shadow-2xl backdrop-blur-2xl pointer-events-auto"
          >
            {items.map((item, idx) => (
              <DockItem
                key={idx}
                icon={item.icon}
                label={item.label}
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

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticWrapperProps {
  children: React.ReactElement;
  range?: number;
  speed?: number;
}

export function MagneticWrapper({
  children,
  range = 25,
  speed = 0.35,
}: MagneticWrapperProps) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const isMobile = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReducedMotion) return;

    const child = trigger.firstElementChild as HTMLElement;
    if (!child) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = trigger.getBoundingClientRect();
      const triggerX = rect.left + rect.width / 2;
      const triggerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - triggerX;
      const distanceY = e.clientY - triggerY;
      
      const distance = Math.hypot(distanceX, distanceY);
      
      // Pull trigger if mouse is inside interaction bounds
      if (distance < rect.width * 1.6) {
        gsap.to(child, {
          x: distanceX * (range / rect.width),
          y: distanceY * (range / rect.height),
          duration: speed,
          ease: "power2.out",
        });
      } else {
        gsap.to(child, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1.1, 0.4)",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(child, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1.1, 0.4)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    trigger.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      trigger.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(child);
    };
  }, [range, speed]);

  return (
    <div ref={triggerRef} className="inline-block">
      {children}
    </div>
  );
}

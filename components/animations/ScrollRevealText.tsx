"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export function ScrollRevealText({
  text,
  className = "",
  delay = 0,
  duration = 0.65,
  stagger = 0.025,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: "110%",
    },
    visible: {
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const, // Custom premium easeOutExpo curve
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden mr-[0.22em] py-[0.08em] -my-[0.08em]"
        >
          <motion.span
            className="inline-block origin-bottom"
            variants={childVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

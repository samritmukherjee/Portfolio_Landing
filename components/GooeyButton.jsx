/**
 * GooeyButton — standalone gooey particle burst for buttons and anchor CTAs.
 * Extracts the particle/filter effect from GooeyNav so it can be applied to
 * individual elements (hero CTAs, project Live Demo buttons) per PRD Section 13.
 *
 * Section 0: All particle animations are skipped when prefers-reduced-motion is set.
 */
"use client";

import { useRef } from "react";
import "./GooeyNav.css"; // reuse the same particle/filter CSS

// Section 0: motion guard helper
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const PARTICLE_COUNT = 12;
const PARTICLE_DISTANCES = [70, 8];
const PARTICLE_R = 80;
const ANIMATION_TIME = 500;
const TIME_VARIANCE = 250;
const COLORS = [1, 2, 3, 1, 2, 3, 1, 4];

function noise(n = 1) {
  return n / 2 - Math.random() * n;
}

function getXY(distance, pointIndex, totalPoints) {
  const angle =
    ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
  return [distance * Math.cos(angle), distance * Math.sin(angle)];
}

function createParticle(i, t) {
  const d = PARTICLE_DISTANCES;
  const r = PARTICLE_R;
  const rotate = noise(r / 10);
  return {
    start: getXY(d[0], PARTICLE_COUNT - i, PARTICLE_COUNT),
    end: getXY(d[1] + noise(7), PARTICLE_COUNT - i, PARTICLE_COUNT),
    time: t,
    scale: 1 + noise(0.2),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
  };
}

function burstParticles(containerEl) {
  if (prefersReducedMotion()) return; // Section 0 guard

  const bubbleTime = ANIMATION_TIME * 2 + TIME_VARIANCE;
  containerEl.style.setProperty("--time", `${bubbleTime}ms`);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const t = ANIMATION_TIME * 2 + noise(TIME_VARIANCE * 2);
    const p = createParticle(i, t);
    containerEl.classList.remove("active");

    setTimeout(() => {
      const particle = document.createElement("span");
      const point = document.createElement("span");
      particle.classList.add("particle");
      particle.style.setProperty("--start-x", `${p.start[0]}px`);
      particle.style.setProperty("--start-y", `${p.start[1]}px`);
      particle.style.setProperty("--end-x", `${p.end[0]}px`);
      particle.style.setProperty("--end-y", `${p.end[1]}px`);
      particle.style.setProperty("--time", `${p.time}ms`);
      particle.style.setProperty("--scale", `${p.scale}`);
      particle.style.setProperty(
        "--color",
        `var(--color-${p.color}, var(--theme-accent))`
      );
      particle.style.setProperty("--rotate", `${p.rotate}deg`);
      point.classList.add("point");
      particle.appendChild(point);
      containerEl.appendChild(particle);
      requestAnimationFrame(() => {
        containerEl.classList.add("active");
      });
      setTimeout(() => {
        try {
          containerEl.removeChild(particle);
        } catch {
          /* already removed */
        }
      }, t);
    }, 30);
  }
}

/**
 * GooeyButton wraps children with a gooey particle container.
 * On click, bursts gooey particles from the element's center.
 * Does NOT change the underlying element — the children are rendered as-is.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {function} [props.onBurst] - optional extra callback after burst fires
 * @param {string} [props.className] - applied to the outer wrapper div
 */
export function GooeyButton({ children, onBurst, className = "" }) {
  const containerRef = useRef(null);

  const handleClick = () => {
    if (containerRef.current) {
      // clear existing stale particles
      const stale = containerRef.current.querySelectorAll(".particle");
      stale.forEach((p) => {
        try {
          containerRef.current.removeChild(p);
        } catch {}
      });
      burstParticles(containerRef.current);
    }
    onBurst?.();
  };

  return (
    <span
      ref={containerRef}
      className={`gooey-btn-wrap ${className}`}
      style={{ position: "relative", display: "inline-flex" }}
      onClick={handleClick}
    >
      {children}
    </span>
  );
}

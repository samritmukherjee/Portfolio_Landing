import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Detect if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Initialize Lenis for smooth scrolling with optimized parameters
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.6 : 1.2,
      easing: (t) => {
        // Optimized easing: smooth exponential out
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      lerp: 0.08, // Slightly reduced for smoother response
      wheelMultiplier: 1,
      touchMultiplier: 1.0, // Neutral touch response to avoid scroll friction
      infinite: false,
    });

    // Enable GPU acceleration hint
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.style.scrollBehavior = 'auto';
    }

    // Optimized RAF loop for consistent performance
    let raf: number;
    const onRAF = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(onRAF);
    };

    raf = requestAnimationFrame(onRAF);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
};

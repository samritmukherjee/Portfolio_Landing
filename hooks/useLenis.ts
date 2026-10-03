import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Global reference to prevent duplicate instantiation in Strict Mode
let globalLenisInstance: Lenis | null = null;

export const useLenis = (shouldEnable: boolean = true) => {
  useEffect(() => {
    if (!shouldEnable || typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'auto';
      return;
    }

    // Reuse existing instance if active
    if (!globalLenisInstance) {
      const lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false,
        autoRaf: true,
      });

      globalLenisInstance = lenis;
      (window as unknown as { lenis?: Lenis }).lenis = lenis;

      // Coordinate Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Keep GSAP lag smoothing gentle so it never stutters on micro-stalls
      gsap.ticker.lagSmoothing(500, 33);
    }

    return () => {
      // In production or unmount, clean up cleanly
      if (globalLenisInstance) {
        globalLenisInstance.destroy();
        globalLenisInstance = null;
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, [shouldEnable]);
};

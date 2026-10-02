import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Global reference to prevent duplicate instantiation in Strict Mode
let globalLenisInstance: Lenis | null = null;
let rafCallback: ((time: number) => void) | null = null;

export const useLenis = (shouldEnable: boolean = true) => {
  useEffect(() => {
    if (!shouldEnable || typeof window === 'undefined') {
      return;
    }

    // Detect mobile or coarse pointer devices
    const isMobile =
      window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches;

    if (isMobile) {
      document.documentElement.style.scrollBehavior = 'auto';
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
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      });

      globalLenisInstance = lenis;
      (window as unknown as { lenis?: Lenis }).lenis = lenis;

      // Coordinate Lenis with GSAP ScrollTrigger to use a SINGLE animation loop
      lenis.on('scroll', ScrollTrigger.update);

      rafCallback = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(rafCallback);
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      // In production or unmount, clean up cleanly
      if (globalLenisInstance) {
        if (rafCallback) {
          gsap.ticker.remove(rafCallback);
          rafCallback = null;
        }
        globalLenisInstance.destroy();
        globalLenisInstance = null;
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, [shouldEnable]);
};

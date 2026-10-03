import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Global reference guaranteeing a single coordinated instance across re-renders
let globalLenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

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

    // Reuse existing instance if already active
    if (!globalLenisInstance) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        syncTouch: false, // Preserves native, responsive 120Hz/60Hz touch momentum on mobile
        autoRaf: false, // Disables standalone RAF to unify strictly with GSAP ticker loop
      });

      globalLenisInstance = lenis;
      (window as unknown as { lenis?: Lenis }).lenis = lenis;

      // Coordinate Lenis scroll event directly into GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Single coordinated RAF loop driven by GSAP ticker (zero competing animation loops)
      tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      if (tickerCallback) {
        gsap.ticker.remove(tickerCallback);
        tickerCallback = null;
      }
      if (globalLenisInstance) {
        globalLenisInstance.destroy();
        globalLenisInstance = null;
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, [shouldEnable]);
};

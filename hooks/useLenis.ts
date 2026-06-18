import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = (shouldEnable: boolean = true) => {
  useEffect(() => {
    if (!shouldEnable) {
      return;
    }

    const isMobile = typeof window !== 'undefined' &&
      (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches);

    // Completely disable Lenis on mobile for native performance and inertial scrolling
    if (isMobile) {
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
      return;
    }

    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Optimized settings for Desktop smooth scrolling
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1, // Slightly snappier for better performance
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: false, // Turn off syncTouch to prevent input delay and scroll fights
    });

    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.style.scrollBehavior = 'auto';
    }

    let raf: number;
    const onRAF = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(onRAF);
    };

    raf = requestAnimationFrame(onRAF);

    // Global access for other components if needed
    (window as any).lenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, [shouldEnable]);
};


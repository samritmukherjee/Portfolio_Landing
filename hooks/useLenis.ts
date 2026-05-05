import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = (shouldEnable: boolean = true) => {
  useEffect(() => {
    if (!shouldEnable) {
      return;
    }

    // Detect if mobile device (touch and not desktop)
    const isMobile = typeof window !== 'undefined' && 
      (window.matchMedia('(max-width: 768px)').matches || 
       window.matchMedia('(hover: none)').matches);
    
    // Skip Lenis on mobile for better performance
    if (isMobile) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.6 : 1.2,
      easing: (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      },
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1.0,
      infinite: false,
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

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [shouldEnable]);
};

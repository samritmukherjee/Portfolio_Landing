import Lenis from 'lenis';

export const scrollToElement = (elementId: string) => {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerOffset = 80;
  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(element, {
      offset: -headerOffset,
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const scrollToElement = (elementId: string) => {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerOffset = 72;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement | number, opts?: Record<string, unknown>) => void } }).lenis;
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(offsetPosition, { duration: 1.0 });
  } else {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

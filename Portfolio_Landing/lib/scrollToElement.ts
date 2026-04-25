export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Use native scroll behavior - Lenis will intercept and smoothly animate it
  const topOffset = element.offsetTop;
  window.scrollTo({
    top: topOffset,
    behavior: 'smooth',
  });
};

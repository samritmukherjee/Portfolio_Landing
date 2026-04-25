import { useEffect, useRef } from 'react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const BlurText = ({ text, delay = 0.1, className = '' }: BlurTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const words = text.split(' ');
    element.innerHTML = words
      .map((word) => `<span class="blur-animation">${word}</span>`)
      .join(' ');

    words.forEach((_, index) => {
      const span = element.querySelectorAll('span')[index];
      if (span) {
        span.style.animationDelay = `${index * delay}s`;
      }
    });
  }, [text, delay]);

  return (
    <span ref={ref} className={`inline-block ${className}`} />
  );
};

import { useEffect, useRef } from 'react';

interface RotatingTextProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const RotatingText = ({ words, duration = 3, className = '' }: RotatingTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateText = () => {
      element.textContent = words[currentIndex.current];
      element.style.animation = 'none';
      setTimeout(() => {
        element.style.animation = '';
      }, 10);
      currentIndex.current = (currentIndex.current + 1) % words.length;
    };

    element.textContent = words[0];
    const interval = setInterval(updateText, duration * 1000);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span 
      ref={ref} 
      className={`inline-block transition-opacity duration-500 ${className}`}
    />
  );
};

"use client";
import { useEffect, useRef, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  className?: string;
  animateOn?: 'view' | 'load';
  revealDirection?: 'start' | 'end' | 'center';
}

export const DecryptedText = ({ 
  text, 
  speed = 40, 
  maxIterations = 10,
  className = '',
  animateOn = 'load',
  revealDirection = 'start'
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { threshold: 0.1 }
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      setIsIntersecting(true);
    }
  }, [animateOn]);

  useEffect(() => {
    if (!isIntersecting) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            let revealCondition = false;
            if (revealDirection === 'start') {
              revealCondition = index < iteration;
            } else if (revealDirection === 'end') {
              revealCondition = index > text.length - iteration;
            } else if (revealDirection === 'center') {
              const center = text.length / 2;
              revealCondition = Math.abs(index - center) < iteration / 2;
            }

            if (revealCondition) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length + 10) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, maxIterations, isIntersecting, revealDirection]);

  return (
    <span ref={containerRef} className={className}>
      {displayText || text.split('').map(() => ' ')}
    </span>
  );
};

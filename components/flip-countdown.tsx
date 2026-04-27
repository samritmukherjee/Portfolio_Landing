import React, { useState, useEffect, useMemo, useRef } from 'react';

// A simple utility for conditional class names
const cn = (...inputs: (string | undefined | null | boolean)[]) =>
  inputs.filter(Boolean).join(' ');

// Easing functions for premium feel
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -12 * t); // More aggressive exponential
};

const easeOutQuad = (t: number): number => {
  return 1 - (1 - t) * (1 - t);
};

// Internal component for a single digit
const FlipUnit = ({
  digit,
  cardStyle,
}: {
  digit: string;
  cardStyle: React.CSSProperties;
}) => {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (digit !== currentDigit) {
      setPreviousDigit(currentDigit);
      setCurrentDigit(digit);
      setIsFlipping(true);
    }
  }, [digit, currentDigit]);

  const handleAnimationEnd = () => {
    setIsFlipping(false);
    setPreviousDigit(digit);
  };

  return (
    <div className="flip-unit" style={cardStyle}>
      <div className="flip-card flip-card__bottom">{currentDigit}</div>
      <div className="flip-card flip-card__top">{previousDigit}</div>
      <div
        className={cn('flipper', isFlipping && 'is-flipping')}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="flip-card flipper__top">{previousDigit}</div>
        <div className="flip-card flipper__bottom">{currentDigit}</div>
      </div>
    </div>
  );
};

// Premium accelerated counter with odometer-style animation
export const FlipCountdown = ({
  countFrom = 99,
  countTo = 0,
  className,
  cardBgColor,
  textColor,
}: {
  countFrom?: number | string | bigint;
  countTo?: number | string | bigint;
  className?: string;
  cardBgColor?: string;
  textColor?: string;
}) => {
  // Use BigInt internally for safe handling of large numbers
  const from = useMemo(() => BigInt(countFrom), [countFrom]);
  const to = useMemo(() => BigInt(countTo), [countTo]);

  const [count, setCount] = useState(from);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();

  // Animation parameters - optimized for fast feel
  const SHUFFLE_DURATION = 150; // 0.15s rapid shuffle effect (faster)
  const TOTAL_DURATION = 1000; // 1.0s total animation (under 1.2s target)
  const COUNT_DURATION = TOTAL_DURATION - SHUFFLE_DURATION; // 0.65s count-up

  useEffect(() => {
    const numDigits = String(to).length;
    const targetNum = Number(to);
    const fromNum = Number(from);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / TOTAL_DURATION, 1);

      if (elapsed < SHUFFLE_DURATION) {
        // Rapid shuffle phase (~150ms) - slot machine effect
        // Generate random numbers that match target digit count
        if (Math.random() < 0.6) { // More frequent shuffling for faster effect
          const randomNum = Math.floor(Math.random() * Math.pow(10, numDigits));
          setCount(BigInt(randomNum));
        }
      } else {
        // Fast count-up phase with easeOutExpo for luxurious acceleration
        const countProgress = Math.min((elapsed - SHUFFLE_DURATION) / COUNT_DURATION, 1);
        const easedProgress = easeOutExpo(countProgress);
        const currentValue = Math.floor(fromNum + (targetNum - fromNum) * easedProgress);
        setCount(BigInt(Math.max(currentValue, fromNum)));
      }

      // Continue animation until complete
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end at exactly the target
        setCount(to);
      }
    };

    // Reset timer for fresh animation
    startTimeRef.current = undefined;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [from, to]);

  // Calculate padding based on the largest number's length
  const paddedCount = useMemo(() => {
    const maxVal = from > to ? from : to;
    const numDigits = String(maxVal).length;
    const displayCount = count < 0n ? 0n : count;

    return String(displayCount).padStart(numDigits, '0');
  }, [count, from, to]);

  const cardStyle: React.CSSProperties = {
    '--flip-card-bg': cardBgColor,
    '--flip-card-text': textColor,
  } as React.CSSProperties;

  return (
    <div className={cn('flip-countdown-container', className)}>
      {paddedCount.split('').map((digit, index) => (
        <FlipUnit key={index} digit={digit} cardStyle={cardStyle} />
      ))}
    </div>
  );
};
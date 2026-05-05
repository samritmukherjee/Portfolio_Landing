'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const LOADER_WORDS = ['CRAFTING', 'BUILDING', 'DESIGNING', 'OPTIMIZING', 'LAUNCHING'];
const LOAD_DURATION = 1800;
const WORD_CHANGE_INTERVAL = 900;

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % LOADER_WORDS.length);
    }, WORD_CHANGE_INTERVAL);

    const loadTimer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => setLoading(false), 800);
    }, LOAD_DURATION);

    return () => {
      clearInterval(wordInterval);
      clearTimeout(loadTimer);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setRotation((prev) => (prev + 2) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!loading) return null;

  return (
    <>
      {/* Main Loader Overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#000004] transition-opacity ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDuration: '600ms', willChange: 'opacity' }}
      >
        {/* Loader Container */}
        <div className="flex flex-col items-center justify-center gap-6 px-4 w-full h-full">
          {/* Animated Ring with Logo */}
          <div className="relative w-28 h-28 flex-shrink-0" style={{ willChange: 'transform' }}>
            {/* SVG Rotating Ring */}
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `rotate(${rotation}deg)`,
                willChange: 'transform',
              }}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0C6291" />
                  <stop offset="50%" stopColor="#FF5964" />
                  <stop offset="100%" stopColor="#7E1946" />
                </linearGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="2"
              />
            </svg>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ willChange: 'opacity' }}>
              <div className="w-12 h-12 relative flex-shrink-0">
                <Image
                  src="https://res.cloudinary.com/duxrcy3jn/image/upload/q_auto/f_auto/v1777463452/SAMRIT_FEBICON_hxnczn.png"
                  alt="Samrit Logo"
                  width={48}
                  height={48}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Text with Fade Transition */}
          <div className="text-center h-6 flex-shrink-0" style={{ willChange: 'opacity' }}>
            <div className="relative flex items-center justify-center h-full">
              {currentWordIndex !== undefined && (
                <div
                  key={currentWordIndex}
                  style={{
                    animation: 'fadeInOutText 0.9s ease-in-out',
                  }}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium tracking-widest text-gray-300 whitespace-nowrap">
                      {LOADER_WORDS[currentWordIndex]}
                    </span>
                    <span className="flex gap-1">
                      <span 
                        className="w-1 h-1 rounded-full bg-[#0C6291] flex-shrink-0"
                        style={{
                          animation: 'dotPulse 0.9s ease-in-out infinite',
                          animationDelay: '0s',
                          willChange: 'opacity',
                        }}
                      />
                      <span 
                        className="w-1 h-1 rounded-full bg-[#0C6291] flex-shrink-0"
                        style={{
                          animation: 'dotPulse 0.9s ease-in-out infinite',
                          animationDelay: '0.1s',
                          willChange: 'opacity',
                        }}
                      />
                      <span 
                        className="w-1 h-1 rounded-full bg-[#0C6291] flex-shrink-0"
                        style={{
                          animation: 'dotPulse 0.9s ease-in-out infinite',
                          animationDelay: '0.2s',
                          willChange: 'opacity',
                        }}
                      />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Split Screen Transition */}
      {isTransitioning && (
        <>
          <div
            className="fixed top-0 left-0 right-0 h-1/2 bg-[#000004] z-[9998]"
            style={{
              animation: 'slideUp 0.8s ease-in-out forwards',
            }}
          />
          <div
            className="fixed bottom-0 left-0 right-0 h-1/2 bg-[#000004] z-[9998]"
            style={{
              animation: 'slideDown 0.8s ease-in-out forwards',
            }}
          />
        </>
      )}

      <style jsx>{`
        @keyframes fadeInOutText {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes dotPulse {
          0%, 20% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          80%, 100% {
            opacity: 0.4;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </>
  );
}

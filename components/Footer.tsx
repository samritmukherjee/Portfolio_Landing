"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { FlipCountdown } from "./flip-countdown";
import { isNewVisitor, markVisit } from "@/lib/visitor";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndUpdateCount = async () => {
      try {
        const newVisitor = isNewVisitor();

        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isNewVisitor: newVisitor }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          const errorMessage = errorData?.error ?? `API returned ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        if (typeof data.count !== 'number') {
          throw new Error('Invalid visitor count returned by API');
        }

        setVisitCount(data.count);
        setFetchError(null);

        if (newVisitor) {
          markVisit();
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('[Footer] Error updating visitor count:', message);
        setFetchError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndUpdateCount();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTrigger((prev) => prev + 1);
        }
      },
      { threshold: 0.3 }
    );

    const footer = document.querySelector("footer");
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer className="section-surface border-t border-white/5 py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-12 md:items-center">
          <div className="space-y-3 md:flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter text-stone-50">
              SAMRIT<span className="text-accent-500">.</span>
            </h3>
            <p className="text-stone-500 text-sm max-w-xs mx-auto md:mx-0">
              Building the future of interactive web experiences and AI-driven solutions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs text-stone-500 font-semibold uppercase tracking-widest">Visitors</span>

            {isLoading && (
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-10 rounded-sm"
                    style={{
                      background: 'var(--theme-surface-2)',
                      border: '1px solid var(--theme-border)',
                      animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                ))}
              </div>
            )}

            {!isLoading && visitCount !== null && (
              <FlipCountdown
                key={animationTrigger}
                countFrom={0}
                countTo={visitCount}
                className="flip-countdown-footer"
                cardBgColor="var(--theme-surface-2)"
                textColor="var(--theme-accent-soft)"
              />
            )}

            {!isLoading && visitCount === null && (
              <div className="text-stone-500 text-sm font-semibold tracking-tight">
                {fetchError ? 'Visitor count unavailable' : 'No visitor data'}
              </div>
            )}
          </motion.div>

          <div className="flex flex-col items-center md:items-end gap-4 md:flex-1 text-center md:text-right">
            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/samritmukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/samrit-mukherjee-412788318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:samritmukherjee@example.com"
                className="text-stone-400 hover:text-accent-400 transition-colors text-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <p className="text-stone-600 text-xs">
              © {currentYear} Samrit Mukherjee. Handcrafted in India.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </footer>
  );
};

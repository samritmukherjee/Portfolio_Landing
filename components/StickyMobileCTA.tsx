"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CALENDLY =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/samritmukherjee/15min";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const depth =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(depth > 0.12 && window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[95] md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-[var(--theme-bg)] to-transparent"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full rounded-2xl bg-accent-500 text-stone-950 font-bold px-5 py-3.5 shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-300"
          >
            <span className="flex items-center gap-2 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to work
            </span>
            <span className="text-sm">Book a call →</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

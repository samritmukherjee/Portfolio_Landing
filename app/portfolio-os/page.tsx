"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioOSPage() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="aurora-bg"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl text-center space-y-8"
      >
        {/* Terminal-style header */}
        <div className="glass-card p-8 border border-accent-500/30 rounded-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4"
          >
            {/* Blinking cursor effect */}
            <div className="inline-block">
              <code className="text-accent-400 font-mono text-sm sm:text-base">
                $ portfolio-os --status
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  █
                </motion.span>
              </code>
            </div>

            <div className="text-left bg-stone-900/50 p-4 rounded-lg border border-stone-800/50 font-mono text-xs sm:text-sm text-stone-400 space-y-2">
              <p>&gt; initializing portfolio OS...</p>
              <p>&gt; compiling interactive components...</p>
              <p>&gt; syncing with cloud infrastructure...</p>
              <motion.p
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                &gt; deployment in progress <span className="text-accent-400">●</span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-50 leading-tight">
            Portfolio OS
          </h1>
          <p className="text-lg sm:text-xl text-stone-400 max-w-xl mx-auto">
            Currently under development. We're building an immersive operating system experience to showcase projects and portfolio features.
          </p>
        </motion.div>

        {/* Features Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8"
        >
          {[
            { label: "Multi-Window", icon: "🪟" },
            { label: "Terminal", icon: "⌨️" },
            { label: "Interactive", icon: "✨" },
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-4 rounded-lg border border-theme-border">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm text-stone-400">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link
            href="/"
            className="px-8 py-4 bg-accent-500 text-stone-950 font-black rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Back to Portfolio
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const email = "samrit@example.com";
              window.location.href = `mailto:${email}?subject=Portfolio%20OS%20Inquiry`;
            }}
            className="px-8 py-4 border-2 border-accent-500/50 text-accent-400 font-black rounded-full hover:border-accent-500 hover:bg-accent-500/10 transition-all duration-300"
          >
            Notify Me
          </motion.button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-xs sm:text-sm text-stone-500 pt-4"
        >
          Expected launch: Q2 2026 • Stay tuned for updates
        </motion.p>
      </motion.div>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWindows, FaTerminal, FaSpinner } from "react-icons/fa";

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
        className="relative z-10 max-w-2xl text-center space-y-10"
      >
        {/* Status Indicator */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent-500/30 bg-accent-500/10"
        >
          <motion.div
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-accent-400"
          />
          <span className="text-sm text-accent-300 font-medium">Currently Under Development</span>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl font-black text-stone-50 leading-tight">
            Portfolio OS
          </h1>
          <p className="text-lg sm:text-xl text-stone-400 max-w-xl mx-auto leading-relaxed">
            We're actively working on building an immersive operating system experience. Check back soon for this interactive showcase.
          </p>
        </motion.div>

        {/* Feature Preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8"
        >
          <div className="glass-card p-6 rounded-xl border border-theme-border hover:border-accent-500/50 transition-colors">
            <FaWindows className="text-blue-400 text-3xl mx-auto mb-3" />
            <p className="text-sm font-semibold text-stone-300">Multi-Window System</p>
            <p className="text-xs text-stone-500 mt-1">Interactive window management</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-theme-border hover:border-accent-500/50 transition-colors">
            <FaTerminal className="text-green-400 text-3xl mx-auto mb-3" />
            <p className="text-sm font-semibold text-stone-300">Terminal Interface</p>
            <p className="text-xs text-stone-500 mt-1">Command-driven interaction</p>
          </div>
        </motion.div>

        {/* Development Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="glass-card p-6 rounded-xl border border-theme-border/50 space-y-3"
        >
          <div className="flex items-center justify-center gap-2 text-stone-300">
            <FaSpinner className="animate-spin" />
            <span className="text-sm font-medium">Active Development</span>
          </div>
          <p className="text-xs text-stone-500">
            Expected completion: Q2 2026
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link
            href="/"
            className="px-8 py-3 bg-accent-500 text-stone-950 font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Back to Portfolio
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "mailto:samritmukherjee@example.com?subject=Portfolio%20OS%20Interest";
            }}
            className="px-8 py-3 border-2 border-accent-500/50 text-accent-400 font-bold rounded-lg hover:border-accent-500 hover:bg-accent-500/10 transition-all duration-300"
          >
            Get Updates
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm neutral palette
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716b",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Accent color - warm amber for highlights
        accent: {
          50: "#fef9f0",
          100: "#fdf1dd",
          200: "#fae2ba",
          300: "#f6cd83",
          400: "#efb24a",
          500: "#e89c1b",
          600: "#d87f13",
          700: "#b35d0d",
          800: "#91470d",
          900: "#773a0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "sans-serif"],
        display: ["var(--font-unbounded)", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.02em",
        wider: "0.04em",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "gradient-radial-accent":
          "radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
        "gradient-radial-accent-strong":
          "radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

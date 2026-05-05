import type { Config } from "tailwindcss";

const config: Config = {
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
        // Accent color - Baltic Blue for highlights
        accent: {
          50: "#e6f0f8",
          100: "#cce1f0",
          200: "#99c3e1",
          300: "#66a5d2",
          400: "#3387c3",
          500: "#0C6291",
          600: "#0a4e73",
          700: "#083a55",
          800: "#062637",
          900: "#041819",
        },
        // Secondary - Dark Raspberry for support elements
        "secondary": {
          50: "#f4e9f0",
          100: "#e8d3e0",
          200: "#d4a7c1",
          300: "#c07ba2",
          400: "#a63446",
          500: "#7E1946",
          600: "#6d123e",
          700: "#5c0d36",
          800: "#4b082e",
          900: "#3a0326",
        },
        // Accent highlight - Cherry Rose for interactions
        "cherry": {
          50: "#f8eef2",
          100: "#f0dce6",
          200: "#e8b8d0",
          300: "#d694b9",
          400: "#c470a2",
          500: "#A63446",
          600: "#8f2a3a",
          700: "#78202e",
          800: "#611622",
          900: "#4a0c16",
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
          "radial-gradient(circle at 30% 50%, rgba(12, 98, 145, 0.06) 0%, transparent 70%)",
        "gradient-radial-accent-strong":
          "radial-gradient(circle at 30% 50%, rgba(12, 98, 145, 0.08) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Semantic system colors mapped to CSS variables and Modern Blue palette
      colors: {
        primary: {
          DEFAULT: "var(--theme-accent)",
          foreground: "#FFFFFF",
          hover: "#1D4ED8",
          subtle: "var(--theme-accent-tint)",
          light: "#2563EB",
          dark: "#3B82F6",
        },
        background: "var(--theme-bg)",
        foreground: "var(--theme-text)",
        card: {
          DEFAULT: "var(--theme-card)",
          foreground: "var(--theme-text)",
        },
        secondary: {
          DEFAULT: "var(--theme-surface-2)",
          foreground: "var(--theme-text-secondary)",
        },
        muted: {
          DEFAULT: "var(--theme-surface-2)",
          foreground: "var(--theme-text-muted)",
        },
        border: "var(--theme-border)",

        // Monochromatic scale for slate/navy architecture
        mono: {
          black: "#080F1E",
          darkest: "#0F1B30",
          dark: "#111D32",
          surface: "#172C49",
          muted: "#64748B",
          light: "#DCE6F1",
          lighter: "#EFF6FF",
          white: "#F8FAFC",
        },

        // Premium Modern Blue Scale
        accent: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
          cyan: "#06B6D4",
          "cyan-light": "#22D3EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "DM Sans", "Segoe UI", "sans-serif"],
        display: ["var(--font-display)", "Syne", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
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
          "radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 70%)",
        "gradient-radial-accent-strong":
          "radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

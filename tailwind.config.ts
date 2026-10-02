import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Semantic system colors mapped to CSS variables and White/Black/Red palette
      colors: {
        primary: {
          DEFAULT: "#FF0000",
          foreground: "#FFFFFF",
          hover: "#E60000",
          subtle: "rgba(255, 0, 0, 0.12)",
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

        // Monochromatic scale for black/white architecture
        mono: {
          black: "#000000",
          darkest: "#0A0A0A",
          dark: "#121212",
          surface: "#181818",
          muted: "#737373",
          light: "#E5E5E5",
          lighter: "#F5F5F5",
          white: "#FFFFFF",
        },

        // Precise Crimson Red Accent (#FF0000)
        accent: {
          50: "#FFF0F0",
          100: "#FFE0E0",
          200: "#FFC2C2",
          300: "#FF8F8F",
          400: "#FF4D4D",
          500: "#FF0000",
          600: "#E60000",
          700: "#CC0000",
          800: "#990000",
          900: "#660000",
          950: "#330000",
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
          "radial-gradient(circle at 30% 50%, rgba(255, 0, 0, 0.08) 0%, transparent 70%)",
        "gradient-radial-accent-strong":
          "radial-gradient(circle at 30% 50%, rgba(255, 0, 0, 0.15) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

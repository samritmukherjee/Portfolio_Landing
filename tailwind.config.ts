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
          50: "#faf7f2",
          100: "#f4f1ec",
          200: "#e7e1d9",
          300: "#d6cfc5",
          400: "#b9b0a2",
          500: "#9a8f7f",
          600: "#7b7163",
          700: "#5f564b",
          800: "#3f3a33",
          900: "#24211d",
        },
        slate: {
          50: "#f6f7fb",
          100: "#edf0f7",
          200: "#d8dde9",
          300: "#bcc4d8",
          400: "#9aa6c0",
          500: "#7a88a9",
          600: "#5f6d8d",
          700: "#46526f",
          800: "#2e344a",
          900: "#1b1f2e",
        },
        // Primary accent - Cool Sky (#35A7FF)
        accent: {
          50: "#e8f4ff",
          100: "#d0e9ff",
          200: "#a3d2ff",
          300: "#6bb8ff",
          400: "#35A7FF",
          500: "#1a8fe8",
          600: "#1272c2",
          700: "#0d569a",
          800: "#093b70",
          900: "#05224a",
        },
        // Palette: Bubblegum Pink (#FF5964)
        coral: {
          50: "#fff0f1",
          100: "#ffe0e2",
          200: "#ffbdc0",
          300: "#ff8f96",
          400: "#FF5964",
          500: "#e83d4a",
          600: "#c22030",
          700: "#9a1525",
          800: "#6e0e1a",
          900: "#450910",
        },
        // Palette: Banana Cream (#FFE74C)
        banana: {
          50: "#fffce8",
          100: "#fff8c8",
          200: "#fff0a0",
          300: "#FFE74C",
          400: "#ffdb1a",
          500: "#e6c000",
          600: "#b89800",
          700: "#8a7100",
          800: "#5c4b00",
          900: "#2e2500",
        },
        // Palette: Mint Glow (#6BF178)
        mint: {
          50: "#edfff0",
          100: "#d5ffe0",
          200: "#a8ffc0",
          300: "#6BF178",
          400: "#3fe050",
          500: "#1fc438",
          600: "#139c29",
          700: "#0d741e",
          800: "#084d14",
          900: "#04260a",
        },
        // Secondary - Warm bronze
        secondary: {
          50: "#fbf3ea",
          100: "#f6e4d0",
          200: "#edcaa1",
          300: "#e0aa73",
          400: "#cc844f",
          500: "#b36a3f",
          600: "#925234",
          700: "#713b2a",
          800: "#4f271f",
          900: "#351a15",
        },
        // Accent highlight - Rose ember
        cherry: {
          50: "#fdeff4",
          100: "#f9d8e4",
          200: "#f1aeca",
          300: "#e684b0",
          400: "#d35d7a",
          500: "#bb4b67",
          600: "#9c3b56",
          700: "#7b2c45",
          800: "#5b1f32",
          900: "#3e141f",
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
          "radial-gradient(circle at 30% 50%, rgba(79, 124, 255, 0.08) 0%, transparent 70%)",
        "gradient-radial-accent-strong":
          "radial-gradient(circle at 30% 50%, rgba(79, 124, 255, 0.12) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;

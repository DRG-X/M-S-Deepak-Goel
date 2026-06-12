import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0f1f3d",
          light: "#1a3258",
          mid: "#162848",
          800: "#0d1b36",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c06e",
          dark: "#a8872e",
          50: "#fdf8ec",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      spacing: {
        section: "8rem",
        "section-sm": "5rem",
        container: "1280px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "gold": "0 0 40px rgba(201, 168, 76, 0.3)",
        "navy": "0 20px 60px rgba(15, 31, 61, 0.15)",
        "xl-navy": "0 25px 80px rgba(15, 31, 61, 0.2)",
        "card": "0 4px 24px rgba(15, 31, 61, 0.08)",
        "card-hover": "0 12px 40px rgba(15, 31, 61, 0.14)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "counter": "countUp 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

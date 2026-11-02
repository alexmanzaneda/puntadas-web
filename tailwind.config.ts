import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Tokens del sistema de diseño: los valores viven en globals.css (:root), ver DESIGN.md
      colors: {
        paper: "var(--paper)",
        stone: {
          DEFAULT: "var(--stone)",
          // Se conservan los grises de Tailwind por compatibilidad
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        sand: "var(--sand)",
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
        },
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-text)", "system-ui", "sans-serif"],
      },
      fontSize: {
        label: ["var(--step-label)", { lineHeight: "1.4", letterSpacing: "0.16em" }],
        small: ["var(--step-small)", { lineHeight: "1.6" }],
        body: ["var(--step-body)", { lineHeight: "1.7" }],
        lead: ["var(--step-lead)", { lineHeight: "1.25" }],
        head: ["var(--step-head)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        brand: ["var(--step-brand)", { lineHeight: "1", letterSpacing: "0.1em" }],
      },
      spacing: {
        gutter: "var(--gutter)",
        section: "var(--section)",
        header: "var(--header)",
      },
      borderColor: {
        DEFAULT: "var(--line)",
      },
    },
  },
  plugins: [],
};

export default config;

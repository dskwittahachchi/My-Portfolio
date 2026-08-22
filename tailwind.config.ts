import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyber: {
          dark: "#030712",
          darker: "#02040a",
          darkest: "#050816",
          cyan: "#00f5ff",
          blue: "#3b82f6",
          purple: "#8b5cf6"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right, #00f5ff, #3b82f6, #8b5cf6)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains-mono)'],
      }
    },
  },
  plugins: [],
};

export default config;

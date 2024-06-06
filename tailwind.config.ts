import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "symbols": ['var(--symbols)'],
      },
      colors: {
        "primary": "#415E91",
        "on-primary": "#fff",
        "surface-container-low": "#F3F3FA",
        "on-surface": "#191C20",
        "on-surface-variant": "#44474E",
        "on-surface-08": "rgba(73, 69, 79, .08)",
        "on-surface-12": "rgba(73, 69, 79, .12)",
        "outline": "#74777F",
        "outline-variant": "#C4C6D0",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

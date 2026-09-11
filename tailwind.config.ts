import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: "#26342B",
        charcoal: "#202321",
        stone: "#858A84",
        limestone: "#C9C7BE",
        ivory: "#F5F2EB",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

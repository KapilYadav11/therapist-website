import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — inspired by the office's warm brick, wood, and sage tones
        clay: {
          DEFAULT: "#A85D3F",
          light: "#C17F5F",
          dark: "#7E4530",
        },
        moss: {
          DEFAULT: "#4F5D46",
          light: "#6B7A61",
          dark: "#3A4534",
        },
        linen: {
          DEFAULT: "#FAF6F0",
          dark: "#F1E9DD",
        },
        charcoal: "#2B2622",
        sand: "#E8DCC8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;

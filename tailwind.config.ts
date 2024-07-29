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
        primary: {
          DEFAULT: "#0e634f",
          dark: "#0d523e",
          active: "#0e634f11",
        },
        secondary: {
          DEFAULT: "#fe9802",
          dark: "#ed8701",
        },
        neutral: {
          DEFAULT: "#f9f9f7",
          background: "#f9f9f7",
          text: "#4a4a4a",
        },
        light: {
          DEFAULT: "#fefefe",
          text: "#e1e3e3",
        },
        dark: {
          DEFAULT: "#1e1e1e",
          text: "#131313",
        },
      }
    },
  },
  plugins: [],
};
export default config;

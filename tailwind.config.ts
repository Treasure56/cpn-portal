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
          DEFAULT: "#115e3e",
          dark: "#570a0d",
          active: "#4f2526",
        },
        secondary: {
          DEFAULT: "#eeb11a",
          dark: "#cf990f",
        },
        neutral: {
          DEFAULT: "#808185",
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
        cpn: {
          lightgreen: "#8fc853",
          darkgreen: "#115e3e",
          red: "#bf3437",
          white: "#fffaff",
        },
      },
    },
  },
  plugins: [],
};
export default config;

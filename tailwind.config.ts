import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#70908B",
          200: "#07484A",
        },
        secondary: {
          100: "#CAF3E5",
          200: "#E0EFF6",
          300: "#EEEBFF",
          400: "#FFF4E7",
          500: "#FDFBF8",
        },
        bg: {
          100: "#C4C4C4",
        },
      },
    },
  },
  plugins: [forms],
};

export default config;

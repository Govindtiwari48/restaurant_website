import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Primary brand colors inspired by logo
        primary: {
          50: "#FFF9F2",
          100: "#FFF2E5",
          200: "#FFE4CC",
          300: "#FFD1A3",
          400: "#FFB870",
          500: "#FF9F3D", // Main saffron from logo
          600: "#E8871A",
          700: "#C26D0C",
          800: "#9C5510",
          900: "#7D4710",
        },
        secondary: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444", // Red accent from logo
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        neutral: {
          50: "#FEFEFE",
          100: "#FDFDFD",
          200: "#F8F8F8",
          300: "#F0F0F0",
          400: "#E4E4E4",
          500: "#C7C7C7",
          600: "#A3A3A3",
          700: "#737373",
          800: "#525252",
          900: "#404040",
        },
        // Legacy aliases for backwards compatibility
        charcoal: "#404040",
        saffron: "#FF9F3D",
        gold: "#FFB870",
        maroon: "#B91C1C",
        cream: "#FFF9F2",
        paper: "#FEFEFE",
        ink: "#404040",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
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

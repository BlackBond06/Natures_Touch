import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 20s linear infinite',
        "loading-pin": "loading-pin 1.8s ease-in-out infinite"
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      /* fonts */
      fontFamily: {
        "open-sans": "'Open Sans'",
        "poppins": "Poppins",
      },
      
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(90%)'},
          '100%': { transform: 'translateX(-100%)' },
        },
        "loading-pin": {
          "0%, 40%, 100%": { height: "0.5em", "background-color": "#282336" },
          "20%": { height: "1em", "background-color": "white" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

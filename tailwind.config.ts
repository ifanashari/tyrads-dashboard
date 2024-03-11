import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#525de4",
      secondary: "#f7a71a",
      accent: "#cac7f7",

      mainBackground: "#f7f6fe",
      borderStroke: "#e6e6e6",

      success: "#14A44D",
      warning: "#E4A11B",
      danger: "#DC4C64",
      white: "#ffffff"
    },
  },
  plugins: [],
};
export default config;

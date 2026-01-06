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
        // Couleurs principales
        primary: {
          "violet-bleu": "#3F2F8D",
          "vert-fluo": "#83F0C8",
          "violet-violet": "#6F5DE9",
        },
        // Couleurs secondaires
        secondary: {
          "fond-blanc": "#fcfcfd",
          gris: "#d0d5dd",
          "gris-fonce": "#344054",
          "violet-bleu-clair": "#4c30d6",
          "vert-clair": "#02dba1",
          mauve: "#beb2ff",
        },
        // Alias pour faciliter l'utilisation
        brand: {
          DEFAULT: "#3F2F8D", // Violet bleu principal
          light: "#6F5DE9", // Violet violet
          dark: "#4c30d6", // Violet bleu clair
        },
        accent: {
          DEFAULT: "#83F0C8", // Vert fluo
          light: "#02dba1", // Vert clair
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

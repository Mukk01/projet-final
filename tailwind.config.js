/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // Assure-toi d'utiliser 'media' ou 'class', 'false' pour désactiver totalement
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#f9fafb',  // Couleur de fond claire personnalisée
      },
    },
  },
  plugins: [require("daisyui")],
}

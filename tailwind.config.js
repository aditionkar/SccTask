/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "white":"#FFFFFF",
      "yellow-600": "#ca8a04",
      "yellow-400": "#FFCC00",
      "black": "#000000",
      "gray": "#4F4F4F",
      "red": "#c30010",
      "green4": "#9CCC65",
      "green2": "#C5E1A5",
      "green10": "#104908",
    },
    extend: {},
  },
  plugins: [],
}
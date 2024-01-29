/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED2B2A", // red
        secondary: "#FEFBF6", // white
        primary_black: "#080202", // black
      },
    },
  },
  plugins: [],
};

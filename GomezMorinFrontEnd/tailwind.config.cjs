/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'gray-blue':'#4F5579',
        'gray':'#D4D5DE',
        'pink-red':'#D91B5B',
        'green-primary':'#AFD135',
        'blue':'#242B57',
        'green-secondary':'#00FF29',
        'yellow':'#FFE600',
        'orange':'#FF5C00',
        "gray-blue": {
          100: "#dcdde4",
          200: "#b9bbc9",
          300: "#9599af",
          400: "#727794",
          500: "#4f5579",
          600: "#3f4461",
          700: "#2f3349",
          800: "#202230",
          900: "#101118",
        },
        "gray": {
          500: "#D4D5DE",
        },
        "light-blue": {
          100: "#d8edf4",
          200: "#b1dbe9",
          300: "#8bc9de",
          400: "#64b7d3",
          500: "#3da5c8",
          600: "#3184a0",
          700: "#256378",
          800: "#184250",
          900: "#0c2128"
        }
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {},
  },
  plugins: [],
});

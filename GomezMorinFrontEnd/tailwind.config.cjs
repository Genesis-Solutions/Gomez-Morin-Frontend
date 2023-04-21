/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'gray-blue': '#4F5579',
        'gray': '#D4D5DE',
        'pink-red':'#D91B5B',
        'green-primary':'#AFD135',
        'blue':'#242B57',
        'green-secondary':'#00FF29',
        'yellow':'#FFE600',
        'orange':'#FF5C00',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      'Gobold': ['./public/fonts/Gobold_Regular.otf'],
    },
  },
  plugins: [],
}

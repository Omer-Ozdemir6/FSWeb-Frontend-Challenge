/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        "light-blue": '#AEBCCF',
        'deep-indigo': '#E1E1FF'
      }
    },
  },
  plugins: [],
}


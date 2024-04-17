/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Roberto Condensed", "Sans-serif"],
      },
      colors: {
        'dark-gray': "#242524",
        'bg-white': "#eee",
      },
    },
  },
  plugins: [],
}


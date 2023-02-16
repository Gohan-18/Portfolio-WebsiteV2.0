/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: "'Catamaran', sans-serif;",
        poppins: "'Poppins', sans-serif"
      },
      backgroundImage: {
        'header-banner': "url('./src/assets/White-BG-1.svg')",
      },
      colors: {
        'blue': '#4e44ab',
        // 'orange': '#fb923c',
      },
    },
  },
  plugins: [],
}

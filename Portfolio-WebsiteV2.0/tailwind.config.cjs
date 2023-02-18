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
        'dark-header-banner': "url('./src/assets/BG_Blue_Dark.svg')",
        'light-dark-header-banner': "url('./src/assets/Light-Dark-Blue.svg')",
      },
      colors: {
        'blue': '#4e44ab',
        'wht': '#f4f4f4'
        // 'orange': '#fb923c',
      },
      fontSize: {
        'icons' : '60px'
      }
    },
  },
  plugins: [],
}

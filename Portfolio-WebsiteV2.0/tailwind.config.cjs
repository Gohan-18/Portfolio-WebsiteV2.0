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
        'small-screen-banner' : "url('./src/assets/medium-screen-banner.png')",
        'hero-image' : "url('./src/assets/Hero-Image.png')",
        'bubble-bg' : "url('./src/assets/Bubble-bg.svg')",
      },
      colors: {
        'blue': '#4e44ab',
        'wht': '#f4f4f4',
        'dark-blue': '#2d2672'
        // 'orange': '#fb923c',
      },
      fontSize: {
        'icons' : '60px',
        'xms' : '16px',
        'xxs' : '9px',
        'xxxs': '9px'
      },
      borderRadius: {
        'custom' : '80px'
      }
    },
  },
  plugins: [],
}

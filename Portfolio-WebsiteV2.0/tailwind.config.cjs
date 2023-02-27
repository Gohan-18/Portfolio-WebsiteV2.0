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
        'hero-image' : "url('./src/assets/Hero-Image.png')",
        'hero-image-1' : "url('./src/assets/Hero-Image-Portfolio.jpeg')",
        'polygon-bg' : "url('./src/assets/BG-Polygon.png')",
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
      },
      screens: {
        'md' : '850px'
      }
    },
  },
  plugins: [],
}

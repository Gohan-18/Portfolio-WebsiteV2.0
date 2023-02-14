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
      }
    },
  },
  plugins: [],
}

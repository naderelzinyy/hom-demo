/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'custom-blue': '#C5DBF6',
        'custom-pink': '#F06C8C'
      },
      fontFamily: {
        'belgian': ['"Belgian Aesthetic"', 'serif'] // Replace 'serif' with the appropriate fallback font stack
      },
    },
  },
  plugins: [],
}

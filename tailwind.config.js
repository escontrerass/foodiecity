/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        red: '#FF0000',
        yellow: '#FFCC00',
        gray: '#707070',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        s: '12px',
      },
      spacing: {
        menuCategory: '120px',
      },
    },
  },
  plugins: [],
};

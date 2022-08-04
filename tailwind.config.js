/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        red: '#FF0000',
        yellow: '#FFCC00',
        gray: '#707070',
        lightGray: '',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      screens: {
        tablet: '670px',
        dt: '1000px',
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
});

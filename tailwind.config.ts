import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        primary: colors.stone,
        secondary: colors.blue,
      },
    },
  },
  plugins: [],
};
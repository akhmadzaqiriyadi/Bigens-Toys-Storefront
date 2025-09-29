/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'chillax': ['Chillax', 'sans-serif'],
      },
      colors: {
        'accent': '#FF5733',
        'primary': '#E0E0E0',
        'secondary': '#333333',
        'royal-bright': '#4169E1',
      },
    },
  },
  plugins: [],
};

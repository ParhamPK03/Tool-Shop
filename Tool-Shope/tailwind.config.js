/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '400px',
      '2xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2lg': '1200px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
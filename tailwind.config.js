/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg' : '#625296',
        'text' : '#636363',
        'main' : '#5B271C',
      }
    },
  },
  plugins: [],
}


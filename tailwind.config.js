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
        'main' : '#973939',
      },
      animation: {
        'spin' : ' spin 1s linear ',
        'app' : ' app 1s ease-in-out'
      },
      keyframes: {
        'spin' : {
          '0%' : { transform: ' rotate(-360deg)',
                     opacity: '0', width: '0rem' },
          '100%' : { transform: ' rotate(0deg)',
                   opacity: '1', width: '8rem' }
        },
        'app' : {
          '0%' : { opacity: '0' },
          '100%': { opacity: '1' }
        },
      },
    },
  },
  plugins: [],
}


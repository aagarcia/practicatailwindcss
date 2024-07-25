/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    colors: {
      ptime: '#FFF7FC',
      ptimetitle: '#71364F',
      ptimedesc: '#6D6565',
      pingre: '#854B34',
    },
    screens: {
      sm: { min: '0px', max: '376px' },
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        'young-serif': ['YoungSerif', 'serif'],
      },
      borderRadius: {
        12: '3rem', // Añadir clase personalizada para borde redondeado de 3rem
      },
    },
  },
  plugins: [],
};

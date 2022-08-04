module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      gray: {
        100: '#F3F4F6',
        200: '#C3C3C3',
        500: '#707070',
      },
      red: '#751E17',
      black: '#000',
      white: '#ffffff',
      'white-pink': '#D7C5C1',
      brown: '#BC6450',
      green: '#198754',
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      backgroundImage: {},
      spacing: {
        '1/2': '50%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '0%': '0%',
        '10%': '10%',
        '15%': '15%',
        '20%': '20%',
        '25%': '25%',
        '30%': '30%',
        '35%': '35%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        '25vh': '25vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '55vh': '55vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};

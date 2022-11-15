
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': "#fff",
      'black': "#000",
      'yellow': colors.yellow,
      'red': colors.red,
      'blue': colors.blue,
      'pink': colors.pink,
      'orange': colors.orange,
      'green': colors.green,
      'gray': colors.gray,
      'shoko-main': '#22273A',
      'apollo-main': '#263238',
      'apollo-acsent': '#D1187C',
    },
    borderWidth: {
      DEFAULT: '0.3px',
      '0': '0px',
      '1': '0.5px',
      '2': '0.7px',

    }
  },
  extend: {
    fontFamily: {},
  },
  plugins: [],
};

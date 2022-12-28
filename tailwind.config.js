/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./components/**/*.{jsx,tsx,js,ts}", "./pages/*.{jsx,tsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        "light-acsent": "#FDBA74",
        "light-bg": "#F0E7D8",
        "dark-bg": "#171717",
        "dark-acsent": "#D1187C",
        "dark-transparent": "#121212",
        "light-transparent": "#FBF3EC",
      },
    },
  },
  plugins: [],
};

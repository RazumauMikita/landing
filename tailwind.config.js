/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        orangeLight: "hsla(17, 100%, 63%, 1)",
        orangeDark: "hsla(38, 80%, 31%, 1)",
        yellowMedium: "hsla(38, 91%, 55%, 1)",
        grayLight: "hsla(240, 3%, 13%, 0.7)",
        veryLightGray: "hsla(0, 0%, 98%, 1)",
        grayBlack: "hsla(240, 3%, 13%, 1)",
        blueLight: "hsla(176, 67%, 82%, 1)",
        blueMedium: "hsla(173, 48%, 47%, 1)",
        violMedium: "hsla(289, 33%, 53%, 1)",
        blackLight: "hsla(0, 0%, 0%, 0.7)",
        veryLightBlack: "hsla(0, 0%, 0%, 0.55)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

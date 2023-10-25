/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      280: "280px",
      350: "350px",
      810: "810px",
      1000: "1000px",
      1200: "1200px",
      1445: "1445px",
    },
    extend: {
      colors: {
        primaryColor: "#010a5e",
        primaryColorLight: "#010d78",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
        },
      },
    },
    fontFamily: {
      oswald: ["Oswand", "sans-serif"],
      dmsans: ["DM sans", "sans-serif"],
    },
  },
  plugins: [],
};

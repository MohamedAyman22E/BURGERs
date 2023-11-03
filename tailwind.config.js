/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      280: "280px",
      350: "350px",
      500: "500px",
      810: "810px",
      1000: "1000px",
      1100: "1100px",
      1200: "1200px",
      1250: "1250px",
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
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        moveBox: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
        moveBoxAnim: "moveBox .5s linear ",
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

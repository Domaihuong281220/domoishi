/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#D9E5E9",
        secondary1: "#4fb645",
        secondary2: "#9623F0",
        secondary3: "#00FFFF",
      },
      borderColor: {
        secondary1: "#4fb645",
      },
      textColor: {
        secondary1: "#4fb645",

        secondary2: "#9623F0",
      },

      fontFamily: {
        nexa_bold: ["svn-nexa-bold"],
        nexa_light: ["svn-nexa-light"],
        nexa: ["svn-nexa"],
        shopee_bold:["shopee-bold"],
        jonitha:["jonitha-script"],
        chalkboard:["chalkboard"]

      },
      
      screens: {
        pv: "280px",
        pvmax: "360px",
        ph: "480px",
        dv: "1440px",
        dh: "5000px",
      },
      boxShadow: {
        card: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

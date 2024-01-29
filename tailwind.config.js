/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        pink: "hsl(322, 100%, 66%)",
        veryPaleCyan: "hsl(193, 100%, 96%)",
        veryDarkCyan: "hsl(192, 100%, 9%)",
        grayishBlue: "hsl(208, 11%, 55%)",
      },
    },
  },
  plugins: [],
};

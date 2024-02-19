/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "475px",

      md: "725px",

      lg: "975px",

      xl: "1350px",

      xxl: "1750px",
    },
    extend: {},
  },
  plugins: [],
};

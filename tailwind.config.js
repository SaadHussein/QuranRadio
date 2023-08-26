/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: "1280px",
      lg: "1075px",
      md: "825px",
      sm: "768px",
      xsm: "400px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};

const colors = {
  theme: "#132030",
  hoverTheme: "#385877",
  E7F3FF: "#E7F3FF",
  495057: "#495057",
  EBEDF2: "#EBEDF2",
  blue1: "#1572E8",
  "1269DB": "#1269DB",
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      mxl: "1280px",
      xl: "1440px",
      xxl: "1600px",
      "2xl": "1536px",
      maxmd: { max: "767px" },
      "4xl": "1800px",
    },
    extend: {
      colors,
    },
    minHeight: {
      20: "5rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

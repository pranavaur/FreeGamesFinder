const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      primary: "#48CAE4",
      hover: "#007BFF",
      light: colors.white,
      dark: "#1a1a1a",
      lightText: "#333333",
      darkText: colors.white,
    },
  },
  plugins: [],
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
};

module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_02: "#ffffff", A700_01: "#fefffe" },
        gray: { 400: "#c2b8cc", 700: "#6e635e", "400_01": "#c2c2c2", "400_02": "#c5cdbc" },
        deep_orange: { 100: "#dfcbc1", "100_01": "#dfccc2" },
        red: { A200: "#f85353" },
        blue_gray: { 100: "#cdcdcd", "100_01": "#d0d0d0" },
      },
      boxShadow: {},
      fontFamily: { dmsans: "DM Sans", sailec: "Sailec" },
      opacity: { 0.4: 0.4, 0.37: 0.37, 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

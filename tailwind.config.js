module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#212529",
        subtitles: "#425466",
        bg: "#0e0c20",
        secondarybuttons: "#0a2540",
        white: "#ffffff",
        purple: "#635cff",
        grey: "#f6f9fc",
        blue: "#32a7ec",
        "dark-blue": "#092540",
        grey: "#b6b6bc",
        green: "#8bde61",
        pink: "#d424e6",
        red: "#f71058",
        orange: "#e1585f",
        "card-bg": "#19172A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

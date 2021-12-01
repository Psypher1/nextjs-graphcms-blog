module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    fontFamily: {
      Inter: ["Inter, sans-serif"],
      Sora: ["Sora, sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

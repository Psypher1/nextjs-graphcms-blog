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
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
          },
        },
      },
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
      Sora: ["Sora, sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

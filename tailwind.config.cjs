module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },

        bgk: "hsl(var(--color-bkg) / <alpha-value>)",
        bgk2: "hsl(var(--color-bkg2) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

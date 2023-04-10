/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary Colors
      "slider-full-color": "#a5f3eb",
      "slider-bg": "#10d5c2",
      "discount-bg": "#feece7",
      "discount-text": "#ff8c66",
      "cta-text": "#bdccff",

      // Neutral Colors
      "pricing-component-bg": "#ffffff",
      "main-bg": "#fafbff",
      "slider-empty-color": "#eaeefb",
      "toggle-bg": "#cdd7ee",
      "text-color": "#858fad",
      "cta-bg": "#293356",
    },
    extend: {},
  },
  plugins: [],
};

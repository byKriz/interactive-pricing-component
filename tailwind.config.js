/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary Colors
      "slider-full-color": "#a5f3eb",
      "slider": "#10d5c2",
      "discount": "#feece7",
      "discount-text": "#ff8c66",
      "cta-text": "#bdccff",

      // Neutral Colors
      "pricing-component": "#ffffff",
      "main": "#fafbff",
      "slider-empty-color": "#eaeefb",
      "toggle": "#cdd7ee",
      "text-color": "#858fad",
      "cta": "#293356",
    },
    extend: {},
  },
  plugins: [],
};

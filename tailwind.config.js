/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Primary Colors
      "slider-full-color": "hsl(174, 77%, 80%)",
      "slider": "hsl(174, 86%, 45%)",
      "discount": "hsl(14, 92%, 95%)",
      "discount-text": "hsl(15, 100%, 70%)",
      "cta-text": "hsl(226, 100%, 87%)",

      // Neutral Colors
      "pricing-component": "#fff",
      "main": "hsl(230, 100%, 99%)",
      "slider-empty-color": "hsl(224, 65%, 95%)",
      "toggle": "hsl(223, 50%, 87%)",
      "txt-color": "hsl(225, 20%, 60%)",
      "cta": "hsl(227, 35%, 25%)",
    },
    extend: {},
  },
  plugins: [],
};

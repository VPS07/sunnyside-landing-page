/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-img-d": "url('../src/assets/desktop/image-header.jpg')",
        "header-img-m": "url('../src/assets/mobile/image-header.jpg')",
        "image-photography-d":
          "url('../src/assets/desktop/image-photography.jpg')",
        "image-graphic-design-d":
          "url('../src/assets/desktop/image-graphic-design.jpg')",
      },
    },
    fontFamily: {
      fraunce: ["Fraunces", "serif"],
      barlow: ["Barlow", "sans-serif"],
      "Nunito-Sans": ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1a27",
        secondary: "#112739",
        decorate: "#14b8a6",
        lightdecorate: "#22dfca"
      }
    },
  },
  plugins: [],
};

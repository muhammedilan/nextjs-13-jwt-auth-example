/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx}", "./src/app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{},
      container: {
        padding: "2.5rem",
        center: true,
      },
    },
  },
  plugins: [],
};

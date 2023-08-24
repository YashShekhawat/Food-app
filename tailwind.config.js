/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif'],
        'serif': ['Oswald', 'serif'],
        'custom': ['Figtree', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}


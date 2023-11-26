/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/assets/skillbg.jpg')",
        'portfolio-svg' : "url('../public/assets/portfolio.svg')"
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"], /** Ajouter ça*/
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        '2-people': "url('./imgs/2people.png')",
      }
    },
  },
  plugins: [],
}
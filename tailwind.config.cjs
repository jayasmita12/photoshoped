/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        firasans:["Fira Sans"]
      }
    },
  },
  plugins: [require("daisyui")],
}

// const path = require("path");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/litepie-datepicker-tw3/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'litepie-primary': colors.red,
      }
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textOpacity: ['disabled'],
      textColor: ['disabled']
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

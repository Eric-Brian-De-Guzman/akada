/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
       'prims': '#c3ac73',
       'peach1': '#b77e37  ',
       'peach2': '#895c27',
       'peach3': '#f7f4ef'
      },
      fontFamily: {
        'pangram': ['Pangram']      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

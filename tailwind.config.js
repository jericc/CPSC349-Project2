/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs', './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      colors: {
        //color palette
        'green':{
          100:'#cad2c5',
          200:'#84a98c',
          300:'#52796f',
          400:'#354f52',
          500:'#2f3e46',
        },
        'gray':'#e5e5e5',
        'white':'#FFFFFF',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("daisyui")
  ],
}

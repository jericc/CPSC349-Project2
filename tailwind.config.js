/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.hbs', './node_modules/tw-elements/dist/js/**/*.js'],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      
      gridTemplateRows: {
        // Simple 8 row grid
        '8': 'repeat(8, minmax(0, 1fr))',
        // Simple 12 row grid
        '12': 'repeat(12, minmax(0, 1fr))',
        // Simple 14 row grid
        '14': 'repeat(14, minmax(0, 1fr))',
        // Simple 16 row grid
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },

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
      
      maxHeight: {
        '128': '32rem',
      },
      
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("daisyui")
  ],
}

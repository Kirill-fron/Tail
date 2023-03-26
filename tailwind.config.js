/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    screens:{
'lg': {'max': '992px'},
'md': {'max': '768px'},
'sm': {'max': '448px'}
    },
    extend: {
      "colors": {
        "lightblack": '#4d4244',
        "lightred": '#ff0d38',
        "darkred": '#d70026',
        "lightgray": '#747474',
        "darkgray": '#272727',
        "back": "#f8f8fc",
        "blue-dark": "#223062",
        "blue": "#00437b",
        "blue-light": "#005f9e",
        "yellow": "#ff9b00",
        "yellow-70": "#FDB74C",
        "black": "#111831",
        "black-80": "#111831cc",
        "black-50": "#11183180",
        "black-20": "#11183133",
        "grey": "#e5e8ef",
        "body": "#E5E5E5"
    },
boxShadow: {
  'customred': '0px 0px 30px rgba(255, 13, 56, 0.21)'
},


    "fontFamily": {
      
  },
  borderWidth: {
      '3': '3px',
      '10': '10px'
  },
  container: {
      center: true,
      padding: {
          DEFAULT: '28px',
          sm: 0
      }
  }
    },
    fontSize: {
      sm: ['15px', '20px'],
      base: ['20px', '25px'],
      lg: ['30px', '37px'],
      xl: ['46px', '50px'],
  }
  
  },

  plugins: [],
}

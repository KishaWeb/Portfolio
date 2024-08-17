/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

    extend: {

      colors: {
        'primary': '#D64E24',
        'secondary': '#7B5828',
        'accent': '#C3A848',
        'darkBg': '#080302',
        'lightBg': '#FBF9F5',
        'whiteTxt': '#F9E3DC',
        'blackTxt': '#0A0A0A',
      },


      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'black': 900,
      },


      fontSize: {
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '90px',
        '8xl': '100px',
        '9xl': '150px',
        '10xl': '13rem',
        '11xl': '17rem',
      },

      fontFamily: {
        'cabinet': ['Cabinet Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },

}


module.exports = {
  purge: {
    enabled: true,
    content: [
        './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
         'custom':'#FFFBF7',
      },
      fontFamily: {
        Cinzel: ['Cinzel', 'serif'],
        Inter:['Inter','sans-serif'],
        Satoshi:['Satoshi','sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

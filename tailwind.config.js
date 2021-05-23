module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif']
      },
      backgroundImage: theme => ({
        'hero': "url('img/hero3.jpg')"
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

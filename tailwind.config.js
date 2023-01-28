const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      'serif': ['Roboto Slab', ...defaultTheme.fontFamily.sans],
      'mono': ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      'dialog': ['Arsenal']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./plugins/tailwind/shadows')
  ],
}

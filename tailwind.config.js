/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./tailwind.plugins/shadows')
  ],
}

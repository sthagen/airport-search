const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333',
      },
      boxShadow: {
        green: '0 0 3px 3px #42f485',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
}

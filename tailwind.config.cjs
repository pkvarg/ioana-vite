/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      hero: '#e8e8e8',

      'dark-red': '#79284e',
      'skin-color': '#f7e7d0',
      'nav-yellow': '#fecd08',
      'nav-blue': '#5b909d',
      'nav-black': '#010101',
      'btn-blue': '#a0dffe',
      'message-red': '	#EE4B2B',
      green: '#039f2f',
      gallery: '#f3f6f7',
      gallery2: '#ef9e9d',

      'secondary-white': '#c7c7c7',
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover'],
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.tsx", 
    "./pages/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'Montserrat']
      }
    },
    backgroundImage: {
      'background-welcome': "url('/assets/Untitled.png')"
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

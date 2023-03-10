/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.tsx", 
    "./pages/**/*.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
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

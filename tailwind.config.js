/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ["Montserrat", 'sans-serif']
    },
    extend: {
      colors:{
        brandcolor: '#17C2EC',
        offwhite: '#C4C4C41A'
      }
    },
    container:{
      center:true
    }
  },
  plugins: [],
}

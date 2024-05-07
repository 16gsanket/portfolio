/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'bk_black' : '#2e2e35',
        'text_color' : "#ebebec",
        "orange_text" : "#e4aa48",
        "orange_hover":"#c18b2f",
        "page2_color":"#34343B"
        
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      colors:{
        'bk_black' : '#2e2e35',
        'text_color' : "#ebebec",
        "orange_text" : "#e4aa48",
        "orange_hover":"#c18b2f",
<<<<<<< HEAD
        "page2_color":"#34343B"
=======
        "bk_2_black" : "#35353b"
>>>>>>> d401fd91ea3036f963fc7c812869a1e3f2830ac7
        
      }
    },
  },
  plugins: [],
}
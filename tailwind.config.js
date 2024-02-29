/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors :{
       'bgclr' :'#242424',
       'demo'  :'#171616',
       'spGreeen' : '#1ed760'  ,
      }
    },
   
  },
  plugins: [],
}


const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',  
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      primary: "#4C3DE3",
      secondary: "#71B50C",
      "primary-hover": "#433BF2",
      "primary-developer-template": "#7843E9",
      "primary-developer-template-hover": "#4C3DE3",
      //Marketing Color
      'atical-orange' : '#FFF3CA',
      'atical-violet' : '#E9F7FF',
      'service-card-bg' : '#36363E',
      'button-hover' : '#F00B5E',
      'marketing-main-color' : '#292930',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },   
      width:{
        '500' : '500px',
      },
      fontSize:{
        'h2' : '36px',
        '20px' : '20px'
      }
    },
  },
  plugins: [flowbite.plugin()],
};

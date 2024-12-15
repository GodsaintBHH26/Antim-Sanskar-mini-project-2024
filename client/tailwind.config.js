/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '256': "64rem",
        '128':"32rem",
        '176': "44rem",
        '84.5': "21.59rem"
      },
      fontFamily:{
        josefin :['"Josefin Sans"', 'sans-serif'],
      },
      backgroundColor:{
        whiteSee:'rgb(255, 255, 255, 0.3)',
        yelSee: 'rgb(255, 255, 0, 0.5)'
      }
    },
  },
  plugins: [],
};

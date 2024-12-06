/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '256': "64rem",
        '128':"32rem",
        '176': "44rem",
      },
    },
  },
  plugins: [],
};

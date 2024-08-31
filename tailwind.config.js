/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'WixMadeforDisplay': ['"Wix Madefor Display"', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}


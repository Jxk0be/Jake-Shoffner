/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 576px) { ... }

      'md': '1100px',
      // => @media (min-width: 960px) { ... }

      'lg': '2000px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'chainsaw': "url(D:/reactShit/js-port/src/images/chainsaw_man.jpg)"
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}
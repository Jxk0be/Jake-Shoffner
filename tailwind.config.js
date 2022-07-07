/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '600px',
      // => @media (min-width: 110px) { ... }

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
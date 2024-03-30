/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px'
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        ptsans: ["PT Sans", "sans-serif"],
        sourcesans: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
}
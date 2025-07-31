// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        glassWhite: 'rgba(255, 255, 255, 0.1)',
        glassBlack: 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

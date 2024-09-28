/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        revamped: ['Revamped', 'sans-serif'],
      },
      colors: {
        logoOrange: '#ff9933',
        logoBlue: '#000966',
        logoCyan: '#1c92d0',
        logoGrey: '#sa7a9cc',
        logoWhite: '#ededf6',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "color-scheme": "dark",
          "primary": '#000966',
          "secondary": '#1c92d0',
          "accent": "#EA6947",
          "neutral": "#23282E",
          "base-100": "#202020",
          "info": "#0091D5",
          "success": "#6BB187",
          "warning": "#DBAE59",
          "error": "#AC3E31",
        },
        light: {
          "color-scheme": "light",
          "primary": '#ff9933',
          "secondary": '#7eb9e5',
          "accent": "oklch(81.27% 0.157 56.52)",
          "neutral": "#23282E",
          "base-100": "oklch(100% 0 0)",
          "info": "#0091D5",
          "success": "#6BB187",
          "warning": "#DBAE59",
          "error": "#AC3E31",
        },
      },
    ],
  },
}

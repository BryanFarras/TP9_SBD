/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_green1': '#69db7c',
        'color_green2': '#38d9a9',
        'color_green3': '#2f855a',
        'color_green4': '#1f6542',
        'color_green5': '#0e3f20',
      },
      fontSize: {
        '3xl': '1.875rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
        'xs': '0.82rem',
      },
      fontFamily: {
        'encode': ['Encode Sans Condensed', 'sans-serif'],
        'ibmplex': ['IBM Plex Sans Condensed', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'national': ['National Park', 'sans-serif'],
      },
    },
  
  plugins: [],
  }
}
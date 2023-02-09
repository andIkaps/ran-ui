/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        lite: '0.62rem',
      },
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        primary: '#595BEF',
        dark: {
          100: '#0D0D22',
          200: '#1F2125',
        },
        light: {
          50: '#D9D9D9',
          100: '#8D909C',
          200: '#8E9097',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

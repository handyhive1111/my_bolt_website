/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: {
            50: '#fffef0',
            100: '#fffbd6',
            200: '#fff7ad',
            300: '#ffed75',
            400: '#ffdd00',
            500: '#ffd000',
            600: '#e6a900',
            700: '#cc8600',
            800: '#a36600',
            900: '#7a4d00',
          },
          black: {
            DEFAULT: '#000000',
            50: '#f5f5f5',
            100: '#e0e0e0',
            200: '#c2c2c2',
            300: '#a3a3a3',
            400: '#858585',
            500: '#666666',
            600: '#4d4d4d',
            700: '#333333',
            800: '#1a1a1a',
            900: '#000000',
          },
        },
      },
    },
  },
  plugins: [],
};

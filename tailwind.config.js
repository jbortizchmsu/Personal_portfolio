/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep Indigo/Navy (#170C79)
        navy: {
          50: '#f3f2fb',
          100: '#e4e2f7',
          200: '#cbcaee',
          300: '#aba8e2',
          400: '#7e78d1',
          500: '#554dbf',
          600: '#3b32a7',
          700: '#281e91',
          800: '#1d1282',
          900: '#170C79', // EXACT HEX 1
          950: '#0c0643', // Deep background
        },
        // Warm Cream / Sand (#EFE3CA)
        cream: {
          50: '#fbf8f2',
          100: '#f7f2e6',
          200: '#EFE3CA', // EXACT HEX 2
          300: '#dfcfad',
          400: '#cdb689',
          500: '#b59a68',
          600: '#987e4d',
          700: '#7a633a',
          800: '#5c492b',
          900: '#3d301b',
        },
        // Vibrant Cyan / Turquoise (#56B6C6) & Light Aqua (#8ACBD0)
        teal: {
          50: '#f1f9fa',
          100: '#def1f4',
          200: '#c0e7ec',
          300: '#8ACBD0', // EXACT HEX 4 (Light Aqua)
          400: '#6bc1cf',
          500: '#56B6C6', // EXACT HEX 3 (Vibrant Cyan)
          600: '#3ea0b1',
          700: '#308190',
          800: '#286a77',
          900: '#235863',
          950: '#12373f',
        },
        // Direct semantic shortcuts
        brand: {
          indigo: '#170C79',
          cream: '#EFE3CA',
          cyan: '#56B6C6',
          aqua: '#8ACBD0',
          dark: '#0c0643',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 12, 121, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(23, 12, 121, 0.14)',
        'glow': '0 0 25px -4px rgba(86, 182, 198, 0.45)',
      },
    },
  },
  plugins: [],
};

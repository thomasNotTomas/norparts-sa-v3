/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '2.5rem',
      },
      colors: {
        'white': '#F4F4F4',
        'whitest': '#FFFFFF',
        'black': '#0A0A0A',
        'blackest': '#000000',
        'grey': 'AFAFAF',
        'blue': {
          100: '#5F7BC1',
          300: '#435A94',
          500: '#2F4376',
          700: '#232F4D',
          900: '#10182C',
        },
        'green': {
          500: '#3CB529',
          900: '#1F6E13',
        },
      }
    },
  },
  plugins: [],
}


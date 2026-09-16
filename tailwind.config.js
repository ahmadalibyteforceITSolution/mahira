/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F4F7F5',
          100: '#E6ECE8',
          200: '#C7D7CD',
          300: '#A4BFB0',
          400: '#68947B',
          500: '#3D7456',
          600: '#2F5D44',
          700: '#264A37',
          800: '#1D382A',
          900: '#13261C',
          950: '#0B1711',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D5',
          200: '#EEDEAB',
          300: '#E4C97C',
          400: '#D9B44F',
          500: '#C59C33',
          600: '#A67F24',
          700: '#7E5F1C',
          800: '#584217',
          900: '#382A10',
        },
        cream: '#FDFBF7',
        sand: '#F5EFEB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(22, 48, 38, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(22, 48, 38, 0.15)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
      }
    },
  },
  plugins: [],
}

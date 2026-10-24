/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact target palette from socialanddigitalmarketing.com
        cyan: {
          DEFAULT: '#00BDE0',
          50: '#f0fbfd',
          100: '#ccf2f9',
          200: '#99e4f3',
          300: '#5cd3ec',
          400: '#22c2e4',
          500: '#00BDE0',
          600: '#00a1be',
          700: '#008199',
          800: '#05677a',
          900: '#095565',
        },
        navy: {
          DEFAULT: '#0A3366',
          50: '#ecf5fb',
          100: '#d9ebf7',
          200: '#b8daf0',
          300: '#87c0e5',
          400: '#51a1d6',
          500: '#2b84c2',
          600: '#1b69a3',
          700: '#165384',
          800: '#0A3366',
          900: '#031B4E',
          950: '#021235',
        },
        // S&D Slate text color
        slate: {
          body: '#566593',
        },
        ice: {
          DEFAULT: '#ecf5fb',
          50: '#f6fafe',
          100: '#ecf5fb',
        },
        // Theme backward-compatibility mapped to S&D digital palette
        brand: {
          50: '#ecf5fb',
          100: '#ccf2f9',
          200: '#99e4f3',
          300: '#5cd3ec',
          400: '#22c2e4',
          500: '#00BDE0',
          600: '#00a1be',
          700: '#0A3366',
          800: '#07264d',
          900: '#031B4E',
          950: '#021235',
        },
        gold: {
          50: '#f0fbfd',
          100: '#ccf2f9',
          200: '#99e4f3',
          300: '#5cd3ec',
          400: '#00BDE0',
          500: '#00BDE0',
          600: '#00a1be',
          700: '#0A3366',
          800: '#031B4E',
          900: '#021235',
        },
        cream: '#FFFFFF',
        sand: '#ecf5fb',
      },
      fontFamily: {
        sans: ['"Poppins"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Poppins"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px rgba(0, 189, 224, 0.35)',
        'cyan-sm': '0 4px 14px 0 rgba(0, 189, 224, 0.25)',
        'card-soft': '0 4px 20px -2px rgba(10, 51, 102, 0.06), 0 2px 6px -1px rgba(10, 51, 102, 0.04)',
        'card-hover': '0 20px 35px -5px rgba(10, 51, 102, 0.12), 0 10px 10px -5px rgba(10, 51, 102, 0.04)',
        'luxury': '0 20px 40px -15px rgba(10, 51, 102, 0.09)',
        'luxury-hover': '0 25px 50px -12px rgba(10, 51, 102, 0.18)',
        'gold-glow': '0 0 25px rgba(0, 189, 224, 0.35)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo 500
          hover: '#4f46e5',   // Indigo 600
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Violet 500
          hover: '#7c3aed',   // Violet 600
        },
        dark: {
          900: '#0a0a0a', // Neutral 950
          800: '#171717', // Neutral 900
          700: '#262626', // Neutral 800
          600: '#404040', // Neutral 700
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

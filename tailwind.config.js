/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0b0b0f', // Ultra Dark (ERUPT Base)
          900: '#121216',
          800: '#1a1a20',
          700: '#25252e',
        },
        primary: {
          DEFAULT: '#ff8a00', // ERUPT Orange
          end: '#ff3b3b',     // ERUPT Red
        },
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'erupt-gradient': 'linear-gradient(90deg, #ff8a00, #ff3b3b)',
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(255, 138, 0, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 59, 59, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 138, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 138, 0, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-up-delay-1': 'fadeUp 0.8s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fadeUp 0.8s ease-out 0.4s forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'aurora-1': 'aurora1 15s ease-in-out infinite alternate',
        'aurora-2': 'aurora2 20s ease-in-out infinite alternate',
        'shine': 'shine 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'button-shine': {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
        aurora1: {
          '0%, 100%': { transform: 'translate(10%, -10%) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'translate(0%, 10%) rotate(10deg)', opacity: '0.6' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(-10%, 10%) rotate(0deg)', opacity: '0.4' },
          '50%': { transform: 'translate(10%, -10%) rotate(-10deg)', opacity: '0.6' },
        },
        shine: {
          'to': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}

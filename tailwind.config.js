/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#e8e6df',
          200: '#d5d0c3',
          300: '#beb5a2',
          400: '#a89a81',
          500: '#968569',
          600: '#857354',
          700: '#6c5c46',
          800: '#5a4c3d',
          900: '#4c4035',
          950: '#2b2520',
        },
        accent: {
          50: '#fff1f2',
          100: '#ffe2e3',
          200: '#ffcacd',
          300: '#fea3a7',
          400: '#fc6d74',
          500: '#f43f49',
          600: '#e1222d',
          700: '#be1721',
          800: '#9d161e',
          900: '#82171e',
          950: '#470a0d',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-in-slow': 'fadeIn 1.2s ease-in forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
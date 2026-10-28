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
        background: '#07090e',
        surface: '#0f1422',
        surfaceBorder: '#1e293b',
        primary: {
          DEFAULT: '#6366f1', // Indigo
          light: '#818cf8',
          dark: '#4f46e5',
        },
        cyanAccent: '#06b6d4',
        emeraldAccent: '#10b981',
        violetAccent: '#a855f7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}

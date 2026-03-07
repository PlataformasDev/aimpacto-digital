/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#f97316',
          600: '#ea580c',
        },
        secondary: {
          50: '#ecfeff',
          500: '#06b6d4',
          600: '#0891b2',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          900: '#111827',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        cyan: {
          200: '#a5f3fc',
          500: '#06b6d4',
          600: '#0891b2',
        },
        orange: {
          500: '#f97316',
          600: '#ea580c',
        },
        emerald: {
          500: '#10b981',
        },
        indigo: {
          900: '#312e81',
        },
        purple: {
          900: '#581c87',
        },
        green: {
          500: '#10b981',
        },
        yellow: {
          400: '#fbbf24',
        },
        rose: {
          50: '#fdf2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

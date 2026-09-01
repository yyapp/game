/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './preview.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e11d2e',
          dark: '#b0121f',
          light: '#ff4d5e',
        },
        ink: {
          DEFAULT: '#0f1115',
          soft: '#3a3f4a',
          muted: '#6b7280',
        },
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f5f6f8',
          dark: '#111318',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,17,21,.04), 0 8px 24px rgba(15,17,21,.06)',
      },
    },
  },
  plugins: [],
}

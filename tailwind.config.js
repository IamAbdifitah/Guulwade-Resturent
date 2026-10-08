/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#20B2AA',
        'brand-teal-dark': '#1e9b94',
        'brand-yellow': '#FDB813',
        'brand-green-dark': '#2E8B57',
        'brand-red': '#FF6347',
        'brand-red-dark': '#e55940',
        'brand-gray-light': '#F9FAFB',
        'brand-text': '#111827',
        'brand-text-muted': '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

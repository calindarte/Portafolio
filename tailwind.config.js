/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2.6s linear infinite',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url('/public/common-bg.svg')",
        
      }
    },
  },
  plugins: [],
}


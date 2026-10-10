/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#ec4899',
        accent: '#06b6d4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

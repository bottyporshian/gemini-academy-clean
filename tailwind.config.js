/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gemini: {
          blue: '#1a73e8', // Google Blue base
          purple: '#d93025', // Google Red accent
          soft: '#f8f9fa', // Background
        }
      }
    },
  },
  plugins: [],
}
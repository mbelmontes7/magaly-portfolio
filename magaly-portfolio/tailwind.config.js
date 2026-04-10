/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans all files in your src folder
    "./magaly-portfolio/src/**/*.{js,ts,jsx,tsx}", // This scans all files in the magaly-portfolio/src folder

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        FigtreeRegular: ["Figtree-Regular", "Helvetica Neue", "Helvetica", "sans-serif"],
        FigtreeBold: ["Figtree-Bold", "Helvetica Neue", "Helvetica", "sans-serif"],
        FigtreeItalic: ["Figtree-Italic", "Helvetica Neue", "Helvetica", "sans-serif"],
        FigtreeBoldItalic: ["Figtree-BoldItalic", "Helvetica Neue", "Helvetica", "sans-serif"],
        FigtreeSemiBold: ["Figtree-SemiBold", "Helvetica Neue", "Helvetica", "sans-serif"],
        FigtreeSemiBoldItalic: ["Figtree-SemiBoldItalic", "Helvetica Neue", "Helvetica", "sans-serif"]
      }
    },
  },
  plugins: [],
}


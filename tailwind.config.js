/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: 
  {
    extend: 
    {
      backgroundImage: {
        'hero': "url('../assets/entry.jpg')",
      }
    }
  },
  plugins: [],
}
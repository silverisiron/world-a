/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        establishRetrosans: ['"EstablishRetrosans"', 'sans-serif'],
      },
      boxShadow: {
        'custom-blue': '0 0px 20px rgba(19, 22, 57, 1)', // 그림자
        'custom-black': '0 0px 20px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}


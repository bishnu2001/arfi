/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-unity': 'linear-gradient(97.5deg, #769CFB 17.29%, #7B3FE4 74.94%)',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
        'Lora':['Lora', 'serif'],
        'Poppins':['Poppins', 'sans-serif'],
        'Varela':['Varela', 'sans-serif'],
        'VarelaR':['Varela Round', 'sans-serif']
      },
    },
  },
  plugins: [],
}
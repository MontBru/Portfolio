/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  safelist:[
    'bg-customColors-libarterPrimary',
    'text-customColors-libarterAccent',
    'text-customColors-libarterSecondary',
    'bg-customColors-ecowarePrimary',
    'text-customColors-ecowareAccent',
    'text-customColors-ecowareSecondary',
    'bg-customColors-dishwasherPrimary',
    'text-customColors-dishwasherAccent',
    'text-customColors-dishwasherSecondary',
  ],
  theme: {
    extend: {
      colors:{
        customColors:{
          primary: '#F5EFE7',
          secondary: '#D8C4B6',
          complementary: '#4F709C',
          accent: '#213555',

          libarterPrimary: '#AD8B73',
          libarterAccent: '#FFFBE9',
          libarterSecondary: '#E3CAA5',

          ecowarePrimary: '#FFFFFF',
          ecowareAccent: '#62864d',
          ecowareSecondary: '#8ac74c',

          dishwasherPrimary: '#003399',
          dishwasherAccent: '#DFEEEC',
          dishwasherSecondary:'#A7D7CF'
        }
      }
    },
  },
  plugins: [],
}
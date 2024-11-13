/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", //aaaaaaaaaaaaaaaaaaaaaaaaaaAaAAΛAAAΛAAAΛAAAΛΛAaAAaAAAaaAAAaAaaaaΛΛaaaaaaaaΛaaaaaaaaaζaaaaaaaaΛτ
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        //design colors
        primary: '#2BBAC5',
        secondary: '#7ECDDD',
        accent: '#11E0EE',
        background: '#CAECF2',
        text: '#040316',
        //dark mode variation
        primary_dark: '#3ACAD4',
        secondary_dark: '#227181',
        accent_dark: '#11E0EE',
        background_dark: '#0D2F35',
        text_dark: '#EAE9FC'
      },
      fontFamily: {
        quicksand: ["Quicksand-Medium", "sans-serif"],
        quicksand_bold: ["Quicksand-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}
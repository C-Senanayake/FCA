/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all React files
    "./plasmic/**/*.tsx",          // Include Plasmic-generated components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
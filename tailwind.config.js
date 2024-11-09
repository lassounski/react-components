/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.jsx",           // Include your root App component
    "./components/**/*.{js,jsx}",  // Include all files in the components directory
    "./hooks/**/*.{js,jsx}",       // Include all files in the hooks directory
  ],
  theme: {
    extend: {
      backgroundColor: {
        inherit: 'inherit', // Allow "inherit" for background color
      },
    },
  },
  plugins: [],
}


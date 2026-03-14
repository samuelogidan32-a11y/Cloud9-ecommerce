/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a3a52',
        'primary-light': '#4a90e2',
        'primary-dark': '#0f2438',
        accent: '#f39c12',
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        'neutral-light': '#ecf0f1',
        'neutral-dark': '#2c3e50',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

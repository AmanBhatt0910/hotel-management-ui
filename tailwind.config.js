/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Existing colors (you can keep or remove if not needed)
        'gray-800': '#2d2d2d',
        'orange-500': '#f97316',
        'orange-400': '#fb923c',

        // ✨ Premium custom palette
        'parth-background': '#fff8f3',       // Main background
        'parth-section': '#fdf4e7',          // Alternate section
        'parth-accent': '#c24e28',           // Main accent (buttons, headings)
        'parth-gold': '#d8ad63',             // Gold highlights
        'parth-dark': '#2e1f14',             // Rich dark text / footer
        'parth-neutral': '#f1e6da',          // Cards, soft elements
        'parth-copper': '#8c5e3c',           // Optional secondary accent
      },
      spacing: {
        'screen': '100vh',
      },
      transitionDuration: {
        300: '300ms',
      },
      zIndex: {
        50: '50',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)', // Soft modern shadow
        'golden': '0 2px 10px rgba(216, 173, 99, 0.5)', // Gold glow shadow
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

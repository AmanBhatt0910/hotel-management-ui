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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-800': '#2d2d2d',
        'orange-500': '#f97316',
        'orange-400': '#fb923c',
      },
      spacing: {
        'screen': '100vh',
      },
      transitionDuration: {
        300: '300ms',
      },
      zIndex: {
        50: '50',
      }
    },
  },
  plugins: [],
};

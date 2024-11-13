/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FFFFFF",
        "secondary-color": "#FF6D5A",
        "base-color": "#12103E",
        "highlight-color": "#342EAD",
        "input-color": "#FCC1BE",
      },
    },
  },
  plugins: [],
};

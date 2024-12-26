/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        blue: "hsl(223, 87%, 63%)",

        // Secondary
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",

        // Neutral
        gray: "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        "libre-franklin": ["Libre Franklin", "serif"],
      },
    },
  },
  plugins: [],
};

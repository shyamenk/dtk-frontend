/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        light: "#fbfbfd",
        primary: "#0d53fc",
        secondary: "#3e3ef4",
        tertiary: "#49c496",
        accent: "#4198f7",
        neutral: {
          100: "#263446",
          200: "#88949e",
          300: "#c6cdd8",
          400: "#dee5f1",
        },
      },
    },
  },
  plugins: [],
};

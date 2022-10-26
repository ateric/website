/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        fluid: "clamp(1.5rem, 12vw - 1.5rem, 4.5rem)",
      },
      height: {
        50: "50rem",
        "[46.5rem]": "46.5rem",
      },
      width: {
        50: "50rem",
        "[46.5rem]": "46.5rem",
      },
      colors: {
        super: {
          350: "#fff",
        },
      },
    },
  },
  plugins: [],
};

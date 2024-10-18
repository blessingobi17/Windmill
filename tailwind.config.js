/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7e3af2",
      },
      width: {
        sidebar: "18%",
        body: "82%",
      },
      spacing: {
        search: "14px",
      },
    },
  },
  plugins: [],
};

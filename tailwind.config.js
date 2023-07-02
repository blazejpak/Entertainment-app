/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layoutSM: "56px 1fr",
        layoutMD: "92px 1fr",
      },
      gridTemplateColumns: {
        layoutLG: "136px 1fr",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow": "#F4CE14",
        "custom-white": "#F5F7F8",
        "custom-green": "#495E57",
        "custom-gray": "#45474B",
      },
    },
  },
  plugins: [],
};

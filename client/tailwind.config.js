/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        mm: {
          purple: "#9333EA",
          aqua: "#2DD4BF",
          yellow: "#FDE047",
          ink: "#0F172A"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

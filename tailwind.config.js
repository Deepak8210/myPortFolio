/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        textUp: {
          "0%": { marginTop: "0" },
          "100%": { marginTop: "-100px" },
        },
        pageUp: {
          "0%": {
            transform: "translateY(0%)",
            opacity: 1,
          },

          "100%": {
            transform: "translateY(-100%)",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },

          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        "text-up-normal": "textUp 1s cubic-bezier(0.19, 1, 0.22, 1) 1.5s both",
        "text-up-slow": "textUp 1s cubic-bezier(0.19, 1, 0.22, 1) 2.5s both",
        "text-up-slower": "textUp 1s cubic-bezier(0.19, 1, 0.22, 1) 3.5s both",
        "scale-up": "scaleUp 2s cubic-bezier(0.19, 1, 0.22, 1) 5s both",
        "page-up": "pageUp 2s cubic-bezier(0.19, 1, 0.22, 1) 6s both",
      },

      fontFamily: {
        baijam: ["Bai Jamjuree"],
      },
      colors: {
        body: "#F0FFFF",
        primaryGreen: "#08CACF",
        primaryBlue: "#75B8DA",
        secondary: "#C5C4C4",
      },
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                "300px": "300px",
                "350px": "350px",
                "400px": "400px",
                "450px": "450px",
                "500px": "500px"
            },
            colors: {
                primary: "#06b6d4"
            },
            keyframes: {
                slideText: {
                    "0%": { opacity: "0" },
                    "25%": { opacity: "0.5" },
                    "50%": { opacity: "1" },
                    "75%": { opacity: "0.5" },
                    "100%": { opacity: "0" }
                },
                slideCard: {
                    "0%": { opacity: "0" },
                    "25%": { opacity: "0.25" },
                    "50%": { opacity: "0.5" },
                    "75%": { opacity: "0.75" },
                    "100%": { opacity: "1" }
                }
            },
            animation: {
                slideText: "slideText 3s ease-in-out infinite",
                slideCard: "slideCard 2s ease-in-out"
            },
            transitionDelay: {
                "3s": "3000ms",
                "6s": "6000ms",
                "9s": "9000ms"
            }
        },
        screens: {}
    },
    plugins: []
};

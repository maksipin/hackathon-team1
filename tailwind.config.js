/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                "400px": "400px",
                "450px": "450px",
                "500px": "500px"
            },
            colors: {
                primary: "#06b6d4",
                danger: "rgb(239 68 68)",
                warning: "rgb(245 158 11)"
            },
            keyframes: {
                slideText: {
                    "0%": { opacity: "0" },
                    "25%": { opacity: "1" },
                    "50%": { opacity: "1" },
                    "75%": { opacity: "0" },
                    "100%": { opacity: "0" }
                }
            },
            animation: {
                slideText: "slideText 3s ease-in-out "
            },
            transitionDelay: {
                "3s": "3000ms",
                "6s": "6000ms",
                "9s": "9000ms"
            }
        },
        screens: {}
    },
    plugins: [require("@tailwindcss/forms")]
};

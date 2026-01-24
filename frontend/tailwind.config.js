/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0047AB", // Deep Corporate Blue
                secondary: "#00BFFF", // Sky Blue
                dark: "#191919", // SuperHealth Dark
                light: "#FFFFFF",
            },
            fontFamily: {
                sans: ['Geologica', 'Inter', 'sans-serif'],
                display: ['"El Messiri"', 'Graphik', 'sans-serif'],
            },
            borderRadius: {
                'pill': '50px',
            }
        },
    },
    plugins: [],
}

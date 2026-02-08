/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                "primary-light": "hsl(var(--primary-light))",
                "primary-dark": "hsl(var(--primary-dark))",
                accent: "hsl(var(--accent))",
                secondary: "hsl(var(--secondary))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                border: "hsl(var(--border))",
                muted: "hsl(var(--muted))",
            }
        },
    },
    plugins: [],
}

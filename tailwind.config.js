module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                purple: {
                    200: "#E8E8FF",
                    300: "#716fff"
                },
                gray: {
                    100: "#F0F0F0",
                    300: "#B9B9B9",
                    400: "#8B8B8B"
                }
            },
            lineHeight: {
                "129": "129.9% !important"
            }
        },
        fontFamily: {
            "Baloo": ["\"Baloo Tammudu 2\"", "cursive"],
            "Poppins": ["Poppins"],
            "Consolas": ["Consolas", "monospace"],
        },
        rotate: {
            "-20": "-20deg",
            "90": "90deg",
        },
        screens: {
            "1440": "1440px",
            "1330": "1330px",
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px"
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

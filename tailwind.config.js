module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                purple: {
                    300: "#716fff"
                },
                gray: {
                    100: "#F0F0F0",
                    300: "#B9B9B9",
                    400: "#8B8B8B"
                }
            },
            lineHeight: {
                "129": "129.9%"
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
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

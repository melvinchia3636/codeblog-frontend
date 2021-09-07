module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yellow: {
                    500: "#fece3c",
                    a800: "rgba(206, 154, 0, 0.8)",
                    900: "#A47C00",
                    1000: "#886700"
                },
                black: {
                    dark: "#131313",
                    light: "rgba(48, 48, 48, .3)"
                }
            },
            letterSpacing: {
                "widerr": "0.12em"
            },
            height: {
                200: "200%"
            },
            fontFamily: {
                "Chakra": ["Chakra Petch"]
            },
            fontSize: {
                "huge": "12rem",
                "enormous": "18rem"
            },
            lineHeight: {
                "129": "129.9% !important"
            },
            rotate: {
                27: "27deg"
            }
        },
        fontFamily: {
            "Baloo": ["\"Baloo Tammudu 2\"", "cursive"],
            "Poppins": ["Poppins"],
            "Consolas": ["Consolas", "monospace"],
            "Montserrat": ["Montserrat"]
        },
        screens: {
            "1440": "1440px",
            "1330": "1330px",
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px"
        },
        fill: theme => ({
            "yellow": theme("colors.yellow.500"),
            "black": theme("colors.black.dark")
        })
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

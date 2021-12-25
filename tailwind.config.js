module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yellow: {
                    500: "#fece3c",
                    a800: "rgba(206, 154, 0, 0.8)",
                    800: "#d8a40e",
                    900: "#A47C00",
                    1000: "#886700"
                },
                black: {
                    dark: "#131313",
                    light: "rgba(48, 48, 48, .3)"
                }
            },
            letterSpacing: {
                "morewide": "0.08em",
                "widerr": "0.12em"
            },
            height: {
                200: "200%"
            },
            width: {
                "alittlebitmore": "30rem"
            },
            fontFamily: {
                "Chakra": ["Chakra Petch"],
                "Dosis": ["Dosis"]
            },
            fontSize: {
                "big": "10rem !important",
                "huge": "12rem !important",
                "massive": "14rem !important",
                "enormous": "18rem !important",
                "9xl": "7rem !important"
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
            "380": "380px",
            "440": "440px",
            "481": "481px",
            "1440": "1440px",
            "1330": "1330px",
            "sm": "640px",
            "md": "768px",
            "818": "818px",
            "560": "560px",
            "lg": "1024px",
            "1080": "1080px",
            "1150": "1150px",
            "1230": "1230px",
            "xl": "1281px",
            "2xl": "1536px"
        },
        fill: theme => ({
            "yellow": theme("colors.yellow.500"),
            "black": theme("colors.black.dark"),
            "white": theme("colors.white")
        })
    },
    plugins: [],
};

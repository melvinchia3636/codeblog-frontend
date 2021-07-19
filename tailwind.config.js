module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    mode: "jit",
    theme: {
        extend: {
            colors: {
                yellow: {
                    300: "#FFC800"
                },
            }
        },
        fontFamily: {
            "Baloo": ["\"Baloo Tammudu 2\"", "cursive"],
            "Poppins": ["Poppins"],
            "Consolas": ["Consolas", "monospace"],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

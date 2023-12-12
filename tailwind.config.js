/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        fluidSmall: "repeat(auto-fit, minmax(10rem, 1fr))",
        fluidMedium: "repeat(auto-fit, minmax(15rem, 1fr))",
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
        fluidLarge: "repeat(auto-fit, minmax(25rem, 1fr))",
      },
      fontFamily: {
        graphik: ["var(--font-graphik)"],
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
      "5xl": "40px",
      "6xl": "48px",
    },
    colors: {
      primary: {
        300: "#009EC4",
        blue: "#009EC5",
        lightBlue: "#F7FDFD",
        white: "#ffffff",
        black: "#121212",
        grey: "#8A8C8E",
      },
      grey: {
        1: "#303237",
        2: "#152C5B",
        3: "#7E8494",
        5: "#E5E7EF",
        6: "#949494",
      },
      borderColor: {
        1: "#eeeeee",
      },
      error: {
        1: "#F21818",
        2: "#FEE8E8",
      },
      selectBg: {
        1: "#EDF2F7",
      },
      randomColor: {
        1: "#1c1c1c",
        2: "#425466",
        3: "#767676",
        tableHead: "#FAFAFB",
        tableHeadText: "#8492A6",
      },
    },
    screens: {
      md: { max: "1024px" },
      tab: { max: "768px" },
      sm: { max: "500px" },
    },
    keyframes: {
      fadeIn: {
        from: {
          opacity: "0",
          transform: "translate3d(0, -50%, 0)",
        },
        to: {
          opacity: "1",
          transform: "translate3d(0, 0, 0)",
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
    animation: {
      fadeIn: "fadeIn .35s ease-in-out 0s 1 normal none running",
      spin: "spin 1s linear infinite",
    },
  },
  plugins: [],
};

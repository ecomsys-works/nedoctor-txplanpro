/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    "font-inter",
    "font-zt",
    "font-sfpro",
    "font-micro",
    "font-libre",
    "font-anek",

    "xs:block",
    "sm:block",
    "md:block",
    "lg:block",
    "xl:block",
    "2xl:block",
    "3xl:block",

    // hidden
    "xs:hidden",
    "sm:hidden",
    "md:hidden",
    "lg:hidden",
    "xl:hidden",
    "2xl:hidden",
    "3xl:hidden",

    "left-[0px]",
    "right-[0px]",    
    "left-[0rem]",
    "right-[0rem]",

  ],
  theme: {  

    screens: {
      'xs': '480px',
      'xxs': '575px',
      'ssm': '620px',
      'sm': '640px',
      'smm': '660px',
      'md': '768px',
      'mdd': "950px",
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',      
      '2xxl': '1680px',
      '3xl': '1880px',
      'lang-desk-visible': '1620px',      
    },

    extend: {
      colors: {
        white: "#ffffff",
        black: "#111114",
        "light-grey": "#f6f6f6",
        "dusty-blue": "#dee5e7",
        yellow: "#efff5b",
        green: "#4cd964",
        orange: "#f54f11",
        grey: "#a0a0a0",
        blue: "#007aff",
        "light-blue": "#e2f3f7",
        "bg-white": "#eeeeee",
        "white-100": "rgba(255,255,255,0.1)",
        "white-300": "rgba(255,255,255,0.3)",
        "black-100": "rgba(14,14,14,0.1)",
        "grey-200": "rgba(165,165,165,0.2)",
        "blue-stroke": "rgba(151,166,181,0.2)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        zt: ["ZTNeueRalewe", "sans-serif"],
        sfpro: ["SFProText", "sans-serif"],
        micro: ["MicrogrammaDExtended", "sans-serif"],
        libre: ["LibreCaslonDisplay", "sans-serif"],
        anek: ["AnekTelugu", "sans-serif"],
      },

      fontSize: {
        h1: ["48px", { lineHeight: "120%", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "120%", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "120%", fontWeight: "600" }],
        h4: ["22px", { lineHeight: "120%", fontWeight: "600" }],

        body: ["16px", { lineHeight: "160%" }],
        small: ["14px", { lineHeight: "160%" }],
      },
    },
  },

  plugins: [],
};

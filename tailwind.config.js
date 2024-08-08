/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-white": "#fff",
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        "gray-700": "#363a3d",
        "primary-500": "#4a60a1",
        steelblue: "#7087c7",
        gray1: "rgba(0, 0, 0, 0.5)",
        darkgray: "#9c9c9c",
        slategray: "#576074",
        darkslategray: "#434343",
        "gray-400": "#889099",
        "primary-800": "#1e2640",
        whitesmoke: "#eaeaea",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        "primary-700": "#2c3a61",
        "primary-400": "#6e80b4",
        "primary-900": "#0f1320",
      },
      spacing: {},
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-regular-500": "Inter",
        "components-input-text": "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      "13xl": "32px",
      "xs-6": "11.6px",
      "2xs-8": "10.8px",
      "sm-6": "13.6px",
      "mini-5": "14.5px",
      "33xl": "52px",
      "12xl": "31px",
      "23xl": "42px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

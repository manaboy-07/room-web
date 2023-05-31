/** @format */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000",

          secondary: "#454545",

          accent: "#a1a1a1",

          neutral: "#FFFFFF",

          "base-100": "#FFFF",

          info: "#3ABFF8",

          success: "#3A8F4D",

          warning: "#FBBD23",

          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

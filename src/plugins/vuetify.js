// import { ar, en } from "@/locals/index"; // TODO: will back to it when we implement the localization
// Styles
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { fa } from "vuetify/locale";
import "vuetify/styles";
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#F7F7F7",
          primary: "#3d3870",
          secondary: "#5CBBF6",
          accent: "#048ba8",
          error: "#ef476f",
          info: "#2196F3",
          success: "#06d6a0",
          warning: "#ffd166",
        },
      },
      dark: {
        colors: {
          background: "#2121214C",
          primary: "#de7274",
          // dark pink
          secondary: "#22ccff",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
  locale: {
    locale: "fa",
    fallback: "fa",
    messages: { fa },
    rtl: { fa: true },
  },
});

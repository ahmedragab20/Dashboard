// import ar from "@/plugins/vuetify-local-ar";
// Styles
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { en } from "vuetify/locale";
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
          tableRow1: "#eee",
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
          tableRow1: "#999",
        },
      },
    },
  },
  locale: {
    locale: "en",
    fallback: "en",
    messages: { en },
    rtl: { en: true },
  },
});

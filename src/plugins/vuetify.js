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
          background: "#f5f5f5",
          primary: "#3d3870",
          secondary: "#5CBBF6",
        },
      },
      dark: {
        colors: {
          background: "#1e1e1e",
          primary: "#ff8c00",
          secondary: "#22ccff",
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

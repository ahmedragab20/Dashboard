// import { ar, en } from "@/locals/index"; // TODO: will back to it when we implement the localization
// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#3d3870",
          secondary: "#5CBBF6",
        },
      },
      dark: {
        colors: {
          primary: "#ff8c00",
          // dark pink
          secondary: "#22ccff",
        },
      },
    },
  },
});

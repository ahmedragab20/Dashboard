// Plugins
import router from "../router";
import vuetify from "./vuetify";
import { loadFonts } from "./webfontloader";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router);
}

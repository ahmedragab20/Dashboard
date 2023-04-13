<template>
  <v-app>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer">
      <v-btn color="primary" @click="toggleTheme"> toggle theme </v-btn>
    </v-navigation-drawer>
    <!-- ToolBar -->
    <v-app-bar elevation="0" density="compact" class="border-b">
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-sheet>
      <default-view />
    </v-sheet>
  </v-app>
</template>

<script setup>
import DefaultView from "@/layouts/default/View.vue";
import { ref } from "vue";
import { useTheme } from "vuetify";

const drawer = ref(true);

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

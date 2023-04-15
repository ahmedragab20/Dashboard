<template>
  <v-app>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer">
      <!-- close drawer -->
      <v-btn icon @click="drawer = false" variant="flat" rounded>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <br />
      <v-btn color="primary" @click="toggleTheme"> toggle theme</v-btn>
      <v-btn color="primary" variant="outlined" to="/dummy/blank">
        go to dummy
      </v-btn>
    </v-navigation-drawer>
    <!-- ToolBar -->
    <v-app-bar
      elevation="0"
      density="compact"
      class="mt-0 pa-6 pb-0 mb-9 bg-transparent"
    >
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      
      <v-toolbar-title>{{ dashboard.title }}</v-toolbar-title> -->
      <layoutHeader></layoutHeader>
    </v-app-bar>

    <!-- Content -->
    <v-card flat rounded="0" class="bg-transparent mt-7">
      <default-view />
    </v-card>
  </v-app>
</template>

<script setup>
import DefaultView from "@/layouts/default/View.vue";
import layoutHeader from "@/components/layout/layout-header.vue";
import { dashboard } from "@/locals/ar-KSA";
import { ref } from "vue";
import { useTheme } from "vuetify";

const drawer = ref(true);

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const log = (theme) => {
  console.log(theme);
};
</script>

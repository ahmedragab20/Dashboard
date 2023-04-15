<template>
  <v-app>
    <!-- Drawer -->
    <v-navigation-drawer v-model="drawer">
      <SideBar />
    </v-navigation-drawer>
    <!-- ToolBar -->

    <v-app-bar elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <Header />
    </v-app-bar>

    <!-- Content -->
    <v-card flat rounded="0" class="bg-transparent mt-7">
      <default-view />
    </v-card>

    <!-- Footer -->
    <v-footer elevation="0" class="bg-transparent d-flex justify-end" border>
      <v-card flat rounded="0" class="bg-transparent">
        <v-card-text class="text-end">
          <v-btn icon @click="toggleTheme" variant="outlined">
            <v-icon>mdi-lightbulb</v-icon>
          </v-btn>
          <div id="chat-bot">
            <Chat />
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script setup>
import DefaultView from "@/layouts/default/View.vue";
import Header from "@/components/App/Header.vue";
import { dashboard } from "@/locals/ar-KSA";
import { onMounted, ref } from "vue";
import { useTheme } from "vuetify";
import Chat from "@/components/App/Chat.vue";
import SideBar from "@/components/App/SideBar.vue";

const drawer = ref(false);

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const log = (theme) => {
  console.log(theme);
};

onMounted(() => {
  theme.global.name.value = "dark";
});
</script>

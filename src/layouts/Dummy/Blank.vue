<template>
  <v-app>
    <v-main>
      <RouterView />
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
    </v-main>
  </v-app>
</template>
<script setup>
import { useTheme } from "vuetify";
import Chat from "@/components/App/Chat.vue";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>

<template>
  <v-row class="align-center">
    <v-col cols="6" class="pa-0">
      <v-text-field
        density="compact"
        variant="enclosed"
        label="البحث"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        :elevation="0"
        class="bg-white rounded-lg"
        rounded="lg"
      ></v-text-field>
    </v-col>
    <v-col cols="6" class="pa-0 d-flex align-center justify-end">
      <v-avatar class="mx-2 font-weight-bold" color="primary" size="25">
        E
      </v-avatar>
      <v-btn class="mx-3" v-on="on" icon @click="toggleTheme">
        <v-icon size="20">
          {{
            theme.global.current.value.dark
              ? "mdi-white-balance-sunny"
              : "mdi-moon-waxing-crescent"
          }}
        </v-icon>
      </v-btn>

      <v-badge class="mx-4 ml-6" content="2" color="error">
        <v-icon size="25" color="primary">mdi-bell</v-icon>
      </v-badge>
      <v-avatar class="mx-2" size="30px">
        <v-img
          alt="Avatar"
          src="@/assets/avatar/avatar-saudi.jpg"
          style="border-radius: 100%"
        ></v-img>
      </v-avatar>

      <div class="ml-5">
        <span class="mx-2 text-h6" color="primary">يزيد</span>
        <v-icon size="25">mdi-menu-down</v-icon>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
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
<style scoped>
.v-text-field {
  box-shadow: none !important;
}

.test .v-field--variant-solo {
  box-shadow: none !important;
}
</style>

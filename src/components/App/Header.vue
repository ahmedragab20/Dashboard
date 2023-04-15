<template>
  <v-row class="align-center">
    <v-col cols="6" class="ps-7">
      <v-text-field
        density="compact"
        variant="outlined"
        rounded="xl"
        label="البحث"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <v-card
        flat
        class="bg-transparent d-flex align-center py-1 justify-end"
        style="gap: 20px"
      >
        <v-btn icon @click="toggleTheme" size="x-small" variant="outlined">
          <v-icon>mdi-lightbulb</v-icon>
        </v-btn>

        <v-badge content="2" color="error">
          <v-icon color="primary">mdi-bell</v-icon>
        </v-badge>
        <div>
          <v-menu location="bottom">
            <template v-slot:activator="{ props }">
              <v-card v-bind="props" flat class="bg-transparent">
                <v-avatar class="mx-2" size="25px">
                  <v-img
                    alt="Avatar"
                    src="@/assets/avatar/avatar-saudi.jpg"
                    cover
                  ></v-img>
                </v-avatar>
                <span class="" color="primary">زيد</span>
                <v-icon size="25">mdi-menu-down</v-icon>
              </v-card>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-card>
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

const items = [
  { title: "الملف الشخصي" },
  { title: "الإعدادات" },
  { title: "تسجيل الخروج" },
];

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

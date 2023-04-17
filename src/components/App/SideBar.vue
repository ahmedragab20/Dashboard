<template>
  <v-card
    :max-width="maxWidth"
    :color="mainColor"
    :height="height"
    :class="extraClasses"
    rounded="0"
    flat
  >
    <v-list v-model:opened="open" class="pa-3">
      <v-sheet class="bg-transparent px-3 pb-5">
        <component :is="logo" />
      </v-sheet>
      <template v-for="(link, i) in sidebarLinks" :key="i">
        <template v-if="!link.children?.length">
          <v-list-item
            :to="link.url"
            :value="link"
            :color="isActive(link) ? 'primary' : ''"
            rounded="rounded"
          >
            <template v-slot:prepend>
              <v-icon :icon="link.icon"></v-icon>
            </template>

            <v-list-item-title v-text="link.name"></v-list-item-title>
          </v-list-item>
        </template>
        <template v-else-if="link.children?.length">
          <v-list-group :value="`${link.name}`">
            <template v-slot:activator="{ props }">
              <v-list-item
                :to="isActive(link) ? '' : link.url"
                :color="isActive(link) ? 'primary' : ''"
                rounded="lg"
                v-bind="props"
                :title="`${link.name}`"
                :prepend-icon="link.icon"
              ></v-list-item>
            </template>

            <template v-for="(childLink, i) in link.children" :key="i">
              <v-list-item
                :to="childLink.url"
                :color="isActive(link) ? 'primary' : ''"
                rounded="rounded"
                :value="link.name"
                :title="childLink.name"
                :prepend-icon="childLink.icon"
              ></v-list-item>
            </template>
          </v-list-group>
        </template>
      </template>
    </v-list>
  </v-card>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from "vuetify";

import Logo from "@/assets/logo.vue";
import LogoDark from "@/assets/logo-dark.vue";

const props = defineProps({
  maxWidth: {
    type: String || Number,
    default: "100%",
  },
  mainColor: {
    type: String,
    default: "",
  },
  extraClasses: {
    type: String,
    default: "",
  },
  height: {
    type: String || Number,
    default: "100vh",
  },
});

const router = useRouter();
const route = useRoute();
const theme = useTheme();

const isDarkModeOn = computed(() => {
  // check on the theme
  return theme.global.name.value === "dark";
});

const sidebarLinks = ref([
  {
    name: "Dashboard",
    url: "/",
    children: [],
    icon: "mdi-home",
  },
  // {
  //   name: "البطاقات والمعايير",
  //   url: "",
  //   icon: "mdi-credit-card",
  //   children: [],
  // },
  {
    name: "البطاقات",
    url: "/credits",
    icon: "mdi-credit-card",
    children: [],
  },
  {
    name: "المعايير",
    url: "/credits/standards",
    icon: "mdi-ruler",
    children: [],
  },
  {
    name: "الأسئلة",
    url: "/credits/questions",
    icon: "mdi-comment-question-outline",
    children: [],
  },
  {
    name: "Components ",
    url: "/dummy/blank",
    children: [],
    icon: "mdi-contrast-box",
  },
]);

const open = ref([]);

watch(open, (val) => {
  console.log(val);
});

const routeTo = (link) => {
  if (!link.url) return;

  router.push(link.url);
};

const isActive = (link) => {
  if (!link.url) return;

  return route.path === link.url;
};

const logo = computed(() => {
  return !isDarkModeOn.value ? LogoDark : Logo;
});
</script>

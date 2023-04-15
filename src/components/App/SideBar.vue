<template>
  <v-card
    :max-width="maxWidth"
    :color="mainColor"
    :height="height"
    :class="extraClasses"
    rounded="0"
    flat
  >
    <v-list v-model:opened="open">
      <template v-for="(link, i) in sidebarLinks" :key="i">
        <template v-if="!link.children?.length">
          <v-list-item :value="link" active-color="white" rounded="rounded">
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
                active-color="primary"
                rounded="xl"
                variant="elevated"
                v-bind="props"
                :title="`${link.name}`"
                :prepend-icon="link.icon"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="(childLink, i) in link.children"
              :key="i"
              rounded="rounded"
              :title="childLink.name"
              :prepend-icon="childLink.icon"
              :value="childLink.name"
            ></v-list-item>
          </v-list-group>
        </template>
      </template>
    </v-list>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

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

const sidebarLinks = ref([
  {
    name: "Dashboard",
    url: "/dashboard",
    children: [],
    expand: false,
    icon: "mdi-home",
  },
  {
    name: "Users",
    url: "/users",
    icon: "mdi-account",
    children: [
      {
        name: "User 1",
        url: "/users/1",
        mdIcon: "mdi-home",
      },
      {
        name: "User 2",
        url: "/users/2",
        mdIcon: "mdi-home",
      },
    ],
    expand: false,
  },
  {
    name: "Credits & Cards",
    url: "/credits",
    children: [],
    expand: false,
    icon: "mdi-credit-card",
  },
]);

const toggleExpand = (index) => {
  console.log(index);
  sidebarLinks.value[index].expand = !sidebarLinks.value[index].expand;
  console.log(sidebarLinks.value[index].expand);
};

const open = ref([]);
</script>

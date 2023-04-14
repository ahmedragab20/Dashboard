<template>
  <v-list max-width="320px" class="mx-auto my-10" flat color="grey-lighten-4">
    <template v-for="(link, i) in sidebarLinks" :key="i">
      <v-list-item :value="link" active-color="primary">
        <v-list-item-title
          v-if="link?.url"
          variant="text"
          block
          v-text="link.name"
        ></v-list-item-title>
      </v-list-item>
      <v-list-group v-if="link.sublinks?.length" value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
          <v-list-item
            v-for="(sublink, i) in link.sublinks"
            :key="i"
            :title="sublink.name"
            :value="sublink.name"
          ></v-list-item>
        </template>
      </v-list-group>
    </template>
  </v-list>
</template>
<script setup>
import { ref } from "vue";
const sidebarLinks = ref([
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  {
    name: "Products",
    expand: false,
    sublinks: [
      { name: "Product 1", url: "/product/1" },
      { name: "Product 2", url: "/product/2" },
      { name: "Product 3", url: "/product/3" },
    ],
  },
  { name: "Contact Us", url: "/contact" },
]);

const toggleExpand = (index) => {
  console.log(index);
  sidebarLinks.value[index].expand = !sidebarLinks.value[index].expand;
  console.log(sidebarLinks.value[index].expand);
};
</script>

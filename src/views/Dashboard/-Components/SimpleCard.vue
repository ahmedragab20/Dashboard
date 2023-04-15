<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        class="mx-auto d-flex justify-space-between align-center py-5"
        rounded="xl"
        :flat="!isHovering"
        border
        :style="`border-color: ${item.border}`"
      >
        <!-- title -->
        <div class="d-flex justify-center flex-column w-75" style="gap: 0px">
          <v-card-title v-text="item.title"></v-card-title>
          <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
        </div>
        <!-- icon -->
        <div class="d-flex justify-center align-center flex-column w-25">
          <v-icon size="x-large" :color="item.iconColor">
            {{ item.icon }}
          </v-icon>
          <v-badge
            :color="item.iconColor"
            :content="item.value"
            inline
          ></v-badge>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    default: "bg-white",
  },
});
</script>

<template>
  <v-navigation-drawer :model-value="modalValue" location="bottom">
    <v-col cols="12" class="py-0">
      <div class="d-flex justify-end align-center px-4 pt-1">
        <v-btn
          @click="emit('update:modalValue', false)"
          icon
          size="small"
          color="error"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-col>
    <v-card flat max-width="320px"></v-card>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modalValue: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modalValue"]);

const items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);

watch(
  () => props.modalValue,
  (val) => {
    console.log(val);
  }
);
</script>

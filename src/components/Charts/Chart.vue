<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { Chart, registerables } from "chart.js";
import { onMounted, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  datasets: {
    type: Array,
    required: true,
    validator: (value) => {
      // Validate that each dataset has a label and data array
      return value.every((dataset) => {
        return dataset.label && Array.isArray(dataset.data);
      });
    },
  },
  labels: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    default: {},
  },
});

let canvas = ref(null);

onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext("2d");
    if (ctx) {
      Chart.register(...registerables);

      new Chart(ctx, {
        type: props.type,
        data: {
          labels: props.labels,
          datasets: props.datasets,
        },
        options: props.options,
      });
    }
  }
});

onMounted(() => {
  if (!props.type) {
    throw new Error("No chart type provided");
  }
  if (!props.datasets?.length) {
    throw new Error("No datasets provided");
  }
});
</script>

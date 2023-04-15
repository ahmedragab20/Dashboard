<template>
  <div :style="containerStyle" class="position-relative border">
    <svg :width="size" :height="size">
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke="emptyStrokeColor"
        fill="none"
      ></circle>
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke="strokeColor"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
        fill="none"
      ></circle>
    </svg>
    <div
      style="position: absolute; top: 0; left: 0; z-index: 1"
      class="d-flex justify-center align-center w-100 h-100"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, computed } from "vue";

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    default: 100,
  },
  strokeWidth: {
    type: Number,
    default: 10,
  },
  strokeColor: {
    type: String,
    default: "blue",
  },
  containerStyle: {
    type: Object,
    default: () => ({}),
  },
  emptyStrokeColor: {
    type: String,
    default: "gray",
  },
});

const circumference = computed(() => Math.PI * (radius.value * 2));

const radius = computed(() => (props.size - props.strokeWidth) / 2);

const center = computed(() => props.size / 2);

const dashArray = computed(
  () => `${circumference.value} ${circumference.value}`
);

const dashOffset = computed(
  () => circumference.value - (props.percentage / 100) * circumference.value
);
</script>

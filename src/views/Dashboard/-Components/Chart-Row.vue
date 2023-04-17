<template>
  <v-card
    flat
    color="transparent"
    :class="[item, { 'charts-section': index === 0 }]"
    :ref="item"
  >
    <v-row justify="space-between">
      <v-col cols="12" sm="6" class="cols">
        <slot name="start" />
      </v-col>
      <v-col cols="12" sm="6">
        <slot name="end" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  item: {
    type: String,
    default: "",
  },
  index: {
    type: Number,
  },
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  props.items?.forEach((item, index) => {
    if (index === 0) {
      // just animate on the mount not on scroll
      gsap.to(`.${item}`, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        toggleActions: "restart reverse restart reverse",

        onStart: () => {
          console.log("start");
        },
        onComplete: () => {
          console.log("done");
        },
      });
    }
    // else { NOTE:: Adding this code will have problem with current design layout when you navigate to some other page and come back to this page
    // //   gsap.to(`.${item}`, {
    // //     y: 0,
    // //     opacity: 1,
    // //     scale: 1,
    // //     duration: 1,
    // //     scrollTrigger: {
    // //       trigger: `.${item}`,
    // //       // scrub: -2,
    // //       // toggleActions: "restart reverse restart reverse",
    // //       start: "top 90%",
    // //       end: "bottom 80%",
    // //     },
    // //     onStart: () => {
    // //       console.log("start");
    // //     },
    // //     onComplete: () => {
    // //       console.log("done");
    // //     },
    // //   });
    // }
  });
});
</script>
<style scoped>
.charts-section {
  transform: translateY(-100px) scale(0.8);
  opacity: 0.7;
}
</style>

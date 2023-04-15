<template>
  <v-card flat rounded="xl" class="bg-transparent mx-auto" min-width="550px">
    <v-card variant="flat" class="pt-3 pb-8" rounded="xl">
      <v-card-title class="text-h4 font-bold text-center">
        {{ timer.title }}
      </v-card-title>
      <div class="d-flex justify-center">
        <v-chip class="mb-8 mx-auto" size="small">
          {{ targetDateFormatted }}
        </v-chip>
      </div>
      <!-- box for each category in the timer -->
      <v-row justify="center">
        <v-card
          rounded="lg"
          class="mx-1 pa-3 bg-transparent text-primary"
          border
          variant="tonal"
        >
          <div class="text-h6">{{ time.days }} {{ timer.days }}</div>
        </v-card>
        <v-card
          rounded="lg"
          class="mx-1 pa-3 bg-transparent text-primary"
          border
          variant="outlined"
        >
          <div class="text-h6">{{ time.hours }} {{ timer.hours }}</div>
        </v-card>
        <v-card
          rounded="lg"
          class="mx-1 pa-3 bg-transparent text-primary"
          border
          variant="outlined"
        >
          <div class="text-h6">{{ time.minutes }} {{ timer.minutes }}</div>
        </v-card>
        <v-card
          rounded="lg"
          class="mx-1 pa-3 bg-transparent text-primary"
          border
          variant="outlined"
        >
          <div class="text-h6">{{ time.seconds }} {{ timer.seconds }}</div>
        </v-card>
      </v-row>
    </v-card>
  </v-card>
</template>

<script setup>
import { timer } from "@/locals/ar-KSA";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { startCountdown } from "@/utils/helpers";

const targetDate = ref(new Date(2023, 9, 20)); // April 20, 2023

const targetDateFormatted = computed(() => {
  const date = targetDate.value;
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
});

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

onBeforeMount(() => {
  startCountdown(targetDate.value, (remainingTime) => {
    time.value = remainingTime;
  });
});
</script>

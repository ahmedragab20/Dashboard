<template>
  <v-sheet>
    <div class="text-center text-h1 mb-5">Dummy</div>
    <!--Countdown-->
    <v-card
      flat
      variant="tonal"
      rounded="0"
      class="d-flex justify-center align-center"
      title="Timer:"
    >
      <v-card-title>
        <div class="display-1 font-weight-light">{{ time.days }} days</div>
      </v-card-title>
      <v-card-subtitle>
        <div class="display-1 font-weight-light">{{ time.hours }} hours</div>
      </v-card-subtitle>
      <v-card-subtitle>
        <div class="display-1 font-weight-light">
          {{ time.minutes }} minutes
        </div>
      </v-card-subtitle>
      <v-card-subtitle>
        <div class="display-1 font-weight-light">
          {{ time.seconds }} seconds
        </div>
      </v-card-subtitle>
    </v-card>
    <!--Chart.js-->
    <v-card flat class="mt-8 mx-auto bg-transparent" max-width="500px">
      <div>
        <h1>Chart.js Example</h1>
        <div>
          <v-btn color="secondary" variant="outlined" @click="changeChartType">
            play around with the chart
          </v-btn>
        </div>
        <chart
          :key="chartType"
          :type="chartType"
          :datasets="chartData"
          :labels="chartLabels"
          :options="chartOptions"
        />
      </div>
    </v-card>
    <!--Circular Progress-->
    <v-card flat class="mt-8 mx-auto bg-transparent" max-width="500px">
      <div class="d-flex justify-center align-center">
        <div class="text-center">
          <v-progress-circular
            class="mx-3"
            model-value="100"
            color="blue-grey"
          ></v-progress-circular>

          <v-progress-circular
            class="mx-3"
            model-value="80"
            color="deep-orange-lighten-2"
          ></v-progress-circular>

          <v-progress-circular
            class="mx-3"
            model-value="60"
            color="brown"
          ></v-progress-circular>

          <v-progress-circular
            class="mx-3"
            model-value="40"
            color="lime"
          ></v-progress-circular>

          <v-progress-circular
            class="mx-3"
            model-value="20"
            color="indigo-darken-2"
          ></v-progress-circular>
        </div>
      </div>
    </v-card>
    <!--Sidebar-->
    <Sidebar />
    <!-- search input -->
    <v-card max-width="320px" variant="flat" class="mx-auto bg-transparent">
      <v-text-field
        v-model="something"
        prepend-icon="mdi-magnify"
      ></v-text-field>
    </v-card>
    <!-- Progress -->
    <v-card flat class="mt-8 mx-auto bg-transparent" max-width="500px">
      <div class="d-flex">
        <Progress
          :percentage="99"
          :size="250"
          :stroke-width="12"
          stroke-color="#4CAF50"
        >
          <div style="text-align: center; font-size: 20px">75%</div>
        </Progress>
      </div>
    </v-card>
  </v-sheet>
</template>

<script setup>
import Sidebar from "@/components/App/SideBar.vue";
import Chart from "@/components/Charts/Chart.vue";
import Progress from "@/components/Reusable/Progress.vue";
import { startCountdown } from "@/utils/helpers";
import { onMounted, ref } from "vue";

const targetDate = ref(new Date(2023, 3, 20)); // April 20, 2023

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const chartTypes = ref([
  "line",
  "bar",
  "radar",
  "doughnut",
  "polarArea",
  "bubble",
  "scatter",
]);
const chartType = ref("bar");

// change this to see different charts randomly
const changeChartType = () => {
  let randomIndex = Math.floor(Math.random() * chartTypes.value.length);
  while (chartTypes.value[randomIndex] === chartType.value) {
    randomIndex = Math.floor(Math.random() * chartTypes.value.length);
  }
  chartType.value = chartTypes.value[randomIndex] || "bar";
};

const chartData = ref([
  {
    label: "Dataset 1",
    data: [10, 20, 30, 40, 50, 60],
  },
  {
    label: "Dataset 2",
    data: [20, 30, 10, 40, 50, 60],
  },
]);
const chartLabels = ref(["January", "February", "March", "April", "May"]);
const chartOptions = ref({
  backgroundColor: [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
  ],
  hoverOffset: 9,
  responsive: true,
});

const something = ref();

const percentages = ref([
  { value: 5, color: "red" },
  { value: 95, color: "green" },
  // { value: 15, color: "blue" },
  // { value: 10, color: "yellow" },
  // { value: 1, color: "orange" },
]);

onMounted(() => {
  startCountdown(targetDate.value, (remainingTime) => {
    time.value = remainingTime;
  });
});
</script>

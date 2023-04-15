<template>
  <v-container>
    <v-row justify="space-between">
      <v-card flat class="bg-transparent">
        <v-card-title class="text-h5 font-bold text-primary">
          {{ dashboard.homepage }}
        </v-card-title>
        <div class="d-flex align-center">
          <v-card-subtitle style="opacity: 1">
            {{ dashboard.weHappyThatYourBack }}،
            <span class="text-h6">يا زيد 👋💜️</span>
          </v-card-subtitle>
        </div>
      </v-card>
      <!-- Time Dialog -->
      <v-dialog v-model="timeDialog" width="auto">
        <template v-slot:activator="{ props }">
          <v-card flat class="d-flex align-end bg-transparent">
            <v-btn
              @click="timeDialog = !timeDialog"
              variant="tonal"
              color="primary"
            >
              <v-icon>mdi-timer</v-icon>
              {{ dashboard.displayTheRemainedTime }}
            </v-btn>
          </v-card>
        </template>

        <v-btn
          @click="timeDialog = false"
          rounded="xl"
          width="15px"
          height="40px"
          class="pa-0"
        >
          x
        </v-btn>
        <Timer />
      </v-dialog>
    </v-row>
    <v-card flat class="mt-10 pa-3 bg-transparent">
      <!---- Simple card --->
      <v-row>
        <v-col
          v-for="(item, i) in dumpDataInArabic"
          :key="item.id"
          cols="12"
          lg="4"
          sm="6"
        >
          <SimpleCard :item="item" :color="i === 0 ? '#CBE1F7' : '#fff'" />
        </v-col>
      </v-row>
    </v-card>
    <!-- Charts -->
    <v-card flat rounded="0" class="bg-transparent mt-5 pa-3">
      <v-card-title class="text-h5 font-bold text-primary">
        {{ dashboard.charts }}
      </v-card-title>
      <v-card flat color="transparent">
        <v-row justify="space-between">
          <v-col cols="12" sm="6">
            <!-- Circular Progress -->
            <v-card flat class="mt-8 mx-auto bg-transparent" max-width="500px">
              <v-card-title class="text-primary">
                {{ dashboard.governmentStandards }}
              </v-card-title>
              <v-card-subtitle>
                {{ dashboard.governmentStandardsDescription }}
              </v-card-subtitle>
              <div class="d-flex justify-center mt-10">
                <div
                  v-for="(stander, i) in governmentStanders"
                  :key="i"
                  class="text-center"
                >
                  <v-progress-circular
                    class="mx-3"
                    :size="128"
                    :width="12"
                    :model-value="stander.value"
                    :color="stander.color"
                  >
                    <span class="text-h5 font-weight-bold">
                      {{ stander.value }}%
                    </span>
                  </v-progress-circular>
                  <v-card-text class="text-h5">
                    {{ stander.title }}
                  </v-card-text>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <!-- Charts Card -->
            <v-card flat class="bg-transparent">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="selectedFilter"
                    :items="filters"
                    :label="dashboard.filters"
                    color="primary"
                    class="bg-transparent"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    v-model="chartType"
                    :items="chartTypes"
                    :label="dashboard.changeTheChartView"
                    color="primary"
                    class="bg-transparent"
                  ></v-select>
                </v-col>
              </v-row>
              <chart
                :key="chartType"
                :type="chartType"
                :datasets="chartData"
                :labels="chartLabels"
                :options="chartOptions"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </v-container>
</template>
<script setup>
import { dashboard, general } from "@/locals/ar-KSA";
import { ref, watch } from "vue";
import SimpleCard from "@/views/Dashboard/-Components/SimpleCard.vue";
import Chart from "@/components/Charts/Chart.vue";
import Timer from "@/views/Dashboard/-Components/Timer.vue";

const timeDialog = ref(false);

const dumpDataInArabic = ref([
  {
    id: 1,
    title: "الجهات الحكومية",
    subtitle: "اجمالي اعداد الشركات الحكومية",
    value: 100,
    icon: "mdi-chart-areaspline",
    iconColor: "#45a2ff",
    border: "#45a2ff",
  },
  {
    id: 2,
    title: "الشركات الخاصة",
    subtitle: "اجمالي اعداد الشركات الخاصة",
    value: 120,
    icon: "mdi-chart-bar",
    iconColor: "#718aa8",
    border: "",
  },
  {
    id: 3,
    title: "المؤسسات الاهلية",
    subtitle: "اجمالي اعداد المؤسسات الاهلية",
    value: 134,
    icon: "mdi-chart-bubble",
    iconColor: "#a39714",
    border: "",
  },
  {
    id: 4,
    title: "المؤسسات الاهلية",
    subtitle: "اجمالي اعداد المؤسسات الاهلية",
    value: 880,
    icon: "mdi-chart-line",
    iconColor: "#896FB6FF",
    border: "",
  },
  {
    id: 5,
    title: "المصالح الحكومية",
    subtitle: "اجمالي اعداد المصالح الحكومية",
    value: 92,
    icon: "mdi-chart-donut",
    iconColor: "#de7274",
    border: "",
  },
  {
    id: 6,
    title: "المؤسسات التعليمية",
    subtitle: "اجمالي اعداد المؤسسات التعليمية",
    value: 87,
    icon: "mdi-chart-pie",
    iconColor: "#be5583",
    border: "",
  },
]);

const chartTypes = ref([
  { title: "line" },
  { title: "bar" },
  { title: "radar" },
  { title: "polarArea" },
  { title: "scatter" },
]);
const chartType = ref("bar");
watch(chartType, (newVal, oldValue) => {
  console.log({ newVal, oldValue });
});
// change this to see different charts randomly

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

const filters = ref([
  { title: "سنوي" },
  { title: "شهري" },
  { title: "اسبوعي" },
  { title: "يومي" },
]);
const selectedFilter = ref();

const governmentStanders = ref([
  { title: "مكتملة", value: 40, color: "#45a2ff" },
  { title: "جارية", value: 20, color: "#a39714" },
  { title: "متوقفة", value: 10, color: "#ff1f62" },
]);
</script>

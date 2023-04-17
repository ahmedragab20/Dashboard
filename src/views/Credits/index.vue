<template>
  <v-card flat class="bg-transparent pb-7">
    <v-container>
      <v-card flat class="d-flex justify-space-between">
        <v-col cols="6">
          <v-card-title class="text-h3 text-primary"> البطاقات</v-card-title>
          <v-card-subtitle>جميع البطاقات الخاصة بجميع الجهات</v-card-subtitle>
        </v-col>
        <v-col cols="6">
          <div class="d-flex justify-end align-center py-2 px-4">
            <v-btn @click="drawer = !drawer" variant="tonal" color="primary">
              <v-icon> mdi-filter-variant </v-icon> <span>تصفية</span>
            </v-btn>
          </div>
        </v-col>
      </v-card>

      <v-row no-gutters>
        <v-col cols="12">
          <v-card flat class="d-flex justify-space-between align-center px-4">
            <v-col cols="6">
              <v-switch
                density="compact"
                v-model="view"
                :label="!view ? 'شكل رقم واحد' : 'شكل رقم اتنين'"
                hide-details
                color="primary"
              ></v-switch>
            </v-col>

            <v-col cols="6">
              <div class="d-flex justify-end">
                <v-btn variant="outlined" icon size="x-small" to="/">
                  <v-icon> mdi-home</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <transition-group
        id="v-row-div"
        appear
        tag="div"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <template v-if="view">
          <v-col
            v-for="(item, i) in creditsData"
            :data-index="i"
            :key="i"
            cols="12"
            lg="3"
            sm="6"
          >
            <CreditCard :item="item" />
          </v-col>
        </template>
        <template v-else>
          <v-col
            v-for="(item, i) in creditsData"
            :key="i"
            :data-index="i"
            cols="12"
            lg="4"
            sm="6"
          >
            <v-card border flat rounded="lg">
              <v-col cols="12">
                <div class="d-flex justify-center align-center w-100">
                  <div class="w-50 text-truncate">
                    <v-card-title class="text-primary font-weight-bold px-0">
                      {{ item.title }}
                    </v-card-title>
                  </div>
                  <div class="w-50 d-flex justify-end align-center">
                    <v-rating
                      v-model="item.rate"
                      color="orange"
                      length="5"
                      readonly
                      size="x-small"
                    ></v-rating>
                    <small class="text-blue-grey-darken-1 font-weight-bold">
                      {{ item.rate }}
                    </small>
                  </div>
                </div>
                <v-divider></v-divider>
                <div
                  v-for="(el, i) in Object.keys(item)"
                  :key="i"
                  class="d-flex justify-center align-center w-100 my-1"
                >
                  <template
                    v-if="!['id', 'title', 'icon', 'rate'].includes(el)"
                  >
                    <div class="w-50 text-truncate font-weight-bold">
                      {{ credits[el] }}
                    </div>
                    <div
                      class="w-50 d-flex justify-end align-center text-grey-darken-1"
                    >
                      <span
                        v-if="el === 'completionRate'"
                        class="d-flex align-center"
                      >
                        <v-progress-circular
                          :width="3"
                          :size="19"
                          class=""
                          :model-value="item.completionRate * 100 || 0"
                          :color="
                            complationRateColor(item.completionRate * 100 || 0)
                          "
                        >
                        </v-progress-circular>
                        <span class="mr-1"> {{ item[el] * 100 || 0 }}% </span>
                      </span>
                      <span v-else>
                        {{ item[el] }}
                      </span>
                    </div>
                  </template>
                </div>
              </v-col>
            </v-card>
          </v-col>
        </template>
      </transition-group>
    </v-container>

    <Filters v-model:modal-value="drawer" />
  </v-card>
</template>

<script setup>
import gsap from "gsap";
import creditsData from "@/Data/credits";
import CreditCard from "@/views/Credits/-Components/CreditCard.vue";
import { onMounted, ref, watch } from "vue";
import { credits } from "@/locals/ar-KSA";
import { makeItLikeVRow } from "@/utils/helpers";
import Filters from "@/views/Credits/-Components/Filters.vue";

const view = ref(true);

const complationRateColor = (value) => {
  if (value < 50) return "amber";
  if (value < 75) return "info";
  return "success";
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateX(-100px)";
};
const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    x: 0,
    duration: 0.3,
    onComplete: done,
    delay: el.dataset.index * 0.1,
  });
};

const drawer = ref(false);
watch(drawer, (newValue, oldValue) => {
  console.log({ newValue, oldValue });
});
onMounted(() => {
  const vRowDiv = document.getElementById("v-row-div");
  // make it act the same style as v-row in vuetify
  makeItLikeVRow(vRowDiv);
});
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="368"
    rounded="xl"
    density="compact"
    flat
    border
  >
    <div class="d-flex py-3 justify-space-between">
      <div></div>

      <div class="d-flex flex-column">
        <v-tooltip
          :text="`${credits.completionRate} ${item.completionRate * 100 || 0}%`"
          location="top"
        >
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-progress-circular
                :width="3"
                :size="25"
                class="mx-3"
                :model-value="item.completionRate * 100 || 0"
                :color="complationRateColor(item.completionRate * 100 || 0)"
              >
              </v-progress-circular>
            </div>
          </template>
        </v-tooltip>
      </div>
    </div>
    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col cols="12" class="text-center">
          <v-icon color="primary" :icon="item.icon" size="88"></v-icon>
        </v-col>
        <v-col cols="12">
          <v-tooltip :text="item.title" location="top">
            <template v-slot:activator="{ props }">
              <div v-bind="props">
                <div class="text-h6 text-truncate font-weight-bold text-center">
                  {{ item.title }}
                </div>
              </div>
            </template>
          </v-tooltip>
        </v-col>
        <v-tooltip :text="`${credits.rate} ${item.rate}`" location="top">
          <template v-slot:activator="{ props }">
            <v-col cols="12" class="d-flex justify-center" v-bind="props">
              <div>
                <v-rating
                  v-model="item.rate"
                  bg-color="orange-lighten-1"
                  color="amber"
                  length="5"
                  readonly
                  size="x-small"
                ></v-rating>
              </div>
            </v-col>
          </template>
        </v-tooltip>
      </v-row>
    </v-card-text>

    <v-expand-transition>
      <div v-if="expand">
        <v-table density="compact">
          <thead>
            <tr>
              <th style="min-width: 100px"></th>
              <th style="min-width: 100px"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(el, i) in Object.keys(item)" :key="i">
              <tr v-if="!['id', 'title', 'icon', 'rate'].includes(el)">
                <td>
                  <v-card-subtitle class="mx-0 px-0">
                    {{ credits[el] }}
                  </v-card-subtitle>
                </td>
                <td>
                  <v-card-subtitle class="mx-0 px-0">
                    <span v-if="el === 'completionRate'">
                      {{ item[el] * 100 || 0 }}%
                    </span>
                    <span v-else>
                      {{ item[el] }}
                    </span>
                  </v-card-subtitle>
                </td>
              </tr>
            </template>
          </tbody>
        </v-table>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand">
        {{ !expand ? credits.showFullDetails : credits.hideFullDetails }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { credits } from "@/locals/ar-KSA";
import { ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const expand = ref(false);

const complationRateColor = (value) => {
  if (value < 50) return "amber";
  if (value < 75) return "info";
  return "success";
};
</script>

<template>
  <v-container fluid>
    <v-card outlined min-height="70vh" class="pa-4">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center">
            <div>
              <div class="text-h4">
                البطاقات / <span class="text-primary">الاسئلة</span>
              </div>
              <p>عرض جميع الاجهزة الموجوده ف النظام</p>
            </div>
            <div class="d-flex align-center" style="gap: 20px">
              <v-btn color="primary" flat link>
                <span class="mx-2">اضافة سؤال جديد</span>
                <v-icon> mdi-plus</v-icon>
              </v-btn>
              <v-btn variant="outlined" icon size="x-small" to="/">
                <v-icon> mdi-home</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" class="mt-2">
          <v-row>
            <v-col
              cols="4"
              class="d-flex justify-space-between align-center"
              style="gap: 10px"
            >
              <v-select
                placeholder="اختار المعيار"
                density="compact"
                :items="['معيار الزياده', 'معيار النقص', 'معيار الحكومة']"
                style="width: 25%"
              ></v-select>
              <v-select
                placeholder="اختار الجهة الحكومية"
                density="compact"
                style="width: 25%"
                :items="['امانة الرياض', 'امانة جده', 'وزارة الدفاع']"
              ></v-select>
            </v-col>
            <v-col cols="4"></v-col>
            <v-col cols="4">
              <v-text-field
                density="compact"
                variant="outlined"
                rounded="xl"
                label="البحث"
                prepend-inner-icon="mdi-magnify"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" v-for="item in Items" :key="i">
          <v-card
            class="pa-0"
            variant="outlined"
            rounded
            color="info"
            min-height="330px"
          >
            <v-card-title
              class="d-flex justify-space-between align-start ma-0 pa-0 text-truncate"
            >
              <v-card-item
                style="
                  border-top-right-radius: 2px;
                  border-bottom-left-radius: 8px;
                "
                class="bg-primary py-1 px-3 font-weight-light text-subtitle-1"
                >{{ item.rate }}
              </v-card-item>
              <v-spacer></v-spacer>
              <v-card-item class="text-error">*</v-card-item>
            </v-card-title>
            <!-- <v-card-item class="text-h6">
              الى اى مدى يجب ان تكون كلمة المرور معقدة ؟
            </v-card-item> -->
            <v-card-item class="text-h6 text-truncate text-primary">
              {{ item.ques }}
            </v-card-item>
            <v-card-item lass="my-0">
              <v-icon color="error" style="transform: rotate(45deg)">
                mdi-pin
              </v-icon>
            </v-card-item>
            <v-card-text class="text-grey-darken-3"
              >{{ item.ans }}
            </v-card-text>
            <v-card-item class="mb-3 pa-0">
              <div class="d-flex align-center">
                <div class="d-flex align-center">
                  <v-progress-circular
                    class="mx-3"
                    :size="60"
                    :width="5"
                    :model-value="item.grade"
                    :color="complationRateColor(item.grade)"
                  >
                    <span class="text-title font-weight-bold">
                      {{ item.grade }}%
                    </span>
                  </v-progress-circular>
                  <v-card-text class="text-h6 px-0"
                    >{{ item.gradeTitle }}
                  </v-card-text>
                </div>
                <v-spacer></v-spacer>
                <span
                  class="d-flex align-center py-5 pr-2"
                  style="
                    max-height: 18px;
                    gap: 5px;
                    background-color: lightblue;
                  "
                >
                  <!-- <v-badge
                    style="font-size: 5px"
                    small

                  ></v-badge> -->
                  <v-icon class="pa-0" color="success"
                    >mdi-circle-medium</v-icon
                  >
                  <span class="ma-1">{{ item.status }}</span>
                  <v-icon color="error" style="transform: rotate(45deg)"
                    >mdi-paperclip</v-icon
                  >
                  <v-icon color="success">mdi-file-move</v-icon>
                </span>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script setup>
import { ref } from "vue";

const Items = ref([
  {
    rate: 3.3,
    ques: "  الى اى مدى يجب ان تكون كلمة المرور معقدة ؟",
    ans: "يجب الا تكون كلمه عاديةو ويجب ان تتضمن مجموعة من الاحرف والارقام والرموز الخاصة فى الدورات التدريبيه التى نقدمها نعلم المتدربيين حيلا بسيطة لانشاء كلمات مرور ذكية يسهل تذكرها",
    status: "تم الإجابة",
    grade: 75,
    gradeTitle: "نسبة التطابق",
  },
  {
    rate: 1.1,
    ques: "ما هو التعلم عن بُعد؟",
    ans: "يعني التعلم عن بعد تعلم المواد التعليمية والدراسية عن طريق الإنترنت أو من خلال برامج التعلم الإلكترونية، ويمكن للطلاب المشاركة في المحاضرات عبر الإنترنت وإجراء الاختبارات وتقديم الواجبات الخاصة بهم عبر الإنترنت.",
    status: "تم الإجابة",
    grade: 68,
    gradeTitle: "جيد",
  },
  {
    rate: 4.5,
    ques: "ما هي بعض النصائح لزيادة الإنتاجية في العمل؟",
    ans: "تتضمن بعض النصائح لزيادة الإنتاجية في العمل وضع أهداف واضحة، وتحديد الأولويات، وتقليل التشتت، وأخذ استراحات، وتفويض المهام عند الاقتضاء.",
    status: "تم الإجابة",
    grade: 90,
    gradeTitle: "ممتاز",
  },
  {
    rate: 2.8,
    ques: "ما هي فوائد التأمل؟",
    ans: "تتضمن فوائد التأمل تقليل مستوى الضغط والقلق، وتحسين التركيز والانتباه، وزيادة الوعي الذاتي، وتحسين النوم.",
    status: "تم الإجابة",
    grade: 60,
    gradeTitle: "مقبول",
  },
  {
    rate: 3.2,
    ques: "كيف يمكن تحسين الذاكرة؟",
    ans: "يمكن تحسين الذاكرة عن طريق الاسترخاء والنوم الجيد، وتحديد مواقيت محددة للتعلم، وتكرار المعلومات، واستخدام تقنيات الذاكرة مثل التجسيد والتأليف.",
    status: "تم الإجابة",
    grade: 80,
    gradeTitle: "جيد جدًا",
  },
  {
    rate: 1.5,
    ques: "ما هو التعلم عن بُعد؟",
    ans: "يعني التعلم عن بعد تعلم المواد التعليمية والدراسية عن طريق الإنترنت أو من خلال برامج التعلم الإلكترونية، ويمكن للطلاب المشاركة في المحاضرات عبر الإنترنت وإجراء الاختبارات وتقديم الواجبات الخاصة بهم عبر الإنترنت.",
    status: "تم الإجابة",
    grade: 68,
    gradeTitle: "جيد",
  },
]);
const complationRateColor = (value) => {
  if (value <= 60) return "error";
  if (value <= 70) return "warning";
  if (value <= 80) return "info";
  if (value <= 90) return "success";
  return "success";
};
</script>
<style scoped>
.v-input__control {
  border: 2px solid red !important;
}
</style>

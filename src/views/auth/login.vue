<template>
  <v-card
    max-width="1224px"
    min-height="100vh"
    class="mx-auto bg-transparent"
    flat
  >
    <v-container>
      <v-row class="h-screen" align="center">
        <v-card
          flat
          height="70vh"
          width="50%"
          rounded="0"
          class="d-flex flex-column justify-center pa-8"
        >
          <v-card flat class="bg-transparent">
            <v-card flat class="mb-3 bg-transparent">
              <v-card-title class="text-h3 mb-3">
                {{ auth.login }}
              </v-card-title>
              <v-card-subtitle>
                {{ auth.loginSubtitle }}
              </v-card-subtitle>
            </v-card>
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="email"
                :label="auth.email"
                color="primary"
                :rules="emailRules"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :label="auth.password"
                :type="showPassword ? 'text' : 'password'"
                color="primary"
                :rules="passwordRules"
                variant="outlined"
                class="mt-3"
              >
                <template #append-inner>
                  <v-icon
                    @click="showPassword = !showPassword"
                    :color="showPassword ? 'primary' : 'grey'"
                  >
                    mdi-eye
                  </v-icon>
                </template>
              </v-text-field>
              <v-card-subtitle>{{ auth.forgotPassword }}</v-card-subtitle>
              <v-btn
                class="mt-2 py-5"
                variant="flat"
                type="submit"
                block
                color="primary"
                :disabled="!formValid"
                :loading="loading"
                @click="submitLogin"
              >
                {{ auth.login }}
              </v-btn>
            </v-form>
            <v-card-subtitle class="mx-auto mt-auto text-center pt-7">
              {{ auth.allRightsReserved }} &copy; {{ general.companyName }}
            </v-card-subtitle>
          </v-card>
        </v-card>
        <v-card
          flat
          height="70vh"
          width="50%"
          class="bg-transparent"
          rounded="0"
        >
          <v-img
            class="h-100"
            cover
            src="https://images.unsplash.com/photo-1680584405372-defac8a5db62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80"
          ></v-img>
        </v-card>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup>
import { auth, general } from "@/locals/ar-KSA";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const emailRules = ref([
  (v) => !!v || "E-mail is required",
  (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
]);
const passwordRules = ref([
  (v) => !!v || "Password is required",
  (v) => v.length >= 8 || "Password must be at least 8 characters",
  (v) =>
    /[A-Z]/.test(v) || "Password must contain at least one uppercase letter",
  (v) => /[0-9]/.test(v) || "Password must contain at least one number",
  (v) =>
    /[^A-Za-z0-9]/.test(v) ||
    "Password must contain at least one special character",
]);

const formValid = computed(() => {
  return (
    emailRules.value.every((rule) => rule(email.value) === true) &&
    passwordRules.value.every((rule) => rule(password.value) === true)
  );
});
const loading = ref(false);
const submitLogin = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push({ name: "dashboard" });
  }, 2000);

  if (!loading) {
    localStorage.setItem("auth", "true");

    router.push("/");
  }
};
</script>

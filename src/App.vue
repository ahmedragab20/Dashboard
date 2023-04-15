<template>
  <router-view v-slot="{ Component }">
    <transition name="rout" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup>
import { isAuth } from "@/composables/useAuth";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const { loggedIn } = isAuth();

const router = useRouter();

onBeforeMount(() => {
  // if (loggedIn) {
  //   router.push({ name: "dashboard" });
  // } else {
  //   router.push({ name: "login" });
  // }
});
</script>
<style>
.rout-enter-from,
.rout-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.rout-enter-active,
.rout-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>

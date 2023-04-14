import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () => import("@/views/Dashboard/index.vue"),
      },
    ],
  },
  {
    path: "/dummy",
    component: () => import("@/layouts/Dummy/Blank.vue"),
    children: [
      {
        path: "/dummy/blank",
        name: "blank-dummy",
        component: () => import("@/views/Dummy/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

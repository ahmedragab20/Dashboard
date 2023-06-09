import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("@/views/Dashboard/index.vue"),
      },
      {
        path: "/credits",
        name: "credits",
        component: () => import("@/views/Credits/index.vue"),
      },
      {
        path: "/credits/standards",
        name: "standards",
        component: () => import("@/views/Standards/index.vue"),
      },
      {
        path: "/credits/questions",
        name: "questions",
        component: () => import("@/views/Questions/index.vue"),
      },
    ],
  },
  {
    path: "/blank",
    component: () => import("@/layouts/Dummy/Blank.vue"),
    children: [
      {
        path: "/dummy/blank",
        name: "blank-dummy",
        component: () => import("@/views/Dummy/index.vue"),
      },
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/views/auth/login"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/user",
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          path: "/user",
          component: () => import("@/views/User/index.vue"),
        },
        {
          path: "/article",
          component: () => import("@/views/Article/index.vue"),
        },
        {
          path: "/home",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "/notify",
          component: () => import("@/views/Notify/index.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login/index.vue"),
    },
  ],
});

export default router;

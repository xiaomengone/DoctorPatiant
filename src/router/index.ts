import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  //关闭右上角的圈
  showSpinner: false,
});

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
          meta: {
            title: "我的",
          },
        },
        {
          path: "/article",
          component: () => import("@/views/Article/index.vue"),
          meta: {
            title: "健康百科",
          },
        },
        {
          path: "/home",
          component: () => import("@/views/Home/index.vue"),
          meta: {
            title: "首页",
          },
        },
        {
          path: "/notify",
          component: () => import("@/views/Notify/index.vue"),
          meta: {
            title: "消息中心",
          },
        },
      ],
    },
    {
      path: "/login",
      component: () => import("@/views/Login/index.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      path: "/user/familyArchives",
      component: () => import("@/views/User/FamilyArchives.vue"),
      meta: {
        title: "家庭档案",
      },
    },
    {
      path: "/consult/fast",
      component: () => import("@/views/consult/ConsultFast.vue"),
      meta: {
        title: "极速问诊",
      },
    },
    {
      path: "/consult/dep",
      component: () => import("@/views/consult/ConsultDep.vue"),
      meta: {
        title: "选择科室",
      },
    },
    {
      path: "/consult/illness",
      component: () => import("@/views/consult/ConsultIllness.vue"),
      meta: {
        title: "图文问诊",
      },
    },
    {
      path: "/consult/consultPay",
      component: () => import("@/views/consult/ConsultPay.vue"),
      meta: {
        title: "预支付",
      },
    },
    {
      path: "/consult/room",
      component: () => import("@/views/Room/index.vue"),
      meta: {
        title: "问诊室",
      },
      // 如果加载失败，跳转到问诊记录界面
      beforeEnter(to) {
        if (to.query.payResult === "false") return "/user/consult";
      },
    },
    {
      path: "/user/consult",
      component: () => import("@/views/User/ConsultPage.vue"),
      meta: {
        title: "问诊记录",
      },
    },
    {
      path: "/user/consultDtail",
      component: () => import("@/views/User/consultDtail.vue"),
      meta: {
        title: "问诊详情",
      },
    },
  ],
});
//路由前置守卫控制权限
router.beforeEach((to, from) => {
  NProgress.start();
  const store = useUserStore();
  const whiteList = ["/login"];
  if (!store.user?.token && !whiteList.includes(to.path)) {
    return "/login";
  }
});
// 路由后置守卫
router.afterEach((to, from) => {
  document.title = `${to.meta.title || " "}`;
  NProgress.done();
});
export default router;

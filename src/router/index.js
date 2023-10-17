import { createRouter, createWebHashHistory } from "vue-router";
import BoletinView from "../views/BoletinView.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/",
    name: "main-layout",
    component: () =>
      import(/* webpackChunkName: "mainLayout" */ "../layout/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
      {
        path: "/boletin",
        name: "Boletin",
        component: BoletinView,
      },
      {
        path: "/pay-fee",
        name: "pay-fee",
        component: () =>
          import(/* webpackChunkName: "payFee" */ "../views/PayFeeView.vue"),
      },
      {
        path: "/pay-fee/:studentId",
        name: "pay-fee-student-id",
        component: () =>
          import(
            /* webpackChunkName: "payStudentFee" */ "../views/PayStudentFeeView.vue"
          ),
      },
      {
        path: "/",
        redirect: "home",
      },
      {
        path: "/:pathMatch(.*)*",
        redirect: "home",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

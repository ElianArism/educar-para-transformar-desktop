import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

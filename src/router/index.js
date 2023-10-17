import { createRouter, createWebHashHistory } from "vue-router";

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
        path: "/list-alumno",
        name: "list-alumno",
        component: () =>
          import(
            /* webpackChunkName: "ListAlumno" */ "../views/ListAlumnoView.vue"
          ),
      },
      {
        path: "/cuotas-impagas",
        name: "cuotas-impagas",
        component: () =>
          import(
            /* webpackChunkName: "cuotasImpagas" */ "../views/UnpaidFeesList.vue"
          ),
      },
      {
        path: "/notasAlumnos/:courseId/:alumnoId",
        name: "notasAlumnos-alumno-id",
        component: () =>
          import(
            /* webpackChunkName: "notasAlumno" */ "../views/NotasAlumnoView.vue"
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

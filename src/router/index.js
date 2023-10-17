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
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("x-token-ept")) {
        next({ path: "/home", replace: true });
      } else {
        next();
      }
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
      },
      {
        path: "/boletin",
        name: "Boletin",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "student" || role !== "parent") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        component: BoletinView,
      },
      {
        path: "/pay-fee",
        name: "pay-fee",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "personal" || role !== "authority") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        component: () =>
          import(/* webpackChunkName: "payFee" */ "../views/PayFeeView.vue"),
      },
      {
        path: "/perfil-user",
        name: "perfil-user",
        component: () =>
          import(/* webpackChunkName: "PerfilUse" */ "../views/PerfilView.vue"),
      },
      {
        path: "/pay-fee/:studentId",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "personal" || role !== "authority") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        name: "pay-fee-student-id",
        component: () =>
          import(
            /* webpackChunkName: "payStudentFee" */ "../views/PayStudentFeeView.vue"
          ),
      },
      {
        path: "/list-alumno",
        name: "list-alumno",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (
            role !== "personal" ||
            role !== "authority" ||
            role !== "professor"
          ) {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        component: () =>
          import(
            /* webpackChunkName: "ListAlumno" */ "../views/ListAlumnoView.vue"
          ),
      },
      {
        path: "/list-profesor",
        name: "list-profesor",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "personal" || role !== "authority") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        component: () =>
          import(
            /* webpackChunkName: "ListProfesor" */ "../views/ListProfesoresView.vue"
          ),
      },
      {
        path: "/list-parents",
        name: "list-parents",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "personal" || role !== "authority") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        component: () =>
          import(
            /* webpackChunkName: "ListProfesor" */ "../views/ListParentsView.vue"
          ),
      },
      {
        path: "/cuotas-impagas",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "personal" || role !== "authority") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
        name: "cuotas-impagas",
        component: () =>
          import(
            /* webpackChunkName: "cuotasImpagas" */ "../views/UnpaidFeesList.vue"
          ),
      },
      {
        path: "/notasAlumnos/:courseId/:alumnoId",
        name: "notasAlumnos-alumno-id",
        beforeEnter: (to, from, next) => {
          const role = localStorage.getItem("user-role");
          if (role !== "professor" || role !== "authority") {
            next({ path: "/home", replace: true });
          } else {
            next();
          }
        },
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

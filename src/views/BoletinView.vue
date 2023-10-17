<script setup>
/* eslint-disable */
import { CoursesService } from "@/services/courses.service"; //API
import { UserService } from "@/services/user.service";
import { onMounted, ref } from "vue";

const courseService = new CoursesService();
const userService = new UserService();
const courses = ref([]);
const studentNotas = ref({});
const userInfo = ref({});
let user_id = localStorage.getItem("user-id");
const user_role = localStorage.getItem("user-role");
const isParent = ref(false);

onMounted(async () => {
  let user = await userService.getByRoleAndId(user_role, user_id);

  if (user_role === "parent") {
    user_id = user.son;
    user = await userService.getByRoleAndId("student", user.son);
    isParent.value = true;
  }

  userInfo.value = user;

  const httpCourses = (await courseService.getCourses()).data.courses;

  courses.value = httpCourses.filter((c) => {
    const found = c.students.find((s) => s.studentInfo.id === user_id);
    if (found) {
      c.students = found;
      return c;
    }
  });

  const students = courses.value
    .flatMap((course) => course.students)
    .filter((s) => s.studentInfo.id === user_id);

  studentNotas.value = students;
});

const printPage = () => {
  window.print();
};
</script>

<template>
  <div class="container-fluid p-3">
    <div class="d-flex m-4 justify-content-center align-items-center">
      <img
        class="logo mx-2"
        src="../assets/logo.jpg"
        alt="logo"
        width="50"
        height="50"
      />
      <p class="m-0 p-0">
        <b>Boletin de: </b> {{ userInfo?.name }} {{ userInfo?.lastName }}
        &nbsp;
      </p>
      <br />
      <p class="m-0 p-0">Ciclo Lectivo 2023</p>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Curso</th>
          <th>Primer Trimestre</th>
          <th>Segundo Trimestre</th>
          <th>Tercer Trimestre</th>
          <th>Nota final</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(course, index) of courses">
          <td>{{ course.name }}</td>
          <td>
            {{ course.students.schoolGrades.firstTrimester }}
          </td>
          <td>
            {{ course.students.schoolGrades.secondTrimester }}
          </td>
          <td>
            {{ course.students.schoolGrades.thirdTrimester }}
          </td>
          <td>
            {{ course.students.schoolGrades.finalGrade }}
          </td>
        </tr>
      </tbody>
    </table>
    <button class="no-print btn btn-primary" @click="printPage">
      Imprimir
    </button>
  </div>
</template>

<style scoped="scss">
.logo {
  border-radius: 100%;
}
</style>

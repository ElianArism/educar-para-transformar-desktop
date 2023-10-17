<script setup>
/* eslint-disable */
import { ref, onMounted } from "vue";
import { CoursesService } from "@/services/courses.service"; //API

const courses = ref([]);
const courseService = new CoursesService();

const studentNotas = ref({});

const studentData = {
  firstName: "Alisha",
  lastName: "Lehmann",
  cicloLectivo: "2023",
};

onMounted(async () => {
  courses.value = (await courseService.getCourses()).data.courses;

  const user_id = localStorage.getItem("user-id");

  const students = courses.value.flatMap((course) => course.students);

  studentNotas.value = students.find((s) => s.studentInfo.id === user_id);
});

const imprimirBoletin = () => {};
</script>

<template>
  <div>
    <div class="header">
      <img class="logo" src="../assets/logo.jpg" alt="Logo" />
      <div>
        <p class="student-data">
          {{ studentData.firstName }} {{ studentData.lastName }}, Ciclo Lectivo:
          {{ studentData.cicloLectivo }}
        </p>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Trimestre/Materia</th>
          <th v-for="materia in courses">{{ materia.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>N 1</td>
          <td>
            {{ studentNotas.value?.schoolGrades.firstTrimester }}
          </td>
        </tr>
        <tr>
          <td>N 2</td>
          <td>
            {{ studentNotas.value?.schoolGrades.secondTrimester }}
          </td>
        </tr>
        <tr>
          <td>N 3</td>
          <td>
            {{ studentNotas.value?.schoolGrades.thirdTrimester }}
          </td>
        </tr>
        <tr>
          <td>Promedio</td>
          <td>
            {{ studentNotas.value?.schoolGrades.finalGrade }}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="imprimirBoletin">Imprimir</button>
  </div>
</template>

<style scoped="scss">
.header {
  display: flex;
  align-items: center;
}
.student-data {
  font-weight: bold;
  color: black;
  align-items: center;
}

.logo {
  margin-right: 50px;
  width: 90px;
}
</style>

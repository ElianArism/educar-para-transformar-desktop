<script setup>
/* eslint-disable */
import { ref } from "vue";
import { getCourses } from "@/services/courses.service"; //API

const courses = ref([]);

import { onMounted } from "vue";
onMounted(async () => {
  courses.value = await getCourses();
});

const getNotaMateria = (materia, trimestre) => {
  if (materia.students.length > 0) {
    const totalNotas = materia.students.reduce(
      (acc, student) => acc + student.schoolGrades[trimestre],
      0
    );
    return (totalNotas / materias.students.length).toFixed(2);
  }
};

const calcularPromedioMateria = (materia) => {
  const promedios = ["firstTrimester", "secondTrimester", "thirdTrimester"].map(
    (trimestre) => getNotaMateria(materia, trimestre)
  );
  const notasValidas = promedios.filter((nota) => nota !== "-");
  if (notasValidas.length > 0) {
    const totalNotas = notasValidas.reduce(
      (acc, nota) => acc + parseFloat(nota),
      0
    );
    return (totalNotas / notasValidas.length).toFixed(2);
  }
  return "-";
};

const imprimirBoletin = () => {};
</script>

<template>
  <div>
    <div class="header">
      <!-- Logo, Nombre, Apellido, Curso, Ciclo Lectivo -->
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
          <td v-for="materia in courses">
            {{ getNotaMateria(materia, "firstTrimester") }}
          </td>
        </tr>
        <tr>
          <td>N 2</td>
          <td v-for="materia in courses">
            {{ getNotaMateria(materia, "secondTrimester") }}
          </td>
        </tr>
        <tr>
          <td>N 3</td>
          <td v-for="materia in courses">
            {{ getNotaMateria(materia, "thirdTrimester") }}
          </td>
        </tr>
        <tr>
          <td>Promedio</td>
          <td v-for="materia in courses">
            {{ calcularPromedioMateria(materia) }}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="imprimirBoletin">Imprimir</button>
  </div>
</template>

<style scoped="scss"></style>

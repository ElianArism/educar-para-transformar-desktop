<script setup>
import { ProfessorService } from "@/services/professor.service";
import { ref } from "vue";
const servicioProfesores = new ProfessorService();
const profesores = ref([]);
const initProfesores = async () => {
  const profesoresServicio = await servicioProfesores.getProfessors();
  profesores.value = profesoresServicio;
  console.log(profesoresServicio);
};
initProfesores();
</script>
<template>
  <h2>Listado de Profesores</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Dni</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Fecha de Nacimiento</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="Profesor in profesores" :key="Profesor">
        <td>{{ Profesor.id }}</td>
        <td>{{ Profesor.name }}</td>
        <td>{{ Profesor.lastName }}</td>
        <td>{{ Profesor.birthDate }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
h2 {
  margin: 10px;
}
</style>

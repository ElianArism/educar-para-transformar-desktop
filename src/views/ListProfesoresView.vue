<script setup>
import { ProfessorService } from "@/services/professor.service";
import { onMounted, ref } from "vue";
const servicioProfesores = new ProfessorService();
const profesores = ref([]);
const profesoresBackup = ref([]);
const initCoursesParent = async () => {
  profesores.value = await servicioProfesores.getProfessors();

  profesoresBackup.value = profesores.value;
};

onMounted(async () => {
  await initCoursesParent();
});

const filterProfesorByName = (event) => {
  const value = event.target.value.trim();

  if (!value) {
    profesores.value = profesoresBackup.value;
    return;
  }

  profesores.value = profesoresBackup.value.filter((a) => {
    return `${a.name} ${a.lastName}`.toLowerCase().includes(value);
  });
};
</script>
<template>
  <section class="container-fluid">
    <h2>Listado de Profesores</h2>
    <div class="seleccion-cursos m-auto">
      <label class="form-label">Buscador</label>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar alumno por nombre"
        @input="filterProfesorByName"
      />
    </div>
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
  </section>
</template>

<style scoped>
h2 {
  margin: 10px;
}
.form-control {
  margin-bottom: 15px;
}
</style>

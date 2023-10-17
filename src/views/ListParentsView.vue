<script setup>
import { UserService } from "@/services/user.service";

import { onMounted, ref } from "vue";

const parentsBackup = ref([]);
const servicioParents = new UserService();
const padres = ref([]);
const initCoursesParent = async () => {
  padres.value = await servicioParents.getParents();

  parentsBackup.value = padres.value;
};

onMounted(async () => {
  await initCoursesParent();
});

const filterParentByName = (event) => {
  const value = event.target.value.trim();

  if (!value) {
    padres.value = parentsBackup.value;
    return;
  }

  padres.value = parentsBackup.value.filter((a) => {
    return `${a.name} ${a.lastName}`.toLowerCase().includes(value);
  });
};
</script>

<template>
  <section class="container-fluid">
    <h2>Listado de padres</h2>
    <div class="seleccion-cursos m-auto">
      <label class="form-label">Buscador</label>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar alumno por nombre"
        @input="filterParentByName"
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
        <tr v-for="Padre in padres" :key="Padre">
          <td>{{ Padre.id }}</td>
          <td>{{ Padre.name }}</td>
          <td>{{ Padre.lastName }}</td>
          <td>{{ Padre.birthDate }}</td>
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

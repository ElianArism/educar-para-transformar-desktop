<script setup>
import { UserService } from "@/services/user.service";
import { ref } from "vue";
const servicioParents = new UserService();
const padres = ref([]);
const initParents = async () => {
  const parentsServicio = await servicioParents.getParents();
  padres.value = parentsServicio;
  console.log(parentsServicio);
};
initParents();
</script>

<template>
  <h2>Listado de padres</h2>
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
</template>

<style scoped>
h2 {
  margin: 10px;
}
</style>

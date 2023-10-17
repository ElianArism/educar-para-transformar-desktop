<script setup>
import { reactive } from "vue";
let padres = reactive([
  {
    id: "123",
    name: "Diego",
    lastName: "barrios",
    birthDate: "123123",
  },
]);
</script>

<template>
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

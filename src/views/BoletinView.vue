<script setup>
/* eslint-disable */
import { ref, computed } from "vue";

const materias = ["Materia1","Materia2","Materia3","Materia4","Materia5","Materia6","Materia7","Materia8","Materia9"]

const getRandomNota = () => {
  // Genera un número aleatorio entre 1 y 10
  const randomNota = Math.floor(Math.random() * 10) + 1;

  // Aumenta la probabilidad de notas mayores a 5
  if (randomNota <= 5) {
    return randomNota + 5; // Las notas menores a 5 se aumentan en 5
  } else {
    return randomNota;
  }
}


const notas = ref([...Array(materias.length)].map(() => getRandomNota()))

const calcularPromedioMateria = (index) => {
  const notasMateria = notas.value.slice(index, index + 3); // Notas para el trimestre 1, 2 y 3 de la materia
  return (notasMateria.reduce((acc, nota) => acc + nota, 0) / notasMateria.length).toFixed(2);
}

const imprimirBoletin = () => {
  
}
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
            <th v-for="materia in materias">{{ materia }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>N 1</td>
            <td v-for="materia in materias">{{ getRandomNota() }}</td>
          </tr>
          <tr>
            <td>N 2</td>
            <td v-for="materia in materias">{{ getRandomNota() }}</td>
          </tr>
          <tr>
            <td>N 3</td>
            <td v-for="materia in materias">{{ getRandomNota() }}</td>
          </tr>
          <tr>
            <td>Promedio</td>
            <td v-for="(materia, index) in materias">{{ calcularPromedioMateria(index) }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="imprimirBoletin">Imprimir</button>
    </div>
</template>

<style scoped="scss">
</style>
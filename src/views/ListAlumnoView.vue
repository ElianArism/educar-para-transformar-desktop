<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { StudentService } from "../services/student.service";
let alumnos = ref([]);
const router = useRouter();
const servicioStudent = new StudentService();

const initStudentList = async () => {
  const { data } = await servicioStudent.getStudents();
  alumnos.value = data;
};
initStudentList();
</script>
<template>
  <section class="cuerpo">
    <div class="seleccion-cursos">
      <h2>Buscador</h2>
      <input
        type="text"
        class="form-control"
        placeholder="Buscar  Alumno"
        @input="filterStudentsByDNI"
      />
      <h2>Tablas</h2>
      <p>Filtro por curso</p>
      <select class="form-select" aria-label="Default select example">
        <option selected>Elegir curso</option>
        <option value="1">curso 1</option>
        <option value="2">curso 2</option>
        <option value="3">curso 3</option>
      </select>
    </div>
    <div class="container-table" id="app">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota Final</th>
            <th>Agregar Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Alumno in alumnos" :key="Alumno">
            <td>
              {{ Alumno.id }}
            </td>
            <td>
              {{ Alumno.name }}
            </td>
            <td>
              {{ Alumno.lastName }}
            </td>
            <td>
              {{ Alumno.birthDate }}
            </td>
            <td>
              {{ Alumno.role }}
            </td>
            <td>
              {{ Alumno.role }}
            </td>
            <td>
              {{ Alumno.role }}
            </td>
            <td>
              {{ Alumno.role }}
            </td>
            <td>
              <button
                type="button"
                class="btn btn-info"
                @click="router.push('/notasAlumnos/' + Alumno.id)"
              >
                Agregar Nota
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.cuerpo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(#ffff, rgb(155, 154, 154));
}
.seleccion-cursos {
  margin-right: 50px;
}
.seleccion-cursos h2 {
  text-transform: uppercase;
  color: #91bdff;
  border-bottom: solid 1px rgb(155, 155, 155, 0.4);
}
.seleccion-cursos p {
  text-transform: uppercase;
  color: #91bdff;
}

.container-table {
  border: solid 1px rgb(155, 155, 155, 0.4);
}
table {
  color: black;
  font-size: 15px;
  table-layout: fixed;
  border-collapse: collapse;
}
thead {
  background: #91bdff;
}
.logo {
  max-height: 40px;
  border-radius: 50%;
  float: left;
  margin-top: 12px;
  margin-left: 5px;
  margin-right: 5px;
}

th {
  padding: 20px 15px;
  font-weight: 700;
  text-transform: uppercase;
}
td {
  padding: 15px;
  border-bottom: solid 1px rgb(155, 155, 155, 0.4);
  border-left: solid 1px rgb(155, 155, 155, 0.1);
}

tbody tr:hover {
  transform: scale(1.001);
  transition: 0.2s;
  -webkit-box-shadow: 1px 10px 22px -12px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 1px 10px 22px -12px rgba(0, 0, 0, 0.63);
  box-shadow: 1px 10px 22px -12px rgba(0, 0, 0, 0.63);
}
.btn-info {
  background-color: #91bdff;
  border-color: silver;
  &:hover {
    background-color: #63a2ff;
    transition: 0.2s;
    // Holasg
  }
}
.form-control {
  margin-bottom: 20px;
}
</style>

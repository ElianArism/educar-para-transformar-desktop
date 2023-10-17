<script setup>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { StudentService } from "../services/student.service";
const alumnos = ref([]);
const { courseId, alumnoId } = useRoute().params;
console.log(alumnoId, courseId);
const alumno = reactive({
  name: "Diego",
  lastName: "barrios",
  dni: "123123",
  nota1: "",
  nota2: "",
  nota3: "",
  recu1: "",
  recu2: "",
  recu3: "",
  notaF: "",
});
const notas = () => {
  console.log(alumno);
};
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
      <h2>Cargar notas</h2>
      <p>alumno {{ alumno.name }} {{ alumno.lastName }}</p>
    </div>
    <div class="container-table" id="app">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Recu 1</th>
            <th>Recu 2</th>
            <th>Recu 3</th>
            <th>Nota Final</th>
            <th>Cargar notas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {{ alumno.dni }}
            </td>
            <td>
              {{ alumno.name }}
            </td>
            <td>
              {{ alumno.lastName }}
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.nota1"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.nota2"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.nota3"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.recu1"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.recu2"
              />
            </td>
            <td>
              <input
                @input="
                  () => {
                    if (value > 0 || value < 11) {
                      value = 6;
                    }
                  }
                "
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.recu3"
              />
            </td>
            <td>Promedio</td>
            <td>
              <button type="submit" class="btn btn-info" @click="notas">
                Cargar Notas
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
  color: #b9aaff;
  border-bottom: solid 1px rgb(155, 155, 155, 0.4);
}
.seleccion-cursos p {
  text-transform: uppercase;
  color: #b9aaff;
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
  background: #b9aaff;
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
.Notas {
  max-width: 40px;
}
.btn-info {
  background-color: #b9aaff;
  border-color: silver;
  &:hover {
    background-color: #a491fa;
    transition: 0.2s;
    // Holasg
  }
}
.form-control {
  margin-bottom: 20px;
}
</style>

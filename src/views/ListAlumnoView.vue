<script setup>
import { ProfessorService } from "@/services/professor.service";
import { ref } from "vue";

const alumnos = ref([]);
const courses = ref([]);
const professorId = localStorage.getItem("user-id");
const professorService = new ProfessorService();

const initStudentList = async () => {
  courses.value = await professorService.getCoursesByProfessorId(professorId);
  alumnos.value = await professorService.getStudentsByProfessorId(professorId);

  console.log(courses.value, alumnos.value);
};
initStudentList();
</script>
<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col p-4">
        <h4><b>Listado de alumnos</b></h4>
      </div>
    </div>
    <div class="row py-5 px-3">
      <div class="col-3">
        <div class="seleccion-cursos w-75 m-auto">
          <h4>Buscador</h4>
          <input
            type="text"
            class="form-control"
            placeholder="Buscar  Alumno"
            @input="filterStudentsByDNI"
          />
          <h4>Tablas</h4>
          <p>Filtro por curso</p>
          <select class="form-select" aria-label="Default select example">
            <option selected>Elegir curso</option>
            <option value="1">curso 1</option>
            <option value="2">curso 2</option>
            <option value="3">curso 3</option>
          </select>
        </div>
      </div>
      <div class="col">
        <table class="table">
          <thead>
            <th class="p-2">Id</th>
            <th class="p-2">Nombre</th>
            <th class="p-2">Apellido</th>
            <th class="p-2">Fecha de Nacimiento</th>
            <th class="p-2">Nota 1</th>
            <th class="p-2">Nota 2</th>
            <th class="p-2">Nota 3</th>
            <th class="p-2">Nota Final</th>
            <th class="p-2">Agregar Nota</th>
          </thead>
          <tbody>
            <tr v-for="Alumno in alumnos" :key="Alumno">
              <td>
                {{ Alumno.studentInfo.id }}
              </td>
              <td>
                {{ Alumno.studentInfo.name }}
              </td>
              <td>
                {{ Alumno.studentInfo.lastName }}
              </td>
              <td>
                {{ Alumno.studentInfo.birthDate }}
              </td>
              <td>
                {{ Alumno.studentInfo.role }}
              </td>
              <td>
                {{ Alumno.studentInfo.role }}
              </td>
              <td>
                {{ Alumno.studentInfo.role }}
              </td>
              <td>
                {{ Alumno.studentInfo.role }}
              </td>
              <td>
                <RouterLink to="/notasAlumnos/12"
                  ><button type="button" class="btn btn-info">
                    Agregar Nota
                  </button></RouterLink
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.seleccion-cursos {
  & h2,
  & p {
    text-transform: uppercase;
  }
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
  }
}
.form-control {
  margin-bottom: 20px;
}
</style>

<script setup>
import { ProfessorService } from "@/services/professor.service";
import uniqBy from "lodash.uniqby";
import { onMounted, ref } from "vue";

const alumnos = ref([]);
const alumnosBckp = ref([]);
const courses = ref([]);
const coursesBckp = ref([]);
const professorId = localStorage.getItem("user-id");
const professorService = new ProfessorService();

const initCoursesAndStudents = async () => {
  courses.value = await professorService.getCoursesByProfessorId(professorId);
  alumnos.value = await professorService.getStudentsByProfessorId(professorId);
  coursesBckp.value = courses.value;
  alumnosBckp.value = alumnos.value;
};

onMounted(async () => {
  await initCoursesAndStudents();
});

const filterStudentsBySelectOption = (event) => {
  const filter = event.target.value;
  courses.value = coursesBckp.value;

  if (filter === "todos") {
    alumnos.value = alumnosBckp.value;
    return;
  }

  const filteredCourses = courses.value.filter(
    (course) => course.name === filter
  );
  const students = uniqBy(
    filteredCourses.flatMap((c) => c.students),
    "studentInfo.id"
  );
  alumnos.value = students;
};

const filterStudentByName = (event) => {
  const value = event.target.value.trim();

  if (!value) {
    alumnos.value = alumnosBckp.value;
    return;
  }

  alumnos.value = alumnosBckp.value.filter((a) => {
    return `${a.studentInfo.name} ${a.studentInfo.lastName}`
      .toLowerCase()
      .includes(value.toLowerCase());
  });
};
</script>
<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col p-4">
        <h4><b>Listado de alumnos</b></h4>
      </div>
    </div>
    <div class="row py-5">
      <div class="col-3">
        <div class="seleccion-cursos m-auto">
          <label class="form-label">Buscador</label>
          <input
            type="text"
            class="form-control"
            placeholder="Buscar alumno por nombre"
            @input="filterStudentByName"
          />
          <label class="form-label">Filtrar por cursos en los que enseña</label>
          <select
            @change="filterStudentsBySelectOption"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="todos" selected>Todos los cursos</option>
            <option
              :key="studentIdx"
              :value="item.name"
              v-for="(item, studentIdx) of courses"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="col">
        <table class="table">
          <thead>
            <th class="p-3">Id</th>
            <th class="p-3">Nombre</th>
            <th class="p-3">Apellido</th>
            <th class="p-3">Fecha de Nacimiento</th>
            <th class="p-3">Nota 1</th>
            <th class="p-3">Nota 2</th>
            <th class="p-3">Nota 3</th>
            <th class="p-3">Nota Final</th>
            <th class="p-3">Agregar Nota</th>
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
                {{ Alumno.schoolGrades.firstTrimester }}
              </td>
              <td>
                {{ Alumno.schoolGrades.secondTrimester }}
              </td>
              <td>
                {{ Alumno.schoolGrades.thirdTrimester }}
              </td>
              <td>
                {{ Alumno.schoolGrades.finalGrade }}
              </td>
              <td>
                <RouterLink
                  :to="`/notasAlumnos/${Alumno.courseId}/${Alumno.studentInfo.id}`"
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

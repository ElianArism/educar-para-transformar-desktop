<script setup>
import Swal from "sweetalert2";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { StudentService } from "../services/student.service";

const { courseId, alumnoId } = useRoute().params;
const router = useRouter();
const studentService = new StudentService();

const alumno = reactive({
  name: "",
  lastName: "",
  dni: "",
  firstTrimester: 0,
  secondTrimester: 0,
  thirdTrimester: 0,
  finalGrade: 0,
});

const updateStudentGrades = async () => {
  if (alumno.firstTrimester > 10 || alumno.firstTrimester < 1) {
    alumno.firstTrimester = 6;
    return;
  } else if (alumno.secondTrimester > 10 || alumno.secondTrimester < 1) {
    alumno.secondTrimester = 6;
    return;
  } else if (alumno.thirdTrimester > 10 || alumno.thirdTrimester < 1) {
    alumno.thirdTrimester = 6;
    return;
  }

  alumno.finalGrade = Math.round(
    (alumno.firstTrimester + alumno.secondTrimester + alumno.thirdTrimester) / 3
  );

  await studentService.updateStudentGrades(alumnoId, courseId, {
    firstTrimester: alumno.firstTrimester,
    secondTrimester: alumno.secondTrimester,
    thirdTrimester: alumno.thirdTrimester,
    finalGrade: alumno.finalGrade,
  });

  Swal.fire({
    title: "Nota actualizada",
    icon: "success",
    html: "Nota actualizada correctamente",
    didClose: () => {
      router.push("/list-alumno");
      return;
    },
  });
};

const getStudentInfo = async () => {
  const student = await studentService.getStudentById(alumnoId);
  alumno.dni = student.studentInfo?.id;
  alumno.name = student.studentInfo?.name;
  alumno.lastName = student.studentInfo?.lastName;
  alumno.firstTrimester = student?.schoolGrades?.firstTrimester;
  alumno.secondTrimester = student?.schoolGrades?.secondTrimester;
  alumno.thirdTrimester = student?.schoolGrades?.thirdTrimester;
  alumno.finalGrade = student?.schoolGrades?.finalGrade;
};

onMounted(async () => {
  await getStudentInfo();
});
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
                v-model="alumno.firstTrimester"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.secondTrimester"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                v-model="alumno.thirdTrimester"
              />
            </td>
            <td>
              <input
                type="number"
                class="Notas"
                min="1"
                max="10"
                readonly
                v-model="alumno.finalGrade"
              />
            </td>
            <td>
              <button
                type="submit"
                class="btn btn-info"
                @click="updateStudentGrades"
              >
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

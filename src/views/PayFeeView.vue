<script setup>
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { CoursesService } from "../services/courses.service";
import { StudentService } from "../services/student.service";

const router = useRouter();
const coursesService = new CoursesService();
const studentsService = new StudentService();

const courses = ref([]);
const students = ref([]);
const studentsBackup = ref([]);

const getCourses = async () => {
  const { data } = await coursesService.getCourses();
  courses.value = data.courses;
};

const initStudentList = async () => {
  const { data } = await studentsService.getStudents();
  students.value = data;
  studentsBackup.value = data;
};

onMounted(() => {
  initStudentList();
  getCourses();
});

const filterStudentsBySelectOption = (event) => {
  const filter = event.target.value;

  if (filter === "todos") {
    students.value = studentsBackup.value;
    return;
  }

  const [course] = courses.value.filter(({ name }) => filter === name);
  students.value = course.students;
};

const filterStudentsByDNI = (event) => {
  const dni = event.target.value?.trim();

  if (!dni) return;

  const filteredStudents = studentsBackup.value.filter((student) =>
    student.id.includes(dni)
  );

  students.value = filteredStudents;
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div
          class="mb-5 d-flex flex-column align-items-center justify-content-center p-1"
        >
          <h5 class="m-0">Pagar cuota</h5>
          <hr class="m-0 w-25" />
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12">
        <h5>Filtros</h5>
        <div class="d-flex">
          <select
            @change="filterStudentsBySelectOption"
            class="form-select"
            v-if="courses.length > 0"
          >
            <option value="todos">Todos los estudiantes</option>
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
        <div class="w-50 d-flex my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar por DNI"
            @input="filterStudentsByDNI"
          />
        </div>
      </div>
    </div>

    <h5>Alumnos</h5>
    <div class="accordion-cont border rounded mx-auto p-3">
      <div class="accordion" id="accordionStudents" v-if="students.length > 0">
        <div
          class="accordion-item"
          :key="'student-' + studentIdx"
          v-for="(student, studentIdx) in students"
        >
          <!--Accordion header   -->
          <h2 class="accordion-header" id="heading1">
            <button
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + studentIdx"
              aria-labelledby="studentsList"
              data-bs-parent="#accordionStudents"
              class="accordion-button collapsed"
              aria-expanded="false"
              :aria-controls="'collapse' + studentIdx"
            >
              <span
                class="d-flex justify-content-between w-100"
                style="padding-right: 10px"
              >
                <span> {{ student.name }} {{ student.lastName }} </span>
                <span> DNI: {{ student.id }} </span>
              </span>
            </button>
          </h2>
          <!-- Accordion Body -->
          <div
            :id="'collapse' + studentIdx"
            aria-labelledby="heading1"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <div class="w-100 d-flex">
                <button
                  class="btn w-75 m-auto mb-3 btn-info"
                  style="color: white"
                  @click="router.push('/pay-fee/' + student.id)"
                >
                  Registrar pago
                </button>
              </div>
              <ul class="list-group" v-if="student.fees.length > 0">
                <div
                  :key="'fee-' + feeIdx"
                  v-for="(fee, feeIdx) in student.fees"
                  class="list-group-item list-group-item-info d-flex align-items-center"
                >
                  <span class="badge bg-success"> Pagado </span>
                  &nbsp;
                  <span>
                    {{
                      format(
                        new Date(fee.paymentDate),
                        "'Cuota pagada el dia' dd 'de' LLLL 'del' yyyy",
                        {
                          locale: es,
                        }
                      )
                    }}
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="alert alert-danger w-100" v-if="students.length <= 0">
        <span>No se encontraron estudiantes</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.accordion-cont {
  width: 95%;
}
</style>

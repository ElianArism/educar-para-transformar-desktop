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

const getCourses = async () => {
  const { data } = await coursesService.getCourses();
  courses.value = data.courses;
};

const initStudentList = async () => {
  const { data } = await studentsService.getStudents();
  students.value = data;
};

onMounted(() => {
  initStudentList();
  getCourses();
});
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
          <select class="form-select" v-if="courses.length > 0">
            <option value="-">Seleccione una opcion</option>
            <option
              :key="index"
              :value="item.name"
              v-for="(item, index) of courses"
            >
              {{ item.name }}
            </option>
          </select>
          <button class="mx-2 btn btn-primary">Buscar</button>
        </div>
      </div>
      <div class="col">
        <div class="w-50 d-flex my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar por DNI"
          />
          <button class="mx-2 btn btn-primary">Buscar</button>
        </div>
      </div>
    </div>

    <h5>Alumnos</h5>
    <div class="accordion-cont border rounded mx-auto p-3">
      <div class="accordion" id="accordionStudents">
        <!--Accordion header   -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading1">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-labelledby="studentsList"
              data-bs-parent="#accordionStudents"
              class="accordion-button collapsed"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              <span
                class="d-flex justify-content-between w-100"
                style="padding-right: 10px"
              >
                <span> John Doe </span>
                <span> DNI: 266762 </span>
              </span>
            </button>
          </h2>
          <!-- Accordion Body -->
          <div
            id="collapse1"
            aria-labelledby="heading1"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body">
              <div class="w-100 d-flex">
                <button
                  class="btn w-75 m-auto mb-3 btn-info"
                  style="color: white"
                  @click="router.push('/pay-fee/:studentId')"
                >
                  Registrar pago
                </button>
              </div>
              <ul class="list-group">
                <div
                  class="list-group-item list-group-item-info d-flex align-items-center"
                >
                  <span class="badge bg-success"> Pagado </span>
                  &nbsp;
                  <span>
                    {{
                      format(
                        new Date(),
                        "'Cuota pagada el dia' eeee mm 'de' LLLL 'del' yyyy",
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
    </div>
  </div>
</template>

<style lang="scss">
.accordion-cont {
  width: 95%;
}
</style>

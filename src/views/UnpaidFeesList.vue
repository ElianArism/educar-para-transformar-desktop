<script setup>
import { useStudentFees } from "@/hooks/useStudentFees";
import { countUnpaidFees } from "../utils/count-unpaid-fees";

const {
  students,
  studentsBackup,
  courses,
  coursesBackup,
  filterStudentsByCourseName,
} = useStudentFees();

const filterCoursesByYear = (event) => {
  const year = event.target.value;
  courses.value = coursesBackup.value;

  if (year == -1) {
    students.value = studentsBackup.value;
    return;
  }

  courses.value = courses.value.filter((course) => year === course.year);
  students.value = courses.value.flatMap((course) => course.students);
};

const filterStudentsByCourse = (event) => {
  const filter = event.target.value;

  if (filter == -1) {
    students.value = courses.value.flatMap((course) => course.students);
    return;
  }

  students.value = filterStudentsByCourseName(filter);
};
</script>

<template>
  <section class="container-fluid">
    <article>
      <div class="w-100 p-2">
        <div class="mb-3">
          <label class="form-label"> Filtrar por año </label>
          <select
            @change="filterCoursesByYear"
            class="form-select"
            name="course-year"
          >
            <option :value="-1">Todos</option>
            <option
              :value="course.year"
              :key="index"
              v-for="(course, index) of coursesBackup"
            >
              {{ course.year }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label"> Filtrar por materia </label>
          <select
            @change="filterStudentsByCourse"
            class="form-select"
            name="course-name"
          >
            <option :value="-1">Todas</option>
            <option
              :key="`${index}+${course.name}`"
              v-for="(course, index) of courses"
            >
              {{ course.name }}
            </option>
          </select>
        </div>
      </div>
    </article>

    <table class="table table-striped">
      <thead>
        <th>
          <img
            src="../assets/logo.jpg"
            alt="Logo"
            class="img-fluid"
            width="50"
            height="50"
          />
        </th>
        <th>DNI</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cant. cuotas impagas</th>
      </thead>
      <tbody>
        <tr :key="index" v-for="(student, index) of students">
          <td>{{ index }}</td>
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.lastName }}</td>
          <td>
            <span
              :class="
                countUnpaidFees(student) > 0
                  ? 'badge bg-danger text-white'
                  : 'badge bg-success text-white'
              "
            >
              {{ countUnpaidFees(student) }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style></style>

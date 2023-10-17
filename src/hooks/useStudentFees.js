import { CoursesService } from "@/services/courses.service";
import uniqBy from "lodash.uniqby";
import { onMounted, ref } from "vue";

export const useStudentFees = () => {
  const coursesService = new CoursesService();
  const yearsAvailable = ref(["1", "2", "3", "4", "5"]);
  const courses = ref([]);
  const coursesBackup = ref([]);
  const students = ref([]);
  const studentsBackup = ref([]);

  const getCourses = async () => {
    const { data } = await coursesService.getCourses();
    const mappedCourses = data.courses.map((c) => {
      c.students = c.students.map((s) => s.studentInfo);
      return c;
    });
    coursesBackup.value = mappedCourses;
    courses.value = mappedCourses;
  };

  const initStudentList = async () => {
    const { data } = await coursesService.getCourses();
    const mappedCourses = data.courses.map((c) => {
      c.students = c.students.map((s) => s.studentInfo);
      return c;
    });

    const studentsByCourse = uniqBy(
      mappedCourses.flatMap((course) => course.students),
      "id"
    );

    students.value = studentsByCourse;
    studentsBackup.value = students.value;
  };

  onMounted(() => {
    initStudentList();
    getCourses();
  });

  const filterStudentsBySelectOption = (event) => {
    const filter = event.target.value;

    if (filter === "todos") {
      courses.value = coursesBackup.value;
      students.value = studentsBackup.value;
      return;
    }

    students.value = filterStudentsByCourseName(filter);
  };

  const filterStudentsByCourseName = (filter) => {
    const [course] = courses.value.filter(({ name }) => filter === name);
    return course.students;
  };

  return {
    filterStudentsBySelectOption,
    filterStudentsByCourseName,
    yearsAvailable,
    courses,
    coursesBackup,
    students,
    studentsBackup,
  };
};

import { BaseService } from "./base.service";

export class ProfessorService extends BaseService {
  constructor() {
    super();
  }

  async getProfessors() {
    try {
      const response = await fetch(`${this._url}/users/all/professor`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getCoursesByProfessorId(professorId) {
    try {
      const response = await fetch(`${this._url}/courses`);
      const { data } = await response.json();
      const filteredCourses = data.courses.filter(
        (course) => course.professor.id === professorId
      );
      return filteredCourses;
    } catch (error) {
      console.log(error);
    }
  }

  async getStudentsByProfessorId(professorId) {
    try {
      const response = await fetch(`${this._url}/courses`);
      const { data } = await response.json();
      const filteredCourses = data.courses.filter(
        (course) => course.professor.id === professorId
      );
      const students = filteredCourses.flatMap((course) => course.students);
      return students;
    } catch (error) {
      console.log(error);
    }
  }
}

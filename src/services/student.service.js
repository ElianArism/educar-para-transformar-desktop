import { BaseService } from "./base.service";

export class StudentService extends BaseService {
  constructor() {
    super();
  }

  async getStudents() {
    try {
      const response = await fetch(`${this._url}/courses`);
      const { data } = await response.json();
      return data.courses.flatMap((course) => course.students);
    } catch (error) {
      console.log(error);
    }
  }

  async getStudentById(studentId) {
    try {
      const response = await fetch(`${this._url}/courses`);
      const { data } = await response.json();
      const students = data.courses.flatMap((course) => course.students);
      const student = students.filter(
        (student) => student.studentInfo.id === studentId
      )[0];
      return student;
    } catch (error) {
      console.log(error);
    }
  }

  async payStudentFee(studentId, fee) {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const response = await fetch(`${this._url}/users/student/fees`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          studentId,
          fees: [
            {
              expireDate: fee.paymentDate,
              value: fee.value,
              paymentDate: fee.paymentDate,
              isPaid: true,
            },
          ],
        }),
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async updateStudentGrades(studentId, courseId, notes) {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const response = await fetch(
        `${this._url}/courses/${courseId}/${studentId}`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify(notes),
        }
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

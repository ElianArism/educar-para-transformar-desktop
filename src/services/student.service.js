import { BaseService } from "./base.service";

export class StudentService extends BaseService {
  constructor() {
    super();
  }

  async getStudents() {
    try {
      const response = await fetch(`${this._localUrl}/users/all/student`);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async payStudentFee(studentId, fee) {
    try {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      const response = await fetch(`${this._localUrl}/users/student/fees`, {
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
}

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
}

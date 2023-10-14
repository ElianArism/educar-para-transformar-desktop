import { BaseService } from "./base.service";

export class CoursesService extends BaseService {
  constructor() {
    super();
  }
  async getCourses() {
    try {
      const response = await fetch(`${this._url}/courses`);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

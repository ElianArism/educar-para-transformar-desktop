import { BaseService } from "./base.service";

export class UserService extends BaseService {
  constructor() {
    super();
  }

  async getParents() {
    try {
      const response = await fetch(`${this._url}/users/all/parent`);
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

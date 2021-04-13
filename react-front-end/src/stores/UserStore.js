import { extendObservable } from "mobx";

class UserStore {
  constructor() {
    extendObservable(this, {
      loading: true,
      inLoggedIn: false,
      username: "",
    });
  }
}

export default new UserStore();

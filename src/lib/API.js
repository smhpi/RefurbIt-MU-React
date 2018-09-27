import { get } from "jquery";

let API = {
  fetchLink() {
    get("./links.json").done(resp => {
      return resp;
    });
  }
};

export default API;

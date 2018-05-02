import request from "request";

export default {
  getUsers: function () {
    return request.get("/api/User");
  }
}; 
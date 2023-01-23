import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "filters/v1";
class UserService {
  search_user(data, id) {
    return Api.get(END_POINT + "/UserSearchByname?/" + id, data, {
      headers: authHeader(),
    });
  }

  search_global(data) {
    return Api.get(END_POINT + "/search-global", data, {
      headers: authHeader(),
    });
  }
}
export default new UserService();

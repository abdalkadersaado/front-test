import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "/friendship/v1";

class FriendsService {
  Check_friendship_status(id) {
    return Api.get(END_POINT + "/check_relationship_status/" + id, {
      headers: authHeader(),
    });
  }

  Add_friend(id) {
    return Api.get(END_POINT + "/add_friend/" + id, {
      headers: authHeader(),
    });
  }

  Accept_friend(id) {
    return Api.get(END_POINT + "/accept_friend/" + id, {
      headers: authHeader(),
    });
  }
}

export default new FriendsService();

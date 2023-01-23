import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "/friendship/v1";

class FriendshipService {
  all_friends() {
    return Api.get(END_POINT + "/friends", { headers: authHeader() });
  }

  Requests_Waiting() {
    return Api.get(END_POINT + "/waiting", { headers: authHeader() });
  }

  // loading other waiting requests from next page
  LoadMore_waiting(nextPage) {
    return Api.get(`${END_POINT}/waiting?page=${nextPage}`, {
      headers: authHeader(),
    });
  }

  Requests_Pending() {
    return Api.get(END_POINT + "/pending", { headers: authHeader() });
  }

  // loading other pending requests from next page
  LoadMore_pending(nextPage) {
    return Api.get(`${END_POINT}/pending?page=${nextPage}`, {
      headers: authHeader(),
    });
  }

  // Accept Friend
  Accept(id) {
    return Api.get(`${END_POINT}/accept_friend/${id}`, {
      headers: authHeader(),
    });
  }

  // Add Friend
  Add_Friend(id) {
    return Api.get(END_POINT + "/add_friend/" + id, { headers: authHeader() });
  }

  // Remove request Pending and Waiting
  Remove_friend_request(id) {
    return Api.delete(END_POINT + "/destroy/" + id, { headers: authHeader() });
  }

  // delete friend
  Delete_friend(id) {
    return Api.delete(END_POINT + "/delete-friend/" + id, {
      headers: authHeader(),
    });
  }
}

export default new FriendshipService();

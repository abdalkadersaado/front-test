import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "/users/v1";

class StudiesService {
  Get_my_studies() {
    return Api.get(END_POINT + "/ALLStudies", { headers: authHeader() });
  }

  Delete_study(id) {
    return Api.delete(END_POINT + "/destroyStudy/" + id, {
      headers: authHeader(),
    });
  }

  Store_study(data) {
    return Api.post(END_POINT + "/storeStudy", data, { headers: authHeader() });
  }
  Update_study(id, data) {
    return Api.post(END_POINT + "/updateStudy/" + id, data, {
      headers: authHeader(),
    });
  }
}

export default new StudiesService();

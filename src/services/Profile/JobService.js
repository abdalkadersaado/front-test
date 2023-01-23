import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "/users/v1";

class JobService {
  Get_my_jobs() {
    return Api.get(END_POINT + "/ALLJob", { headers: authHeader() })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error("api call failed", error);
      });
  }

  Delete_job(id) {
    return Api.delete(END_POINT + "/destroyJob/" + id, {
      headers: authHeader(),
    });
  }

  Store_job(data) {
    return Api.post(END_POINT + "/storeJob", data, { headers: authHeader() });
  }

  Update_job(id, data) {
    return Api.post(END_POINT + "/updateJob/" + id, data, {
      headers: authHeader(),
    });
  }
}

export default new JobService();

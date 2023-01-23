import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "/posts/v1";
const END_POINT_USER = "/users/v1";

class ProfileService {

  // Update Cover Image
  update_cover_image(data){
    return Api.post(END_POINT_USER + "/storeOrupdateCover", data, {
      headers: authHeader(),
    });
  }

  // Update Profile Image
  update_profile_image(data){
    return Api.post(END_POINT_USER + "/storeOrupdateProfile", data, {
      headers: authHeader(),
    });
  }


  Get_my_post() {
    return Api.get(END_POINT + "/myposts", { headers: authHeader() });
  }
  // update profile's info as ( firstName - lastName - MiddleName )
  update_profile(data) {
    return Api.post(END_POINT_USER + "/editProfile", data, {
      headers: authHeader(),
    });
  }
  // static details
  Get_profile_public_details() {
    return Api.get(END_POINT_USER + "/profile", { headers: authHeader() });
  }
  // store static details
  Store_details(data) {
    return Api.post(END_POINT_USER + "/storeDetail", data, {
      headers: authHeader(),
    });
  }
  // update static details
  Update_details(data) {
    return Api.post(END_POINT_USER + "/updateDetail", data, {
      headers: authHeader(),
    });
  }
  //////////////////////////////////////////////
  /**
   * Api for user profile
   */
  /////////////////////////////////////////////
  // get post by user id
  Get_posts_by_user_id(id) {
    return Api.get(END_POINT + "/post-by-user-id/" + id, {
      headers: authHeader(),
    });
  }
  // get user's information and public details by User id
  Get_user_information_by_user_id(id) {
    return Api.get(END_POINT_USER + "/user-information/" + id, {
      headers: authHeader(),
    });
  }
}

export default new ProfileService();

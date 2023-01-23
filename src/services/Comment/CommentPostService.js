import Api from "@/apis/Api";
import authHeader from "../auth-header";

const END_POINT = "/posts/v1";

class CommentPostService {
  // Add comment to post
  Add_Comment_to_Post(id, data) {
    return Api.post(END_POINT + "/comment/create/" + id, data, {
      headers: authHeader(),
    });
  }

  // get all comments with only last reply to comment on post
  Get_Comments_with_last_reply_to_post(id) {
    return Api.get(END_POINT + "/comment/all/" + id, {
      headers: authHeader(),
    });
  }
  Get_Replies_to_comment(id) {
    return Api.get(END_POINT + "/replies/all/" + id, {
      headers: authHeader(),
    });
  }

  // handle data from paginate - loading other comment from next page
  loadMore(id, nextPage) {
    return Api.get(`${END_POINT}/comment/all/${id}?page=${nextPage}`, {
      headers: authHeader(),
    });
  }

  // delete comment
  Delete_Comment(id) {
    return Api.delete(END_POINT + "/comments/" + id, {
      headers: authHeader(),
    });
  }

  // update comment
  Update_Comment(id, data) {
    return Api.post(END_POINT + "/comment/update/" + id, data, {
      headers: authHeader(),
    });
  }

  //Add reply to comment
  Add_reply_to_comment(id, data) {
    return Api.post(END_POINT + "/reply/create/" + id, data, {
      headers: authHeader(),
    });
  }

  InteractionWithComment(id, data) {
    return Api.get(END_POINT + "/interacting-comment/" + id, data, {
      headers: authHeader(),
    });
  }

  // Get Interaction With specific Comment
  GetAllInteractionWithComment(id, data) {
    return Api.get(END_POINT + "/interactions-comment/" + id, data, {
      headers: authHeader(),
    });
  }
}

export default new CommentPostService();

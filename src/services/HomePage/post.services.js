import authHeader from '../auth-header';
import Api from "@/apis/Api";

const END_POINT = "/posts/v1/";

class PostService {

    getAllPosts(param) {
        return Api.get(END_POINT + 'all', { headers: authHeader(), params: {page: param} }).then(
            response => {
                return response;
            }
        );
    }

    InteractionWithPost (id, type) {
        return Api.get(END_POINT + 'interacting/' + id, { headers: authHeader(), params: {type: type} }).then(
            response => {
                return response;
            }
        );

    }

    AddPost(data, content){
        return Api.post(END_POINT + 'add' ,data, { headers: authHeader(), params: {content: content} }).then(
            response => {
                return response;
            }
        );
    }

    GetAllInteractionWithPost(id, type) {
        return Api.get(END_POINT + 'interactions/' + id , { headers: authHeader(), params: {type: type} }).then(
            response => {
                return response;
            }
        );
    }

    deletepost(id) {
        return Api.get(END_POINT + 'destroy/' + id , { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

}

export default new PostService();
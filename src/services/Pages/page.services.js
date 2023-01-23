import authHeader from '../auth-header';
import Api from "@/apis/Api";

const END_POINT = "/pages/v1/";
const END_POINT2 = "/posts/v1/";

class PageService {

    getAllPagesPosts(param) {
        return Api.get(END_POINT + 'getpostsfrompages', { headers: authHeader(), params: {page: param} }).then(
            response => {
                return response;
            }
        );
    }

    getAllPages() {
        return Api.get(END_POINT + 'userpages', { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    getAllPagesThatILiked(page){
        return Api.get(END_POINT + 'AllPagesThatILiked', { headers: authHeader(), params: {page: page} }).then(
            response => {
                return response;
            }
        );
    }

    getAllPagesThatIDontLiked(page){
        return Api.get(END_POINT + 'AllPagesThatIDontLiked', { headers: authHeader(), params: {page: page} }).then(
            response => {
                return response;
            }
        );
    }

    ToogleLikePage(id) {
        return Api.get(END_POINT + 'togglelike/' + id, { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    InteractionWithPagePost(id, type) {
        return Api.get(END_POINT + 'interacting/' + id, { headers: authHeader(), params: {type: type} }).then(
            response => {
                return response;
            }
        );
    }

    getInteractionWithPagePost(id, type) {
        return Api.get(END_POINT2 + 'interactions/' + id, { headers: authHeader(), params: {type: type} }).then(
            response => {
                return response;
            }
        );
    }

    GetPageDetail(id) {
        return Api.get(END_POINT + 'getpagedata/' + id, { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    GetPagePosts(id) {
        return Api.get(END_POINT + 'getpostspage/' + id, { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    AddPostInPage(id,data, content) {
        return Api.post(END_POINT + 'addpostinpage/' + id, data, { headers: authHeader(), params: {content: content} }).then(
            response => {
                return response;
            }
        );
    }

    AddPage(data, name, category) {
        return Api.post(END_POINT + 'addpage' , data, { headers: authHeader(), params: {name: name, category: category} } ).then(
            response => {
                return response;
            }
        );
    }

    AddPageDetail(id, data) {
        return Api.post(END_POINT + 'addpagedetail/' + id , data, { headers: authHeader() }).then(
            response => {
                return response;
            }
        ).catch((error) => {
            return error.response.data;
        });
    }

    EditePageDetail(id, data) {
        return Api.post(END_POINT + 'editepagedetail/' + id , data, { headers: authHeader() }).then(
            response => {
                return response;
            }
        ).catch((error) => {
            return error.response.data;
        });
    }

    DeletePostInPage(id) {
        return Api.get(END_POINT + 'destroypostinpage/' + id , { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    EditePageCover(id, data){
        return Api.post(END_POINT + 'editepagecover/' + id , data,  { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    EditePageProfile(id, data){
        return Api.post(END_POINT + 'editepageprofile/' + id , data,  { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }
}

export default new PageService();
import authHeader from '../auth-header';
import Api from "@/apis/Api";

const END_POINT = "/share/v1/";

class ShareService {

    //Share personal_post on my profile

    shareOnMyProfile(data) {
            return Api.post(END_POINT + 'share-post-on-timeline', data,  { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    shareOnMyPage(data) {
            return Api.post(END_POINT + 'share-post-on-page', data,  { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }


}

export default new ShareService();
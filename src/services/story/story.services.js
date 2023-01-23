import authHeader from '../auth-header';
import Api from "@/apis/Api";

const END_POINT = "/stories/v1/";

class StoryService {

    getAllStories() {
        return Api.get(END_POINT + 'all', { headers: authHeader() }).then(
            response => {
                return response;
            }
        );
    }

    getUserStories(id) {
        return Api.get(END_POINT + 'userStories/' + id, { headers: authHeader() }).then(
            response => {
                // console.log(response);
                return response;
            }
        );
    }

    CreateStory(story) {
        return Api.post(END_POINT + 'add', story, { headers: authHeader() }).then(
            response => {
                // console.log(response);
                return response;
            }
        );
    }

}

export default new StoryService();
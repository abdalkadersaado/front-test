import authHeader from '../auth-header';
import Api from "@/apis/Api";

const END_POINT = "/filters/v1/";

class GlobalSearchService {
    async getAllResults(search) {
        return Api.get(END_POINT + 'search-global', {
            params: { search: search },
            headers: authHeader()
        }).then(
            response => {
                console.log(response)
                return response;
            }
        );
    }
}
export default new GlobalSearchService();
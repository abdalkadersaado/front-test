import Api from "@/apis/Api";

const END_POINT = "/users/v1/";

class AuthenticationService {

    login(data) {
        return Api.post(END_POINT + 'login', data).then(
            response => {
                return response;
            }
        ).catch((error) => {
            
            return error.response.data;
            
        });
    }

    register(data) {
        return Api.post(END_POINT + 'register', data).then(
            response => {
                return response;
            }
        ).catch((error) => {
            
            return error.response.data;
            
        });
    }

    loginwithotherapp(data){
        return Api.post(END_POINT + 'auth/otherApps', data).then(
            response => {
                return response;
            }
        ).catch((error) => {
            
            return error.response.data;
            
        });
    }

    

}

export default new AuthenticationService();
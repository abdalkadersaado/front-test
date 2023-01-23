import AuthenticationService from "@/services/Auth/authentication.services";

export default {
  namespaced: true,
  // {"id":99999,
  // "email":"guest@gmail.com",
  // "phone":"0968609170",
  // "social_id":null,
  // "social_type":null,
  // "email_verified_at":null,
  // "status":1,
  // "remember_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXJzL3YxL2xvZ2luIiwiaWF0IjoxNjc0MDI2MzkzLCJleHAiOjE2NzY0MzgzOTMsIm5iZiI6MTY3NDAyNjM5MywianRpIjoicW1NcGFzMTdXYUpnQTZHbiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.aj9vMhD5lZVYjBKqHiApaS_fGciiAW4C2pasNUormQs",
  // "fcm_token":null,
  // "created_at":"2023-01-16T07:30:09.000000Z",
  // "updated_at":"2023-01-18T07:19:53.000000Z",
  // "profile":{"id":1,
  //             "user_id":1,
  //             "first_name":"guest",
  //             "middle_name":"guest",
  //             "last_name":"guest",
  //             "created_at":"2023-01-16T07:30:09.000000Z",
  //             "updated_at":"2023-01-16T07:30:09.000000Z",
  //             "name":"guest guest guest",
  //             "has_media_profile":false,
  //             "has_media_cover":false,
  //             "media":[]
  //           }
  // }
  state: {
    CURRENT_TOKEN: localStorage.getItem("token") || null,
    CURRENT_USER: JSON.parse(localStorage.getItem("user")) || null,
    lang: localStorage.getItem("lang") || "en",
  },
  getters: {
    auth_user_info() {
      let user = JSON.parse(localStorage.getItem("user"));
      return user;
    },
    auth_user_id() {
      let user_id = JSON.parse(localStorage.getItem("user"));
      return user_id.id;
    },
    isLogged(state) {
      return !!state.CURRENT_TOKEN;
    },
    AUTHINTICATED(state) {
      return state.CURRENT_TOKEN && state.CURRENT_USER;
    },
    USER(state) {
      return state.CURRENT_USER;
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.CURRENT_TOKEN = payload;
      localStorage.setItem("token", JSON.stringify(payload));
      // axios.defaults.headers.common.Authorization = `Bearer ${payload}`;
    },
    SET_USER(state, payload) {
      state.CURRENT_USER = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    SET_LANG(state, payload) {
      state.lang = payload;
      localStorage.setItem("lang", "en");
    },
    UPDATE_INFO_PROFILE(state, payload) {
      state.CURRENT_USER = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      window.location.pathname = "/personal-profile";
    },

    removeUserToken(state) {
      state.CURRENT_TOKEN = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    logout(state) {
      state.CURRENT_TOKEN = null;
      state.CURRENT_USER = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.pathname = "/login";
    },
  },
  actions: {
    // function Login
    LOGIN_USER({ commit }, data) {
      return AuthenticationService.login(data).then((response) => {
        if (response.status === 200) {
          commit("SET_TOKEN", response.data.data.remember_token);
          commit("SET_USER", response.data.data);
          commit("SET_LANG", "en");
        }
        return response;
      });
    },
    // function Register
    REGISTER_USER({ commit }, data) {
      return AuthenticationService.register(data).then((response) => {
        if (response.status === 201) {
          commit("SET_TOKEN", response.data.data.remember_token);
          commit("SET_USER", response.data.data);
          commit("SET_LANG", "en");
        }
        return response;
      });
    },

    LOGIN_USER_OTHER_APP({ commit }, data) {
      return AuthenticationService.loginwithotherapp(data).then((response) => {
        if (response.status === 200) {
          commit("SET_TOKEN", response.data.data.remember_token);
          commit("SET_USER", response.data.data);
          commit("SET_LANG", "en");
        }
        return response;
      });
    },
  },
};

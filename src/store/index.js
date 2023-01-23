import { createStore } from "vuex";
import auth from "./auth";
import post from "./post";
import friendships from "./Friendships/friendships";
import comment from "./comment";
import story from "./story/story";
import page from "./page";
import profile from "./Profile/profile";

const store = createStore({
    state: {
        loading: null,
    },
    getters: {},
    mutations: {
        TOGGLE_LOADING(state) {
            state.loading = !state.loading;
        },
    },
    actions: {},
    modules: {
        auth,
        post,
        friendships,
        comment,
        page,
        profile,
        story
    },
});
export default store;
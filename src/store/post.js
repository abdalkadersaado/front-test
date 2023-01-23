import postServices from "@/services/HomePage/post.services";

export default {
  namespaced: true,
  state: {
    postData: [],
    isLoadingNewPost: null,
    isLoadingallPosts: null,
    interactionModel: null,
    page: 1,
    lastpage: null,
  },
  getters: {
    postData(state) {
      return state.postData;
    },
  },
  mutations: {
    UPDATE_IS_LOADING_NEW_POST(state) {
      state.isLoadingNewPost = !state.isLoadingNewPost;
    },
    UPDATE_IS_LOADING_ALL_POSTS(state) {
      state.isLoadingallPosts = !state.isLoadingallPosts;
    },
    UPDATE_IS_MODAL_INTERACTION(state) {
      state.interactionModel = !state.interactionModel;
    },
    SET_POST_DATA(state, payload) {
      state.postData.push(payload);
    },
    SET_NEW_POST_DATA(state, payload) {
      state.postData.unshift(payload);
    },
    UPDATE_POST_TO_LIKE(state, payload) {
      state.postData.forEach((post) => {
        if (post.id === payload[0]) {
          if (payload[1] != null) {
            if (post.interacted.length > 0) {
              post.interacted[0].type = payload[1].type;
            } else {
              post.interacted.push(payload[1]);
              post.interactions_count++;
            }
          } else {
            post.interacted = [];
            post.interactions_count--;
          }
        }
      });
    },
    INCREMENT_PAGE(state) {
      state.page++;
    },
    DELETE_POST_DATA(state, id) {
      const index = state.postData.findIndex((item) => item.id == id);
      state.postData.splice(index, 1);
    },
  },
  actions: {
    async GET_ALL_POSTS({ commit, state }) {
      await postServices.getAllPosts(state.page).then(
        response => {
          let result = response.data.data;
          state.last_page = result.last_page;
          state.postData = []
          result.items.forEach((doc) => {
            // if (!state.postData.some((post) => post.id === doc.id)) {
              commit("SET_POST_DATA", doc);
            // }
          });
        }
    )

    },
    async GET_NEXT({ commit, state, dispatch }) {
      commit("INCREMENT_PAGE");
      if (state.page <= state.last_page) {
        await dispatch("GET_ALL_POSTS");
      } else {
        state.page = 1;
        await dispatch("GET_ALL_POSTS");
      }
    },
    async UPDATE_POST_TO_LIKE({ commit }, data) {
      await commit("UPDATE_POST_TO_LIKE", data);
    },
  },
};

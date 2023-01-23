import CommentPostService from "@/services/Comment/CommentPostService";
export default {
  namespaced: true,
  state: {
    comments: [],
    interactionModel: null,
    moreExists_comment: false,
    nextPage_comment: 0,
    loading_comment: null,
  },
  getters: {
    comments(state) {
      return state.comments;
    },
    moreExists_comment(state) {
      return state.moreExists_comment;
    },
    loading_comment(state) {
      return state.loading_comment;
    },
  },
  mutations: {
    SET_COMMENTS(state, payload) {
      state.comments = payload;
    },
    ADD_COMMENT(state, payload) {
      state.comments.unshift(payload);
    },
    ADD_REPLY(state, payload) {
      const comment_index = state.comments.find(
        (item) => item.id == payload.parent_id
      );
      comment_index.replies.push(payload);
      comment_index.latest_reply = payload;
    },
    DELETE_COMMENT(state, id) {
      const index = state.comments.findIndex((item) => item.id == id);
      state.comments.splice(index, 1);
    },
    DELETE_Reply(state, id) {
      state.comments.forEach((comment) => {
        comment.replies.forEach(() => {
          const index = comment.replies.findIndex((item) => item.id == id);
          comment.replies.splice(index, 1);
        });
      });
    },
    UPDATE_IS_MODAL_INTERACTION(state) {
      state.interactionModel = !state.interactionModel;
    },
    UPDATE_COMMENT_TO_LIKE(state, payload) {
      state.comments.forEach((post) => {
        if (post.id === payload[0]) {
          if (payload[1] != null) {
            if (post.interacted.length > 0) {
              post.interacted[0].type = payload[1].type;
            } else {
              post.interacted.push(payload[1]);
              post.Interactions++;
            }
          } else {
            post.interacted = [];
            post.Interactions--;
          }
        }
      });
    },
    UPDATE_REPLY_TO_LIKE(state, payload) {
      state.comments.forEach((post) => {
        post.replies.forEach((reply) => {
          if (reply.id === payload[0]) {
            if (payload[1] != null) {
              if (reply.interacted.length > 0) {
                reply.interacted[0].type = payload[1].type;
              } else {
                reply.interacted.push(payload[1]);
                reply.Interactions++;
              }
            } else {
              reply.interacted = [];
              reply.Interactions--;
            }
          }
        });
      });
    },
  },
  actions: {
    async a_getComments({ commit, state }, post_id) {
      state.loading_comment = true;

      await CommentPostService.Get_Comments_with_last_reply_to_post(
        post_id
      ).then((response) => {
        commit("SET_COMMENTS", response.data.data.data);
        state.loading_comment = null;
        if (response.data.data.current_page < response.data.data.last_page) {
          state.moreExists_comment = true;
          state.nextPage_comment = response.data.data.current_page + 1;
        } else {
          state.moreExists_comment = false;
        }
      });
    },
    async a_loadMore({ state }, post_id) {
      try {
        const response = await CommentPostService.loadMore(
          post_id,
          state.nextPage_comment
        );
        if (response.data.data.current_page < response.data.data.last_page) {
          state.moreExists_comment = true;
          state.nextPage_comment = response.data.data.current_page + 1;
        } else {
          state.moreExists_comment = false;
        }
        response.data.data.data.forEach((data) => {
          state.comments.push(data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    async a_delete_comment({ commit }, comment_id) {
      await CommentPostService.Delete_Comment(comment_id).then(() => {
        commit("DELETE_COMMENT", comment_id);
      });
    },
    async a_delete_reply({ commit }, comment_id) {
      await CommentPostService.Delete_Comment(comment_id).then(() => {
        commit("DELETE_Reply", comment_id);
      });
    },
    async UPDATE_COMMENT_TO_LIKE({ commit }, data) {
      await commit("UPDATE_COMMENT_TO_LIKE", data);
    },
    async UPDATE_REPLY_TO_LIKE({ commit }, data) {
      await commit("UPDATE_REPLY_TO_LIKE", data);
    },
  },
};

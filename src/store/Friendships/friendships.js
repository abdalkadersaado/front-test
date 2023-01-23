import FriendshipService from "@/services/Friendships/FriendshipService";

export default {
  namespaced: true,
  state: {
    friends: [],
    loading_friends: null,

    requests_waiting: [],
    count_request_waitings: 0,
    moreExists_waiting_request: false,
    nextPage_waiting_request: 0,
    loading_more_waiting_request: null,

    loading_waiting_request: null,
    loading_pending_request: null,

    requests_pending: [],
    count_request_pending: 0,
    moreExists_pending_request: false,
    nextPage_request_pending: 0,
    loading_more_pending_request: null,
    showModal: false,
  },
  getters: {
    // Getters friends
    friends(state) {
      return state.friends;
    },
    friends_count(state) {
      return state.friends.length;
    },
    loading_friends(state) {
      return state.loading_friends;
    },

    // Getters Waiting requests
    requests_waiting(state) {
      return state.requests_waiting;
    },
    requests_waiting_count(state) {
      return state.count_request_waitings;
    },
    moreExists_waiting_request(state) {
      return state.moreExists_waiting_request;
    },
    loading_waiting_request(state) {
      return state.loading_waiting_request;
    },
    loading_more_waiting_request(state) {
      return state.loading_more_waiting_request;
    },
    // Getters Pending requests
    requests_pending(state) {
      return state.requests_pending;
    },
    requests_pending_count(state) {
      return state.count_request_pending;
    },
    moreExists_pending_request(state) {
      return state.moreExists_pending_request;
    },
    loading_pending_request(state) {
      return state.loading_pending_request;
    },
    loading_more_pending_request(state) {
      return state.loading_more_pending_request;
    },
    showModal(state) {
      return state.showModal;
    },
  },
  mutations: {
    // Mutations Friends
    SET_FRIENDS(state, friends) {
      state.friends = friends;
    },
    DELETE_FRIEND(state, id) {
      const index = state.friends.findIndex((item) => item.id == id);
      state.friends.splice(index, 1);
    },
    // Mutations Waiting requests
    SET_REQUESTS_WAITING(state, requests_waiting) {
      state.requests_waiting = requests_waiting;
    },
    LOADING_MORE_WAITING_REQUEST(state) {
      state.loading_more_waiting_request = !state.loading_more_waiting_request;
    },
    DELETE_REQUESTS_WAITING(state, id) {
      const index = state.requests_waiting.findIndex((item) => item.id == id);
      state.requests_waiting.splice(index, 1);
    },
    // Mutations Pending requests
    SET_REQUESTS_PENDING(state, requests_pending) {
      state.requests_pending = requests_pending;
    },
    LOADING_MORE_PENDING_REQUEST(state) {
      state.loading_more_pending_request = !state.loading_more_pending_request;
    },
    DELETE_REQUESTS_PENDING(state, id) {
      const index = state.requests_pending.findIndex((item) => item.id == id);
      state.requests_pending.splice(index, 1);
    },
    // Mutations Accept friend
    ACCEPT_FRIEND(state, request_p) {
      const index = state.requests_pending.findIndex(
        (item) => item.id == request_p.id
      );
      state.requests_pending.splice(index, 1);
      state.friends.push(request_p.sender);
    },
  },
  actions: {
    async get_all_friends({ commit, state }) {
      state.loading_friends = true;
      await FriendshipService.all_friends()
        .then((res) => {
          commit("SET_FRIENDS", res.data.data);
          state.loading_friends = null;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Actions Waiting requests
    async a_requests_Waiting({ commit, state }) {
      state.loading_waiting_request = true;
      await FriendshipService.Requests_Waiting()
        .then((response) => {
          commit("SET_REQUESTS_WAITING", response.data.data.data);
          state.count_request_waitings = response.data.data.total;
          state.loading_waiting_request = null;

          if (response.data.data.current_page < response.data.data.last_page) {
            state.moreExists_waiting_request = true;
            state.nextPage_waiting_request =
              response.data.data.current_page + 1;
            state.loading_more_waiting_request = false;
          } else {
            state.moreExists_waiting_request = false;
            state.loading_more_waiting_request = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async a_loadMore_waiting_requests({ commit, state }) {
      commit("LOADING_MORE_WAITING_REQUEST");
      try {
        const response = await FriendshipService.LoadMore_waiting(
          state.nextPage_waiting_request
        );
        if (response.data.data.current_page < response.data.data.last_page) {
          state.moreExists_waiting_request = true;
          state.nextPage_waiting_request = response.data.data.current_page + 1;
          state.loading_more_waiting_request = false;
        } else {
          state.moreExists_waiting_request = false;
        }
        response.data.data.data.forEach((data) => {
          state.requests_waiting.push(data);
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async a_delete_waiting_request({ commit }, id) {
      await FriendshipService.Remove_friend_request(id)
        .then((response) => {
          response.data;
          commit("DELETE_REQUESTS_WAITING", id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Actions Pending requests
    async a_requests_pending({ commit, state }) {
      state.loading_pending_request = true;
      await FriendshipService.Requests_Pending()
        .then((response) => {
          commit("SET_REQUESTS_PENDING", response.data.data.data);
          state.count_request_pending = response.data.data.total;
          state.loading_pending_request = null;

          if (response.data.data.current_page < response.data.data.last_page) {
            state.moreExists_pending_request = true;
            state.nextPage_request_pending =
              response.data.data.current_page + 1;
            state.loading_more_pending_request = false;
          } else {
            state.moreExists_pending_request = false;
            state.loading_more_pending_request = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async a_loadMore_pending_requests({ commit, state }) {
      commit("LOADING_MORE_PENDING_REQUEST");
      try {
        const response = await FriendshipService.LoadMore_pending(
          state.nextPage_request_pending
        );
        if (response.data.data.current_page < response.data.data.last_page) {
          state.moreExists_pending_request = true;
          state.nextPage_request_pending = response.data.data.current_page + 1;
          state.loading_more_pending_request = false;
        } else {
          state.moreExists_pending_request = false;
        }
        response.data.data.data.forEach((data) => {
          state.requests_pending.push(data);
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async a_delete_pending_request({ commit, state }, id) {
      state.showModel = true;
      await FriendshipService.Remove_friend_request(id)
        .then((response) => {
          console.log(response);
          commit("DELETE_REQUESTS_PENDING", id);
          state.showModal = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // Actions Accept Friend
    async a_accept_friend({ commit }, request_p) {
      await FriendshipService.Accept(request_p.requester)
        .then((res) => {
          commit("ACCEPT_FRIEND", request_p);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async a_delete_friend({ commit }, id) {
      await FriendshipService.Delete_friend(id)
        .then((response) => {
          console.log(response.data);
          commit("DELETE_FRIEND", id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};

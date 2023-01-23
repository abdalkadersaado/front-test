import FriendsService from "@/services/Profile/FriendsService";
import JobService from "@/services/Profile/JobService";
import ProfileService from "@/services/Profile/ProfileService";
import StudiesService from "@/services/Profile/StudiesService";
export default {
  namespaced: true,
  state: {
    my_post: [],
    interactionModel: null,
    page: 1,
    lastpage: null,
    loading_post: null,
    profile_details: [],
    status: null,
    loading_friendship_status: null,
    loading_add_friend: null,
    loading_accept_friend: null,
    userInformation: {},
    my_jobs: [],
    my_studies: [],
    loading_info: null,
    profile_user_details: [],
  },
  getters: {
    my_post(state) {
      return state.my_post;
    },
    loading_post(state) {
      return state.loading_post;
    },

    profile_details(state) {
      return state.profile_details;
    },
    profile_user_details(state) {
      return state.profile_user_details;
    },
    status(state) {
      return state.status;
    },
    loading_friendship_status(state) {
      return state.loading_friendship_status;
    },
    loading_add_friend(state) {
      return state.loading_add_friend;
    },
    loading_accept_friend(state) {
      return state.loading_accept_friend;
    },
    userInformation(state) {
      return state.userInformation;
    },
    jobs(state) {
      return state.userInformation.jobs;
    },
    studies(state) {
      return state.userInformation.studies;
    },
    my_jobs(state) {
      return state.my_jobs;
    },
    my_studies(state) {
      return state.my_studies;
    },
    loading_info(state) {
      return state.loading_info;
    },
  },
  mutations: {
    SET_MY_POST(state, post) {
      state.my_post = post;
    },
    DELETE_POST(state, id) {
      const index = state.my_post.findIndex((item) => item.id == id);
      state.my_post.splice(index, 1);
    },
    UPDATE_IS_MODAL_INTERACTION(state) {
      state.interactionModel = !state.interactionModel;
    },
    UPDATE_POST_TO_LIKE(state, payload) {
      state.my_post.forEach((post) => {
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
    SET_PROFILE_DETAILS(state, payload) {
      state.profile_details = payload;
    },
    UPDATE_PROFILE_DETAILS(state, payload) {
      state.profile_details.forEach((profile) => {
        if (profile.id === payload.id) {
          profile.id = payload.id;
          profile.key_ar = payload.key_ar;
          profile.key_en = payload.key_en;
          profile.details.privacy = payload.details.privacy;
          profile.details.publicdetail_id = payload.details.publicdetail_id;
          profile.details.status = payload.details.status;
          profile.details.user_id = payload.details.user_id;
          profile.details.value = payload.details.value;
        }
      });
    },
    SET_PROFILE_USER_DETAILS(state, payload) {
      state.profile_user_details = payload;
    },
    SET_USER_INFO(state, payload) {
      state.userInformation = payload;
    },
    // Jobs
    SET_MY_JOBS(state, job) {
      state.my_jobs = job;
    },
    DELETE_JOB(state, id) {
      const index = state.my_jobs.findIndex((item) => item.id == id);
      state.my_jobs.splice(index, 1);
    },
    ADD_JOB(state, job) {
      state.my_jobs.unshift(job);
    },
    UPDATE_JOB(state, payload) {
      state.my_jobs.forEach((job) => {
        if (job.id === payload.id) {
          job.id = payload.id;
          job.user_id = payload.user_id;
          job.title = payload.title;
          job.company = payload.company;
          job.location = payload.location;
          job.des = payload.des;
          job.work_here = payload.work_here;
          job.start_at = payload.start_at;
          job.end_at = payload.end_at;
          job.status = payload.status;
          job.privacy = payload.privacy;
          job.created_at = payload.created_at;
          job.updated_at = payload.updated_at;
        }
      });
    },
    // Studies
    SET_MY_STUDIES(state, study) {
      state.my_studies = study;
    },
    DELETE_STUDY(state, id) {
      const index = state.my_studies.findIndex((item) => item.id == id);
      state.my_studies.splice(index, 1);
    },
    ADD_STUDY(state, study) {
      state.my_studies.unshift(study);
    },
    UPDATE_STUDY(state, payload) {
      state.my_studies.forEach((study) => {
        if (study.id === payload.id) {
          study.id = payload.id;
          study.user_id = payload.user_id;
          study.name = payload.name;
          study.type = payload.type;
          study.speciality = payload.speciality;
          study.location = payload.location;
          study.study_here = payload.study_here;
          study.start_at = payload.start_at;
          study.end_at = payload.end_at;
          study.status = payload.status;
          study.privacy = payload.privacy;
          study.created_at = payload.created_at;
          study.updated_at = payload.updated_at;
        }
      });
    },
  },
  actions: {
    async Get_my_post({ commit, state }) {
      state.loading_post = true;
      ProfileService.Get_my_post().then((res) => {
        commit("SET_MY_POST", res.data.data.items);
        state.loading_post = null;
      });
    },
    async UPDATE_POST_TO_LIKE({ commit }, data) {
      await commit("UPDATE_POST_TO_LIKE", data);
    },
    //id here is from params url
    async get_posts_by_user({ commit }, id) {
      ProfileService.Get_posts_by_user_id(id).then((res) => {
        commit("SET_MY_POST", res.data.data.items);
      });
    },
    // public details
    async get_profile_public_details({ commit, state }) {
      state.loading_info = true;
      ProfileService.Get_profile_public_details().then((res) => {
        commit("SET_PROFILE_DETAILS", res.data.data);
        state.loading_info = null;
      });
    },

    // get user's info by user id
    async a_get_user_info({ commit }, id) {
      await ProfileService.Get_user_information_by_user_id(id).then((res) => {
        commit("SET_USER_INFO", res.data.data);
      });
    },

    // Jobs
    async a_Get_my_jobs({ commit }) {
      await JobService.Get_my_jobs().then((res) => {
        commit("SET_MY_JOBS", res.data.data);
      });
    },
    async a_delete_job({ commit }, id) {
      await JobService.Delete_job(id).then(() => {
        commit("DELETE_JOB", id);
      });
    },

    //studies
    async a_get_my_studies({ commit }) {
      await StudiesService.Get_my_studies().then((res) => {
        commit("SET_MY_STUDIES", res.data.data);
      });
    },
    async a_delete_study({ commit }, id) {
      await StudiesService.Delete_study(id).then(() => {
        commit("DELETE_STUDY", id);
      });
    },

    // Friendships
    async check_relation_status({ state }, id) {
      state.loading_friendship_status = true;
      FriendsService.Check_friendship_status(id).then((response) => {
        state.status = response.data.data.status;
        state.loading_friendship_status = null;
      });
    },
    async a_add_friend({ state }, id) {
      state.loading_add_friend = true;
      FriendsService.Add_friend(id).then((response) => {
        state.status = response.data.data.status;
        state.status = "Waiting";
        state.loading_add_friend = null;
      });
    },
    async a_accept_friend({ state }, id) {
      state.loading_accept_friend = true;
      FriendsService.Accept_friend(id).then((response) => {
        state.status = response.data.data.status;
        state.status = "Friends";
        state.loading_accept_friend = null;
      });
    },
  },
};

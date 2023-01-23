import pageServices from "@/services/Pages/page.services";

export default {

    namespaced: true,
    state: {
        postpageData: [],
        mypages: [],
        mylikedpages: [],
        loading_my_page:null,
        notlikedpages: [],
        isModal: null,
        interactionpageModel : null,
        pageindontlikepage: 1,
        lastpageindontlikepage : null,
        pageinlikepage: 1,
        lastpageinlikepage : null,

    },
    getters: {
        loading_my_page(state) {
            return state.loading_my_page;
          },
    },
    mutations: {
        UPDATE_IS_MODAL(state) {
            state.isModal = !state.isModal;
        },
        UPDATE_IS_MODAL_INTERACTION(state) {
            state.interactionpageModel = !state.interactionpageModel;
        },
        SET_POST_PAGE_DATA(state, payload) {
            state.postpageData.push(payload);
        },
        SET_PAGE_DATA(state, payload) {
            state.mypages.push(payload);
        },
        SET_LIKED_PAGE_DATA(state, payload) {
            state.mylikedpages.push(payload);
        },
        SET_NOT_LIKED_PAGE_DATA(state, payload) {
            state.notlikedpages.push(payload);
        },
        UPDATE_POST_PAGE_TO_LIKE(state, payload) {
            state.postpageData.forEach((post) => {
                if (post.id === payload[0]) {
                    if (payload[1] != null) {
                        if(post.interacted.length > 0){
                            post.interacted[0].type = payload[1].type
                        }else {
                            post.interacted.push(payload[1]);
                            post.Interactions ++;
                        }
                    } else {
                        post.interacted = [];
                        post.Interactions --;
                    }
                }
            });
        },
        INCREMENT_PAGE_IN_DONT_LIKE_PAGE(state){
            state.pageindontlikepage++;
        },
        INCREMENT_PAGE_IN_LIKE_PAGE(state){
            state.pageinlikepage++;
        },
        UPDATE_PAGE_TO_LIKE( state, payload) {
            if (payload[1].is_liked === true) {
                // state.mylikedpages.push(payload[1]);
                state.notlikedpages.forEach((page) => {
                    if (page.id === payload[0]){
                        page.TotalMember++
                        state.mylikedpages.push(page);
                        let found = state.notlikedpages.indexOf(page)
                        state.notlikedpages.splice(found, 1)
                    }
                })
            }else {
                state.mylikedpages.forEach((page) => {
                    if (page.id === payload[0]){
                        page.TotalMember--
                        let found = state.mylikedpages.indexOf(page)
                        state.notlikedpages.push(page);
                        state.mylikedpages.splice(found, 1)
                    }
                })
            }
        }
    },
    actions: {
        // async GET_ALL_PAGES_POSTS({ commit, state }) {
        //     await pageServices.getAllPagesPosts(state.page).then(
        //         response => {
        //             let result = response.data.data;
        //             state.last_page = result.last_page;
        //             result.items.forEach((doc) => {
        //                 if(!state.postpageData.some(post => post.id === doc.id)) {
        //                     commit("SET_POST_PAGE_DATA", doc);
        //                 }
        //             });
        //     });
        // },

        
        
        async UPDATE_POST_PAGE_TO_LIKE({ commit }, data) {
            await commit("UPDATE_POST_PAGE_TO_LIKE", data);
            
        },

        async getmypages({ commit, state }) {
            state.loading_my_page = true;
            await pageServices.getAllPages().then(
                response => {
                    let result = response.data.data;
                    state.mypages = [];
                    state.loading_my_page = null;
                    result.forEach((doc) => {
                        commit("SET_PAGE_DATA", doc);
                    })
                }
            )
        },

        async getmynotlikedpages({ commit,  state }) {
            await pageServices.getAllPagesThatIDontLiked(state.pageindontlikepage).then(
                response => {
                    let result = response.data.data;
                    // console.log(result);
                    state.lastpageindontlikepage = result.last_page;
                    // console.log(state.lastpageindontlikepage, state.pageindontlikepage)
                    result.items.forEach((doc) => {
                        if(!state.notlikedpages.some((item) => item.id === doc.id)) {
                            commit("SET_NOT_LIKED_PAGE_DATA", doc);
                        }
                    })
                }
            )
        },

        async GET_NEXT_IN_DONT_LIKE_PAGE({commit, state, dispatch}){
            commit('INCREMENT_PAGE_IN_DONT_LIKE_PAGE');
            if(state.pageindontlikepage <= state.lastpageindontlikepage ) {
                await dispatch("getmynotlikedpages");
            }else{
                state.pageindontlikepage = 1
                await dispatch("getmynotlikedpages");
            }
            
        },

        async UPDATE_PAGE_TO_LIKE({commit}, data) {
            await commit("UPDATE_PAGE_TO_LIKE", data);
        },

        async getmylikedpages({commit,  state }) {
            await pageServices.getAllPagesThatILiked(state.pageinlikepage).then(
                response => {
                    let result = response.data.data;
                    state.lastpageinlikepage = result.last_page;
                    result.items.forEach((doc) => {
                        if(!state.mylikedpages.some(item => item.id === doc.id)) {
                            commit("SET_LIKED_PAGE_DATA", doc);
                        }
                    })
                }
            )

        },

        async GET_NEXT_IN_LIKE_PAGE({commit, state, dispatch}){
            commit('INCREMENT_PAGE_IN_LIKE_PAGE');
            if(state.pageinlikepage <= state.lastpageinlikepage ) {
                await dispatch("getmylikedpages");
            }else{
                state.pageindontlikepage = 1
                await dispatch("getmylikedpages");
            }
            
        },

        
    },

};

<template>
  <div>
    <div>
      <input
        dir="auto"
        type="text"
        v-model="keyword"
        class="dropdown search-input close-dir"
        :placeholder="$t('search-user')"
      />
    </div>

    <br />
    <div v-if="!loading_search_user" :class="{ shown: state }" dir="auto">
      <div class="dropdown-content" v-show="state">
        <router-link
          v-for="user in users"
          :key="user.id"
          :to="{ name: 'profile', params: { id: user.id } }"
        >
          <img
            class="img-search"
            v-if="user.has_media_profile === false"
            src="@/assets/img_friends/default1.png"
            alt=""
          />
          <img class="img-search" v-else :src="user.media[0].src_icon" alt="" />

          {{ user.name }}</router-link
        >
         <router-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'profile', params: { id: post.id } }"
        >
          post:
          <img
            class="img-search"
            v-if="post.model.has_media_profile === false"
            src="@/assets/img_friends/default1.png"
            alt=""
          />
          <img
            class="img-search"
            v-else
            :src="post.model.media[0].src_icon"
            alt=""
          />

          {{ post.content }}</router-link
        > 
         <router-link
          v-for="page in pages"
          :key="page.id"
          :to="{ name: 'pages', params: { id: page.id } }"
        >
          <img
            class="img-search"
            v-if="page.has_media_profile === false"
            src="@/assets/page/pageprofile.png"
            alt=""
          />
          <img class="img-search" v-else :src="page.media[0].src_icon" alt="" />

          {{ page.name }}</router-link
        > 
      </div>
    </div>

    <div
      v-else
      class="col-md-12 col-lg-12 center_loading pe-5 justify-content-center d-flex align-items-center"
     >
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from "@/services/User/UserService";
export default {
  data() {
    return {
      keyword: null,
      users: [],
      posts: [],
      pages: [],
      loading_search_user: null,
      state: true,
    };
  },
  watch: {
    keyword() {
      this.getResults();
      this.getResults2();
      this.getResults3();
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.state = false;
      }
    },
    getResults() {
      this.loading_search_user = true;
      this.state = true;
      let token = JSON.parse(localStorage.getItem("token"));
      UserService.search_global({
        params: { search: this.keyword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (this.keyword == "") {
          this.users = null;
        } else {
          this.users = res.data.data.users.data;
        }
        this.loading_search_user = null;
      });
    },
    getResults2() {
      this.loading_search_user = true;
      this.state = true;
      let token = JSON.parse(localStorage.getItem("token"));
      UserService.search_global({
        params: { search: this.keyword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (this.keyword == "") {
          this.posts = null;
        } else {
          this.posts = res.data.data.posts.data;
        }
        this.loading_search_user = null;
      });
    },
    getResults3() {
      this.loading_search_user = true;
      this.state = true;
      let token = JSON.parse(localStorage.getItem("token"));
      UserService.search_global({
        params: { search: this.keyword },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (this.keyword == "") {
          this.posts = null;
        } else {
          this.pages = res.data.data.pages.data;
        }
        this.loading_search_user = null;
      });
    },
  },
  //   getResults() {
  //     this.loading_search_user = true;
  //     this.state = true;
  //     let token = JSON.parse(localStorage.getItem("token"));
  //     UserService.search_user({
  //       params: { name: this.keyword },
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }).then((res) => {
  //       if (this.keyword == "") {
  //         this.users = null;
  //       } else {
  //         this.users = res.data.data.items;
  //       }
  //       this.loading_search_user = null;
  //     });
  //   },
  // },
};
</script>
<style lang="scss" scoped>
.img-search {
  width: 28px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.search-input {
  border-radius: 13px;
  margin-bottom: 10px;
  width: 97%;
  border: 0px;
}
.close-dir:lang(ar) {
  direction: rtl;
}
</style>

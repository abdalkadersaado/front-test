<template>
  <div
    class="input-group d-flex search me-auto mb-lg-0 col-lg-10 col-sm-8 col-8 py-2"
    data-bs-toggle="modal"
    data-bs-target="#GlobalSearch"
  >
    <span
      class="input-group-text backgroundIcon"
      id="inputGroup-sizing-default"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        /></svg
    ></span>
    <input
      placeholder="Search"
      type="text"
      class="form-control font_Size"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    />
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="GlobalSearch"
    ref="modalRef"
    tabindex="-1"
    aria-labelledby="GlobalSearchLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div class="input-group search-modal me-auto mb-lg-0 py-2">
            <span
              class="input-group-text backgroundIcon"
              id="inputGroup-sizing-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                /></svg
            ></span>
            <input
              placeholder="Search in Media"
              type="text"
              v-model="keyword"
              class="form-control font_Size"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
        <div class="modal-body">
          <div class="d-block mb-2 filter">
            <ul class="list-group list-group-horizontal overflow-auto">
              <li class="list-group-item">All</li>
              <li class="list-group-item">Posts</li>
              <li class="list-group-item">Persons</li>
              <li class="list-group-item">Groups</li>
              <li class="list-group-item">Images</li>
              <li class="list-group-item">Videos</li>
            </ul>
          </div>
          <div v-if="!loading_search_user" class="list-group">
            <h5 class="mb-1" v-show="users && users.length > 0">Users</h5>
            <router-link
              @click="closeModal()"
              class="list-group-item list-group-item-action"
              v-for="user in users"
              :key="user.id"
              :to="{ name: 'profile', params: { id: user.id } }"
            >
              <img
                class="img-search mx-1"
                v-if="user.has_media_profile === false"
                src="@/assets/img_friends/default1.png"
                alt=""
              />
              <img
                class="img-search mx-1"
                v-else
                :src="user.media[0].src_url"
                alt=""
              />

              <small>{{ user.name }}</small></router-link
            >

            <h5 class="mb-1" v-show="posts && posts.length > 0">Posts</h5>
            <router-link
              @click="closeModal()"
              class="list-group-item list-group-item-action"
              v-for="post in posts"
              :key="post.id"
              :to="{ name: 'profile', params: { id: post.id } }"
            >
              <img
                class="img-search mx-1"
                v-if="post.model.has_media_profile === false"
                src="@/assets/img_friends/default1.png"
                alt=""
              />
              <img
                class="img-search mx-1"
                v-else
                :src="post.model.media[0].src_url"
                alt=""
              />

              <small>{{ post.model.name }}</small>
              <p>{{ post.content }}</p>
            </router-link>
            <h5 class="mb-1" v-show="pages && pages.length > 0">Pages</h5>
            <router-link
              @click="closeModal()"
              class="list-group-item list-group-item-action"
              v-for="page in pages"
              :key="page.id"
              :to="{ name: 'page', params: { id: page.id } }"
            >
              <img
                class="img-search mx-1"
                v-if="page.has_media_profile === false"
                src="@/assets/page/pageprofile.png"
                alt=""
              />
              <img
                class="img-search mx-1"
                v-else
                :src="page.media[0].src_url"
                alt=""
              />

              {{ page.name }}</router-link
            >
          </div>
          <div
            v-else
            class="col-md-12 col-lg-12 center_loading pe-5 justify-content-center d-flex align-items-center"
          >
            <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-show="state" class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            <p class="m-2">NOT FOUND ITEMS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GlobalSearch from "@/services/FiltersServices/globalSearch.services";
import { Modal } from "bootstrap";
import { ref } from "vue";
export default {
  data() {
    return {
      keyword: null,
      users: [],
      posts: [],
      pages: [],
      loading_search_user: false,
      state: false,
    };
  },
  watch: {
    keyword() {
      this.getResults();
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  setup() {
    const modalRef = ref(null);
    const closeModal = () => Modal.getInstance(modalRef.value)?.hide();

    return { modalRef, closeModal };
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.state = false;
      }
    },
    getResults() {
      this.loading_search_user = true;
      this.state = false;
      GlobalSearch.getAllResults(this.keyword).then((res) => {
        if (this.keyword == "") {
          this.users = null;
          this.posts = null;
          this.pages = null;
          this.loading_search_user = false;
          this.state = true;
        } else if (
          res.data.data.users.total > 0 ||
          res.data.data.posts.total > 0 ||
          res.data.data.pages.total > 0
        ) {
          this.users = res.data.data.users.data;
          this.posts = res.data.data.posts.data;
          this.pages = res.data.data.pages.data;
          this.loading_search_user = false;
          this.state = false;
        } else {
          this.users = null;
          this.posts = null;
          this.pages = null;
          this.state = true;
          this.loading_search_user = false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 60%;
  border-radius: 25px;
  .backgroundIcon {
    background-image: linear-gradient(
      rgb(0 167 157),
      rgb(43 182 115 / 57%)
    ) !important;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  input {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .form-control:focus {
    box-shadow: none;
    border-color: linear-gradient(#00a79d, #2bb673);
  }
}
.search-modal {
  .backgroundIcon {
    background-image: linear-gradient(#00a79d, #2bb673) !important;
  }
  .form-control:focus {
    box-shadow: none;
    border-color: linear-gradient(#00a79d, #2bb673);
  }
}

#GlobalSearch {
  .modal-header {
    padding: 0.5rem;
    border-bottom: none;
  }
  .modal-body {
    .filter {
      .list-group-horizontal {
        background-color: #8080801f;
        .list-group-item {
          border: none;
          background-color: transparent;
        }
        .list-group-item:active {
          color: #0d6efd;
          text-decoration-line: underline;
          text-decoration-color: #0d6efd;
          background-color: #00000014;
        }
      }
    }
  }
  .img-search {
    width: 28px;
    border-radius: 100%;
  }
}

@media screen and (max-width: 992px) {
  .search {
    height: auto;
    width: 60%;
    margin-left: 15px;
    .font_Size {
      font-size: 12px;
      font-weight: bold;
    }
  }
}
</style>

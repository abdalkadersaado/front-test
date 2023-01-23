<template>
  <div class="row r-div" dir="auto">
    <div class="col-3">
      <!-- Start Sidebar left -->
      <div class="left">
        <!-- Start div row My Pages -->
        <div class="row align-items-center mt-2 margin-style-mypage style-shadow">
          <div class="">
            <div class="d-flex">
              <!-- Buttons in sidebar  -->
              <div class="row align-items-center">
                <!-- Start button add new page -->

                <div class="mt-2">
                  <div class="">
                    <button
                      @click="addpage()"
                      class="text-center btn btn-outline-info page-home-tab"
                    >
                      {{ $t("Add New Page") }}
                    </button>
                  </div>
                </div>
                <!-- End button add new page -->
              </div>
              <!--End Buttons sidebar  -->
            </div>
          </div>

          <div class="col-md-8 left_box_info mt-2 margin-style">
            <p class="fw-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25.616"
                viewBox="0 0 25 28.616"
              >
                <g id="pages-svgrepo-com" transform="translate(0.5)">
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M18.769.5H6.115A3.626,3.626,0,0,0,2.5,4.115V20.385A3.626,3.626,0,0,0,6.115,24H18.769a3.626,3.626,0,0,0,3.615-3.615V4.115A3.626,3.626,0,0,0,18.769.5Z"
                    transform="translate(1.615 0)"
                    fill="#00a79d"
                    stroke="#00a79d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                  <path
                    id="Path_114"
                    data-name="Path 114"
                    d="M4.115,2.5A3.626,3.626,0,0,0,.5,6.115V20.577A5.326,5.326,0,0,0,5.923,26H16.769a3.626,3.626,0,0,0,3.615-3.615"
                    transform="translate(0 1.615)"
                    fill="none"
                    stroke="#00a79d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
              &nbsp;<span class="text-my-page">{{ $t("My Pages") }}</span>
            </p>
          </div>

          <div class="loading" v-if="!loading_my_page">
            <div class="mb-4 margin-style">
              <!-- Start my page -->
              <div
                v-for="(page, index) in mypages"
                :key="index"
                :page="page"
                class="page-box mb-2"
              >
                <router-link
                  class="router-link-to-profile"
                  style="text-decoration: none"
                  :to="{
                    name: 'mypage',
                    params: { id: page.id },
                  }"
                >
                  <div class="row">
                    <img
                      class="page-img"
                      v-if="page.has_media_profile === false"
                      src="@/assets/page/pagecover.png"
                      alt=""
                    />
                    <img
                      class="page-img"
                      v-else-if="page.media[0].collection_name === 'profile'"
                      :src="page.media[0].src_url"
                      alt=""
                    />
                    <img
                      class="page-img"
                      v-else-if="page.media[1].collection_name === 'profile'"
                      :src="page.media[1].src_url"
                      alt=""
                    />
                    <div class="col-8">
                      <div class="row media-style">
                        <div class="row">
                          <span class="name-page">
                            <router-link
                              class="router-link-to-profile"
                              style="text-decoration: none"
                              :to="{
                                name: 'mypage',
                                params: { id: page.id },
                              }"
                              >{{ page.name }} <br />
                            </router-link>
                          </span>
                        </div>
                        <span class="text-muted total-member"
                          >{{ page.TotalMember }} members</span
                        >
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <!-- End my page -->
            </div>
            <div v-show="!mypages.length" class="text-center">
              {{ $t("No Found Any page Yet") }}
            </div>
          </div>
          <div v-else>
            <SkeletonMyPageComponent></SkeletonMyPageComponent>
          </div>
        </div>
        <!-- End div row My Pages -->
      </div>
      <!-- Start Sidebar left -->
    </div>

    <!-- Start div show pages  -->
    <div class="col-8">
      <div class="row tab-filter-pages">
        <div class="profile-details">
          <div class="row-my-page">
            <!-- Start div row My Pages -->
            <div class="row align-items-center mt-2 margin-style-mypage style-shadow">
              <div class="">
                <div class="d-flex">
                  <!-- Buttons in sidebar  -->
                  <div class="row align-items-center">
                    <!-- Start button add new page -->

                    <div class="mt-2">
                      <div class="">
                        <button
                          @click="addpage()"
                          class="text-center btn btn-outline-info page-home-tab"
                        >
                          {{ $t("Add New Page") }}
                        </button>
                      </div>
                    </div>
                    <!-- End button add new page -->
                  </div>
                  <!--End Buttons sidebar  -->
                </div>
              </div>

              <div class="col-md-8 left_box_info mt-2 margin-style">
                <p class="fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25.616"
                    viewBox="0 0 25 28.616"
                  >
                    <g id="pages-svgrepo-com" transform="translate(0.5)">
                      <path
                        id="Path_113"
                        data-name="Path 113"
                        d="M18.769.5H6.115A3.626,3.626,0,0,0,2.5,4.115V20.385A3.626,3.626,0,0,0,6.115,24H18.769a3.626,3.626,0,0,0,3.615-3.615V4.115A3.626,3.626,0,0,0,18.769.5Z"
                        transform="translate(1.615 0)"
                        fill="#00a79d"
                        stroke="#00a79d"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_114"
                        data-name="Path 114"
                        d="M4.115,2.5A3.626,3.626,0,0,0,.5,6.115V20.577A5.326,5.326,0,0,0,5.923,26H16.769a3.626,3.626,0,0,0,3.615-3.615"
                        transform="translate(0 1.615)"
                        fill="none"
                        stroke="#00a79d"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                  &nbsp;<span class="text-my-page">{{ $t("My Pages") }}</span>
                </p>
              </div>

              <div class="loading" v-if="!loading_my_page">
                <div class="mb-4 margin-style">
                  <!-- Start my page -->
                  <div
                    v-for="(page, index) in mypages"
                    :key="index"
                    :page="page"
                    class="page-box mb-2"
                  >
                    <router-link
                      class="router-link-to-profile"
                      style="text-decoration: none"
                      :to="{
                        name: 'mypage',
                        params: { id: page.id },
                      }"
                    >
                      <div class="row">
                        <img
                          class="page-img"
                          v-if="page.has_media_profile === false"
                          src="@/assets/page/pagecover.png"
                          alt=""
                        />
                        <img
                          class="page-img"
                          v-else-if="page.media[0].collection_name === 'profile'"
                          :src="page.media[0].src_url"
                          alt=""
                        />
                        <img
                          class="page-img"
                          v-else-if="page.media[1].collection_name === 'profile'"
                          :src="page.media[1].src_url"
                          alt=""
                        />

                        <div class="col-8">
                          <div class="row media-style">
                            <div class="row">
                              <span class="name-page">
                                <router-link
                                  class="router-link-to-profile"
                                  style="text-decoration: none"
                                  :to="{
                                    name: 'mypage',
                                    params: { id: page.id },
                                  }"
                                  >{{ page.name }} <br />
                                </router-link>
                              </span>
                            </div>
                            <span class="text-muted total-member"
                              >{{ page.TotalMember }} members</span
                            >
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <!-- End my page -->
                </div>
                <div v-show="!mypages.length" class="text-center">
                  {{ $t("No Found Any page Yet") }}
                </div>
              </div>
              <div v-else>
                <SkeletonMyPageComponent></SkeletonMyPageComponent>
              </div>
            </div>
            <!-- End div row My Pages -->
          </div>
        </div>
        <div class="profile-details mt-2">
          <div class="container">
            <ul class="nav mb-3" id="pills-tab" role="tablist">
              <li class="nav-item margin-style" role="presentation">
                <button
                  class="nav-link active text-center btn btn-outline-info page-home-tab"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  {{ $t("Pages Descover") }}
                </button>
              </li>
              &nbsp; &nbsp;
              <li class="nav-item margin-style" role="presentation">
                <button
                  class="nav-link text-center btn btn-outline-info page-home-tab"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  {{ $t("Liked Pages") }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row tab-filter-pages">
        <!-- Start Content tab -->
        <div class="tab-content" id="pills-tabContent">
          <!-- Start  Page discovert -->
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="detail">
              <div class="row">
                <div class="col-12">
                  <br />

                  <p class="pw-blod">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="25.616"
                      viewBox="0 0 25 28.616"
                    >
                      <g id="pages-svgrepo-com" transform="translate(0.5)">
                        <path
                          id="Path_113"
                          data-name="Path 113"
                          d="M18.769.5H6.115A3.626,3.626,0,0,0,2.5,4.115V20.385A3.626,3.626,0,0,0,6.115,24H18.769a3.626,3.626,0,0,0,3.615-3.615V4.115A3.626,3.626,0,0,0,18.769.5Z"
                          transform="translate(1.615 0)"
                          fill="#00a79d"
                          stroke="#00a79d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                        />
                        <path
                          id="Path_114"
                          data-name="Path 114"
                          d="M4.115,2.5A3.626,3.626,0,0,0,.5,6.115V20.577A5.326,5.326,0,0,0,5.923,26H16.769a3.626,3.626,0,0,0,3.615-3.615"
                          transform="translate(0 1.615)"
                          fill="none"
                          stroke="#00a79d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    &nbsp;
                    <b class="text-my-page"> {{ $t("Pages Descover") }}</b>
                  </p>
                  <!-- Start div filter by pages cover  -->
                  <div class="col-12 p-0 m-0 right" v-if="!loading">
                    <div class="row card-group">
                      <div
                        class="col-lg-3 mb-4"
                        v-for="(item1, index1) in notlikedpages"
                        :key="index1"
                      >
                        <div class="card">
                          <router-link
                            class="router-link-to-profile"
                            style="text-decoration: none"
                            :to="{
                              name: 'page',
                              params: { id: item1.id },
                            }"
                          >
                            <img
                              v-if="item1.has_media_cover == false"
                              src="@/assets/page/pagecover.png"
                              class="card-img-top"
                            />

                            <img
                              v-else-if="item1.media[0].collection_name == 'cover'"
                              :src="item1.media[0].src_url"
                              class="card-img-top"
                            />
                            <img
                              v-else-if="item1.media[1].collection_name == 'cover'"
                              :src="item1.media[1].src_url"
                              class="card-img-top"
                            />
                          </router-link>
                          <div
                            class="card-footer d-flex justify-content-between align-items-center"
                          >
                            <small>
                              <router-link
                                class="router-link-to-profile"
                                style="text-decoration: none"
                                :to="{
                                  name: 'page',
                                  params: { id: item1.id },
                                }"
                              >
                                {{ item1.name }}</router-link
                              >
                            </small>
                            <!-- <small class="text-muted"
                                  >{{ item1.TotalMember }} member</small
                                > -->
                            <button class="btn" @click="Like(item1.id)">
                              {{ $t("Like") }}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div v-show="!notlikedpages.length" class="text-center">
                        {{ $t("No Found Any page Yet") }}
                      </div>
                    </div>
                  </div>

                  <div v-else>
                    <PageSkeltonComponent />
                  </div>
                  <div
                    class="text-center mb-5 py-4"
                    v-if="lastpageindontlikepage > pageindontlikepage"
                  >
                    <button
                      class="btn load-more-page page-home-tab"
                      @click="LoadMoreDontLikePage"
                    >
                      <span>Load More</span>
                    </button>
                  </div>
                  <!-- end div filter by pages cover  -->
                </div>
              </div>
            </div>
          </div>
          <!-- End Page discover -->

          <!-- Start Page that i like it -->
          <div
            class="tab-pane fade mb-5"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div class="detail">
              <div class="row">
                <div class="col-12">
                  <br />
                  <p class="pw-blod">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="25.616"
                      viewBox="0 0 25 28.616"
                    >
                      <g id="pages-svgrepo-com" transform="translate(0.5)">
                        <path
                          id="Path_113"
                          data-name="Path 113"
                          d="M18.769.5H6.115A3.626,3.626,0,0,0,2.5,4.115V20.385A3.626,3.626,0,0,0,6.115,24H18.769a3.626,3.626,0,0,0,3.615-3.615V4.115A3.626,3.626,0,0,0,18.769.5Z"
                          transform="translate(1.615 0)"
                          fill="#00a79d"
                          stroke="#00a79d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                        />
                        <path
                          id="Path_114"
                          data-name="Path 114"
                          d="M4.115,2.5A3.626,3.626,0,0,0,.5,6.115V20.577A5.326,5.326,0,0,0,5.923,26H16.769a3.626,3.626,0,0,0,3.615-3.615"
                          transform="translate(0 1.615)"
                          fill="none"
                          stroke="#00a79d"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                    &nbsp;
                    <b class="text-my-page"> {{ $t("Pages That I Like It") }}</b>
                  </p>

                  <div class="col-12 p-0 m-0 right">
                    <div class="row card-group">
                      <div
                        class="col-lg-3 mb-4"
                        v-for="(item, index) in mylikedpages"
                        :key="index"
                      >
                        <div class="card">
                          <router-link
                            class="router-link-to-profile"
                            style="text-decoration: none"
                            :to="{
                              name: 'page',
                              params: { id: item.id },
                            }"
                          >
                            <img
                              v-if="item.has_media_cover == false"
                              src="@/assets/page/pagecover.png"
                              class="card-img-top"
                            />
                            <img
                              v-else-if="item.media[0].collection_name == 'cover'"
                              :src="item.media[0].src_url"
                              class="card-img-top"
                            />
                            <img
                              v-else-if="item.media[1].collection_name == 'cover'"
                              :src="item.media[1].src_url"
                              class="card-img-top"
                            />
                          </router-link>
                          <div
                            class="card-footer d-flex justify-content-between align-items-center"
                          >
                            <small class="text-muted">{{ item.name }}</small>
                            <button class="btn" @click="Like(item.id)">
                              {{ $t("unLike") }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-center" v-if="lastpageinlikepage > pageinlikepage">
                      <button
                        class="btn load-more-page page-home-tab"
                        @click="LoadMoreLikePage"
                      >
                        <span>Load More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Page that i like it -->
        </div>
        <!-- End  Content Tab -->
      </div>
    </div>
    <!-- End div show pages -->
  </div>
</template>

<script>
import PageSkeltonComponent from "@/components/PageComponent/PageSkeltonComponent.vue";
import { mapActions, mapState } from "vuex";
import pageServices from "@/services/Pages/page.services";
import SkeletonMyPageComponent from "./SkeletonMyPageComponent.vue";
export default {
  name: "PagesComponent",
  data() {
    return {
      loading: null,
    };
  },
  methods: {
    LoadMoreDontLikePage() {
      this.GET_NEXT_IN_DONT_LIKE_PAGE();
    },
    LoadMoreLikePage() {
      this.GET_NEXT_IN_LIKE_PAGE();
    },
    ...mapActions({
      getmylikedpages: "page/getmylikedpages",
      getmynotlikedpages: "page/getmynotlikedpages",
      UPDATE_PAGE_TO_LIKE: "page/UPDATE_PAGE_TO_LIKE",
      GET_NEXT_IN_DONT_LIKE_PAGE: "page/GET_NEXT_IN_DONT_LIKE_PAGE",
      GET_NEXT_IN_LIKE_PAGE: "page/GET_NEXT_IN_LIKE_PAGE",
      getmypages: "page/getmypages",
    }),
    async Like(id) {
      pageServices.ToogleLikePage(id).then((response) => {
        // console.log("r", response.data.data)
        if (response.data.data != null) {
          // console.log("not null")
          const data = [id, response.data.data];
          this.UPDATE_PAGE_TO_LIKE(data);
        }
      });
    },

    async get_all() {
      this.loading = true;
      await this.getmylikedpages(), await this.getmynotlikedpages();
      this.loading = null;
    },
    getNextData() {
      this.GET_NEXT();
    },
    addpage() {
      this.$router.push({ name: "addpage" });
    },
  },
  created() {
    this.getmypages();
    this.get_all();
  },
  computed: {
    ...mapState("page", {
      mylikedpages: "mylikedpages",
      notlikedpages: "notlikedpages",
      isModal: "isModal",
      pageindontlikepage: "pageindontlikepage",
      lastpageindontlikepage: "lastpageindontlikepage",
      pageinlikepage: "pageinlikepage",
      lastpageinlikepage: "lastpageinlikepage",
      mypages: "mypages",
      loading_my_page: "loading_my_page",
    }),
  },
  components: {
    PageSkeltonComponent,
    SkeletonMyPageComponent,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.left {
  min-height: 100vh;
  padding: 1rem 1rem !important;

  .left_box_info {
    p {
      font-size: 15px !important;
    }
  }
}

.mobile {
  display: none !important;
}

@media screen and (min-width: 992px) {
  .row-my-page {
    display: none !important;
  }
}
@media screen and (max-width: 992px) {
  .left {
    display: none !important;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1600px) {
  .left {
    background-color: #ddd;
    min-height: 100vh;
    padding: 2rem 1rem;

    .left_box {
      margin-bottom: 2rem;

      .left_box_img {
        text-align: center;
      }

      .left_box_info {
        margin-left: 2.1rem;
        width: 60% !important;
        font-size: 15px;
      }
    }
  }
}

@media screen and (min-width: 993px) and (max-width: 1279px) {
  .left {
    // background-color:#F3F3F3;
    min-height: 100vh;
    padding: 2rem 1rem;

    .left_box_info {
      p {
        font-size: 15px !important;
      }
    }

    button {
      font-size: 13px !important;
    }
  }
}

.style-btn {
  background-color: rgba(115, 119, 118, 0.37);
}
.style-btn:hover {
  background-color: rgba(127, 133, 131, 0.37);
}

//
.right::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.right {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.right {
  overflow-y: auto !important;
  width: 100%;
  position: inherit;
  right: 0;
  height: 100vh !important;

  .card-group {
    .card {
      .card-img-top {
        object-fit: fill;
        height: 100px !important;
      }
    }
  }
}

.right:lang(ar) {
  left: 0 !important;
}

@media screen and (max-width: 992px) {
  .right {
    padding: 2rem 0.5rem 0 0.5rem !important;
    position: relative;
    overflow: auto;
    position: inherit;
    top: 5%;
    right: 0;
    bottom: 0;
    width: 100% !important;
  }
}

@media screen and (max-width: 300px) {
  .right {
    padding: 2rem 0.5rem 0 0.5rem !important;
    position: relative;
    overflow: auto;
    position: fixed;
    top: 5%;
    right: 0;
    bottom: 0;
    width: 100% !important;

    .page-media {
      width: 100%;
      position: relative;
      //height: 300px;

      .page-cover {
        width: 100%;
        object-fit: cover;
        height: 300px !important;
        border-radius: 10px !important;
      }

      .page-profile {
        position: absolute;
        top: 250px;
        right: 20px !important;
        width: 70px !important;
        height: 70px !important;
        border-radius: 50%;
        object-fit: cover;
        z-index: 999;
      }

      .title {
        font-style: italic;
      }
    }
  }
}

.profile-details {
  background-color: white;
  border-radius: 4px;
}

.sidebar-button {
  float: right;
}
//

.page-box {
  padding: 6px 0rem 7px 5px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 2px #ccc;

  .page-img {
    width: 32%;
    height: 50px;

    border-radius: 20%;
  }
}
.form-group span a {
  color: black;
}

.mt-2 {
  background-color: white;
}
.margin-style {
  margin-right: 2px;
  margin-bottom: 3px;
}
.align-items-center {
  padding: 0px 8px;
}
.margin-style-mypage {
  margin: 0px -4px 0px -4px;
  padding: 7px 10px;
}
.margin-style:lang(ar) {
  float: right;
}
.form-group span a:lang(ar) {
  color: black;
  margin: 5%;
}
.style-shadow {
  box-shadow: 0px 0px 4px 2px #ccc;
  background-color: white;
  border-radius: 4px;
}
.total-member {
  font-size: 71%;
}
.name-page {
  color: black;
  font-size: 90%;
  font-weight: 500;
}
.name-page:lang(ar) {
  color: black;
  font-size: 90%;
  margin: 0px 0px 0px 20px;
  font-weight: 500;
}
.page-box:lang(ar) {
  padding: 10px 1rem 20px 15px;
}
.page-box:hover {
  background: #eee;
  border-color: #111;
}
.r-div {
  background-color: #ddd;
}
.page-home-tab {
  color: black;
  font-size: small;
  border-radius: 0 10px;
  font-weight: 500;
}

.tab-filter-pages {
  background: white;
  margin: 3% -2%;
  border-radius: 4px;
}
a {
  color: #111;
}

.text-my-page {
  background: -webkit-linear-gradient(#1d0, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.card:hover {
  background: #eee;
}

.load-more-page {
  background-image: linear-gradient(#00a79d, #2bb673) !important;
}
</style>

<template>
  <div class="col-lg-8 right">
    <div v-if="pagedetail != null" class="page-media">
      <!-- Start Cover -->
      <div class="profile-cover">
        <img
          class="cover-img"
          v-if="pagedetail.has_media_cover === false"
          src="@/assets/page/pagecover.png"
          alt=""
        />
        <img
          class="cover-img"
          v-else-if="pagedetail.media[0].collection_name === 'cover'"
          :src="pagedetail.media[0].src_url"
          alt=""
        />
        <img
          class="cover-img"
          v-else-if="pagedetail.media[1].collection_name === 'cover'"
          :src="pagedetail.media[1].src_url"
          alt=""
        />
      </div>
      <!-- End Cover -->
      <!-- Start  div page info as name image  -->
      <div class="profile-details">
        <div class="pd-left">
          <div class="pd-row" style="position: relative">
            <!-- Start image page -->
            <img
              class="pd-image"
              v-if="pagedetail.has_media_profile === false"
              src="@/assets/page/pageprofile.png"
              alt=""
            />
            <img
              class="pd-image"
              v-else-if="pagedetail.media[0].collection_name === 'profile'"
              :src="pagedetail.media[0].src_url"
              alt="Page image"
            />
            <img
              class="pd-image"
              v-else-if="pagedetail.media[1].collection_name === 'profile'"
              :src="pagedetail.media[1].src_url"
              alt=""
            />
            <!-- End image page -->

            <!-- <button
                  style="
                    position: absolute;
                    bottom: -20px;
                    border: 1px solid #777;
                    cursor: pointer;
                    font-size: 12px;
                    padding: 0 5px;
                    background-color: #777;
                    color: white;
                  "
                  class="btn btn_ar btn-edit-profile"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropProfile"
                >
                  {{ $t("Edit image") }}
                </button> -->

            <div>
              <h3>{{ pagedetail.name }}</h3>
              <p>{{ pagedetail.TotalMember }} {{ $t("Member") }}</p>
            </div>
          </div>
        </div>

        <div class="pd-right">
          <!-- <button
                v-if="pagedetail.liked.length > 0"
                @click="Like(pagedetail.id)"
              >
                {{ $t("unLike") }}
              </button>
              <button @click="Like(pagedetail.id)" v-else>
                {{ $t("Like") }}
              </button> -->
        </div>
      </div>
      <!-- End  div page info as name image  -->

      <div class="mt-2 ps-3">
        <AddpostComponent
          :img="pagedetail"
          :id="id"
          v-on:getpostsinpage="getpostsinpage(id)"
        />
      </div>
      <div v-if="loadingposts">
        <PostComponent
          class="ps-3"
          v-for="(post, index) in pageposts"
          :key="index"
          :pagedetail="pagedetail"
          :post="post"
          v-on:getpostsinpage="getpostsinpage(id)"
        />
      </div>
      <div v-else>
        <skelton-component />
      </div>
    </div>

    <div
      v-else
      class="col-md-12 col-lg-8 center_loading pe-5 pt-5 justify-content-center d-flex align-items-center"
    >
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import AddpostComponent from "@/components/PageComponent/MyPageComponent/AddpostComponent.vue";
import PostComponent from "./PostComponent.vue";
import SkeltonComponent from "@/components/HomeComponent/SkeltonComponent.vue";
import pageServices from "@/services/Pages/page.services";
export default {
  name: "RightPageComponent",
  props: ["id"],
  data() {
    return {
      pagedetail: null,
      pageposts: [],
      loadingposts: null,
    };
  },
  methods: {
    async getpagedetail(id) {
      await pageServices.GetPageDetail(id).then((response) => {
        this.pagedetail = response.data.data;
        console.log(response.data.data);
      });
    },
    async getpostsinpage(id) {
      await pageServices.GetPagePosts(id).then((response) => {
        this.pageposts = [];
        response.data.data.items.forEach((doc) => {
          this.pageposts.push(doc);
        });
        this.loadingposts = true;
      });
    },
  },
  created() {
    this.getpagedetail(this.id);
    this.getpostsinpage(this.id);
  },
  computed: {},
  components: { AddpostComponent, PostComponent, SkeltonComponent },
};
</script>

<style lang="scss" scoped>
.right {
  padding: 2rem 0.5rem 0 2.5rem !important;
  min-height: 100vh !important;
  .page-media {
    width: 100%;
    position: relative;
    //height: 300px;

    // .page-cover {
    //     width: 100%;
    //     object-fit: cover;
    //     height: 300px !important;
    //     border-radius: 10px !important;
    // }
    .page-cover {
      width: 100%;
      height: 20rem;
      border-radius: 6px;
      // margin-bottom: 14px;
    }

    .page-profile {
      position: absolute;
      top: 250px;
      right: 50px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      z-index: 999;
    }

    .title {
      font-style: italic;
    }
  }
}

@media screen and (max-width: 992px) {
  .right {
    padding: 2rem 0.5rem 0 0.5rem !important;
    width: 100% !important;
  }
}

@media screen and (max-width: 300px) {
  .right {
    padding: 2rem 0.5rem 0 0.5rem !important;
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
.page-profile:lang(ar) {
  direction: ltr;
}
.right .page-media .page-profile:lang(ar) {
  right: 80%;
  position: absolute;
  top: 250px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.profile-details {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 6px;
}

.pd-row {
  display: flex;
  align-items: flex-start;
}

.pd-image {
  width: 70px;
  height: 60px;
  margin-right: 20px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.pd-row div h3 {
  font-size: 25px;
  font-weight: 600;
  margin: 5px;
}

.pd-row div p {
  font-size: 13px;
  margin: 2px;
}

.pd-row div img {
  width: 25px;
  border-radius: 50%;
  margin-top: 12px;
}

.pd-right button {
  background: #1876f2;
  border: 0;
  outline: 0;
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  color: #fff;
  border-radius: 15px;
  margin-left: 10px;
  cursor: pointer;
  margin: 2px;
  padding: 4px 45px;
}

.pd-right button img {
  height: 15px;
  margin-right: 10px;
}

.pd-right {
  text-align: right;
}

.pd-right a img {
  width: 20px;
}
.cover-img {
  width: 100%;
  height: 25rem;
  border-radius: 6px;
  // margin-bottom: 14px;
}
.cover-img {
  height: 20rem;
}

.address {
  font-size: 20px;
}
.text-image {
  margin: 10px 8px;
}
</style>

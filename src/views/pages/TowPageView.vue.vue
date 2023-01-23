<template>
  <div
    dir="auto"
    class="row m-0 justify-content-center"
    style="background-color: #f3f3f3; min-height: calc(100vh -55px) !important"
  >
    <div class="col-lg-8">
      <div v-if="pagedetail != null" class="page-media">
        <div>
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
              <button
                v-if="pagedetail.liked.length > 0"
                @click="Like(pagedetail.id)"
              >
                {{ $t("unLike") }}
              </button>
              <button @click="Like(pagedetail.id)" v-else>
                {{ $t("Like") }}
              </button>
            </div>
          </div>
          <!-- End  div page info as name image  -->
        </div>
      </div>
      <div v-else>
        <SkeltonPageProfileComponent />
      </div>
      <div class="profile-details">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              {{ $t("Posts") }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              {{ $t("AllImages") }}
            </button>
          </li>
          <!-- <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                    </li> -->
        </ul>
    </div>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div class="detail mt-5">
          <div class="row">
            <div class="col-lg-4">
              <div v-if="pagedetail.page_details" class="top mb-2">
                <div>
                  <h4>{{ $t("Description") }}</h4>
                  <p v-if="pagedetail.page_details.description != null">
                    {{ pagedetail.page_details.description }}
                  </p>
                </div>
                <div
                 
                >
                  <h4>{{ $t("Category") }}</h4>
                  <p class="ms-1">{{ pagedetail.category }}</p>
                </div>
                <div>
                  <b class="address">{{ $t('Address') }}: </b>
                  <span class="ms-1" v-if="pagedetail.page_details.address != null">
                    {{ pagedetail.page_details.address }}
                  </span>
                </div>
                <div v-if="pagedetail.page_details.hours_worked == 2">
                  <h5 class="text-muted">{{ $t("Open always") }}</h5>
                </div>
                <div v-else-if="pagedetail.page_details.hours_worked == 1">
                  <h5 class="text-muted">{{ $t("Closed always") }}</h5>
                </div>
              </div>
              <div class="bottom ">
                <h5 class="text-image">{{ $t("Images") }}</h5>
                <div 
                  v-if="allimages.length == 0"
                  class=""
                >
                <div v-show="allimages.length == 0" class="text-center">{{ $t("No Found Any Post Yet") }} </div>
                  <!-- <button>Show All Images</button> -->
                </div>
                <div
                  v-for="(item, index) in allimages.slice(0, 9)"
                  :key="index"
                  style="display: inline-block"
                >
                  <img :src="item.src_url" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div v-if="loadingpost">
                <PostComponent
                  class="ps-3"
                  v-for="(post, index) in pageposts"
                  v-on:getpostsinpage="getpostsinpage(pagedetail.id)"
                  :key="index"
                  :post="post"
                />
              </div>
              <div v-else>
                <SkeltonComponent />
              </div>
              <div v-show="pageposts.length == 0" class="text-center">No found any Post Yet </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade mb-5"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <div
          v-for="(item, index) in allimages.slice(0, 20)"
          :key="index"
          style="display: inline-block"
        >
          <img
            style="
              width: 180px;
              height: 180px;
              border: 1px solid #777;
              margin: 2px;
            "
            :src="item.src_url"
            alt=""
          />
        </div>
      </div>
      <!-- <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">..333.</div> -->
    </div>
    </div>
  </div>
</template>

<script>
import SkeltonComponent from "@/components/HomeComponent/SkeltonComponent.vue";
import PostComponent from "@/components/PageComponent/PostComponent.vue";
import pageServices from "@/services/Pages/page.services";
import { useRoute } from "vue-router";
import SkeltonPageProfileComponent from "@/components/PageComponent/SkeltonPageProfileComponent.vue";
import { mapActions } from "vuex";
export default {
  name: "TowPageView",
  data() {
    return {
      pagedetail: null,
      pageposts: [],
      loadingpost: null,
      allimages: [],
      id: useRoute().params.id,
    };
  },
  methods: {
    async Like(id) {
      pageServices.ToogleLikePage(id).then((response) => {
        console.log(response.data.data);
        if (response.data.data != null) {
          const data = [null, response.data.data];
          this.UPDATE_PAGE_TO_LIKE(data);
          this.pagedetail.liked.push(response.data.data);
        } else {
          const data = [id, null];
          this.UPDATE_PAGE_TO_LIKE(data);
          this.pagedetail.liked = [];
        }
      });
    },
    async getpagedetail(id) {
      await pageServices.GetPageDetail(id).then((response) => {
        // console.log(response.data.data)
        this.pagedetail = response.data.data;
      });
      console.log(this.pagedetail);
    },
    async getpostsinpage(id) {
      await pageServices.GetPagePosts(id).then((response) => {
        this.pageposts = [];
        response.data.data.items.forEach((doc) => {
          this.pageposts.push(doc);
          if (doc.media.length > 0) {
            doc.media.forEach((media) => {
              if (media.media_type == "Image") {
                this.allimages.push(media);
              }
            });
          }
        });
        this.loadingpost = true;
        // console.log(this.pageposts)
        // console.log(this.allimages)
      });
    },
    ...mapActions({
      UPDATE_PAGE_TO_LIKE: "page/UPDATE_PAGE_TO_LIKE",
    }),
  },
  created() {
    this.getpagedetail(this.id);
    this.getpostsinpage(this.id);
  },

  components: {
    PostComponent,
    SkeltonComponent,
    SkeltonPageProfileComponent,
  },
};
</script>

<style lang="scss" scoped>
.router-link-to-profile {
  text-decoration: none;
  color: #111;
}
.page-media {
  width: 100%;
  position: relative;

  .page-cover {
    width: 100%;
    object-fit: cover;
    height: 300px !important;
    border-radius: 10px !important;
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
.page-profile:lang(ar) {
  direction: ltr;
}
.page-media .page-profile:lang(ar) {
  right: 80%;
  position: absolute;
  top: 250px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

#pills-tab {
  .nav-link {
    color: black;
  }

  .nav-link.active {
    color: white !important;
  }
}
#pills-tabContent {
  .detail .top {
    border: 1px solid rgb(175, 171, 171);
    padding: 1rem;
  }

  .detail .bottom {
    border: 1px solid rgb(175, 171, 171);
    margin-bottom: 1rem;
    padding-bottom: 1rem;


    h3 {
      padding: 0.5em 1rem;
    }

    img {
      width: 120px;
      height: 120px;
      border: 1px solid rgb(175, 171, 171);
      margin: 2px 5px;
    }
  }
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

.more-btn {
  background: #e4e6eb;
  border-radius: 3px;
  padding: 12px;
  width: 44px;
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
#pills-tabContent .detail .bottom{
    background-color: white;
}
#pills-tabContent .detail .top{
  background-color: white;
}
div#pills-tabContent{
    margin-top: 5px;
}
.address{
  font-size: 20px;
}
.text-image{
  margin: 10px 8px;
}
</style>

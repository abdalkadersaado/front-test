<template>
  <div class="col-lg-3 mt-4">
    <div class="mobile">
      <button
        class="btn btn-success"
        style="border-radius: 50%"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <font-awesome-icon icon="plus" />
      </button>

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="28.616"
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
          <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            {{ $t("Page Managment") }}
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="d-flex mt-5 justify-content-center">
          <button
            v-if="page_details != null"
            @click="editepagedetail()"
            class="text-center btn btn-success"
          >
            {{ $t("edit page detail") }}
          </button>
          <button
            v-else-if="page_details === null"
            @click="addpagedetail()"
            class="text-center btn btn-primary"
          >
            {{ $t("add page detail") }}
          </button>
        </div>

        <PageHourDetail v-if="!edit && page_details != null" :detail="page_details" />
        <EditePageDetail
          v-if="edit"
          :detail="page_details"
          v-on:editepagedetail="editepagedetail()"
          :id="id"
        />
        <AddPageDetail v-if="add" v-on:addpagedetail="addpagedetail()" :id="id" />
      </div>
    </div>
    <div class="left">
      <div class="row align-items-center">
        <div class="col-md-2 left_box_img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="28.616"
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
        </div>
        <div class="col-md-8 offset-lg-2 left_box_info">
          <p class="fw-bold">{{ $t("Page Managment") }}</p>
        </div>
      </div>

      <div class="">
        <!-- Start edit cover -->
        <div class="d-flex mt-3">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#editepagecover"
            class="text-center btn btn-outline-info"
          >
            {{ $t("edit page cover") }}
          </button>
          <div
            class="modal fade"
            id="editepagecover"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">
                    {{ $t("edit page cover") }}
                  </h5>
                  <button
                    type="button"
                    @click="close"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <label
                    style="cursor: pointer"
                    for="editcover"
                    class="d-flex align-items-center justify-content-center"
                  >
                    {{ $t("Upload Page Cover") }}
                    <font-awesome-icon class="icon ms-2" icon="fas fa-file-upload" />
                  </label>
                  <input
                    type="file"
                    id="editcover"
                    ref="editepagecover"
                    @change="onCoverFileChange"
                    hidden
                    accept="image/*"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    @click="close"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    {{ $t("Close") }}
                  </button>
                  <button
                    type="button"
                    :disabled="!cover_url"
                    @click="editepagecover(id)"
                    class="btn btn-primary"
                  >
                    {{ $t("Edit") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Edit Cover -->

        <!-- Start Edit Profile page  image -->
        <div class="d-flex mt-3">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#editepageprofile"
            class="text-center btn btn-outline-info"
          >
            {{ $t("edit page profile") }}
          </button>
        </div>

        <div
          class="modal fade"
          id="editepageprofile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  {{ $t("edit page profile") }}
                </h5>
                <button
                  type="button"
                  @click="close"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label
                  style="cursor: pointer"
                  for="editprofile"
                  class="d-flex align-items-center justify-content-center"
                >
                  {{ $t("Upload Page Profile") }}
                  <font-awesome-icon class="icon ms-2" icon="fas fa-file-upload" />
                </label>
                <input
                  type="file"
                  id="editprofile"
                  ref="editepageprofile"
                  @change="onProfileFileChange"
                  hidden
                  accept="image/*"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  @click="close"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  {{ $t("Close") }}
                </button>
                <button
                  type="button"
                  :disabled="!profile_url"
                  @click="editepageprofile(id)"
                  class="btn btn-primary"
                >
                  {{ $t("Edit") }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End edit profile page image -->

        <div class="d-flex mt-3">
          <button
            v-if="page_details != null"
            @click="editepagedetail()"
            class="text-center btn btn-outline-info"
          >
            {{ $t("edit page detail") }}
          </button>
          <button
            v-else-if="page_details === null"
            @click="addpagedetail()"
            class="text-center btn btn-outline-info"
            style="background-color: #"
          >
            {{ $t("add page detail") }}
          </button>
        </div>
      </div>

      <PageHourDetail v-if="!edit && page_details != null" :detail="page_details" />
      <EditePageDetail
        v-if="edit"
        :detail="page_details"
        v-on:editepagedetail="editepagedetail()"
        :id="id"
      />
      <AddPageDetail v-if="add" v-on:addpagedetail="addpagedetail()" :id="id" />
    </div>
  </div>
</template>

<script>
import PageHourDetail from "./PageHourDetail.vue";
import EditePageDetail from "./EditePageDetail.vue";
import AddPageDetail from "./AddPageDetail.vue";
import pageServices from "@/services/Pages/page.services";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuid } from "vue-uuid";
export default {
  name: "LeftPageComponent",
  data() {
    return {
      page_details: [],
      edit: null,
      add: null,
      cover_url: null,
      image_cover: null,
      profile_url: null,
      image_profile: null,
      datasender: {},
    };
  },
  props: ["id"],
  methods: {
    close() {
      this.datasender = {};
      this.profile_url = null;
      this.image_profile = null;
      this.cover_url = null;
      this.image_cover = null;
    },
    onProfileFileChange(e) {
      const file = e.target.files[0];
      this.profile_url = URL.createObjectURL(file);
      this.image_profile = this.$refs.editepageprofile.files[0];
    },
    async editepageprofile(id) {
      if (this.profile_url != null) {
        let item = null;
        let storage = getStorage();
        let unique_number = this.image_profile.name + uuid.v4();
        let storageRef = ref(storage, unique_number);
        await uploadBytes(storageRef, this.image_profile).then((snapshot) => {
          let meme = snapshot.metadata.contentType.split("/");
          item = {
            size: snapshot.metadata.size,
            media_type: meme[0],
            mime_type: meme[1],
          };
        });
        await getDownloadURL(storageRef).then((url) => {
          item.src_url = url;
          item.src_thum = url;
          item.src_icon = url;
        });
        this.datasender.page_profile = item;
      }

      await pageServices.EditePageProfile(id, this.datasender).then((response) => {
        this.datasender = {};
        this.profile_url = null;
        this.image_profile = null;
        this.page_details = response.data.dat;
        window.location.reload();
      });
    },
    onCoverFileChange(e) {
      const file = e.target.files[0];
      this.cover_url = URL.createObjectURL(file);
      this.image_cover = this.$refs.editepagecover.files[0];
    },
    async editepagecover(id) {
      if (this.cover_url != null) {
        let item = null;
        let storage = getStorage();
        let unique_number = this.image_cover.name + uuid.v4();
        let storageRef = ref(storage, unique_number);
        await uploadBytes(storageRef, this.image_cover).then((snapshot) => {
          let meme = snapshot.metadata.contentType.split("/");
          item = {
            size: snapshot.metadata.size,
            media_type: meme[0],
            mime_type: meme[1],
          };
        });
        await getDownloadURL(storageRef).then((url) => {
          item.src_url = url;
          item.src_thum = url;
          item.src_icon = url;
        });
        this.datasender.page_cover = item;
      }
      // this.$router.push({ name: "mypage", params: { id: id } });

      await pageServices.EditePageCover(id, this.datasender).then((response) => {
        this.datasender = {};
        this.cover_url = null;
        this.image_cover = null;
        this.page_details = response.data.dat;
        window.location.reload();
      });
    },
    async getpagedetail(id) {
      await pageServices.GetPageDetail(id).then((response) => {
        this.page_details = response.data.data.page_details;
      });
    },
    editepagedetail() {
      this.edit = !this.edit;
    },
    addpagedetail() {
      this.add = !this.add;
    },
  },
  computed: {},
  created() {
    this.getpagedetail(this.id);
  },
  components: { PageHourDetail, EditePageDetail, AddPageDetail },
};
</script>

<style lang="scss" scoped>
.left {
  min-height: 100vh;
  padding: 4rem 1rem !important;

  .left_box_info {
    p {
      font-size: 20px !important;
    }
  }
}

.mobile {
  display: none !important;
}

@media screen and (max-width: 992px) {
  .left {
    display: none !important;
  }
  .mobile {
    display: block !important;
    position: fixed !important;
    z-index: 99999 !important;
    top: 15px;
    left: 43%;

    #offcanvasExample {
      width: 100% !important;
      position: fixed;
      z-index: 222232 !important;
      top: 0px !important;
      left: 0 !important;
      padding: 1rem !important;
      overflow: scroll !important;
      padding-bottom: 2rem !important;
    }
  }
}

@media screen and (min-width: 1280px) and (max-width: 1600px) {
  .left {
    background-color: #f3f3f3;
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
.row {
  background-color: white;
}
.style-btn {
  background-color: rgba(115, 119, 118, 0.37);
}
.style-btn:hover {
  background-color: rgba(127, 133, 131, 0.37);
}

.row > * {
  background-color: white;
}
</style>

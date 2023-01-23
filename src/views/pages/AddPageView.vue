<template>
  <div
    dir="auto"
    class="row m-0 p-0 justify-content-center"
    style="background-color: #f3f3f3; min-height: calc(100vh - 72px) !important"
  >
    <div class="col-lg-8 right">
      <!-- Start Div media -->
      <div class="page-media">
        <div dir="auto">
          <!-- Start cover -->
          <img
            class="cover-img"
            v-if="!cover_url"
            src="@/assets/page/pagecover.png"
            alt=""
          />
          <img class="cover-img" v-if="cover_url" :src="cover_url" />
          <!-- End cover -->

          <!-- Start image profile -->
          <img
            class="page-profile"
            v-if="!profile_url"
            src="@/assets/page/pageprofile.png"
            alt=""
          />
          <img class="page-profile" v-if="profile_url" :src="profile_url" alt="" />
          <!-- End image profile -->

          <!-- Start div info -->
          <div class="info">
            <h6 v-if="!name" class="title">PAGE NAME</h6>
            <h6 v-else class="title">{{ name }}</h6>
          </div>
          <!-- End div info -->
        </div>
      </div>
      <!-- End Div media -->

      <!-- Start div information -->
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 left">
            <!-- start div row inforamtion -->
            <div class="row d-flex align-items-center">
              <div class="col-md-8 left_box_img">
                <h5 class="style-label">Create {{ $t("Information") }}</h5>
              </div>
            </div>
            <!-- End div row information  -->
            <div class="row">
              <form action="">
                <div class="row margin-style">
                  <div class="col-4">
                    <div class="row">
                      <h5 class="style-lable-size">{{ $t("Name") }} :</h5>
                      <input
                        class="vinput__add-input"
                        type="text"
                        dir="auto"
                        v-model="name"
                        :maxlength="maxLength"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-2"></div>
                  &nbsp;&nbsp;&nbsp;
                  <div class="col-4">
                    <div class="row">
                      <h5 class="style-lable-size">{{ $t("Category") }} :</h5>
                      <input
                        class="vinput__add-input"
                        type="text"
                        dir="auto"
                        required
                        v-model="category"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="">
                      <h5 class="style-lable-size">{{ $t("Page Cover") }} :</h5>
                      <div class="mt-2" v-if="!cover_url">
                        <!-- Add image button -->
                        <label for="upload" class="drop-container">
                          <span class="drop-title">Drop Cover Image here</span>
                          or
                          <!-- <input type="file" id="images" accept="image/*" required /> -->
                          <input
                            type="file"
                            id="upload"
                            ref="cover"
                            @change="onCoverFileChange"
                            accept="image/*"
                          />
                        </label>
                        <!-- End Image button -->
                      </div>
                      <div
                        v-else
                        class=""
                        style="cursor: pointer"
                        @click="deletephotocover()"
                      >
                        <img class="cover-img" v-if="cover_url" :src="cover_url" />
                        <button class="btn btn-sm btn-danger mt-2">
                          {{ $t("delete photo") }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="moooo">
                      <h5 class="style-lable-size">{{ $t("Page Profile") }} :</h5>
                      <div class="mt-2" v-if="!profile_url">
                        <input
                          type="file"
                          id="upload1"
                          ref="profile"
                          @change="onProfileFileChange"
                          hidden
                          accept="image/*"
                        />

                        <!-- Add image button -->
                        <label for="upload1" class="drop-container">
                          <span class="drop-title">Drop Profile image here</span>
                          or
                          <input
                            type="file"
                            id="upload1"
                            ref="profile"
                            @change="onProfileFileChange"
                            accept="image/*"
                          />
                        </label>
                        <!-- End Image button -->
                      </div>
                      <div
                        v-else
                        class=""
                        style="cursor: pointer"
                        @click="deletephotoprofile()"
                      >
                        <img
                          class="cover-img"
                          v-if="profile_url"
                          :src="profile_url"
                          alt=""
                        />
                        <button class="btn btn-sm btn-danger mt-2">
                          {{ $t("delete photo") }}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="!loading"
                  class="mt-5 justify-content-center d-flex align-items-center"
                >
                  <button
                    class="btn btn-success style-button"
                    @click.prevent="submit()"
                    :disabled="!this.name || !this.category"
                    type="submit"
                  >
                    {{ $t("Create") }}
                  </button>
                </div>

                <div
                  v-else
                  class="row mt-3 pe-5 justify-content-center d-flex align-items-center"
                >
                  <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End div inforamtion -->
    </div>
  </div>
</template>

<script>
import pageServices from "@/services/Pages/page.services";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuid } from "vue-uuid";
export default {
  name: "PageView",

  data() {
    return {
      name: null,
      cover_url: null,
      profile_url: null,
      category: null,
      image_cover: null,
      image_profile: null,
      loading: null,
      datasender: {},
      maxLength: 20,
    };
  },

  methods: {
    onCoverFileChange(e) {
      const file = e.target.files[0];
      this.cover_url = URL.createObjectURL(file);
      this.image_cover = this.$refs.cover.files[0];
    },
    onProfileFileChange(e) {
      const file = e.target.files[0];
      this.profile_url = URL.createObjectURL(file);
      this.image_profile = this.$refs.profile.files[0];
    },
    deletephotocover() {
      this.cover_url = null;
      this.image_cover = null;
    },
    deletephotoprofile() {
      this.profile_url = null;
      this.image_profile = null;
    },

    async submit() {
      this.loading = true;
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
      if (this.profile_url != null) {
        let storage = getStorage();
        let item1 = null;
        let unique_number = this.image_profile.name + uuid.v4();
        let storageRef = ref(storage, unique_number);
        await uploadBytes(storageRef, this.image_profile).then((snapshot) => {
          let meme = snapshot.metadata.contentType.split("/");
          item1 = {
            size: snapshot.metadata.size,
            media_type: meme[0],
            mime_type: meme[1],
          };
        });
        await getDownloadURL(storageRef).then((url) => {
          item1.src_url = url;
          item1.src_thum = url;
          item1.src_icon = url;
        });
        this.datasender.page_profile = item1;
      }
      await pageServices
        .AddPage(this.datasender, this.name, this.category)
        .then((response) => {
          // console.log(response.data.data.id)
          this.name = null;
          this.category = null;
          this.loading = null;
          this.datasender = {};
          // console.log(response.errorCode);
          this.$router.push({
            name: "mypage",
            params: { id: response.data.data.id },
          });
        });
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.left {
  min-height: 100vh;
  padding: 1rem 0 0 1.5rem;
  background-color: white;
  border-radius: 20px;
}

.right {
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
      box-shadow: 0px 0px 4px 2px #ccc;
    }

    .title {
      margin: 19px 20px 15px;
    }
  }
}
.left:lang(ar) {
  min-height: 100vh;
  padding: 2rem 20px 0px 2.6rem;
}
.cover-img {
  width: 100%;
  height: 20rem;
  border-radius: 6px;
  box-shadow: 0px 0px 4px 2px #ccc;
}
// Start style image button
.drop-container {
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 200px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 4px 2px #ccc;
  color: #444;
  cursor: pointer;
  transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
}

.drop-container:hover {
  background: #eee;
  border-color: #111;
}

.drop-container:hover .drop-title {
  color: #222;
}

.drop-title {
  color: #444;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  transition: color 0.2s ease-in-out;
}

input[type="file"] {
  width: 350px;
  max-width: 100%;
  color: #444;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #555;
  font-size: 10px;
}

input[type="file"]::file-selector-button {
  margin-right: 20px;
  border: none;
  background: #269e80;
  padding: 5px 10px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}
//
@media screen and (max-width: 992px) {
  .right .page-media .page-profile {
    position: absolute;
    top: 285px;
    right: 35px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 999;
    box-shadow: 0px 0px 4px 2px #ccc;
  }
}

//

input[type="file"]::file-selector-button {
  font-size: 10px;
}
input[type="file"]::file-selector-button:hover {
  background: rgb(56, 188, 227);
}
// End style image button
.margin-style {
  margin: 0px 0px 30px;
}

.vinput {
  $this: &;
  &__add-input {
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: 1px solid #eee;
    padding: 3px 0px 7px 10px;
    border-radius: 15px;
    transition: all 0.2s ease-out;
    box-shadow: 0px 0px 1px 1px #ccc;
    &:focus {
      border-color: #00a79d;
      & + #{$this} {
        &__add-button {
          background: #00a79d;
          color: white;
          transition: all 0.2 ease-in;
        }
      }
    }
  }
  &__add-block {
    margin-top: 15px;
    position: relative;
  }
}
.style-button {
  padding: 10px 100px 10px 100px;
  background: #269e80;
  box-shadow: 0px 0px 4px 2px #ccc;
}
//div inmage profiel
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
//
.style-label {
  background: -webkit-linear-gradient(#1d0, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.style-lable-size {
  font-size: 80%;
}
.moooo {
  padding: 0px 10px 0px 0px;
}
</style>

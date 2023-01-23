<template>
  <!-- profile -->
  <div class="profile-container">
    <img
      v-if="this.userInformation.has_media_cover === false"
      class="cover-img"
      src="@/assets/cover/images.jpg"
      alt="User Profile Image"
    />
    <img
      v-else-if="this.userInformation.has_media_cover === true"
      class="cover-img"
      :src="userInformation.media[1].src_url"
      alt="Cover Profile Image"
    />

    <div class="profile-details">
      <div class="pd-left">
        <div class="pd-row">
          <img
            v-if="this.userInformation.has_media_profile === false"
            src="@/assets/cover/user-13.jpg"
            class="pd-image"
            alt="personal profile photo"
          />
          <img
            v-else-if="this.userInformation.has_media_profile === true"
            :src="this.userInformation.media[0].src_url"
            class="pd-image"
            alt="personal profile photo"
          />

          <div>
            <h3>{{ this.userInformation.full_name }}</h3>
            <p>100 friends - 20 mutual</p>
            <img src="@/assets/cover/user-13.jpg" alt="" />
            <img src="@/assets/cover/user-13.jpg" alt="" />
            <img src="@/assets/cover/user-13.jpg" alt="" />
            <img src="@/assets/cover/user-13.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="pd-right">
        <friendship-component></friendship-component>
        <button type="button">
          <img src="@/assets/images/message.png" alt="" /> {{ $t("Message") }}
        </button>
      </div>
    </div>
    <div class="profile-details" style="margin: 1px">
      <!--  -->
      <div class="container">
        <ul class="tabs-choose">
          <li
            @click="activeTab = '1'"
            :class="[activeTab === '1' ? 'active' : '']"
          >
            {{ $t("Timeline") }}
          </li>
          <li
            @click="activeTab = '2'"
            :class="[activeTab === '2' ? 'active' : '']"
          >
            {{ $t("About") }}
          </li>
          <li
            @click="activeTab = '3'"
            :class="[activeTab === '3' ? 'active' : '']"
          >
            {{ $t("Friends") }}
          </li>
          <li
            @click="activeTab = '4'"
            :class="[activeTab === '4' ? 'active' : '']"
          >
            {{ $t("Photos") }}
          </li>
          <li
            @click="activeTab = '5'"
            :class="[activeTab === '5' ? 'active' : '']"
          >
            {{ $t("Videos") }}
          </li>
        </ul>
      </div>
      <!--  -->
    </div>
    <div class="tabs-content">
      <div class="content-one" v-if="activeTab === '1'">
        <div class="profile-info">
          <div class="info-col">
            <div
              class="profile-intro"
              v-if="this.userInformation.publicdetail != null"
            >
              <div class="loading-info" v-if="!loading_info">
                <h3>{{ $t("Biography") }}</h3>
                <p class="intro-text" v-if="this.userInformation.length != 0">
                  <span
                    v-if="this.userInformation.publicdetail[2].details.value"
                    >{{ this.userInformation.publicdetail[2].details.value }}
                    <img src="@/assets/images/feeling.png"
                  /></span>
                  <span v-else class="text-center">
                    {{ $t("no value specified") }}</span
                  >
                </p>
                <hr />
                <ul v-if="this.userInformation.length != 0">
                  <div v-for="job in userInformation.jobs" :key="job.id">
                    <div v-if="job.status == 1">
                      <li>
                        <img
                          src="@/assets/images/profile-job.png"
                          alt=""
                          class="rtl-details"
                        />
                        <span class="details-margin"
                          >{{ job.title }} in {{ job.location }}</span
                        >
                      </li>
                    </div>
                  </div>
                  <div v-for="study in userInformation.studies" :key="study.id">
                    <div v-if="study.status == 1">
                      <li>
                        <img
                          src="@/assets/images/profile-study.png"
                          alt=""
                          class="rtl-details"
                        />
                        <span class="details-margin"
                          >{{ study.name }} in {{ study.location }}</span
                        >
                      </li>
                    </div>
                  </div>
                  <li>
                    <img
                      src="@/assets/images/profile-home.png"
                      alt=""
                      class="rtl-details"
                    />
                    <span class="details-margin">{{
                      this.$i18n.t(this.userInformation.publicdetail[1].key_en)
                    }}</span>

                    :&nbsp;
                    <span
                      v-if="this.userInformation.publicdetail[1].details.value"
                      class="details-margin"
                      >{{
                        this.userInformation.publicdetail[1].details.value
                      }}</span
                    >
                    <span v-else class="details-margin">
                      {{ $t("no value specified") }}</span
                    >
                  </li>
                  <li>
                    <img
                      src="@/assets/images/profile-location.png"
                      alt=""
                      class="rtl-details"
                    />
                    <span class="details-margin">{{
                      this.$i18n.t(this.userInformation.publicdetail[0].key_en)
                    }}</span>
                    :&nbsp;
                    <span
                      v-if="this.userInformation.publicdetail[0].details.value"
                      class="details-margin"
                      >{{
                        this.userInformation.publicdetail[0].details.value
                      }}</span
                    >
                    <span v-else class="details-margin">
                      {{ $t("no value specified") }}</span
                    >
                  </li>
                  <li>
                    <b>{{
                      this.$i18n.t(this.userInformation.publicdetail[3].key_en)
                    }}</b>
                    :
                    {{ this.userInformation.publicdetail[3].details.value }}
                  </li>
                </ul>
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
            <div class="profile-intro">
              <div class="title-box">
                <h3>{{ $t("Photos") }}</h3>
                <a href="">{{ $t("All Photos") }}</a>
              </div>

              <div class="photo-box">
                <div><img src="@/assets/cover/2.jpg" alt="" /></div>
                <div><img src="@/assets/cover/2.jpg" alt="" /></div>
                <div><img src="@/assets/cover/2.jpg" alt="" /></div>
                <div><img src="@/assets/cover/2.jpg" alt="" /></div>
                <div><img src="@/assets/cover/2.jpg" alt="" /></div>
                <div><img src="@/assets/cover/2.jpg" alt="" /></div>
              </div>
            </div>
            <div class="profile-intro">
              <div class="title-box">
                <h3>{{ $t("Friends") }}</h3>
                <a href="">{{ $t("All Friends") }}</a>
              </div>
              <p>120(10 mutual)</p>
              <div class="friends-box">
                <div>
                  <img src="@/assets/cover/user-13.jpg" alt="" />
                  <p>abd sa</p>
                </div>
                <div>
                  <img src="@/assets/cover/user-13.jpg" alt="" />
                  <p>abd sa</p>
                </div>
                <div>
                  <img src="@/assets/cover/user-13.jpg" alt="" />
                  <p>abd sa</p>
                </div>
                <div>
                  <img src="@/assets/cover/user-13.jpg" alt="" />
                  <p>abd sa</p>
                </div>
                <div>
                  <img src="@/assets/cover/user-13.jpg" alt="" />
                  <p>abd sa</p>
                </div>
                <div>
                  <img src="@/assets/cover/user-13.jpg" alt="" />
                  <p>abd sa</p>
                </div>
              </div>
            </div>
          </div>
          <div class="post-col">
            <div class="write-post-container">
              <div class="user-profile">
                <img src="@/assets/cover/2.jpg" alt="" />
                <div>
                  <p>abdalkader</p>
                  <small
                    >{{ $t("public") }} <i class="fas fa-caret-down"></i
                  ></small>
                </div>
              </div>
              <div class="post-input-container">
                <textarea
                  rows="3"
                  placeholder="what's on your mind,abd?"
                ></textarea>
                <!-- <div class="add-post-links">
              <a href="#"
                ><img src="@/assets/images/live-video.png" alt="" />Live
                video</a
              >
              <a href=""
                ><img src="@/assets/images/photo.png" alt="" />Photo/Video</a
              >
              <a href=""
                ><img
                  src="@/assets/images/feeling.png"
                  alt=""
                />Feeling/Activity</a
              >
            </div> -->
              </div>
            </div>
            <div class="write-post-container">
              <div v-for="(post, index) in my_post" :key="index">
                <PostComponent :post="post" />
              </div>
              <div v-show="!my_post.length" class="text-center">
                {{ $t("No Found Any Post Yet") }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-two" v-if="activeTab === '2'">Two</div>
      <div class="content-three" v-if="activeTab === '3'">Three</div>
      <div class="content-four" v-if="activeTab === '4'">Four</div>
      <div class="content-five" v-if="activeTab === '5'">Five</div>
    </div>
  </div>
</template>
<script>
import FriendshipComponent from "@/components/ProfileComponent/FriendshipComponent.vue";
import PostComponent from "@/components/ProfileComponent/PostComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    PostComponent,
    FriendshipComponent,
  },
  data() {
    return {
      activeTab: "1",
      user_id: this.$route.params.id,
    };
  },
  mounted() {},
  created() {
    this.$store.dispatch("profile/a_get_user_info", this.$route.params.id);
    this.$store.dispatch("profile/get_posts_by_user", this.$route.params.id);
  },
  methods: {},

  computed: {
    ...mapGetters({
      my_post: "profile/my_post",
      userInformation: "profile/userInformation",
      jobs: "profile/jobs",
      studies: "profile/studies",
      loading_info: "profile/loading_info",
    }),
  },
};
</script>
<style lang="scss" scoped>
/* tab's style  */

.container {
  margin: -14px auto;
  // width: 1200px;
  .tabs-choose {
    margin-bottom: 0;
    li {
      display: inline-block;
      padding: 10px 20px;
      background-color: #eee;
      cursor: pointer;
      opacity: 0.3;
      &.active {
        opacity: 1;
      }
    }
  }
  .tabs-content {
    background-color: #eee;
    margin: 0 auto;
    padding: 20px;
  }
}

.links-urls {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  .link {
    padding: 10px 20px;
    display: block;
    background-color: #eee;
    margin-bottom: 10px;
    text-decoration: none;
    color: #777;
  }
}

/*  */
/* profile page */
.profile-container {
  padding: 20px 15%;
  background: #ddd;
}

.cover-img {
  width: 100%;
  height: 25rem;
  border-radius: 6px;
  // margin-bottom: 14px;
}

.profile-details {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
}

.pd-right button img {
  height: 15px;
  margin-right: 10px;
}

.pd-right .friendships {
  background: #e4e6eb;
  color: #000;
}

.pd-right {
  text-align: right;
}

.pd-right a {
  background: #e4e6eb;
  border-radius: 3px;
  padding: 12px;
  display: inline-flex;
  margin-top: 30px;
}

.pd-right a img {
  width: 20px;
}

.profile-info {
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  margin-top: 20px;
}

.info-col {
  flex-basis: 33%;
}

.post-col {
  flex-basis: 65%;
}

.write-post-container {
  width: 100%;
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  color: #626262;
  margin-bottom: 10px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.post-input-container {
  padding-left: 55px;
  padding-top: 20px;
}

.post-input-container textarea {
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
  resize: none;
}

.add-post-links {
  display: flex;
  margin-top: 10px;
}

.add-post-links a {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #626262;
  margin-right: 30px;
  font-size: 13px;
}

.add-post-links a img {
  width: 20px;
  margin-right: 10px;
}

.user-profile img {
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-profile p {
  margin-bottom: -5px;
  font-weight: 500;
  color: #626262;
}

.user-profile small {
  font-size: 12px;
}

.profile-intro {
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.profile-intro h3 {
  font-weight: 600;
}

.intro-text {
  text-align: 10px 0;
  font-size: 15px;
}

.intro-text img {
  width: 15px;
  margin-bottom: -3px;
}

.profile-intro hr {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 24px 0;
}

.profile-intro ul li {
  list-style: none;
  font-size: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
}

.profile-intro ul li img {
  width: 26px;
  margin-right: 10px;
}

.title-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -7px 0px -8px 0px;
}

.title-box a {
  text-decoration: none;
  color: #1876f2;
  font-size: 14px;
}

.photo-box {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 15px;
}

.photo-box div img {
  width: 100%;
  cursor: pointer;
}

.profile-intro p {
  font-size: 14px;
}

.friends-box {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 15px;
  margin: top 15px;
}

.friends-box div img {
  width: 100%;
  cursor: pointer;
  padding-bottom: 20px;
}

.friends-box div {
  position: relative;
}

.friends-box p {
  position: absolute;
  bottom: -18px;
  left: 0;
}

/* media query for personal profile page */

@media (max-width: 900px) {
  .profile-container {
    padding: 20px 5%;
  }
  .cover-img {
    height: 20rem;
  }
  .profile-details {
    flex-wrap: wrap;
  }

  .pd-right {
    text-align: left;
    margin-top: 15px;
  }

  .pd-right button {
    margin-left: 10px;
  }

  .pd-right div h3 {
    font-size: 16px;
  }

  .profile-info {
    flex-wrap: wrap;
  }

  .info-col,
  .post-col {
    flex-basis: 100%;
  }
}
.profile-details:lang(ar) {
  direction: rtl;
}

.profile-intro:lang(ar) {
  direction: rtl;
}
.profile-info:lang(ar) {
  // text-align: right;
  direction: rtl;
}
.pd-right:lang(ar) {
  direction: ltr;
}
.modal:lang(ar) {
  direction: rtl;
}
.vcomments__add-input:lang(ar) {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: 1px solid #eee;
  padding: 10px 17px 10px 15px;
  border-radius: 40px;
  transition: all 0.2s ease-out;
}
.close-dir:lang(ar) {
  direction: ltr;
}
.pd-row div img:lang(ar) {
  margin: 2px 10px;
}
.pd-row div h3:lang(ar) {
  margin: 2px 10px;
}
.pd-row div p:lang(ar) {
  margin: 2px 10px;
}
.mb-0:lang(ar) {
  margin-right: 5px;
}
.text-muted:lang(ar) {
  margin-right: 10px;
}
.user-profile p:lang(ar) {
  margin-right: 10px;
}
.user-profile small:lang(ar) {
  margin-right: 10px;
}
.profile-intro ul li:lang(ar) {
  margin-right: -35px;
}
.details-margin:lang(ar) {
  margin: 5px 10px;
}
</style>

<template>
  <div class="div">
    <div class="row mb-3 me-0 bg-white">
      <div class="card card_post">
        <div
          class="card-header bg-white border-bottom-0 d-flex justify-content-between"
        >
          <div class="d-flex align-items-center">
            <div>
              <img
                v-if="post.model.has_media_profile === false"
                src="@/assets/img_friends/default1.png"
                alt=""
              />
              <div v-else>
                <img v-if="post.model.media[0].collection_name === 'profile'" :src="post.model.media[0].src_url" alt="" />
                <img v-else :src="post.model.media[1].src_url" alt="" />
              </div>
              
            </div>
            <div class="ms-3">
              <p class="mb-0">
                <router-link v-if="post.model_type == 'Profile'"
                  class="router-link-to-profile"
                  :to="{
                    name: 'profile',
                    params: { id: post.user_id },
                  }"
                  >{{ post.model.first_name }}
                  {{ post.model.last_name }}</router-link>
                <router-link v-else
                :to="{
                    name: 'page',
                    params: { id: post.model.id },
                  }"
                  class="router-link-to-profile">
                  {{ post.model.name }}
                    <small style="color: green; font-weight: bold;">page</small>
                  </router-link
                >
              </p>
              <small class="text-muted">
                {{ format_date(post.created_at) }}
              </small>
            </div>
          </div>
          <div class="d-flex align-items-center right">
            <div class="me-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle
                  id="Ellipse_181"
                  data-name="Ellipse 181"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  fill="#a5a5a5"
                />
              </svg>
            </div>

            <div class="me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle
                  id="Ellipse_181"
                  data-name="Ellipse 181"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  fill="#a5a5a5"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle
                  id="Ellipse_181"
                  data-name="Ellipse 181"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  fill="#a5a5a5"
                />
              </svg>
            </div>

            <div style="cursor: pointer" @click="delete_post(post.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.147"
                height="15.147"
                viewBox="0 0 15.147 15.147"
              >
                <g
                  id="Group_184"
                  data-name="Group 184"
                  transform="translate(7.573 -5.632) rotate(45)"
                >
                  <rect
                    id="Rectangle_151"
                    data-name="Rectangle 151"
                    width="18.675"
                    height="2.746"
                    rx="1.373"
                    transform="translate(0 7.964)"
                    fill="#a5a5a5"
                  />
                  <rect
                    id="Rectangle_152"
                    data-name="Rectangle 152"
                    width="18.675"
                    height="2.746"
                    rx="1.373"
                    transform="translate(10.71 0) rotate(90)"
                    fill="#a5a5a5"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p v-if="post.content" class="card-text" dir="auto">
            {{ post.content }}
          </p>
          <div v-if="post.has_media" class="media_container">
            <div class="media_one" v-if="post.media.length === 1">
              <img
                v-if="post.media[0].media_type.includes('Image')"
                :src="post.media[0].src_url"
                alt=""
              />
              <video v-else controls :src="post.media[0].src_url"></video>
            </div>
            <div
              class="media_two d-flex justify-content-between align-items-center"
              v-if="post.media.length === 2"
            >
              <div class="media_two_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_two_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
            </div>
            <div class="media_three" v-if="post.media.length === 3">
              <div class="media_three_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_three_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
              <div class="media_three_box_under">
                <img
                  v-if="post.media[2].media_type.includes('Image')"
                  :src="post.media[2].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[2].src_url"></video>
              </div>
            </div>
            <div class="media_four" v-if="post.media.length === 4">
              <div class="media_four_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_four_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
              <div class="media_four_box">
                <img
                  v-if="post.media[2].media_type.includes('Image')"
                  :src="post.media[2].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[2].src_url"></video>
              </div>
              <div class="media_four_box">
                <img
                  v-if="post.media[3].media_type.includes('Image')"
                  :src="post.media[3].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[3].src_url"></video>
              </div>
            </div>
            <div class="media_bigger" v-if="post.media.length > 4">
              <div class="media_bigger_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_bigger_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
              <div class="media_bigger_box">
                <img
                  v-if="post.media[2].media_type.includes('Image')"
                  :src="post.media[2].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[2].src_url"></video>
              </div>
              <div class="media_bigger_box">
                <img
                  v-if="post.media[3].media_type.includes('Image')"
                  :src="post.media[3].src_url"
                  alt=""
                />
                <video v-else controls :src="post.media[3].src_url"></video>
              </div>
              <p
                class="bigger_p d-flex align-items-center justify-content-center"
              >
                <span>+{{ post.media.length - 4 }}</span>
              </p>
            </div>
          </div>
          <div v-if="post.sharing_post != false" class="shared">
            <SharedPostComponent
              :post="post.parent"
            />
          </div>
          <div
            class="d-flex justify-content-between align-items-center body_box"
          >
            <div
              class="d-flex justify-content-center align-items-center"
              role="button"
              @click="goto()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.441"
                height="11.567"
                viewBox="0 0 12.441 11.567"
              >
                <path
                  id="like-svgrepo-com"
                  d="M12.42,5.275A3.526,3.526,0,0,0,9.053,1.826,3.347,3.347,0,0,0,6.186,3.478a3.225,3.225,0,0,0-2.8-1.652A3.526,3.526,0,0,0,.021,5.275,3.556,3.556,0,0,0,.127,6.586,5.622,5.622,0,0,0,1.849,9.46l4.334,3.933L10.592,9.46a5.622,5.622,0,0,0,1.722-2.874A3.564,3.564,0,0,0,12.42,5.275Z"
                  transform="translate(0 -1.826)"
                  fill="#f55"
                />
              </svg>
              <span class="ms-2">{{ post.interactions_count }}</span>
            </div>
            <div>
              <span>{{ post.comments_count }} comments</span>
            </div>
          </div>
        </div>
        <div class="card-footer bg-white d-flex justify-content-around">
          <div class="d-flex justify-content-center align-items-center">
            <small
              class="addreaction"
            >
              
              <span  @click="goto()">{{
                $t("Like")
              }}</span>
              <div class="box-reaction-items">
                <span @click="goto()">{{
                  $t("Like")
                }}</span>
                <span @click="goto()">{{
                  $t("Love")
                }}</span>
                <span @click="goto()">{{
                  $t("Angry")
                }}</span>
                <span @click="goto()">{{
                  $t("Care")
                }}</span>
                <span @click="goto()">{{
                  $t("HaHaHa")
                }}</span>
                <span @click="goto()">{{
                  $t("WOW")
                }}</span>
                <span @click="goto()">{{
                  $t("Sad")
                }}</span>
              </div>
            </small>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13.301"
              viewBox="0 0 14 13.301"
            >
              <g
                id="_-Product-Icons"
                data-name="🔍-Product-Icons"
                transform="translate(0)"
              >
                <g id="ic_fluent_comment_24_filled" transform="translate(0)">
                  <path
                    id="_-Color"
                    data-name="🎨-Color"
                    d="M4.275,13.5A2.275,2.275,0,0,1,2,11.225V5.275A2.275,2.275,0,0,1,4.275,3h9.45A2.275,2.275,0,0,1,16,5.275v5.95A2.275,2.275,0,0,1,13.725,13.5H9.675L5.9,16.172A.7.7,0,0,1,4.8,15.6V13.5Z"
                    transform="translate(-2 -3)"
                    fill="#767676"
                  />
                </g>
              </g>
            </svg>
            <button class="btn_comment_style" @click="goto()">
              {{ $t("Comment") }}
            </button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.814"
              height="14.859"
              viewBox="0 0 11.814 14.859"
            >
              <g id="share-svgrepo-com" transform="translate(0)">
                <g
                  id="Group_183"
                  data-name="Group 183"
                  transform="translate(0)"
                >
                  <path
                    id="Path_115"
                    data-name="Path 115"
                    d="M56.469,10.19a2.322,2.322,0,0,0-1.251.364L51.567,8.006a2.332,2.332,0,0,0,0-1.288l3.552-2.48a2.333,2.333,0,1,0-.931-1.408L50.546,5.373a2.334,2.334,0,1,0,0,3.977l3.671,2.563a2.334,2.334,0,1,0,2.253-1.723Z"
                    transform="translate(-46.989)"
                    fill="#767676"
                  />
                </g>
              </g>
            </svg>
            <small
              style="cursor: pointer"
              :id="'dropdownMenuButton1' + post.id"
              @click="goto()"
              >{{ $t("Share") }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Helpers from "@/services/GlobalServices/Helpers";
import SharedPostComponent from "@/components/Guest/SharedPostComponent.vue";

import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

import postServices from "@/services/HomePage/post.services";
import shareServices from "@/services/Share/share.services";
export default {
  name: "PostComponent",
  components: {
    SharedPostComponent,

  },
  data() {
    return {
      interaction_model: null,
      l_comment: false,
      enableDisable: false,
      first_name: "Guest" ,
      content: null,
      page_id: null,
      share: null,
    };
  },
  props: ["post"],
  methods: {
    format_date(date) {
      return Helpers.format_date(date);
    },
    change() {
      this.interaction_model = null;
    },
    ...mapMutations({
      UPDATE_IS_MODAL_INTERACTION: "post/UPDATE_IS_MODAL_INTERACTION",
    }),
    ...mapActions({
      UPDATE_POST_TO_LIKE: "post/UPDATE_POST_TO_LIKE",
      GET_ALL_POSTS: "post/GET_ALL_POSTS",
    }),
    goto() {
      this.$router.push({
            name: "login",
          });
    },
    showinteractionmodel() {
      this.UPDATE_IS_MODAL_INTERACTION();
      this.interaction_model = true;
      if (document.documentElement.style.overflow === "hidden") {
        document.documentElement.style.overflow = "auto";
      } else {
        document.documentElement.style.overflow = "hidden";
      }
    },
    delete_post(id) {
      if (confirm("Do you want to delete this post?") == true) {
        this.delete(id);
      }
    },
    async delete(id) {
      postServices.deletepost(id).then((response) => {
        console.log(response);
        this.showSuccess({ message: "Deleted successfully" });
        this.$store.commit("profile/DELETE_POST", id);
        this.$store.commit("post/DELETE_POST_DATA", id);
      });
    },

    getSharenumber(post) {
      if (post.sharing_post != false) {
        this.share = post.parent.id;
      } else {
        this.share = post.id;
      }
    },
    close() {
      this.content = null;
    },
    setpageid(page_id) {
      this.page_id = page_id;
    },
    async shareToMyPage(id) {
      // console.log(id, "shareFromPageToMypage")
      let formData = new FormData();
      formData.append("id", id);
      formData.append("page_id", this.page_id);
      if (this.content) {
        formData.append("content", this.content);
      }
      await shareServices.shareOnMyPage(formData).then((response) => {
        this.content = null;
        this.showSuccess({ message: "Shared successfully On My Page" });
        console.log(response);
      });
    },
    async shareToMyProfile(id) {
      let formData = new FormData();
      formData.append("id", id);
      if (this.content) {
        formData.append("content", this.content);
      }
      await shareServices
        .shareOnMyProfile(formData)
        .then((response) => {
          this.content = null;
          this.showSuccess({ message: "Shared successfully On My Profile" });
          console.log(response);
        });
    },
  },
  computed: {
    ...mapGetters({
      USER: "auth/USER",
    }),
    ...mapState("post", {
      interactionModel: "interactionModel",
    }),
    ...mapState("page", {
      mypages: "mypages",
    }),
  },
  notifications: {
    showSuccess: {
      // You can have any name you want instead of 'showSuccess'
      title: "Post",
      message: "Deleted successfully",
      type: "success",
    },
  },
};
</script>

<style lang="scss" scoped>
//
.router-link-to-profile {
  text-decoration: none !important;
  color: #111;
}

.router-link-to-profile.active_link {
  color: #111 !important;
  border: none !important;
  font-weight: normal !important;
}
.btn_comment_style {
  background: white;
  border: 0px;
}
.row {
  .card {
    margin-bottom: 0px;
  }

  .card_post {
    padding: 0 1rem 0 0;

    .card-header {
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }

    .card-body {
      padding: 0;
      overflow: hidden;

      p {
        padding-left: 1.2rem;
      }

      .media_container {
        max-height: 700px;
        width: 100% !important;
        overflow: hidden;

        .media_one {
          max-height: 100% !important;
          width: 100% !important;
          // height: 100% !important;
          overflow: hidden;
          text-align: center;

          img {
            width: 100% !important;
            height: 50% !important;
            object-fit: cover ;
          }

          video {
            object-fit: cover;

          }
        }

        .media_two {
          height: 100%;
          width: 100% !important;
          overflow: hidden;

          .media_two_box {
            width: 50%;
            height: 100% !important;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .media_three {
          height: 100%;
          width: 100% !important;
          overflow: hidden;

          .media_three_box {
            width: 50%;
            height: 50% !important;
            display: inline-block;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }

          .media_three_box_under {
            width: 100%;
            height: 50% !important;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .media_four {
          height: 100%;
          width: 100% !important;
          overflow: hidden;

          .media_four_box {
            width: 50% !important;
            height: 50% !important;
            display: inline-block;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .media_bigger {
          height: 100%;
          width: 100% !important;
          overflow: hidden;
          position: relative;

          .media_bigger_box {
            width: 50% !important;
            height: 50% !important;
            display: inline-block;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100% !important;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }

          .bigger_p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-weight: bolder;
            font-size: 20px;
            width: 100px;
            height: 100px;
            padding: 0 !important;
            background-color: rgba(119, 119, 119, 0.699);
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }

      .body_box {
        margin-top: 1.5rem !important;
        padding: 0 2rem;
        margin-bottom: 0.5rem;
      }
      .shared {
        padding: 0 1.2rem;
      }
    }

    .card-footer {
      small {
        margin-left: 2.5rem;
      }

      .addreaction {
        .box-reaction-items {
          display: none;
        }
        cursor: pointer;
        position: relative;

        &:hover {
          .box-reaction-items {
            display: block !important;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.548);
            color: white;
            padding: 10px;
            border-radius: 5px;
            top: -40px;
            left: 50%;
            width: auto !important;
            span {
              margin: 0 5px;
            }
          }
        }
      }
      .like {
        color: blue !important;
        font-weight: bold !important;
      }
      .love {
        color: red !important;
        font-weight: bold !important;
      }

      .angry {
        color: green !important;
        font-weight: bold !important;
      }

      .HaHaHa {
        color: #ffdf00 !important;
        font-weight: bold !important;
      }

      .Sad {
        color: black !important;
        font-weight: bold !important;
      }

      .WOW {
        color: rgb(64, 11, 211) !important;
        font-weight: bold !important;
      }

      .Care {
        color: rgb(236, 10, 161) !important;
        font-weight: bold !important;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .card-footer {
    small {
      margin-left: 1rem !important;

      .box-reaction-items {
        display: none;
      }
      cursor: pointer;
      position: relative;

      &:hover {
        .box-reaction-items {
          display: block !important;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.548);
          color: white;
          padding: 10px;
          border-radius: 5px;
          top: -40px;
          left: -100% !important;
          width: auto !important;
          span {
            margin: 0 5px;
            font-size: 10px !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .div {
    padding: 0 0.5rem !important;
    .row {
      margin: 0 0 1rem 0 !important;

      .card-header {
        p {
          font-size: 0.8rem !important;
        }

        .right :nth-child(1),
        .right :nth-child(2) {
          margin-right: 0.3rem !important;
        }
      }

      .addreaction {
        .box-reaction-items {
          display: none;
        }
        cursor: pointer;
        position: relative;

        &:hover {
          .box-reaction-items {
            display: inline-block !important;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.548);
            color: white;
            padding: 10px;
            border-radius: 5px;
            top: -40px;
            left: 50%;
            width: 50px !important;
            span {
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 300px) {
  .card-footer {
    small {
      margin-left: 0.2rem !important;

      .box-reaction-items {
        display: none;
      }
      cursor: pointer;
      position: relative;

      &:hover {
        .box-reaction-items {
          display: block !important;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.548);
          color: white;
          padding: 10px;
          border-radius: 5px;
          top: -40px;
          left: -150% !important;
          width: auto !important;
          span {
            margin: 0 3px !important;
            font-size: 2px !important;
          }
        }
      }
    }
  }
}
.vcomments__info:lang(ar) {
  direction: rtl;
}
</style>

<template>
    <div>
      <div class="row m-0" dir="auto" style="height: calc(100vh - 71px) !important;">
        <div class="col-3 " style="background-color: #f3f3f3;">
          <button type="button" class="btn-close mb-3"  @click="back" aria-label="Close"></button>
          <div 
          :class="['box', item.user_id === UserStory[0].user_id ? 'active' : '']"
          v-for="(item, index) in users_with_Story" :key="index" @click="showStory(item.id)">
            <!-- {{ item.user_id }}{{ UserStory[0].user_id }} -->
            <div class="d-flex justify-content-between align-items-center">
              <img v-if="item.has_media_profile === false" src="@/assets/img_friends/default1.png" alt="">
              <p class="m-0 name">{{ item.name }}</p>
            </div>
            <p class=" m-0 " style="color: #0baa92;" v-if="item.stories_count === 1">{{ $t("One") }}</p>
            <p class=" m-0 " style="color: #0baa92;" v-else-if="item.stories_count === 2">{{ $t("Tow") }}</p>
            <p class=" m-0 " style="color: #0baa92;" v-else>{{ item.stories_count }} {{ $t("more") }}</p>
          </div>
        </div>
        <div class="col-9">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-if="isLoading" class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div
                v-else
                v-for="(story, index) in UserStory"
                :key="story.id"
                :class="['carousel-item', index === 0 ? 'active' : '']"
                :ref="(this.date = story.created_at)"
              >
              <span class="date">{{ format_date(story.created_at) }}</span>
                <img
                  v-if="story.has_media"
                  :src="story.media[0].src_url"
                  class="d-block w-100"
                  alt="Image"
                />
                <div
                  class="cover_body"
                  v-else
                  :style="
                    [story.backStyle || story.textStyle? {'background-color': '' + story.backStyle + '', 'color': ''+story.textStyle} : {'background-color': '#777', 'color': '#000000'}]
                    // 'background-color': story.backStyle? '${story.backStyle}': '#777',
                    // color: story.textStyle,
                  "
                >
                  <p class="text_body">
                    {{ story.content }}
                  </p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">{{ $t("Previous") }}</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">{{ $t("Next") }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
 import { mapGetters } from "vuex";
 import Helpers from "@/services/GlobalServices/Helpers";
 import StoryService from "@/services/story/story.services";
 import { useRoute } from "vue-router";
  export default {
    name: "StoriesView",
    data() {
      return {
        users_with_Story: [],
        id: useRoute().params.id,
      };
    },
    methods: {
      format_date(date) {
      return Helpers.format_date(date);
    },
    async getAllStories() {
      return StoryService.getAllStories()
        .then((response) => {
          if (response.data.status == 200) {
            this.isLoading = false;
            this.users_with_Story = response.data.data.items;
          } else {
            console.log("UnExpected Erorr");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    showStory(id) {
      this.$store.dispatch("story/getStories", id);
    },
    back() {
      this.$router.push({ name: "home"});
    }
  },
  created() {
    this.getAllStories();
    this.showStory(this.id)
  },
    computed: {
    ...mapGetters("story", {
      UserStory: "User_Stories",
      isLoading: "isLoading_status",
      User: "Get_User",
    }),
  },
    components: { }
  };
  </script>
  <style lang="scss" scoped>

.col-3:lang(ar) {
    padding: 0 0.5rem 0 0.5rem !important;
  }
  .box {
    cursor: pointer;
    border: 1px solid #0baa92;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 0.5rem 1rem;

    &.active {
      border: 3px solid #0baa92 !important;
      background-color: #0baa92;

      .name {
        color: white !important;
        font-weight: 600;
      }

      p {
        color: white !important;
      }
    }

    .name {
      color: #0baa92;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50% ;
    }
  }
  #carouselExampleControls {
    height: 100%;
    // position: relative;

    .carousel-inner, 
    .carousel-item.active {
      height: 100% !important;
      overflow: hidden;
      position: relative;

      .date {
        background-color: #0baa92;
        padding: 0.5rem;
        color: white;
        border-radius: 10px;
        position: absolute;
        top: 10px;
        left: 10px;
      }

      .d-block {
        height: 100% !important;
        object-fit: fill;
      }
      .cover_body {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
      }
      
    }
  }

  @media screen and (max-width: 992px) {
    .col-3 {
      display: none;
    }

    .col-9 {
      width: 100% !important;
    }
  }
  </style>
  
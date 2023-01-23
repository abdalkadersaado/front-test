<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="showStory"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    style="width: 100%;"
  >
    <!-- Vertically centered modal -->
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <div v-if="User">
            <img
              v-if="User.has_media_profile"
              class="user_img"
              :src="User.media[0].src_url"
              alt="avatar"
            />
            <img
              v-else
              class="user_img"
              src="@/assets/story_img/user.png"
              alt="avatar"
            />
          </div>
          <ElementsSkeleton v-else type="LogoImage" />
          <div class="">
            <p v-if="User" class="user_name">{{ User.full_name }}</p>
            <ElementsSkeleton v-else type="shortText" />
            <small class="text-muted">{{ format_date(date) }}</small>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
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
                <img
                  v-if="story.has_media"
                  :src="story.media[0].src_url"
                  class="d-block w-100"
                  alt="Image"
                />
                <div
                  class="cover_body"
                  v-else
                  :style="{
                    'background-color': story.backStyle,
                    color: story.textStyle,
                  }"
                >
                  <p class="text_body">
                    {{ story.content }}
                  </p>
                </div>
                <!-- <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> -->
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon text-info"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">{{ $t("Previous") }}</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">{{ $t("Next") }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Helpers from "@/services/GlobalServices/Helpers";
import ElementsSkeleton from "@/components/SkeletonsLoaderComponent/ElementsSkeleton.vue";
export default {
  name: "ShowStoryComponenet",
  data() {
    return {
      date: null,
    };
  },
  computed: {
    ...mapGetters("story", {
      UserStory: "User_Stories",
      isLoading: "isLoading_status",
      User: "Get_User",
    }),
  },
  components: {
    ElementsSkeleton,
  },
  methods: {
    format_date(date) {
      return Helpers.format_date(date);
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-content {
  border-radius: 20px;
}
.modal-header {
  border: none;
}
.modal-body {
  border: none;
  padding: 0px !important;
}
.user_img {
  border-radius: 100%;
  position: absolute;
  width: 40px !important;
  height: 40px !important;
  top: 0.8rem;
  left: 0.5rem;
  background-color: beige;
}
.user_name {
  margin-left: 35px;
}
.text_body {
  font-size: small;
  padding: 10%;
}
.cover_body {
  text-align: center;
}
</style>

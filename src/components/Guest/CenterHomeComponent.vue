<template>
  <div class="col-md-12 col-lg-8 col-sm-12 py-0 center" id="aa">
    <!-- Story Section -->
    <StoryComponent />
    <!-- Story Section -->

    <!-- Add Post -->
    <AddpostComponent />
    <!-- Add Post -->

    <!-- Post Section -->

    <div v-if="(isLoadingNewPost)">
      <SkeltonAddPostComponent />
      <div v-for="(post, index) in postData" :key="index">
        <PostComponent :post="post" />
      </div>
    </div>

    <div v-if="(!isLoadingallPosts && !isLoadingNewPost)">
      <div v-for="(post, index) in postData" :key="index">
        <PostComponent :post="post" />
      </div>
    </div>

    

    <div v-else-if="isLoadingallPosts">
      <SkeltonComponent />
    </div>

    <!-- Post Section -->
  </div>
</template>

<script>
import StoryComponent from "@/components/Guest/StoryComponent.vue";
import PostComponent from "@/components/Guest/PostComponent.vue";
import SkeltonComponent from "@/components/Guest/SkeltonComponent.vue";
import AddpostComponent from "@/components/Guest/AddpostComponent.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "CenterHomeComponent",

  components: {
    StoryComponent,
    PostComponent,
    AddpostComponent,
    SkeltonComponent,
  },
  data() {
    return {
    };
  },

  methods: {
    ...mapActions({
      GET_ALL_POSTS: "post/GET_ALL_POSTS",
      GET_NEXT: "post/GET_NEXT",
    }),
    ...mapMutations({
      UPDATE_IS_LOADING_ALL_POSTS : "post/UPDATE_IS_LOADING_ALL_POSTS"
    }),
    async get_all() {
      this.UPDATE_IS_LOADING_ALL_POSTS()
      await this.GET_ALL_POSTS();
      this.UPDATE_IS_LOADING_ALL_POSTS()
    },
    getNextData() {
      // const elem = document.getElementById('para');
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.offsetHeight ===
          document.documentElement.scrollTop + window.innerHeight;
        if (bottomOfWindow) {
          this.GET_NEXT();
        }
      };
    },
  },
  created() {
    this.get_all();
  },
  computed: {
    ...mapState("post", {
      postData: "postData",
      isLoadingNewPost: "isLoadingNewPost",
      isLoadingallPosts: "isLoadingallPosts",
    }),
  },
  mounted() {
    this.getNextData();
  },
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .center {
    /* width: 100%; */
    /* padding-left: 1.5rem !important;  */
    /* padding-right: 0 !important;  */
  }
}

.partner-section-slider {
  height: 300px;
}
.partner-section-slider .swiper {
  width: 100%;
  height: 100%;
}

.partner-section-slider .swiper-slide {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.partner-section-slider .swiper-slide-img-container {
  width: 80%;
  height: 80%;
}
.partner-section-slider .swiper-horizontal > .swiper-pagination-bullets,
.partner-section-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
.partner-section-slider .swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
}
.partner-section-slider .swiper-slide {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.partner-section-slider .swiper-slide-img-container {
  width: 80%;
  height: 80%;
}
.partner-section-slider .swiper-horizontal > .swiper-pagination-bullets,
.partner-section-slider .swiper-pagination-bullets.swiper-pagination-horizontal,
.partner-section-slider .swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
}

.partner-section-slider .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.center_loading {
  width: 100%;
}
</style>

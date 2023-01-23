<template>
  <div class="story">
    <div class="story_s">
      <div
        dir="auto"
        class="story_body"
        :style="{
          'background-color': user.last_story.backStyle,
          color: user.last_story.textStyle,
        }"
      >
        <div class="overlay"></div>
        <img
          v-if="user.last_story.has_media"
          class="story_img"
          :src="user.last_story.media[0].src_url"
          alt=""
        />
        <p class="text_body" v-else>
          {{ shortenText(user.last_story.content, 30) }}
        </p>
        <p class="user_name">{{ user.full_name }}</p>
        <img
          v-if="user.has_media_profile"
          class="user_img"
          :src="user.media[0].src_url"
          alt="avatar"
        />
        <img v-else class="user_img" src="@/assets/story_img/user.png" alt="avatar" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  methods: {
    shortenText: function (v, end) {
      return v.substring(0, end) + "...";
    },
  },
};
</script>
<style lang="scss" scoped>
.story {
  height: 170px;
  align-items: center;
  display: flex;

  .story_s {
    position: relative;
    margin-left: 10px;
    height: 170px;
    min-width: 100px;
    max-width: 100px;
    .story_body {
      height: 100%;
      position: relative;
      border-radius: 10px;
      cursor: pointer;

      .story_img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 10px;
      }

      .user_img {
        border-radius: 100%;
        border: 3px solid rgb(78, 157, 231);
        position: absolute;
        width: 40px !important;
        height: 40px !important;
        top: 0.8rem;
        left: 0.5rem;
        background-color: beige;
      }

      .user_name {
        position: absolute;
        bottom: 0;
        color: white;
        font-weight: 400;
        left: 0.5rem;
        font-size: small;
      }

      .text_body {
        font-size: small;
        position: absolute;
        padding: 10px;
        margin-top: 50%;
        text-align: justify;
        word-break: break-word;
      }
    }
    .overlay {
      width: 100px;
      height: 170px;
      background-image: linear-gradient(transparent, #00000094);
      position: absolute;
      top: 0;
      border-radius: 10px;
    }
  }
}
</style>

<template>
  <div class="story">
    <div class="story_s" v-for="item in items"  :key="item">
      <div class="story_body">
        <div class="story_img"></div>
        <div class="user_img"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: 3,
    };
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
        animation: pulse-bg 1s infinite;
        border-radius: 10px;
      }

      .user_img {
        border-radius: 100%;
        border: 1px solid white;
        position: absolute;
        width: 40px !important;
        height: 40px !important;
        top: 0.8rem;
        left: 0.5rem;
        animation: pulse-profile 1s infinite;
      }
    }
  }
}
@keyframes pulse-bg {
  0% {
    background-color: rgb(238, 238, 238);
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #eee;
  }
}
@keyframes pulse-profile {
  0% {
    background-color: rgb(238, 238, 238);
  }
  50% {
    background-color: rgb(217, 223, 223);
  }
  100% {
    background-color: rgb(238, 238, 238);
  }
}
</style>
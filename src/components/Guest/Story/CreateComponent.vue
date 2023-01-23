<template>
  <!-- Modal -->
  <div
    class=""
    
  >
  </div>
  <div class="story">
    <div class="story_s">
      <div
      @click="goto()"
        class="story_body bc1"
      >
        <div class="header_story">
          <img
            src="@/assets/story_img/user.png"
            alt="Avatar"
            style="height: auto"
          />
        </div>
        <div class="story_center">
          <div
            class="user_img"
            style="
              background-color: #007dff;
              border-radius: 50%;
              position: relative;
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="5"
              viewBox="0 0 27 5"
              class="svg"
            >
              <rect
                id="Rectangle_140"
                data-name="Rectangle 140"
                width="27"
                height="5"
                rx="2"
                fill="#fff"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="27"
              viewBox="0 0 5 27"
              class="svg"
            >
              <rect
                id="Rectangle_141"
                data-name="Rectangle 141"
                width="27"
                height="5"
                rx="2"
                transform="translate(5) rotate(90)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div class="story_footer">
          <p class="text-dark text_3">{{ $t("Create Story") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "CreateComponent",
  data() {
    return {};
  },
  computed: {

  },
  components: {

  },
  methods: {
    goto() {
      this.$router.push({
            name: "login",
          });
    },
  }
};
</script>
<style lang="scss" scoped>
p {
  font-weight: bold;
  font-size: 12px;
  color: white;
  margin-top: 13px;
}

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
      .user_img {
        border-radius: 100%;
        border: 3px solid white;
        position: absolute;
        width: 40px !important;
        height: 40px !important;
        top: 0.8rem;
        left: 0.5rem;
      }
    }
  }
}
.header_story {
  position: relative;
  height: 65%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  img {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    position: relative;
    width: 100%;
    height: 100%;
  }
}
.bc1 {
  border: 2px solid #8080804a;
  .story_center {
    position: absolute;
    top: 62%;
    left: 47%;
    transform: translate(-60%, -60%);
    z-index: 1;
  }
  .text_3 {
    position: absolute;
    bottom: 0;
    color: white;
    left: 0.7rem;
  }
  .svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .story_footer {
    position: relative;
    height: 35%;
    background: #f3f3f3a6;
  }
}
.modal-body {
  .card {
    background: #00a79d;
    height: 100%;
    .card-body {
      .bo {
        position: relative;
        border-radius: 100%;
        background: white;
        margin-top: 50%;
        padding: 30%;
        display: flex;
        justify-content: center;

        svg {
          font-size: x-large !important;
        }
      }
    }
  }
}
.close-dir:lang(ar) {
  direction: ltr;
}
</style>

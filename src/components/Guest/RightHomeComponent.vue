<template>
  <div
    dir="auto"
    class="col-md-2 py-3 right"
    style="position: fixed !important; right: 0"
  >
    <p class="title">{{ $t("Friends") }}</p>
    <input
      type="text"
      class="search-input"
      v-model="search"
      :placeholder="$t('search-friends')"
    />
    <div
      v-for="(friend, index) in filteredList"
      :key="index"
      class="row box_right align-items-center"
    >
      <div dir="auto" class="col-md-2 box_right_img">
        <img src="@/assets/img_friends/default1.png" alt="" />
      </div>
      <div class="col-md-7 offset-lg-1 box_right_info">
        <p class="">{{ friend.name }}</p>
        <small class="">Active</small>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RightHomeComponent",

  data() {
    return {
      search: "",
    };
  },
  created() {
  },

  computed: {
    ...mapGetters({
      friends: "friendships/friends",
    }),
    filteredList() {
      return this.friends.filter((item) => {
        return item.first_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    ...mapActions({ get_all_friends: "friendships/get_all_friends" }),
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  border-radius: 13px;
  margin-bottom: 10px;
  width: 97%;
  border: 0px;
}
.title {
  margin-bottom: 0.5rem;
}
.box_right {
  margin-bottom: 0.5rem;

  .box_right_img {
    margin-right: 1rem;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: contain;
    }
  }

  .box_right_info {
    p {
      margin-bottom: 0;
    }

    small {
      color: #777;
    }
  }
}

@media screen and (max-width: 992px) {
  .right {
    display: none !important;
  }
}

@media screen and (min-width: 993px) and (max-width: 1200px) {
  .title {
    margin-bottom: 1rem;
  }
  .box_right {
    margin-bottom: 1rem;

    .box_right_img {
      // margin-right: 1.5rem !important;
      text-align: start !important;

      img {
        width: 40px !important;
        height: 40px !important;
      }
    }

    .box_right_info {
      p {
        margin-bottom: 0;
        font-size: 12px;
      }

      small {
        color: #777;
      }
    }
  }
}

@media screen and (min-width: 1201px) and (max-width: 1300px) {
  .title {
    margin-bottom: 2rem;
  }
  .box_right {
    margin-bottom: 1.5rem !important;

    .box_right_img {
      margin-right: 1.5rem !important;

      img {
        width: 60px !important;
        height: 60px !important;
      }
    }

    .box_right_info {
      p {
        margin-bottom: 0;
      }

      small {
        color: #777;
      }
    }
  }
}
.col-md-2 .box_right_img:lang(ar) {
  margin-right: 2rem;
}
.right:lang(ar) {
  left: 0px;
  right: inherit;
}
.right {
  transition: all 0.3s ease-out;
  overflow: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 64px;
  bottom: 0;
}
</style>

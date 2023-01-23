<template>
  <div class="vcomments">
    <div class="vcomments__add-block">
      <textarea
        dir="auto"
        class="vcomments__add-input ar_vcomment"
        :placeholder="$t(`Your comment`)"
        v-model="body"
        @keyup.enter="commentStore"
        @input="resize()"
        ref="textarea"
      ></textarea>
      <div class="vcomments__add-button text-center" @click="commentStore">
        {{ $t("Comment") }}
      </div>
    </div>
    <br />
    <div v-if="!loading_comment">
      <CommentComponent
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      ></CommentComponent>

      <div class="text-center" v-show="moreExists_comment">
        <button
          v-if="!loading"
          type="button"
          class="button_loadMore"
          v-on:click="a_loadMore"
        >
          {{ $t("Load More of Comments") }}
        </button>
        <button v-else class="button_loadMore" type="submit">
          Loading ...
        </button>
      </div>
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
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import CommentComponent from "./CommentComponent.vue";
import CommentPostService from "@/services/Comment/CommentPostService";
export default {
  components: { CommentComponent },
  props: ["postid"],
  data: function () {
    return {
      post_id: this.postid,
      body: "",
    };
  },
  mounted() {
    this.a_get_comment();
  },
  computed: {
    ...mapState(["loading"]),
    ...mapGetters({
      comments: "comment/comments",
      moreExists_comment: "comment/moreExists_comment",
      loading_comment: "comment/loading_comment",
    }),
  },
  methods: {
    a_get_comment() {
      this.$store.dispatch("comment/a_getComments", this.post_id);
    },
    ...mapMutations(["TOGGLE_LOADING"]),
    a_loadMore() {
      this.TOGGLE_LOADING();
      this.$store.dispatch("comment/a_loadMore", this.post_id);
      this.interval = setTimeout(
        function () {
          this.$store.state.loading = null;
        }.bind(this),
        500
      );
    },
    commentStore() {
      if (this.body.trim() === "") return false;
      CommentPostService.Add_Comment_to_Post(this.post_id, {
        body: this.body,
      })
        .then((response) => {
          this.body = "";

          this.$store.commit("comment/ADD_COMMENT", response.data.data);
          this.showSuccess({ message: this.$i18n.t(response.data.message[0]) });
          this.a_get_comment();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.showError();
        });
    },

    addComment() {
      if (this.body.trim() === "") return false;
      var item = {
        id: this.comments.id,
        user_id: this.comments.user_id,
        body: this.comments.body,
        replies: this.comments.replies,
      };
      this.comments.push(item);
      this.body = "";
    },
    resize() {
      let element = this.$refs["textarea"];

      element.style.height = "11px";
      element.style.height = element.scrollHeight + "px";
    },
  },
  notifications: {
    showSuccess: {
      title: "Comment",
      message: "Commented successfully",
      type: "success",
    },
    showError: {
      title: "Comment",
      message: "Something went Wrong",
      type: "error",
    },
  },
};
</script>

<style lang="scss" scoped>
$distance: 15px;
.button_loadMore {
  margin: $distance;
  color: black;
  background: #f8f8f8;
  border-radius: 17px;
  padding: 8px;
  border: groove;
}

.some {
  &__body {
    padding: $distance;
  }
}
.vcomments {
  $this: &;
  &__item {
    background-color: #f8f8f8;
    padding: $distance;
    border: 1px solid #eee;
    border-radius: 15px;
    margin-top: $distance;
    &:first-child {
      margin-top: 0;
    }
  }
  &__author {
    font-weight: bold;
  }
  &__time {
    color: #999;
    font-size: 14px;
    margin-left: 4px;
    font-style: italic;
  }
  &__quote {
    // margin: 8px 0;
    padding: 0;
    border: none;
    word-break: break-word;
  }
  &__btns {
    background: #f8f8f8;
    padding: 6px 10px;
    border-radius: 4px;
    user-select: none;
    &:before,
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  &__bleft {
    float: left;
  }
  &__bright {
    float: right;
  }
  &__btn {
    font-size: 14px;
    cursor: pointer;
    position: relative;
    padding: 2px 5px;
    &--delete {
      color: red;
    }
    &--edit {
      color: orange;
    }
    &--reply {
      color: green;
    }
    &--toggle {
      color: #9e9e9e;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 50%;
      right: 50%;
      background: currentColor;
      height: 1px;
      transition: all 0.2s ease-in;
    }
    &:hover {
      &:after {
        left: 0;
        right: 0;
      }
    }
  }
  &__group {
    margin-top: $distance;
    padding-left: 30px;
  }
  &__add-block {
    margin-top: $distance;
    position: relative;
  }
  &__add-input {
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border: 1px solid #eee;
    padding: 10px 75px 10px 15px;
    border-radius: 40px;
    transition: all 0.2s ease-out;
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
  &__add-button {
    // position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #eee;
    transition: all 0.2s ease-out;
    cursor: pointer;
    user-select: none;
    padding: 11px 20px;
    border-radius: 40px;
    &:hover {
      background: #00a79d !important;
      color: white;
    }
  }
}
small.addreaction {
  margin: 0px;
}

//
textarea {
  width: 300px;
  height: 45px;
  padding: 2px;
  resize: none;
  overflow: hidden;
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 4px;
  font-family: "Inconsolata", monospace;
  font-size: 1rem;
  color: #000;
}

textarea:focus {
  outline: none;
}

.ar_vcomment:lang(ar) {
  padding: 11px 14px 10px 3px;
  height: 45px;
  resize: none;
}
textarea.vcomments__add-input.ar_vcomment:lang(ar) {
  direction: rtl;
}
</style>

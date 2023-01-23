<template>
  <div class="vcomments__add-block">
    <input
      dir="auto"
      class="vcomments__add-input"
      :placeholder="$t(`Your Reply`)"
      @input="text"
      ref="input"
      v-model="body_reply"
      @keyup.enter="addComment"
    />
    <!-- <textarea
      class="vcomments__add-input"
      placeholder="Your comment"
      v-model="body_reply"
      @keyup.enter="addComment"
      @input="resize()"
      ref="input"
    ></textarea> -->
    <div class="vcomments__add-button text-center" @click="addComment">
      {{ $t("Comment") }}
    </div>
  </div>
</template>
<script>
export default {
  props: ["comment"],
  data: function () {
    return {
      body_reply: "",
      comment_id: this.comment.id,
    };
  },
  methods: {
    addComment: function () {
      if (this.body_reply.trim() === "") return false;
      this.$emit("addComment", this.body_reply.trim());
      this.body_reply = "";
    },
    text: function () {
      this.$emit("text", this.body_reply.trim());
    },
    resize() {
      let element = this.$refs["textarea"];

      element.style.height = "18px";
      element.style.height = element.scrollHeight + "px";
    },
  },
};
</script>

<style lang="scss" scoped>
$distance: 15px;
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
    margin: 8px 0;
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
.vcomments__add-input:lang(ar) {
  padding: 9px 20px 9px 15px;
}
.vcomments__add-button:lang(ar) {
  margin-top: 5px;
}
.vcomments__add-button {
  margin-top: 5px;
}
input.vcomments__add-input:lang(ar) {
  direction: rtl;
}
</style>

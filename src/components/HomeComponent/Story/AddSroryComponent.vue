<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="AddStory"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    style="background-color: rgba(255, 255, 255, 0.527);"
  >
    <!-- Vertically centered modal -->
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <button
              v-if="!isloading"
              :disabled="!story.content"
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
                aria-label="Close"
              @click.prevent="addStroy"
            >
              {{ $t("Done") }}
            </button>
            <button v-else disabled class="btn btn-success" type="button">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              {{ $t("Loading ...") }}
            </button>
          </div>
          <div class="close-dir">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="modal-body">
          <div>
            <div class="row ms-2 mb-2" dir="auto">
              <label for="backStyle" class="col-sm-4 col-form-label form-label">{{
                $t("Choose Background")
              }}</label>
              <div class="col-sm-2">
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="backStyle"
                  v-model="story.backStyle"
                  title="Choose your color"
                />
              </div>
              <label for="textStyle" class="col-sm-4 col-form-label">{{
                $t("Font Color")
              }}</label>
              <div class="col-sm-2">
                <input
                  type="color"
                  class="form-control form-control-color"
                  id="textStyle"
                  v-model="story.textStyle"
                  title="Choose your color"
                />
              </div>
            </div>
            <textarea
              dir="auto"
              class="form-control"
              :style="{
                'background-color': story.backStyle,
                color: story.textStyle,
              }"
              rows="3"
              v-model="story.content"
              placeholder="Start writing....."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StoryService from "@/services/story/story.services";
export default {
  data() {
    return {
      isloading: false,
      story: {
        backStyle: null,
        textStyle: null,
        content: null,
      },
    };
  },
  methods: {
    async addStroy() {
      this.isloading = true;
      this.$store.commit("story/SET_IS_LOADING_NEW_STORY")
      return StoryService.CreateStory(this.story)
        .then((response) => {
          if (response.data.status == 201) {
            this.isloading = false;
            this.story.backStyle = null;
            this.story.textStyle = null;
            this.story.content = null;
            this.$store.commit("story/SET_IS_LOADING_NEW_STORY")
            this.showSuccess({
              message: "Added New Story successfully",
            });
          } else {
            console.log("UnExpected Erorr");
            this.$store.commit("story/SET_IS_LOADING_NEW_STORY")
          }
        })
        .catch((error) => {
          console.log(error.message);
          this.showFaild({ message: error.message });
        });
    },
  },
  notifications: {
    showSuccess: {
      // You can have any name you want instead of 'showSuccess'
      title: "Story",
      message: "Added successfully",
      type: "success",
    },
    showFaild: {
      // You can have any name you want instead of 'showFaild'
      title: "Error",
      message: "Network Error",
      type: "error",
    },
  },
};
</script>
<style lang="scss" scoped>

.modal {
  background-color: rgba(255, 255, 255, 0.527) !important;
}
.modal-content {
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
}
.modal-header {
  border: none;
}
.modal-body {
  border: none;
  padding: 0px !important;
}
textarea {
  height: 300px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-color: #05a999;
}

textarea:focus {
  outline: none;
  box-shadow: none;
  border-color: #05a999;
}
.close-dir:lang(ar) {
  direction: ltr;
}
</style>

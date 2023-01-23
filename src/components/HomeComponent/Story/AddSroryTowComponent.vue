<template>
    <!-- Modal -->
    <div
      class="modal fade"
      id="AddStory2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <!-- Vertically centered modal -->
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div class="modal-title">
              <button
                v-if="!isloading"
                :disabled="postsmedia.length === 0"
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
                @click="deleteitem()"
              ></button>
            </div>
          </div>
          <div class="modal-body">
            <div>
                <div  class="mt-3 text-center" >
                    <label for="uploadstory" class="d-flex align-items-center justify-content-center">
                        {{ $t("Upload Media") }} <font-awesome-icon class="icon" icon="fas fa-file-upload" />
                    </label>
                    <input type="file" id="uploadstory" :disabled="postsmedia.length > 0" ref="filestory" @change="uploadFile" hidden accept="image/*"/>
                </div>
            </div>
            <div   class="mt-3 mb-3 text-center" >
              <div v-if="postsmedia.length > 0" style="display: inline-block ; position: relative;">
                <button type="button" class="btn-close" aria-label="Close" style="position: absolute; top: 2px; right: 2px;" @click="deleteitem()"></button>
                <img :src="postsmedia[0].url" style="width: 100px; height: 100px;margin:  2px; border: 1px solid #777;" />
              </div>
             
                                    
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import StoryService from "@/services/story/story.services";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuid } from "vue-uuid";
  export default {
    data() {
      return {
        isloading: false,
        media: null,
        file: null,
        datasender: {},
        postsmedia : []
      };
    },
    methods: {
      deleteitem() {
        this.postsmedia = []
      },
        uploadFile() {
            // const file = e.target.files[0];
            // this.media = URL.createObjectURL(file);
            this.file = this.$refs.filestory.files[0];
            this.postsmedia.push({"type": this.$refs.filestory.files[0].type, "url": URL.createObjectURL(this.$refs.filestory.files[0])})
            // console.log(this.postsmedia)
        },
      async addStroy() {
        this.isloading = true;
        this.$store.commit("story/SET_IS_LOADING_NEW_STORY");
        // if (this.media != null) {
        let item = null
        let storage = getStorage();
        let unique_number = this.file.name +  uuid.v4()
        let storageRef = ref(storage, unique_number);
        await uploadBytes(storageRef, this.file).then((snapshot) => {
            
            let meme = snapshot.metadata.contentType.split('/');
            item = {
                "size" : snapshot.metadata.size,
                "media_type" : meme[0],
                "mime_type" : meme[1],
            }
            
        });
        await getDownloadURL(storageRef).then((url) => {
                item.src_url = url;
                item.src_thum = url;
                item.src_icon = url;
            });
            this.datasender.media = item

      // }
        return StoryService.CreateStory(this.datasender)
          .then((response) => {
            if (response.data.status == 201) {
              this.isloading = false;
              this.datasender = {}
              this.file = null
              this.postsmedia = []
              
              this.showSuccess({
                message: "Added New Story successfully",
              });
              this.$store.commit("story/SET_IS_LOADING_NEW_STORY");
            } else {
              console.log("UnExpected Erorr");
              this.$store.commit("story/SET_IS_LOADING_NEW_STORY")
            }
          })
          .catch((error) => {
            console.log(error.message);
            this.showFaild({ message: error.message });
            this.$store.commit("story/SET_IS_LOADING_NEW_STORY")
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

    label {
      cursor: pointer;
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      
      .icon {
          width: 40px;
          height: 40px;
          margin-left: 0.5rem;
      }
  }
  }
  textarea {
    height: 300px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .close-dir:lang(ar) {
    direction: ltr;
  }
  </style>
  
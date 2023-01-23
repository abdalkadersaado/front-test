<template>
  <div>
    <div class="row me-0 mb-3 bg-white">
      <div class="card add_post_card">
        <div
          class="row justify-content-center overflow-hidden align-items-center"
        >
          <div class="col-1 overflow-hidden">
            <img class="page-profile" v-if="img.has_media_profile === false" src="@/assets/img_friends/default1.png" alt="">
                <img class="page-profile" v-else-if="img.media[0].collection_name === 'profile'" :src="img.media[0].src_url" alt="">
                <img class="page-profile" v-else-if="img.media[1].collection_name === 'profile'" :src="img.media[1].src_url" alt="">
          </div>
          <div class="col-11 h-100">
            <form data-bs-toggle="modal" data-bs-target="#addpostinpage">
              <input
                class="input_text"
                
                type="text"
                name=""
                id=""
                :placeholder="$t(`Add New Post In Page`)"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="addpostinpage" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="text-center">
                          <img class="page-profile" v-if="img.has_media_profile === false" src="@/assets/img_friends/default1.png" alt="">
                <img class="page-profile" v-else-if="img.media[0].collection_name === 'profile'" :src="img.media[0].src_url" alt="">
                <img class="page-profile" v-else-if="img.media[1].collection_name === 'profile'" :src="img.media[1].src_url" alt="">
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" @click="close" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="p-3">
                            <textarea v-model="content" name="content" id="" cols="30" rows="10" :placeholder="$t(`what are you thinking about?`)"></textarea>
                            <div class="mt-3 text-center" >
                                <label for="upload" class="d-flex align-items-center justify-content-center">
                                  {{ $t("Upload Media") }} <font-awesome-icon class="icon" icon="fas fa-file-upload" />
                                </label>
                                <input type="file" id="upload" ref="file" @change="uploadFile" hidden accept="video/*, image/*" multiple/>
                            </div>
                            <div   class="mt-3 text-center" >
                                <div v-for="(img, index) in postsmedia" :key="index"  style="display: inline-block ; position: relative;">
                                    <button type="button" class="btn-close" :disabled="this.ispageloading" aria-label="Close" style="position: absolute; top: 2px; right: 2px;" @click="deleteitem(index)"></button>
                                    <img v-if="img.type.includes('image')" :src="img.url" style="width: 75px; height: 75px;margin:  2px; border: 1px solid #777;" />
                                    <video v-if="img.type.includes('video')" :src="img.url" style="vertical-align: middle;margin: 2px; width: 75px; height: 75px; border: 1px solid #777;" >
                                    </video>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button v-if="!ispageloading" class="btn btn-lg btn-light w-100 text-dark fw-bold" data-bs-dismiss="modal" aria-label="Close" @click.prevent="submitFile(this.id)" :disabled="!this.content && this.media.length<=0" type="submit">{{ $t("Add Post") }}</button>
                        <button v-else class="btn btn-lg btn-light w-100 text-dark fw-bold d-flex align-items-center justify-content-center"  type="submit">{{ $t("Loading...") }}
                            <div class="spinner-border text-dark ms-2" role="status">
                                <span class="visually-hidden">{{ $t("Loading...") }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import pageServices from "@/services/Pages/page.services";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuid } from "vue-uuid";

export default {
  name: "AddpostComponent",
  props: ["img", "id"],
  data() {
    return {
      content: null,
      media: [],
      postsmedia: [],
      datasender: [],
      ispageloading: false,
      isModalLoading: null,
    };
  },
  computed: {},
  methods: {
    deleteitem(index){
        this.postsmedia.splice( index, 1);
        this.media.splice( index, 1);
    },
    close() {
        this.content = null,
        this.media = []
        this.postsmedia = [],
        this.ispageloading = null
    },
    uploadFile() {
      for (let i = 0; i<this.$refs.file.files.length; i++) {
          this.media.push(this.$refs.file.files[i])
          this.postsmedia.push({"type": this.$refs.file.files[i].type, "url": URL.createObjectURL(this.$refs.file.files[i])})
      }
    },
    async submitFile(id) {
      this.ispageloading = true;

      for(let k =0; k < this.media.length; k++){
        
        const storage = getStorage();
        let unique_number = this.media[k].name +  uuid.v4()
        const storageRef = ref(storage, unique_number);
        let item = null;
        await uploadBytes(storageRef, this.media[k]).then((snapshot) => {
            
            let meme = snapshot.metadata.contentType.split('/');
            item = {
                "size" : snapshot.metadata.size,
                "media_type" : meme[0],
                "mime_type" : meme[1],
            }
            this.datasender.push(item)
        }).catch(error  => {
          this.UPDATE_IS_LOADING_NEW_POST()
          this.showFaild({ message: error.message });
        });
        await getDownloadURL(storageRef).then((url) => {
                item.src_url = url;
                item.src_thum = url;
                item.src_icon = url;
            });
        
      }
      let raw =  JSON.stringify({"media": this.datasender})
      
      await pageServices.AddPostInPage(id, raw, this.content).then((response) => {
        this.isModalLoading = false;
        this.content = null;
        this.ispageloading = null;
        this.media = [];
        this.datasender = [];
        this.postsmedia = []
        this.$emit("getpostsinpage");
        
        console.log(response.errorCode);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  .add_post_card {
    padding: 1rem;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    form {
      height: 100%;
      cursor: pointer;
      overflow: hidden;

      .input_text {
        width: 100%;
        border-radius: 25px;
        height: 100% !important;
        border: 1px solid #777;
        padding: 0.5rem 1rem;
        font-weight: bold;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .modal {
    background-color: rgba(255, 255, 255, 0.527);
    .modal-content {
        border-radius: 25px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset !important;
    
        .modal-header {
            .page-profile {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
            }
        }

        .modal-body {
            textarea {
                width: 100% !important;
                background-color: transparent;
                color: black !important;
                border: 1px solid #777;
                padding: 0.5rem 1rem;
                font-weight: bold;
                border-radius: 15px;
                height: auto;

                &::placeholder {
                    color: black !important;
                }

                &:focus {
                    outline: none;
                    &::placeholder {
                        color: transparent;
                    }
                }
            }
            label {
                cursor: pointer;
                font-weight: bold;
                font-size: 1.5rem;
                
                .icon {
                    width: 40px;
                    height: 40px;
                    margin-left: 0.5rem;
                }
            }
        }
    }
  }

}

@media screen and (min-width: 300px) and (max-width: 550px) {
  .add_post_card {
    img {
      width: 25px !important;
      height: 25px !important;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}





@media screen and (max-width: 299px) {
  .add_post_card {
    img {
      display: none !important;
    }
  }

  .input_text {
    width: 100%;
    border-radius: 25px;
    height: 100% !important;
    border: 1px solid #777;
    padding: 0.4rem 1rem !important;
    font-weight: normal !important;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
}
</style>

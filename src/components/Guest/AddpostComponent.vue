<template>
  <div>
    <div class="row me-0 mb-3 bg-white">
      <div class="card add_post_card">
        <div
          class="row justify-content-center overflow-hidden align-items-center"
        >
          <div class="col-1 overflow-hidden">
            <img  src="@/assets/img_friends/default1.png"  />
              
          </div>
          <div class="col-11 h-100">
            <form >
              <input
                class="input_text"
                type="text"
                @click="goto()"
                :placeholder="($t(`what are you thinking about `)) + full_name "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";


export default {
  name: "AddpostComponent",
  data() {
    return {

      full_name: "Guest",
    };
  },
  computed: {

  },
  methods: {
    goto() {
      this.$router.push({
            name: "login",
          });
    },

    deleteitem(index){
      this.postsmedia.splice( index, 1);
      this.media.splice( index, 1);
    },
    ...mapActions({
      GET_ALL_POSTS: "post/GET_ALL_POSTS",
    }),


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
                    .profile_image {
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
.add_post_card:lang(ar) {
  direction: rtl;
}
</style>

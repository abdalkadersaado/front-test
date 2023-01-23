<template>
  <section class="login-form">
    <div v-if="loading" class="loading">
      <div>
        <h1>{{ $t("Please Waite ...") }}</h1>
        <span></span>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-10">
          <div class="card mt-5 mb-5">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body">
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="102.625"
                      height="92.918"
                      viewBox="0 0 102.625 92.918"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          y1="0.5"
                          x2="1"
                          y2="0.5"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#0d988c" />
                          <stop offset="1" stop-color="#39a95e" />
                        </linearGradient>
                      </defs>
                      <g
                        id="Group_1"
                        data-name="Group 1"
                        transform="translate(-288.461 -308.47)"
                      >
                        <path
                          id="Path_1"
                          data-name="Path 1"
                          d="M367.288,348.866l-68.326-39.448a7,7,0,0,0-10.5,6.062v78.9a7,7,0,0,0,10.5,6.063l68.326-39.448A7,7,0,0,0,367.288,348.866Z"
                          transform="translate(0 0)"
                          fill="url(#linear-gradient)"
                        />
                        <path
                          id="Path_2"
                          data-name="Path 2"
                          d="M375.64,360.991l68.326,39.448a7,7,0,0,0,10.5-6.062v-78.9a7,7,0,0,0-10.5-6.062L375.64,348.866A7,7,0,0,0,375.64,360.991Z"
                          transform="translate(-63.381 0)"
                          fill="#20b0de"
                        />
                        <path
                          id="Path_3"
                          data-name="Path 3"
                          d="M500,590.482"
                          transform="translate(-160.226 -213.605)"
                          fill="#fff"
                        />
                        <path
                          id="Path_4"
                          data-name="Path 4"
                          d="M500,547.869l23.628-13.642-22.163,14.487Z"
                          transform="translate(-160.226 -170.996)"
                          fill="#333"
                          opacity="0.39"
                        />
                        <path
                          id="Path_5"
                          data-name="Path 5"
                          d="M422.216,406.441l-24.91,14.382,23.366-15.274Z"
                          transform="translate(-82.442 -73.531)"
                          fill="#333"
                          opacity="0.39"
                        />
                      </g>
                    </svg>

                    <p class="custom_text text-center mt-5">
                      {{ $t("Please login to your account") }}
                    </p>
                  </div>
                  <form @submit.prevent="loginUser">
                    <div class="form-outline mb-2">
                      <label
                        class="form-label custom_text"
                        for="form2Example11"
                        >{{ $t("Username") }}</label
                      >
                      <input
                        type="text"
                        v-model="email_or_phone"
                        id="form2Example11"
                        class="form-control"
                        placeholder="Phone number or email address"
                      />
                    </div>
                    <div class="form-outline mb-2">
                      <label
                        class="form-label custom_text"
                        for="form2Example22"
                        >{{ $t("Password") }}</label
                      >
                      <input
                        type="password"
                        v-model="password"
                        id="form2Example22"
                        class="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <ul
                      v-if="errorMessage"
                      :class="{ error_background: errorMessage.length > 0 }"
                      class="list-unstyled p-2 text-light"
                      style="border-radius: 10px"
                    >
                      <li v-for="(item, index) in errorMessage" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                    <div class="text-center mt-5 mb-3 align-items-center">
                      <button
                        v-if="!loading"
                        class="btn custom_button btn-block fa-lg"
                        type="submit"
                      >
                        {{ $t("Login") }}
                      </button>
                      <button
                        v-else
                        class="btn custom_button btn-block fa-lg"
                        type="submit"
                      >
                        {{ $t("Loading ...") }}
                      </button>
                      <a
                        class="custom_text text-decoration-none ms-3"
                        href="#!"
                        >{{ $t("Forgot password?") }}</a
                      >
                    </div>
                    <div v-if="!waiting" class="d-flex justify-content-center auth align-items-center row">
                      <div class="col-3 d-flex justify-content-end"><img  src="../assets/facebook_logo.png" alt=""/></div>
                      <div class="col-9">
                        <p @click="handleFacebookLogin()">  
                          Login with Facebook
                        </p>
                      </div>
                    </div>
                    <div v-else  class="d-flex justify-content-center auth align-items-center">
                      <div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div v-if="!waiting1"  class="d-flex justify-content-center auth align-items-center row">
                      <div class="col-3 d-flex justify-content-end"><img  src="../assets/google_logo.jpg" alt=""></div>
                      <div class="col-9">
                        <p @click="handleGoogleLogin()">  
                            Login with Google
                        </p>
                      </div>
                    </div>
                    <div v-else  class="d-flex justify-content-center auth align-items-center">
                      <div class="spinner-grow text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="spinner-grow text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <div class="spinner-grow text-info" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">
                        {{ $t("Don't have an account?") }}
                      </p>
                      <button
                        type="button"
                        @click="register"
                        class="btn custom_button"
                      >
                        {{ $t("Create new") }}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="col-lg-6 d-flex align-items-center gradient-custom-2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider  } from "firebase/auth";
export default {
  name: "LoginView",
  data() {
    return {
      errorMessage: [],
      email_or_phone: null,
      password: null,
      waiting: null,
      waiting1: null,
    };
  },
  created() {
    if (this.isLogged) {
      this.$router.push({ name: "home" });
    }
  },

  methods: {
    async handleGoogleLogin() {
      this.waiting1 = true
      this.errorMessage = [];
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      let user = null
      await signInWithPopup(auth, provider)
        .then((result) => {
            
            const data = result.user;
            let names = data.displayName.split(" ");
            user = {
              "fcm_token": data.accessToken,
              "first_name": names[0],
              "last_name": names[1], 
              "photoURL": data.photoURL,
              "uid": data.uid,
              "social_type": "Google" 
              }
              if(data.phoneNumber != null){
                user.phoneNumber = data.phoneNumber
              }
              if(data.email != null){
                user.email = data.email
              }
              // console.log(user)


              this.waiting1 = null


        }).catch((error) => {
            console.log("error111")
            
            // Handle Errors here.
            const errorCode = error.code;
            
            const errorMessage1 = error.message;
            if (errorCode){
              this.errorMessage.push(errorMessage1);
            }
            this.waiting1 = null

            // ...
        });
        let res = await this.LOGIN_USER_OTHER_APP({user});
        // console.log(res)
        // console.log(res.data.errorCode)
        if (res.data.errorCode === 1) {
          // console.log("11111111111")
          for (const message in res.message) {
            this.errorMessage.push(res.message[message]);
          }
        } else {
          // console.log("2323223232323")
          this.$router.push({ name: "home" });
        }
    },
    async handleFacebookLogin(){
      this.waiting = true
      this.errorMessage = [];
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        let user = null
        await signInWithPopup(auth, provider).then((result) => {
            // The signed-in user info.
            const data = result.user;
            let names = data.displayName.split(" ");

            user = {
              "fcm_token": data.accessToken,
              "first_name": names[0],
              "last_name": names[1],
              "photoURL": data.photoURL,
              "uid": data.uid,
              "social_type": "Facebook" 
              }
              if(data.phoneNumber != null){
                user.phoneNumber = data.phoneNumber
              }
              if(data.email != null){
                user.email = data.email
              }
              this.waiting = null


            // ...
        }).catch((error) => {
            console.log(error)
            
            // Handle Errors here.
            const errorCode = error.code;
            
            const errorMessage1 = error.message;
            if (errorCode){
              this.errorMessage.push(errorMessage1);
            }
            

            this.waiting = null
        });
        let res = await this.LOGIN_USER_OTHER_APP({user});
        // console.log(res)
        // console.log(res.errorCode)
        if (res.data.errorCode === 1) {
          for (const message in res.message) {
            this.errorMessage.push(res.message[message]);
          }
          // this.$store.commit("TOGGLE_LOADING");
        } else {
          // this.$store.commit("TOGGLE_LOADING");
          this.$router.push({ name: "home" });
        }
    },
    ...mapActions({
      LOGIN_USER: "auth/LOGIN_USER",
      LOGIN_USER_OTHER_APP: "auth/LOGIN_USER_OTHER_APP",
    }),
    register() {
      this.$router.push({ name: "register" });
    },

    async loginUser() {
      this.$store.commit("TOGGLE_LOADING");
      this.errorMessage = [];
      const data = {
        email_or_phone: this.email_or_phone,
        password: this.password,
      };
      let res = await this.LOGIN_USER(data);
      if (res.errorCode === 1) {
        for (const message in res.message) {
          this.errorMessage.push(res.message[message]);
        }
        this.$store.commit("TOGGLE_LOADING");
      } else {
        this.$store.commit("TOGGLE_LOADING");
        this.$router.push({ name: "home" });
      }
    },
  },
  computed: {
    ...mapState(["loading"]),
    isLogged() {
      return this.$store.getters["auth/isLogged"];
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  top: -55px;
  left: 0;
  z-index: 99999;
  height: calc(100% + 55px);
  width: 100%;
  background-image: linear-gradient(
    to right top,
    #39a95e,
    #00af89,
    #00b2af,
    #00b2cc,
    #20b0de
  );
  opacity: 0.8;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  h1 {
    color: white;
    margin: 1rem auto;
  }
  span {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 3px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}

.card {
  box-shadow: rgba(7, 161, 136, 0.56) 0px 22px 70px 4px;
}
.gradient-custom-2 {
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}

input {
  color: #20b0de !important;
}

input:focus {
  outline: none !important;
  box-shadow: none !important;
}

input::placeholder {
  color: #20b0de !important;
}
.auth {
    cursor: pointer;
    border: 1px solid #777;
    padding: 0.5rem;
    margin-bottom: 1rem;
    p{
        margin: 0 0 0 1rem;
        padding: 0 ;
        font-size: large;
        font-weight: 600;
    }
    img{
        width: 30px;
        height: 30px;
    }
}
button.btn.custom_button {
    background: #00af89;
}
</style>

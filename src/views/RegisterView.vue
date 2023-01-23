<template>
  <section class="login-form">
    <div v-if="loading" class="loading">
      <div>
        <h1>{{ $t("Please Waite ...") }}</h1>
        <span></span>
      </div>
    </div>
    <div class="container" dir="auto">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-10">
          <div class="card mt-5">
            <div class="row g-0">
              <div class="card-body">
                <div class="text-center mb-5">
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
                  <h3 class="custom_text text-center mt-5">
                    {{ $t("Create new account") }}
                  </h3>
                </div>
                <form @submit.prevent="registerUser">
                  <div class="row mb-3">
                    <div class="col-md-4">
                      <div class="form-outline mb-2">
                        <label
                          class="form-label custom_text"
                          for="first_name"
                          >{{ $t("First Name") }}</label
                        >
                        <input
                          dir="auto"
                          type="text"
                          v-model="first_name"
                          id="first_name"
                          class="form-control"
                          :placeholder="$t('First Name')"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-outline mb-2">
                        <label
                          class="form-label custom_text"
                          for="middle_name"
                          >{{ $t("Middle Name") }}</label
                        >
                        <input
                          dir="auto"
                          type="text"
                          v-model="middle_name"
                          id="middle_name"
                          class="form-control"
                          placeholder="Middle Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-outline mb-2">
                        <label class="form-label custom_text" for="last_name">{{
                          $t("Last Name")
                        }}</label>
                        <input
                          dir="auto"
                          type="text"
                          v-model="last_name"
                          id="last_name"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="form-outline mb-2">
                        <label class="form-label custom_text" for="email">{{
                          $t("Email")
                        }}</label>
                        <input
                          type="email"
                          autocomplete="new-email"
                          v-model="email"
                          id="email"
                          class="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-outline mb-2">
                        <label class="form-label custom_text" for="phone">{{
                          $t("Phone Number")
                        }}</label>
                        <input
                          dir="auto"
                          type="text"
                          v-model="phone"
                          id="phone"
                          class="form-control"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <div class="form-outline mb-2">
                        <label class="form-label custom_text" for="password">{{
                          $t("Password")
                        }}</label>
                        <input
                          dir="auto"
                          type="password"
                          v-model="password"
                          autocomplete="new-password"
                          id="password"
                          class="form-control"
                          placeholder="Complex Password"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-outline mb-2">
                        <label
                          class="form-label custom_text"
                          for="password_confirmation"
                          >{{ $t("Password Confirmation") }}</label
                        >
                        <input
                          dir="auto"
                          type="password"
                          v-model="password_confirmation"
                          autocomplete="new-password"
                          id="password_confirmation"
                          class="form-control"
                          placeholder="Retype password"
                        />
                      </div>
                    </div>
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
                  <div class="text-center mb-3 align-items-center">
                    <button
                      v-if="!loading"
                      class="btn custom_button btn-block fa-lg"
                      type="submit"
                    >
                      {{ $t("Register Now") }}
                    </button>
                    <button v-else class="btn custom_button" type="submit">
                      <div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">{{
                          $t("Loading...")
                        }}</span>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "RegisterView",
  data() {
    return {
      errorMessage: [],
      first_name: null,
      middle_name: null,
      last_name: null,
      email: null,
      phone: null,
      password: null,
      password_confirmation: null,
    };
  },
  created() {
    if (this.isLogged) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    ...mapMutations(["TOGGLE_LOADING"]),
    ...mapActions({
      REGISTER_USER: "auth/REGISTER_USER",
    }),
    async registerUser() {
      this.TOGGLE_LOADING();
      this.errorMessage = [];
      const data = {
        first_name: this.first_name,
        middle_name: this.middle_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      let res = await this.REGISTER_USER(data);
      if (res.errorCode === 1) {
        for (const message in res.message) {
          this.errorMessage.push(res.message[message]);
        }
        this.TOGGLE_LOADING();
      } else {
        this.TOGGLE_LOADING();
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
  top: 0;
  left: 0;
  z-index: 222;
  height: 100%;
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

.card {
  box-shadow: rgba(7, 161, 136, 0.56) 0px 22px 70px 4px;
}
button.btn.custom_button {
    background: #00af89;
}
</style>

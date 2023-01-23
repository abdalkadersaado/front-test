<template>
  <div class="profile-intro" v-if="!loading_info">
    <div class="loading-info" v-if="this.profile_details.length != 0">
      <div v-if="this.profile_details[2].details.status == 1">
        <h3 v-if="this.profile_details.length != 0">
          {{ this.$i18n.t(this.profile_details[2].key_en) }}
          <!-- {{ this.profile_details[2].key_en  }} -->
        </h3>

        <p class="intro-text" v-if="this.profile_details.length != 0">
          <span v-if="this.profile_details[2].details.value != null"
            >{{ this.profile_details[2].details.value }}
            <img src="@/assets/images/feeling.png"
          /></span>
          <span v-else class="text-center">
            {{ $t("no value specified") }}</span
          >
        </p>
        <hr />
      </div>

      <ul v-if="this.profile_details.length != 0">
        <div v-for="job in my_jobs" :key="job.id">
          <div v-if="job.status == 1">
            <li>
              <img
                src="@/assets/images/profile-job.png"
                alt=""
                class="rtl-details"
              />
              <span class="details-margin"
                >{{ job.title }} in {{ job.location }}</span
              >
            </li>
          </div>
        </div>
        <div v-for="study in my_studies" :key="study.id">
          <div v-if="study.status == 1">
            <li>
              <img
                src="@/assets/images/profile-study.png"
                alt=""
                class="rtl-details"
              />
              <span class="details-margin"
                >{{ study.name }} in {{ study.location }}</span
              >
            </li>
          </div>
        </div>
        <li v-if="this.profile_details[1].details.status == 1">
          <img
            src="@/assets/images/profile-home.png"
            alt=""
            class="rtl-details"
          />
          <span class="details-margin">{{
            this.$i18n.t(this.profile_details[1].key_en)
          }}</span>

          :&nbsp;
          <span
            v-if="this.profile_details[1].details.value"
            class="details-margin"
            >{{ this.profile_details[1].details.value }}</span
          >
          <span v-else class="details-margin">
            {{ $t("no value specified") }}</span
          >
        </li>
        <li v-if="this.profile_details[0].details.status == 1">
          <img
            src="@/assets/images/profile-location.png"
            alt=""
            class="rtl-details"
          />
          <span class="details-margin">{{
            this.$i18n.t(this.profile_details[0].key_en)
          }}</span>
          :&nbsp;
          <span
            v-if="this.profile_details[0].details.value"
            class="details-margin"
            >{{ this.profile_details[0].details.value }}</span
          >
          <span v-else class="details-margin">
            {{ $t("no value specified") }}</span
          >
        </li>
        <li v-if="this.profile_details[3].details.status == 1">
          <b>{{ this.$i18n.t(this.profile_details[3].key_en) }}</b>
          : {{ this.profile_details[3].details.value }}
        </li>
      </ul>
    </div>
  </div>

  <!--  -->
  <div v-else class="profile-intro">
    <div class="container loading-skeleton">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-head">
              <h5 class="card-title">Card title</h5>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick</p>

              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.a_Get_my_jobs();
    this.a_get_my_studies();
    this.get_profile_public_details();
  },

  methods: {
    ...mapActions({
      a_Get_my_jobs: "profile/a_Get_my_jobs",
      a_get_my_studies: "profile/a_get_my_studies",
      get_profile_public_details: "profile/get_profile_public_details",
    }),
  },
  computed: {
    ...mapGetters({
      my_jobs: "profile/my_jobs",
      my_studies: "profile/my_studies",
      profile_details: "profile/profile_details",
      loading_info: "profile/loading_info",
    }),
  },
};
</script>

<style lang="scss" scoped>
.profile-intro {
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.profile-intro h3 {
  font-weight: 600;
}

.intro-text {
  text-align: 10px 0;
  font-size: 15px;
}

.intro-text img {
  width: 15px;
  margin-bottom: -3px;
}

.profile-intro hr {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 24px 0;
}

.profile-intro ul li {
  list-style: none;
  font-size: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
}

.profile-intro ul li img {
  width: 26px;
  margin-right: 10px;
}
.profile-intro ul li:lang(ar) {
  margin-right: -35px;
}
.details-margin:lang(ar) {
  margin: 5px 10px;
}

.container {
  margin-top: 4em;
  margin-bottom: 4em;
}

// Bootstrap Loading Skeleton
%loading-skeleton {
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-color: #eee;
  border-color: #eee;

  &::placeholder {
    color: transparent;
  }
}
@keyframes loading-skeleton {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;

  img {
    filter: grayscale(100) contrast(0%) brightness(1.8);
  }
  h5,
  p,
  li,
  .btn,
  label,
  .form-control {
    @extend %loading-skeleton;
  }
}
.card {
  border: none;
}
</style>

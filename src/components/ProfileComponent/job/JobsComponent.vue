<template>
  <div class="write-post-container">
    <ul>
      <h3>{{ $t("Job") }}</h3>
      <div>
        <h6 class="create-job" @click="this.myFunction()">
          {{ $t("Create new job") }}
        </h6>
        <div class="input-job" v-if="enableDisable">
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('Title job')"
              type="text"
              v-model="form.title"
            />
          </div>
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('Company')"
              type="text"
              v-model="form.company"
            />
          </div>
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('Location')"
              type="text"
              v-model="form.location"
            />
          </div>
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('Description')"
              type="text"
              v-model="form.des"
            />
          </div>
          <div class="vcomments__add-block">
            <label for="work_here" class="vcomments__add-input"
              >{{ $t("work here") }}
              <input type="checkbox" id="work_here" v-model="form.work_here"
            /></label>
          </div>
          <div class="vcomments__add-block">
            <label for="display_in_profile" class="vcomments__add-input"
              >{{ $t("display in Profile") }}
              <input
                type="checkbox"
                id="display_in_profile"
                v-model="form.status"
            /></label>
          </div>
          <div class="vcomments__add-block">
            <label for="">{{ $t("Work start date") }}</label>
            <input
              type="date"
              class="vcomments__add-input"
              placeholder="Start job"
              v-model="form.start_at"
            />
          </div>
          <div class="vcomments__add-block">
            <label for="">{{ $t("Work end date") }}</label>
            <input
              type="date"
              class="vcomments__add-input"
              placeholder="End job"
              v-model="form.end_at"
            />
          </div>
          <div class="vcomments__add-block">
            <select class="vcomments__add-input" v-model="form.selectPrivacy">
              <option value="">
                {{ $t("Choose type privacy...") }}
              </option>
              <option :selected="form.selectPrivacy == 'public'" value="public">
                {{ $t("public") }}
              </option>
              <option
                :selected="form.selectPrivacy == 'friends'"
                value="friends"
              >
                {{ $t("friends") }}
              </option>
              <option
                :selected="form.selectPrivacy == 'just_me'"
                value="just_me"
              >
                {{ $t("just me") }}
              </option>
              <option
                :selected="form.selectPrivacy == 'specific_friends'"
                value="specific_friends"
              >
                {{ $t("specific friends") }}
              </option>
              <option
                :selected="form.selectPrivacy == 'all_friends_except'"
                value="all_friends_except"
              >
                {{ $t("all friends except") }}
              </option>
            </select>
          </div>
          <br />
          <div class="form-group">
            <button
              v-if="!isloading"
              class="btn btn-primary btn-block"
              @click="this.a_store_job(this.form)"
              :disabled="!this.form.start_at || !this.form.end_at"
            >
              {{ $t("Save") }}
            </button>
            <button
              v-else
              class="btn btn-lg btn-light w-100 text-dark fw-bold d-flex align-items-center justify-content-center"
              type="submit"
            >
              Loading ...
              <div class="spinner-border text-dark ms-2" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
            <span
              class="btn btn-sm btn-default"
              @click="this.enableDisable = false"
            >
              {{ $t("Cancel") }}
            </span>
          </div>
          <hr />
        </div>
      </div>
      <div v-for="(job, index) in my_jobs" :key="index">
        <JobComponent :job="job"></JobComponent>
      </div>
      <div class="text-center" v-show="!my_jobs.length">
        {{ $t("There is no job yet") }}
      </div>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import JobService from "@/services/Profile/JobService";
import JobComponent from "./JobComponent.vue";
export default {
  components: { JobComponent },
  data() {
    return {
      form: {
        title: null,
        company: null,
        location: null,
        des: null,
        start_at: null,
        end_at: null,
        work_here: false,
        selectPrivacy: "",
      },
      isloading: false,
      enableDisable: false,
      enableEditing: false,
      errors: [],
    };
  },
  methods: {
    myFunction: function () {
      if (this.enableDisable) {
        this.enableDisable = false;
      } else {
        this.enableDisable = true;
      }
    },
    EditingFunction: function () {
      if (this.enableEditing) {
        this.enableEditing = false;
      } else {
        this.enableEditing = true;
      }
    },
    a_store_job() {
      this.isloading = true;
      JobService.Store_job(this.form)
        .then((res) => {
          this.$store.commit("profile/ADD_JOB", res.data.data);
          this.form.title = null;
          this.form.type = null;
          this.form.location = null;
          this.form.des = null;
          this.form.start_at = null;
          this.form.end_at = null;
          this.form.work_here = false;
          this.form.selectPrivacy = "";
          this.enableDisable = false;
          this.isloading = null;
        })
        .catch((error) => (this.errors = error.response.data.errors));
    },

    ...mapActions({
      a_Get_my_jobs: "profile/a_Get_my_jobs",
      a_delete_job: "profile/a_delete_job",
    }),
  },
  computed: {
    ...mapGetters({ my_jobs: "profile/my_jobs" }),
  },
};
</script>

<style lang="scss" scoped>
.create-job {
  color: #0790e7;
  cursor: pointer;
}
.container {
  margin: 20px auto;
  // width: 1200px;
  .tabs-choose {
    margin-bottom: 0;
    li {
      display: inline-block;
      padding: 10px 20px;
      background-color: #eee;
      cursor: pointer;
      opacity: 0.3;
      &.active {
        opacity: 1;
      }
    }
  }
  .tabs-content {
    background-color: #eee;
    margin: 0 auto;
    padding: 20px;
  }
}
.post-col ul li {
  list-style: none;
  font-size: 15px;
  margin: 15px 0;
  align-items: center;
}
.post-col ul li img {
  width: 26px;
  margin-right: 10px;
}
.vcomments__add-input {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: 1px solid #eee;
  padding: 10px 17px 10px 15px;
  border-radius: 40px;
  transition: all 0.2s ease-out;
}
.vcomments__add-input:lang(ar) {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: 1px solid #eee;
  padding: 10px 17px 10px 15px;
  border-radius: 40px;
  transition: all 0.2s ease-out;
}
.vcomments {
  $this: &;
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
  &__add-block {
    margin-top: 15px;
    position: relative;
  }
}
</style>

<template>
  <div class="write-post-container">
    <ul>
      <h3>{{ $t("Study") }}</h3>
      <div>
        <h6 class="create-job" @click="this.myFunction()">
          {{ $t("Create new study") }}
        </h6>
        <div class="input-job" v-if="enableDisable">
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('name study')"
              type="text"
              v-model="formStudy.name"
            />
          </div>
          <div class="vcomments__add-block">
            <select class="vcomments__add-input" v-model="formStudy.type">
              <option value="" disabled>{{ $t("Choose type study") }}</option>
              <option value="school">{{ $t("School") }}</option>
              <option value="college">{{ $t("College") }}</option>
            </select>
          </div>
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('Speciality')"
              type="text"
              v-model="formStudy.speciality"
            />
          </div>
          <div class="vcomments__add-block">
            <input
              class="vcomments__add-input"
              :placeholder="$t('Location')"
              type="text"
              v-model="formStudy.location"
            />
          </div>
          <div class="vcomments__add-block">
            <label for="study_here" class="vcomments__add-input"
              >{{ $t("study here") }}
              <input
                type="checkbox"
                id="study_here"
                v-model="formStudy.study_here"
            /></label>
          </div>
          <div class="vcomments__add-block tg-list">
            <section title=".slideThree" class="vcomments__add-input">
              <div class="slideThree">
                <input
                  type="checkbox"
                  id="slideThree"
                  name="check"
                  v-model="formStudy.status"
                  checked
                />
                <label for="slideThree">{{ $t("display in Profile") }}</label>
              </div>
            </section>
          </div>
          <div class="vcomments__add-block">
            <label for="">Study Start date</label>
            <input
              type="date"
              class="vcomments__add-input"
              placeholder="Start Study"
              v-model="formStudy.start_at"
            />
          </div>
          <div class="vcomments__add-block">
            <label for="">Study end date</label>
            <input
              type="date"
              class="vcomments__add-input"
              placeholder="End study"
              v-model="formStudy.end_at"
            />
          </div>
          <div class="vcomments__add-block">
            <select class="vcomments__add-input" v-model="formStudy.privacy">
              <option value="">Choose type privacy...</option>
              <option value="public">{{ $t("public") }}</option>
              <option value="friends">{{ $t("friends") }}</option>
              <option value="just_me">{{ $t("just me") }}</option>
              <option value="specific_friends">
                {{ $t("specific friends") }}
              </option>
              <option value="all_friends_except">
                {{ $t("all friends except") }}
              </option>
            </select>
          </div>
          <br />
          <div class="form-group">
            <button
              v-if="!isloading"
              class="btn btn-primary btn-block"
              @click="this.a_store_study(this.formStudy)"
              :disabled="!this.formStudy.start_at || !this.formStudy.end_at"
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
      <div v-for="study in my_studies" :key="study.id">
        <study-component :study="study"></study-component>
      </div>
      <div class="text-center" v-show="!my_studies.length">
        {{ $t("There is no Studies yet") }}
      </div>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import StudiesService from "@/services/Profile/StudiesService";
import StudyComponent from "./StudyComponent.vue";
export default {
  components: { StudyComponent },
  data() {
    return {
      formStudy: {
        name: null,
        type: "",
        speciality: null,
        location: null,
        study_here: null,
        start_at: null,
        end_at: null,
        privacy: "",
        status: true,
      },
      enableDisable: false,
      isloading: false,
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
    a_store_study() {
      this.isloading = true;
      StudiesService.Store_study(this.formStudy)
        .then((res) => {
          this.$store.commit("profile/ADD_STUDY", res.data.data);
          this.formStudy.name = null;
          this.formStudy.company = null;
          this.formStudy.speciality = null;
          this.formStudy.location = null;
          this.formStudy.start_at = null;
          this.formStudy.end_at = null;
          this.formStudy.study_here = false;
          this.formStudy.privacy = "";
          this.enableDisable = false;
          this.isloading = null;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ...mapActions({
      a_get_my_studies: "profile/a_get_my_studies",
      a_delete_study: "profile/a_delete_study",
    }),
  },
  computed: {
    ...mapGetters({
      my_studies: "profile/my_studies",
    }),
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
.vcomments__add-input:lang(ar) {
  padding: 10px 10px 10px 15px;
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

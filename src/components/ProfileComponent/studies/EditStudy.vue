<template>
  <button
    class="btn btn-sm btn-warning"
    data-bs-toggle="modal"
    :data-bs-target="'#staticEdit' + study.id"
  >
    {{ $t("Edit") }}
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="'staticEdit' + study.id"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            {{ $t("Update Study") }}
          </h5>
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
          <div class="input-job">
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
                <option :selected="formStudy.type === 'school'" value="school">
                  {{ $t("School") }}
                </option>
                <option
                  :selected="formStudy.type === 'college'"
                  value="college"
                >
                  {{ $t("College") }}
                </option>
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
                <select
                  class="vcomments__add-input"
                  @input="formStudy.study_here = $event.target.value"
                >
                  <option :selected="formStudy.study_here == true" value="1">
                    {{ $t("Yes") }}
                  </option>
                  <option :selected="formStudy.study_here == false" value="0">
                    {{ $t("No") }}
                  </option>
                </select>
              </label>
            </div>
            <div class="vcomments__add-block">
              <label for="display_in_profile" class="vcomments__add-input"
                >{{ $t("display in Profile") }}
                <select
                  class="vcomments__add-input"
                  @input="formStudy.status = $event.target.value"
                >
                  <option :selected="this.study.status === '1'" value="1">
                    {{ $t("Yes") }}
                  </option>
                  <option :selected="this.study.status === '0'" value="0">
                    {{ $t("No") }}
                  </option>
                </select>
              </label>
            </div>
            <div class="vcomments__add-block">
              <label for="">{{ $t("Study Start date") }}</label>
              <input
                type="date"
                class="vcomments__add-input"
                placeholder="Start Study"
                v-model="formStudy.start_at"
              />
            </div>
            <div class="vcomments__add-block">
              <label for="">{{ $t("Study end date") }}</label>
              <input
                type="date"
                class="vcomments__add-input"
                placeholder="End study"
                v-model="formStudy.end_at"
              />
            </div>
            <div class="vcomments__add-block">
              <select
                class="vcomments__add-input"
                @input="formStudy.privacy = $event.target.value"
              >
                <option value="">Choose type privacy...</option>
                <option
                  :selected="formStudy.privacy === 'public'"
                  value="public"
                >
                  {{ $t("public") }}
                </option>
                <option
                  :selected="formStudy.privacy === 'friends'"
                  value="friends"
                >
                  {{ $t("friends") }}
                </option>
                <option
                  :selected="formStudy.privacy === 'just_me'"
                  value="just_me"
                >
                  {{ $t("just me") }}
                </option>
                <option
                  :selected="formStudy.privacy === 'specific_friends'"
                  value="specific_friends"
                >
                  {{ $t("specific friends") }}
                </option>
                <option
                  :selected="formStudy.privacy === 'all_friends_except'"
                  value="all_friends_except"
                >
                  {{ $t("all friends except") }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            {{ $t("Close") }}
          </button>
          <button
            v-if="!isloading"
            type="button"
            class="btn btn-danger"
            @click="update_study(study.id)"
          >
            {{ $t("Update") }}
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StudiesService from "@/services/Profile/StudiesService";
export default {
  props: ["study"],
  data() {
    return {
      formStudy: {
        name: this.study.name,
        type: this.study.type,
        speciality: this.study.speciality,
        location: this.study.location,
        study_here: this.study.study_here,
        start_at: this.study.start_at,
        end_at: this.study.end_at,
        privacy: this.study.privacy,
        status: this.study.status,
      },
      isloading: false,
    };
  },
  methods: {
    update_study(id) {
      this.isloading = true;
      StudiesService.Update_study(id, this.formStudy)
        .then((res) => {
          this.$store.commit("profile/UPDATE_STUDY", res.data.data);
          this.isloading = null;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.vcomments__add-input:lang(ar) {
  box-sizing: border-box;
  width: 100%;
  outline: none;
  border: 1px solid #eee;
  padding: 10px 17px 10px 15px;
  border-radius: 40px;
  transition: all 0.2s ease-out;
}
.close-dir:lang(ar) {
  direction: ltr;
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

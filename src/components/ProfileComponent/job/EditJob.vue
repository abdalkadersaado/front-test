<template>
  <button
    class="btn btn-sm btn-warning"
    data-bs-toggle="modal"
    :data-bs-target="'#staticEdit' + job.id"
  >
    {{ $t("Edit") }}
  </button>
  <!-- Modal -->
  <div
    dir="auto"
    class="modal fade"
    :id="'staticEdit' + job.id"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div dir="rtl" class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            {{ $t("Update Job") }}
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
                <select
                  class="vcomments__add-input"
                  @input="form.work_here = $event.target.value"
                >
                  <option :selected="form.work_here == true" value="1">
                    {{ $t("Yes") }}
                  </option>
                  <option :selected="form.work_here == false" value="0">
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
                  @input="form.status = $event.target.value"
                >
                  <option :selected="form.status == true" value="1">
                    {{ $t("Yes") }}
                  </option>
                  <option :selected="form.status == false" value="0">
                    {{ $t("No") }}
                  </option>
                </select>
              </label>
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
              <select
                class="vcomments__add-input"
                @input="form.privacy = $event.target.value"
              >
                <option value="" disabled>
                  {{ $t("Choose type privacy...") }}
                </option>
                <option :selected="form.privacy === 'public'" value="public">
                  {{ $t("public") }}
                </option>
                <option :selected="form.privacy === 'friends'" value="friends">
                  {{ $t("friends") }}
                </option>
                <option :selected="form.privacy === 'just_me'" value="just_me">
                  {{ $t("just me") }}
                </option>
                <option
                  :selected="form.privacy === 'specific_friends'"
                  value="specific_friends"
                >
                  {{ $t("specific friends") }}
                </option>
                <option
                  :selected="form.privacy === 'all_friends_except'"
                  value="all_friends_except"
                >
                  {{ $t("all friends except") }}
                </option>
              </select>
            </div>
            <br />
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
            data-bs-dismiss="modal"
            @click="update_job(job.id)"
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
import JobService from "@/services/Profile/JobService";
export default {
  props: ["job"],
  data() {
    return {
      form: {
        title: this.job.title,
        company: this.job.company,
        location: this.job.location,
        des: this.job.des,
        start_at: this.job.start_at,
        end_at: this.job.start_at,
        work_here: this.job.work_here,
        privacy: this.job.privacy,
        status: this.job.status,
      },
      isloading: false,
    };
  },
  methods: {
    update_job(id) {
      this.isloading = true;
      JobService.Update_job(id, this.form)
        .then((res) => {
          this.$store.commit("profile/UPDATE_JOB", res.data.data);
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

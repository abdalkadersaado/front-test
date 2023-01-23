<template>
  <button
    class="btn btn-sm btn-danger"
    data-bs-toggle="modal"
    :data-bs-target="'#staticDelete' + job.id"
  >
    {{ $t("Delete") }}
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="'staticDelete' + job.id"
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
            {{ $t("Are you sure to delete this?") }}
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
            @click="delete_job(job.id)"
          >
            {{ $t("Delete") }}
          </button>
          <button
            v-else
            class="btn btn-lg btn-light w-100 text-dark fw-bold d-flex align-items-center justify-content-center"
            type="submit"
          >
            {{ $t("Loading ...") }}
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
import { mapActions } from "vuex";
export default {
  props: ["job"],
  data() {
    return {
      isloading: false,
    };
  },
  methods: {
    delete_job(data) {
      this.isloading = true;
      this.a_delete_job(data);
      this.isloading = null;
    },
    ...mapActions({
      a_delete_job: "profile/a_delete_job",
    }),
  },
};
</script>
<style lang="scss" scoped>
.close-dir:lang(ar) {
  direction: ltr;
}
</style>

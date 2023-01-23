<template>
  <li>
    <img src="@/assets/images/profile-job.png" alt="" class="image-job" />
    {{ job.title }} in {{ job.location }}
    <delete-job :job="job" dir="auto"></delete-job>
    &nbsp;
    <edit-job :job="job" dir="auto"></edit-job>
  </li>
</template>

<script>
import DeleteJob from "./DeleteJob.vue";
import EditJob from "./EditJob.vue";
export default {
  props: ["job"],
  data() {
    return {
      isloading: false,
    };
  },
  methods: {},
  components: { DeleteJob, EditJob },
};
</script>
<style lang="scss" scoped>
.image-job {
  width: 30px;
}
</style>

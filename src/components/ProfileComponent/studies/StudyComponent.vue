<template>
  <li>
    <img src="@/assets/images/profile-study.png" alt="" class="image-study" />
    {{ study.name }} - specialty at {{ study.speciality }} in
    {{ study.location }}
    <DeleteStudy :study="study" dir="auto"></DeleteStudy>
    &nbsp;
    <edit-study :study="study" dir="auto"></edit-study>
  </li>
</template>

<script>
import DeleteStudy from "./DeleteStudy.vue";
import EditStudy from "./EditStudy.vue";
export default {
  props: ["study"],
  data() {
    return {
      isloading: false,
    };
  },
  methods: {},
  components: { DeleteStudy, EditStudy },
};
</script>

<style lang="scss" scoped>
.image-study {
  width: 30px;
}
</style>

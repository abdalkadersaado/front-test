<template>
  <div v-for="profile_detail in profile_details" :key="profile_detail.id">
    <PublicStaticDetails :profile_detail="profile_detail"></PublicStaticDetails>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PublicStaticDetails from "./PublicStaticDetails.vue";

export default {
  props: ["profile_detail"],
  components: {
    PublicStaticDetails,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ profile_details: "profile/profile_details" }),
  },
};
</script>
<style></style>

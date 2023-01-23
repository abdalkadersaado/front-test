<template>
  <div
    dir="auto"
    class="row m-0 justify-content-center"
    style="background-color: #ddd; min-height: calc(100vh -55px) !important"
  >
    <LeftPageComponent :id="id" />
    <RightPageComponent :id="id" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import LeftPageComponent from "@/components/PageComponent/MyPageComponent/LeftPageComponent";
import RightPageComponent from "@/components/PageComponent/MyPageComponent/RightPageComponent";
export default {
  name: "MyPageView",

  data() {
    return {
      id: useRoute().params.id,
    };
  },
  props: {},

  components: { LeftPageComponent, RightPageComponent },
};
</script>

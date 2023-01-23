<template>
  <div
    class="row m-0 justify-content-center"
    style="background-color: #f3f3f3; min-height: 100vh"
  >
    <LeftHomeComponent />
    <CenterHomeComponent />
    <RightHomeComponent />
  </div>
</template>

<script>
import LeftHomeComponent from "@/components/HomeComponent/LeftHomeComponent.vue";
import CenterHomeComponent from "@/components/HomeComponent/CenterHomeComponent.vue";
import RightHomeComponent from "@/components/HomeComponent/RightHomeComponent.vue";
export default {
  name: "HomeView",

  components: { LeftHomeComponent, CenterHomeComponent, RightHomeComponent },
};
</script>

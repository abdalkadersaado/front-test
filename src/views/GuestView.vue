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
import LeftHomeComponent from "@/components/Guest/LeftHomeComponent.vue";
import CenterHomeComponent from "@/components/Guest/CenterHomeComponent.vue";
import RightHomeComponent from "@/components/Guest/RightHomeComponent.vue";
export default {
    name: "GuestView",
    components: { 
        LeftHomeComponent, 
        CenterHomeComponent, 
        RightHomeComponent
     },
}
</script>
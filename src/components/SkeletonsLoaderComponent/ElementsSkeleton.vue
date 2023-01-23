<template>
  <div :class="type2"></div>
</template>
<script>
export default {
  name: "ElementsSkeleton",
  data() {
    return {
      type2: this.type,
    };
  },
  props: ["type"],
};
</script>
<style lang="scss" scoped>
.LogoImage {
  border-radius: 100%;
  border: 1px solid white;
  position: absolute;
  width: 40px !important;
  height: 40px !important;
  top: 0.8rem;
  left: 0.5rem;
  display: block;
  animation: pulse-profile 1s infinite;
}
.shortText {
  border-radius: 3px;
  width: 50px !important;
  height: 15px !important;
  display: block;
  margin-left: 40px;
  animation: pulse-profile 1s infinite;
}
@keyframes pulse-profile {
  0% {
    background-color: rgb(238, 238, 238);
  }
  50% {
    background-color: rgb(217, 223, 223);
  }
  100% {
    background-color: rgb(238, 238, 238);
  }
}
</style>
<template>
  <main>
    <NavbarComponent v-if="currentRouteName != 'login' && currentRouteName !='register'" />
    <router-view />
  </main>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";


export default {
  components: {
    NavbarComponent,
  },

  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
};
</script>

<style lang="scss">
// html:lang(ar) {
//   align-items: right;
//   text-align: right;
// }
body {
  margin: 0 !important;
}
// START GLOBAL STYLE
.active_link {
  background-color: transparent !important;
  color: #0d988c !important;
  font-weight: bold;
  border-bottom: 4px solid #00a79d;
  svg path {
    fill: #00a79d;
  }
}

@media screen and (max-width: 992px) {
  .active_link {
    background-color: white !important;
    color: #0d988c !important;
    font-weight: bold;
    border-bottom: none !important;
    svg path {
      fill: #00a79d;
    }
  }
}

.error_background {
  background-image: linear-gradient(
    to right top,
    #39a95e,
    #00af89,
    #00b2af,
    #00b2cc,
    #20b0de
  );
  li {
    font-weight: bold;
  }
}
.custom_button {
  background-color: #0d988c;
  color: white;
  border: 1px solid #0d988c;

  &:hover {
    color: white;
  }
}

.custom_text {
  color: #20b0de;
  font-weight: bold;
}

// END GLOBAL STYLE
</style>

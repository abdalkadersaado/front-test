<template>
  <div class="div">
    <div class="row py-2 me-0">
      <div class="wrapper" dir="auto">
        <CreateStory />
        <StorySkeleton v-if="isLoading" />
        <AllStories
          v-else
          v-for="user in users_with_lastStory"
          :key="user.id"
          :user="user"
          @click="goto()"
        />
      </div>
    </div>
  </div>
</template>
<script>
import StorySkeleton from "../SkeletonsLoaderComponent/StorySkeleton.vue";
import CreateStory from "./Story/CreateComponent.vue";
import AllStories from "./Story/AllStoriesComponent.vue";
import StoryService from "@/services/story/story.services";
export default {
  data() {
    return {
      users_with_lastStory: [],
      isLoading: true,
    };
  },
  components: {
    StorySkeleton,
    CreateStory,
    AllStories,
  },
  created() {
    this.getAllStories();
  },
  methods: {
    goto() {
      this.$router.push({
        name: "login",
      });
    },
    async getAllStories() {
      return StoryService.getAllStories()
        .then((response) => {
          // console.log(response);
          if (response.data.status == 200) {
            this.isLoading = false;
            this.users_with_lastStory = response.data.data.items;
          } else {
            console.log("UnExpected Erorr");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

p {
  font-weight: bold;
  font-size: 12px;
  color: white;
  margin-top: 13px;
  font-family: arial;
}
.wrapper {
  padding: 5px;
  background: white;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>

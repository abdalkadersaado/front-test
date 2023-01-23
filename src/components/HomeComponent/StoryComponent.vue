<template>
  <div class="div">
    <div class="row py-2 me-0" v-if="isloadingnewstory">
      <div class="wrapper" dir="auto">
        <CreateStory />
        <AddStorySkelton />
        <AllStories
         
          v-for="user in users_with_lastStory"
          :key="user.id"
          :user="user"
          @click="showStory(user.id)"
        />
      </div>
      <!-- <ShowStory /> -->
    </div>
    <div v-else>
      <div class="wrapper" dir="auto">
        <CreateStory />
        <StorySkeleton v-if="isLoading" />
        <AllStories
          v-else
          v-for="user in users_with_lastStory"
          :key="user.id"
          :user="user"
          @click="showStory(user.id)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import StorySkeleton from "../SkeletonsLoaderComponent/StorySkeleton.vue";
import AddStorySkelton from "../SkeletonsLoaderComponent/AddStorySkelton.vue";
import CreateStory from "./Story/CreateComponent.vue";
import AllStories from "./Story/AllStoriesComponent.vue";
// import ShowStory from "./Story/ShowStoryComponenet.vue";
import StoryService from "@/services/story/story.services";
import { mapState } from 'vuex';
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
    AddStorySkelton,
  },
  created() {
    this.getAllStories();
  },
  computed: {
    ...mapState("story", {
      isloadingnewstory: "isloadingnewstory"
    })
  },
  methods: {
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

    showStory(id) {
      this.$router.push({ name: "StoriesView", params: { id: id }});
      this.$store.dispatch("story/getStories", id);
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

<template>
  <!--start friend  -->
  <span v-if="!loading_friendship_status">
    <span v-if="this.auth_user_id == this.$route.params.id"></span>
    <span v-else>
      <!--  friendship Status -->
      <span v-if="!loading_add_friend">
        <button
          type="button"
          class="friendships"
          @click="add_friend()"
          v-if="status == 'Not found request'"
        >
          <img src="@/assets/images/add-friends.png" alt="" />{{
            $t("Add Friend")
          }}
        </button>
      </span>
      <button class="friendships" v-else>Loading ...</button>
      <span v-if="!loading_accept_friend">
        <button
          class="friendships"
          type="button"
          v-if="status == 'Pending'"
          @click="accept_friend()"
        >
          <img src="@/assets/images/add-friends.png" alt="" />{{
            $t("Accept Friend")
          }}
        </button>
        <!-- <span @click="showSuccess" v-if="status == 'Pending'">
          <button @click="a_delete_pending_request(friend.id)" type="button">
            Remove request
          </button>
        </span> -->
      </span>
      <button class="friendships" v-else type="button">
        {{ $t("Loading ...") }}
      </button>
      <button class="friendships" type="button" v-if="status == 'Waiting'">
        {{ $t("Waiting for response") }}
      </button>

      <!-- <span @click="showSuccess" v-if="status == 'Waiting'">
        <button @click="a_delete_waiting_request(friend.id)" type="button">
          Remove request
        </button>
      </span> -->
      <button type="button" class="friendships" v-if="status == 'Friends'">
        {{ $t("You're Friends") }}
      </button>
      <!-- <span @click="showSuccess" v-if="status == 'Friends'">
        <button @click="a_delete_friend(friend.id)" type="button">
          Remove Friend
        </button>
      </span> -->
    </span>
  </span>
  <div
    v-else
    class="col-md-12 col-lg-8 center_loading pe-5 justify-content-center d-flex align-items-center"
  >
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">{{ $t("Loading ...") }}</span>
    </div>
  </div>
  <!-- End friendships -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  mounted() {
    this.check_relation_status();
  },
  methods: {
    ...mapActions({
      a_delete_friend: "friendships/a_delete_friend",
      a_delete_waiting_request: "friendships/a_delete_waiting_request",
      a_delete_pending_request: "friendships/a_delete_pending_request",
    }),
    async check_relation_status() {
      this.$store.dispatch(
        "profile/check_relation_status",
        this.$route.params.id
      );
    },
    async add_friend() {
      this.$store.dispatch("profile/a_add_friend", this.$route.params.id);
      this.add_friend_success({
        message: this.$i18n.t("A friend has been added successfully"),
      });
    },
    async accept_friend() {
      this.$store.dispatch("profile/a_accept_friend", this.$route.params.id);
      this.Accept_friend_Success({
        message: this.$i18n.t("The request has been Accept successfully"),
      });
    },
  },
  computed: {
    ...mapGetters({
      status: "profile/status",
      loading_friendship_status: "profile/loading_friendship_status",
      loading_add_friend: "profile/loading_add_friend",
      loading_accept_friend: "profile/loading_accept_friend",
      auth_user_id: "auth/auth_user_id",
    }),
  },
  notifications: {
    Accept_friend_Success: {
      title: "Friendship",
      message: "The request has been Accept successfully",
      type: "success",
    },
    add_friend_success: {
      title: "Friendship",
      message: "A friend has been added successfully",
      type: "success",
    },
  },
};
</script>
<style scoped>
/*  */

.pd-right button {
  background: #1876f2;
  border: 0;
  outline: 0;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
}

.pd-right button img {
  height: 15px;
  margin-right: 10px;
}

.pd-right button:first-child {
  background: #e4e6eb;
  color: #000;
}

.pd-right {
  text-align: right;
}

.pd-right a {
  background: #e4e6eb;
  border-radius: 3px;
  padding: 12px;
  display: inline-flex;
  margin-top: 30px;
}

.pd-right a img {
  width: 20px;
}

/*  */
.pd-right .friendships {
  background: #e4e6eb;
  color: #000;
}
</style>

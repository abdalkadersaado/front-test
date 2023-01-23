<template>
  <div
    class="row m-0 justify-content-center"
    style="background-color: #f3f3f3; min-height: 100vh"
  >
    <LeftHomeComponent />
    <br />
    <div class="col-md-12 col-lg-8 col-sm-12 py-0 center">
      <br />
      <div class="container" dir="auto">
        <div class="text-right">
          <b class="text-my-page"
            >{{ $t("Friendship Requests") }} ({{ this.requests_pending_count }})</b
          >
        </div>
        <br />
        <div class="row" v-if="!loading_pending_request">
          <div
            v-for="(request_p, index) in requests_pending"
            :key="index"
            class="d-flex flex-wrap col-md-3 col-xl-3"
          >
            <div class="card">
              <div class="card-body">
                <div class="media align-items-center">
                  <span class="avatar avatar-xl mr-3">
                    <img
                      class="card-img-top"
                      v-if="!request_p.sender.media[0]"
                      src="@/assets/cover/user-13.jpg"
                      alt
                      loading="lazy"
                    />
                    <img
                      class="card-img-top"
                      v-else
                      :src="request_p.sender.media[0].src_url"
                      alt="friend image"
                      loading="lazy"
                    />
                  </span>
                  <div class="media-body overflow-hidden">
                    <router-link
                      class="router-link-to-profile"
                      :to="{
                        name: 'profile',
                        params: { id: request_p.sender.id },
                      }"
                    >
                      <h6 class="card-text custom_lo">{{ request_p.sender.name }}</h6>
                    </router-link>
                    <span class="card-text custom_date text-muted">{{
                      format_date(request_p.created_at)
                    }}</span>
                    <span @click="AcceptSuccess">
                      <button class="btn-info" @click="a_accept_friend(request_p)">
                        {{ $t("Accept Friend") }}
                      </button>
                    </span>
                    <br />
                    <!-- @click="a_delete_pending_request(request_p.id)" -->
                    <span @click="a_delete_pending_request(request_p.id)">
                      <!-- @click="this.$store.state.friendships.showModal = true" -->
                      <button class="btn-default">{{ $t("remove") }}</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <skelton-loader></skelton-loader>
          <div v-show="!requests_waiting.length" class="text-center">
            <span class="small-text">{{ $t("No Found Any Pending requests Yet") }}</span>
          </div>
        </div>
        <div class="text-center" v-show="moreExists_pending_request">
          <button
            type="button"
            class="btn custom_button btn-block fa-lg"
            v-if="!loading_more_pending_request"
            v-on:click="a_loadMore_pending_requests"
          >
            {{ $t("Load More") }}
          </button>
          <button v-else class="btn custom_button btn-block fa-lg" type="submit">
            Loading ...
          </button>
        </div>
        <hr />
        <div class="text-right">
          <b class="text-my-page"
            >{{ $t("Friend requests you sent") }} ({{ this.requests_waiting_count }})</b
          >
        </div>
        <br />
        <div class="row" v-if="!loading_waiting_request">
          <div
            v-for="(request_w, index) in requests_waiting"
            :key="index"
            class="d-flex flex-wrap col-md-3 col-xl-3"
          >
            <div class="card">
              <div class="card-body">
                <div class="media align-items-center">
                  <span class="avatar avatar-xl mr-3">
                    <img
                      class="card-img-top"
                      v-if="!request_w.recipient.media[0]"
                      src="@/assets/cover/user-13.jpg"
                      alt="friend image"
                      loading="lazy"
                    />
                    <img
                      class="card-img-top"
                      v-else
                      :src="request_w.recipient.media[0].src_url"
                      alt="friend image"
                      loading="lazy"
                    />
                  </span>
                  <div class="media-body overflow-hidden">
                    <router-link
                      class="router-link-to-profile"
                      :to="{
                        name: 'profile',
                        params: { id: request_w.recipient.id },
                      }"
                    >
                      <h6 class="card-text custom_lo">{{ request_w.recipient.name }}</h6>
                    </router-link>
                    <span class="card-text custom_date text-muted">{{
                      format_date(request_w.created_at)
                    }}</span>
                    <span>
                      <button class="waiting_btn" disabled>{{ $t("waiting") }}</button>
                    </span>
                    <span @click="showSuccess">
                      <button
                        @click="a_delete_waiting_request(request_w.id)"
                        class="btn-default"
                      >
                        {{ $t("remove") }}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="!requests_waiting.length" class="text-center">
            <span class="small-text">{{ $t("No Found Any Waiting requests Yet") }}</span>
          </div>
        </div>
        <div v-else>
          <skelton-loader></skelton-loader>
          <div class="text-center" v-show="moreExists_waiting_request"></div>

          <button
            type="button"
            class="btn custom_button btn-block fa-lg"
            v-if="!loading_more_waiting_request"
            v-on:click="a_loadMore_waiting_requests"
          >
            {{ $t("Load More") }}
          </button>
          <button v-else class="btn custom_button btn-block fa-lg" type="submit">
            Loading ...
          </button>
        </div>
        <hr />
        <div class="text-right">
          <b class="text-my-page">{{ $t("Friends") }}</b>
        </div>
        <br />
        <div class="row" v-if="!loading_friends">
          <div
            v-for="(friend, index) in friends"
            :key="index"
            class="d-flex flex-wrap col-md-3 col-xl-3"
          >
            <div class="card">
              <div class="card-body">
                <div class="media align-items-center">
                  <span class="avatar avatar-xl mr-3">
                    <img
                      class="card-img-top"
                      v-if="!friend.media[0]"
                      src="@/assets/cover/user-13.jpg"
                      alt="friend image"
                      loading="lazy"
                    />
                    <img
                      class="card-img-top"
                      v-else
                      :src="friend.media[0].src_url"
                      alt="friend image"
                      loading="lazy"
                    />
                  </span>
                  <div class="media-body overflow-hidden">
                    <router-link
                      class="router-link-to-profile"
                      :to="{
                        name: 'profile',
                        params: { id: friend.id },
                      }"
                    >
                      <h6 class="card-text custom_lo">{{ friend.name }}</h6>
                    </router-link>
                    <span class="card-text custom_date text-muted">{{
                      format_date(friend.created_at)
                    }}</span>
                    <button class="btn-default" style="cursor: default">
                      {{ $t("Friend") }}
                    </button>
                    <br />
                    <span @click="showSuccess">
                      <button @click="a_delete_friend(friend.id)" class="btn-default">
                        {{ $t("remove") }}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div v-show="!friends.length" class="text-center">{{ $t("No Found Any Friend Yet") }}</div> -->
        </div>
        <skelton-loader v-else></skelton-loader>
      </div>
    </div>
    <RightHomeComponent />
  </div>
</template>

<script>
import LeftHomeComponent from "@/components/HomeComponent/LeftHomeComponent.vue";
import RightHomeComponent from "@/components/HomeComponent/RightHomeComponent.vue";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import SkeltonLoader from "@/components/OtherComponent/SkeltonLoader.vue";
export default {
  name: "FriendsView",
  data() {
    return {
      showContent: true,
    };
  },
  created() {
    this.a_requests_Waiting();
    this.a_requests_pending();
  },
  computed: {
    ...mapGetters({
      friends: "friendships/friends",
      loading_friends: "friendships/loading_friends",
      requests_waiting: "friendships/requests_waiting",
      requests_pending: "friendships/requests_pending",
      requests_waiting_count: "friendships/requests_waiting_count",
      requests_pending_count: "friendships/requests_pending_count",
      loading_pending_request: "friendships/loading_pending_request",
      loading_waiting_request: "friendships/loading_waiting_request",
      moreExists_waiting_request: "friendships/moreExists_waiting_request",
      moreExists_pending_request: "friendships/moreExists_pending_request",
      loading_more_pending_request: "friendships/loading_more_pending_request",
      loading_more_waiting_request: "friendships/loading_more_waiting_request",
    }),
  },

  methods: {
    ...mapActions({
      a_delete_friend: "friendships/a_delete_friend",
      a_requests_Waiting: "friendships/a_requests_Waiting",
      a_requests_pending: "friendships/a_requests_pending",
      a_delete_waiting_request: "friendships/a_delete_waiting_request",
      a_delete_pending_request: "friendships/a_delete_pending_request",
      a_loadMore_waiting_requests: "friendships/a_loadMore_waiting_requests",
      a_loadMore_pending_requests: "friendships/a_loadMore_pending_requests",
      a_accept_friend: "friendships/a_accept_friend",
      // a_add_friend: "friendships/a_add_friend",
    }),

    format_date(value) {
      if (value) {
        let now = moment(String(new Date())).format("YYYY-MM-DD HH:mm:ss");
        let date = moment(String(value)).format("YYYY-MM-DD HH:mm:ss");

        let date1 = moment(now, "DD-MM-YYYY HH:mm:ss");
        let date2 = moment(date, "DD-MM-YYYY HH:mm:ss");

        let seconds = date1.diff(date2, "seconds");
        let minutes = date1.diff(date2, "minutes");
        let hours = date1.diff(date2, "hours");
        if (seconds >= 0 && seconds < 60) {
          return "just now";
        }
        if (minutes > 0 && minutes < 60) {
          return minutes + " minutes ago";
        }
        if (minutes === 60) {
          return "1 hour ago";
        }
        if (hours > 0 && hours < 24) {
          return hours + " hours ago";
        }
        if (hours === 24) {
          return "1 day ago";
        }

        let now1 = moment(String(new Date())).format("DD-MM-YYYY");
        let date0 = moment(String(value)).format("DD-MM-YYYY");

        let date11 = moment(now1, "DD-MM-YYYY");
        let date22 = moment(date0, "DD-MM-YYYY");
        let month = date11.diff(date22, "months");
        let days = date11.diff(date22, "days");
        if (days < 31) {
          return days + " days ago";
        }
        if (month < 12) {
          return month + " month ago";
        }

        let year = date11.diff(date22, "years");
        return year + " year ago";
      }
    },
  },
  notifications: {
    showSuccess: {
      title: "Friendship",
      message: "The request has been removed successfully",
      type: "success", // You also can use 'VueNotifications.types.error' instead of 'error'
    },
    AcceptSuccess: {
      title: "Friendship",
      message: "The request has been Accept successfully",
      type: "success",
    },
    show_add_friend: {
      title: "Friendship",
      message: "A friend has been added successfully",
      type: "success",
    },
  },
  components: { LeftHomeComponent, RightHomeComponent, SkeltonLoader },
};
</script>
<style scoped>
.card-img-top {
  height: 150px;
  width: 100%;
}
/*  */
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: block;
  /* background: rgba(0, 0, 0, 0.6); */
}
.content-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  max-width: 500px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 3px;
  padding: 20px;
  line-height: 1.5;
  font-size: 18px;
  color: #444;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s opacity ease-out;
}
/*  */
.router-link-to-profile {
  text-decoration: none;
  color: #111;
}
.btn-default {
  border-radius: 8px;
  width: 95%;
  margin: 3px 4px 5px 5px;
  border: 0px;
}

.waiting_btn {
  border-radius: 8px;
  width: 95%;
  margin: 3px 4px 5px 0px;
  border: 0px;
}
.btn-info {
  border-radius: 8px;
  width: 95%;
  margin: 3px 4px 5px 4px;
  color: black;
  border: 0px;
}
.btn-primary {
  border-radius: 8px;
  width: 95%;
  margin: 3px 4px 5px 5px;
  color: white;
  border: 0px;
}
body {
  margin-top: 20px;
  background: #eee;
}
.avatar.avatar-xl {
  width: 100%;
  height: 100%;
}
.avatar {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5%;
  display: inline-block;
  background: #ced4da no-repeat center/cover;
  position: relative;
  text-align: center;
  color: #868e96;
  font-weight: 600;
  vertical-align: bottom;
}
.custom_lo {
  margin: 10px 10px;
}
.custom_date {
  margin: 0px 10px;
  font-size: smaller;
}
@media (min-width: 1200px) {
  .col-xl-3 {
    flex: 0 0 auto;
    width: 20%;
  }
}

@media only screen and (max-width: 766px) {
  .card-img-top {
    height: 150px;
    width: 200px;
  }
}
.card {
  margin-bottom: 30px;
  -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1), -1px 0 2px rgba(0, 0, 0, 0.05);
}
.card-body {
  padding: 0rem;
}
.tile-link {
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 30;
}
.autoShowHide {
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.autoShowHide:hover {
  white-space: normal;
  overflow: visible;
  width: 100%;
}
.text-my-page {
  background: -webkit-linear-gradient(#1d0, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.small-text {
  font-size: small;
}
</style>

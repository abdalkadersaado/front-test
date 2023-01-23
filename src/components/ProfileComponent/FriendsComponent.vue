<template>
  <div class="profile-intro">
    <div class="title-box">
      <h3>{{ $t("Friends") }}</h3>
      <router-link :to="{ name: 'friends' }">
        {{
        $t("All Friends")
        }}
      </router-link>
    </div>
    <p>{{ this.friends.length }} (10 mutual)</p>
    <div class="friends-box">
      <div v-for="(friend, index) in friends" :key="index">
        <router-link
          class="router-link-to-profile"
          :to="{ name: 'profile', params: { id: friend.id } }"
        >
          <img
            v-if="friend.has_media_profile == false"
            src="@/assets/cover/user-13.jpg"
            alt="Card image"
          >
          <img v-else :src="friend.media[0].src_url" alt>
          <p class="test">{{ friend.first_name }} {{ friend.last_name }}</p>
        </router-link>
      </div>
      <div v-show="!friends.length" class="text-center">{{ $t("No Found Any Friend Yet") }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FriendsComponent",
  created() {
    this.get_all_friends();
  },

  computed: {
    ...mapGetters({
      friends: "friendships/friends"
    })
  },

  methods: {
    ...mapActions({ get_all_friends: "friendships/get_all_friends" })
  }
};
</script>
<style lang="scss" scoped>
.router-link-to-profile {
  text-decoration: none;
  color: #111;
}

/* profile page */

.profile-container {
  padding: 20px 15%;
  background: #ddd;
}

.cover-img {
  width: 100%;
  height: 25rem;
  border-radius: 6px;
  margin-bottom: 14px;
}

.profile-details {
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.pd-row {
  display: flex;
  align-items: flex-start;
}

.pd-image {
  width: 100px;
  margin-right: 20px;
  border-radius: 6px;
}

.pd-row div h3 {
  font-size: 25px;
  font-weight: 600;
  margin: 5px;
}

.pd-row div p {
  font-size: 13px;
  margin: 2px;
}

.pd-row div img {
  width: 25px;
  border-radius: 50%;
  margin-top: 12px;
}

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

.profile-info {
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  margin-top: 20px;
}

.info-col {
  flex-basis: 33%;
}

.post-col {
  flex-basis: 65%;
}

.write-post-container {
  width: 100%;
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  color: #626262;
  margin-bottom: 10px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.post-input-container {
  padding-left: 55px;
  padding-top: 20px;
}

.post-input-container textarea {
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
  resize: none;
}

.add-post-links {
  display: flex;
  margin-top: 10px;
}

.add-post-links a {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #626262;
  margin-right: 30px;
  font-size: 13px;
}

.add-post-links a img {
  width: 20px;
  margin-right: 10px;
}

.user-profile img {
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-profile p {
  margin-bottom: -5px;
  font-weight: 500;
  color: #626262;
}

.user-profile small {
  font-size: 12px;
}

.profile-intro {
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.profile-intro h3 {
  font-weight: 600;
}

.intro-text {
  text-align: 10px 0;
  font-size: 15px;
}

.intro-text img {
  width: 15px;
  margin-bottom: -3px;
}

.profile-intro hr {
  border: 0;
  height: 1px;
  background: #ccc;
  margin: 24px 0;
}

.profile-intro ul li {
  list-style: none;
  font-size: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
}

.profile-intro ul li img {
  width: 26px;
  margin-right: 10px;
}

.title-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -7px 0px -8px 0px;
}

.title-box a {
  text-decoration: none;
  color: #1876f2;
  font-size: 14px;
}

.photo-box {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  margin-top: 15px;
}

.photo-box div img {
  width: 100%;
  cursor: pointer;
}

.profile-intro-friend p {
  font-size: 14px;
}

.friends-box {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  margin: top 15px;
}

.friends-box div img {
  width: 100%;
  cursor: pointer;
  /* padding-bottom: 20px; */
}

.friends-box div {
  position: relative;
  /* overflow: hidden; */
}

.friends-box p {
  // position: absolute;
  /* bottom: -18px; */
  left: 0;
  word-break: break-all;
}

/* media query for personal profile page */

@media (max-width: 900px) {
  .profile-container {
    padding: 20px 5%;
  }
  .cover-img {
    height: 20rem;
  }
  .profile-details {
    flex-wrap: wrap;
  }

  .pd-right {
    text-align: left;
    margin-top: 15px;
  }

  .pd-right button {
    margin-left: 10px;
  }

  .pd-right div h3 {
    font-size: 16px;
  }

  .profile-info {
    flex-wrap: wrap;
  }

  .info-col,
  .post-col {
    flex-basis: 100%;
  }

  .profile-intro-friend {
    height: 35%;
  }
}
</style>

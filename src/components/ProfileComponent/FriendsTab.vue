<template>
  <div class="write-post-container">
    <div class="container">
      <div class="row">
        <div class="display-item" style="display: inline">
          <span class="m-t-0 m-b-20">
            {{ $t("Friends List") }} (
            <span v-if="friends.length != 0">{{ friends.length }} </span
            ><span v-else>0 </span>)
          </span>
          <span style="float: right">
            <input
              dir="auto"
              type="text"
              class="search-input"
              v-model="search"
              :placeholder="$t('search-friends')"
            />
          </span>
          <span
            ><router-link
              class="router-link-to-profile"
              :to="{ name: 'friends' }"
              >{{ $t("Friendship Requests") }}</router-link
            >
          </span>
        </div>
        <br />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div id="content" class="content content-full-width">
          <!-- begin profile-content -->
          <div class="profile-content">
            <!-- begin tab-content -->
            <div class="tab-content p-0">
              <!-- begin #profile-friends tab -->
              <div class="tab-pane fade in active show" id="profile-friends">
                <!-- begin row -->
                <div class="row row-space-2">
                  <!-- begin col-6 -->
                  <div
                    class="col-md-6 m-b-2"
                    v-for="friend in filteredList"
                    :key="friend.id"
                  >
                    <div class="p-10 bg-white">
                      <div class="media media-xs overflow-visible">
                        <a class="media-left" href="#">
                          <img
                            v-if="friend.profile.has_media_profile === false"
                            src="@/assets/img_friends/default1.png"
                            alt="friend image"
                            class="media-object img-circle"
                          />
                          <img
                            v-else
                            :src="friend.profile.media[0].src_url"
                            alt="friend image"
                            class="media-object img-circle"
                          />
                        </a>
                        <div class="media-body valign-middle">
                          <b class="text-inverse">{{
                            friend.profile.full_name
                          }}</b>
                        </div>
                        <div
                          class="media-body valign-middle text-right overflow-visible"
                        >
                          <div class="btn-group dropdown-right">
                            <div class="dropdown" style="float: right">
                              <button class="dropbtn">
                                <i style="font-size: 20px" class="">...</i>
                              </button>
                              <div class="dropdown-content">
                                <a
                                  class="vcomments__btn btn"
                                  @click="a_delete_friend(friend.id)"
                                  >{{ $t("Delete") }}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-show="!friends.length" class="text-center">{{ $t("No Found Any Friend Yet") }}</div>
                  <!-- end col-6 -->
                </div>
                <!-- end row -->
              </div>
              <!-- end #profile-friends tab -->
            </div>
            <!-- end tab-content -->
          </div>
          <!-- end profile-content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "FriendsComponent",
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.get_all_friends();
  },

  computed: {
    ...mapGetters({
      friends: "friendships/friends",
      auth_user_id: "auth/auth_user_id",
    }),
    filteredList() {
      return this.friends.filter((item) => {
        return item.profile.full_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    ...mapActions({
      get_all_friends: "friendships/get_all_friends",
      a_delete_friend: "friendships/a_delete_friend",
    }),
  },
};
</script>
<style lang="scss" scoped>
.profile-content {
  padding: 25px;
  border-radius: 4px;
}

.profile-content:after,
.profile-content:before {
  content: "";
  display: table;
  clear: both;
}

.profile-content .tab-content,
.profile-content .tab-pane {
  background: 0 0;
}

.table.table-profile > thead > tr > th {
  border-bottom: none !important;
}

.table.table-profile > thead > tr > th h4 {
  font-size: 20px;
  margin-top: 0;
}

.table.table-profile > thead > tr > th h4 small {
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
}

.table.table-profile > tbody > tr > td,
.table.table-profile > thead > tr > th {
  border: none;
  padding-top: 7px;
  padding-bottom: 7px;
  color: #242a30;
  background: 0 0;
}

.table.table-profile > tbody > tr > td.field {
  width: 20%;
  text-align: right;
  font-weight: 600;
  color: #2d353c;
}

.table.table-profile > tbody > tr.highlight > td {
  border-top: 1px solid #b9c3ca;
  border-bottom: 1px solid #b9c3ca;
}

.table.table-profile > tbody > tr.divider > td {
  padding: 0 !important;
  height: 10px;
}

.profile-section + .profile-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #b9c3ca;
}

.profile-section:after,
.profile-section:before {
  content: "";
  display: table;
  clear: both;
}

.profile-section .title {
  font-size: 20px;
  margin: 0 0 15px;
}

.profile-section .title small {
  font-weight: 400;
}

body.flat-black {
  background: #e7e7e7;
}

.flat-black .navbar.navbar-inverse {
  background: #212121;
}

.flat-black .navbar.navbar-inverse .navbar-form .form-control {
  background: #4a4a4a;
  border-color: #4a4a4a;
}

.flat-black .sidebar,
.flat-black .sidebar-bg {
  background: #3a3a3a;
}

.flat-black .page-with-light-sidebar .sidebar,
.flat-black .page-with-light-sidebar .sidebar-bg {
  background: #fff;
}

.flat-black .sidebar .nav > li > a {
  color: #b2b2b2;
}

.flat-black .sidebar.sidebar-grid .nav > li > a {
  border-bottom: 1px solid #474747;
  border-top: 1px solid #474747;
}

.flat-black .sidebar .active .sub-menu > li.active > a,
.flat-black .sidebar .nav > li.active > a,
.flat-black .sidebar .nav > li > a:focus,
.flat-black .sidebar .nav > li > a:hover,
.flat-black .sidebar .sub-menu > li > a:focus,
.flat-black .sidebar .sub-menu > li > a:hover,
.sidebar .nav > li.nav-profile > a {
  color: #fff;
}

.flat-black .sidebar .sub-menu > li > a,
.flat-black .sidebar .sub-menu > li > a:before {
  color: #999;
}

.flat-black .page-with-light-sidebar .sidebar .active .sub-menu > li.active > a,
.flat-black
  .page-with-light-sidebar
  .sidebar
  .active
  .sub-menu
  > li.active
  > a:focus,
.flat-black
  .page-with-light-sidebar
  .sidebar
  .active
  .sub-menu
  > li.active
  > a:hover,
.flat-black .page-with-light-sidebar .sidebar .nav > li.active > a,
.flat-black .page-with-light-sidebar .sidebar .nav > li.active > a:focus,
.flat-black .page-with-light-sidebar .sidebar .nav > li.active > a:hover {
  color: #000;
}

.flat-black .page-sidebar-minified .sidebar .nav > li.has-sub:focus > a,
.flat-black .page-sidebar-minified .sidebar .nav > li.has-sub:hover > a {
  background: #323232;
}

.flat-black .page-sidebar-minified .sidebar .nav li.has-sub > .sub-menu,
.flat-black .sidebar .nav > li.active > a,
.flat-black .sidebar .nav > li.active > a:focus,
.flat-black .sidebar .nav > li.active > a:hover,
.flat-black .sidebar .nav > li.nav-profile,
.flat-black .sidebar .sub-menu > li.has-sub > a:before,
.flat-black .sidebar .sub-menu > li:before,
.flat-black .sidebar .sub-menu > li > a:after {
  background: #2a2a2a;
}

.flat-black .page-sidebar-minified .sidebar .sub-menu > li:before,
.flat-black .page-sidebar-minified .sidebar .sub-menu > li > a:after {
  background: #3e3e3e;
}

.flat-black .sidebar .nav > li.nav-profile .cover.with-shadow:before {
  background: rgba(42, 42, 42, 0.75);
}

.bg-white {
  background-color: #fff !important;
}
.p-10 {
  padding: 10px !important;
}
.media.media-xs .media-object {
  width: 75px;
}
.m-b-2 {
  margin-bottom: 2px !important;
}
.media > .media-left,
.media > .pull-left {
  padding-right: 15px;
}
.media-body,
.media-left,
.media-right {
  display: inline;
  vertical-align: top;
}
.media-body .dropdown-right {
  float: right;
}
/* Css for action button dropdown */
.dropbtn {
  background-color: #fff;
  color: black;
  padding: 3px;
  font-size: 3px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 2px 1px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #fff;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/*  end css action */
.write-post-container {
  margin-top: 10px;
}
.search-input {
  border-radius: 13px;
  margin-bottom: 10px;
  width: 97%;
  border: 0px;
}
.router-link-to-profile {
  text-decoration: none;
  color: rgb(41, 108, 209);
  float: right;
  margin: 0px 25px;
}
.search-input:lang(ar) {
  direction: rtl;
}
.profile-content:lang(ar) {
  direction: rtl;
}
.text-inverse:lang(ar) {
  margin-right: 10px;
}
</style>

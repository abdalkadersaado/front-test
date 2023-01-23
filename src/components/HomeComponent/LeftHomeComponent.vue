<template>
  <div class="col-md-2 left">
    <div class="row left_box align-items-center">
      <SearchComponent></SearchComponent>

      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="34"
          height="34"
          viewBox="0 0 54 54"
        >
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#e8e8e8" />
              <stop offset="1" stop-color="#b8b8b8" />
            </linearGradient>
          </defs>
          <path
            id="user"
            d="M46.091,7.908A27,27,0,0,0,7.908,46.092,27,27,0,0,0,46.091,7.908Zm-35.3,36.555c2.276-6.778,9.5-9.1,16.2-9.1s12.175,1.983,16.2,9.1c-2.853,3.559-11.212,6.373-16.2,6.373S15.715,50.065,10.795,44.463Zm7.62-20.852A8.585,8.585,0,1,1,27,32.2,8.594,8.594,0,0,1,18.415,23.611ZM27,11.862Z"
            transform="translate(0.001)"
            fill="url(#linear-gradient)"
          />
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <router-link
          class="router-link-to-profile"
          :to="{ name: 'personal-profile' }"
        >
          <span class="fw-bold">{{ name }}</span>
        </router-link>
      </div>
    </div>

    <div class="row left_box align-items-center">
      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 38 38"
        >
          <g id="groups-svgrepo-com" transform="translate(-7.264 -7)">
            <path
              id="Path_117"
              data-name="Path 117"
              d="M43.519,23.455c-2.165-.953-2.512-1.732-2.512-2.685a3.4,3.4,0,0,1,1.3-2.425,6.076,6.076,0,0,0,1.905-4.677C44.212,10.118,42.134,7,38.237,7A5.649,5.649,0,0,0,33.3,9.685a11.42,11.42,0,0,1,4.244,9.267,10.982,10.982,0,0,1-1.819,6.236,1.325,1.325,0,0,0,.52,1.905c2.165,1.039,4.763,2.685,6.149,5.2a1.351,1.351,0,0,0,1.126.693h2.858A3.1,3.1,0,0,0,49.409,29.6C49.5,26.746,46.637,24.841,43.519,23.455Z"
              transform="translate(-7.243 0)"
              fill="#00a79d"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M29.874,30.5c-2.338-1.039-2.771-1.992-2.771-2.945a3.835,3.835,0,0,1,1.472-2.685,6.983,6.983,0,0,0,2.165-5.2c0-3.9-2.338-7.275-6.582-7.275s-6.582,3.378-6.582,7.275a6.983,6.983,0,0,0,2.165,5.2,4.209,4.209,0,0,1,1.472,2.685c0,1.039-.346,1.905-2.771,2.945-3.464,1.472-6.755,3.118-6.842,6.236a3.684,3.684,0,0,0,3.551,3.811H33.165a3.684,3.684,0,0,0,3.551-3.811C36.629,33.705,33.338,32.06,29.874,30.5Z"
              transform="translate(-4.336 -0.723)"
              fill="#00a79d"
            />
          </g>
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <span
          ><router-link class="router-link-to-profile" to="/friends">{{
            $t("Friends")
          }}</router-link></span
        >
      </div>
    </div>

    <div class="row left_box align-items-center">
      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 38 38"
        >
          <g id="groups-svgrepo-com" transform="translate(0 -7)">
            <path
              id="Path_116"
              data-name="Path 116"
              d="M12,22.85a9.571,9.571,0,0,1-1.585-5.434,9.953,9.953,0,0,1,3.7-8.076A4.7,4.7,0,0,0,9.888,7C6.567,7,4.68,9.717,4.68,12.812A5.188,5.188,0,0,0,6.34,16.888,3.281,3.281,0,0,1,7.472,19c0,.755-.3,1.51-2.189,2.34C2.566,22.549.075,24.209,0,26.7a2.81,2.81,0,0,0,2.717,2.944H5.208a1.178,1.178,0,0,0,.981-.6c1.208-2.189,3.472-3.547,5.359-4.529A1.117,1.117,0,0,0,12,22.85Z"
              transform="translate(0 0)"
              fill="#00a79d"
            />
            <path
              id="Path_117"
              data-name="Path 117"
              d="M42.206,21.341c-1.887-.83-2.189-1.51-2.189-2.34a2.966,2.966,0,0,1,1.132-2.113,5.3,5.3,0,0,0,1.661-4.076C42.81,9.717,41,7,37.6,7a4.923,4.923,0,0,0-4.3,2.34A9.953,9.953,0,0,1,37,17.416a9.571,9.571,0,0,1-1.585,5.434,1.155,1.155,0,0,0,.453,1.661,11.822,11.822,0,0,1,5.359,4.529,1.178,1.178,0,0,0,.981.6H44.7A2.706,2.706,0,0,0,47.339,26.7C47.414,24.209,44.924,22.549,42.206,21.341Z"
              transform="translate(-8.166 0)"
              fill="#00a79d"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M27.526,28.175c-2.038-.906-2.415-1.736-2.415-2.566a3.342,3.342,0,0,1,1.283-2.34,6.085,6.085,0,0,0,1.887-4.529c0-3.4-2.038-6.34-5.736-6.34s-5.736,2.944-5.736,6.34a6.085,6.085,0,0,0,1.887,4.529,3.668,3.668,0,0,1,1.283,2.34c0,.906-.3,1.661-2.415,2.566-3.019,1.283-5.887,2.717-5.963,5.434a3.211,3.211,0,0,0,3.095,3.321h15.7a3.211,3.211,0,0,0,3.095-3.321C33.413,30.968,30.545,29.534,27.526,28.175Z"
              transform="translate(-2.844 -1.324)"
              fill="#00a79d"
            />
          </g>
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <span>{{ $t("Groups") }}</span>
      </div>
    </div>

    <div class="row left_box align-items-center">
      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g
            id="Group_192"
            data-name="Group 192"
            transform="translate(-198 -788)"
          >
            <g
              id="Rectangle_133"
              data-name="Rectangle 133"
              transform="translate(198 788)"
              fill="none"
              stroke="#00a79d"
              stroke-width="2.5"
            >
              <rect width="30.633" height="22.975" rx="4" stroke="none" />
              <rect
                x="1.25"
                y="1.25"
                width="28.133"
                height="20.475"
                rx="2.75"
                fill="none"
              />
            </g>
            <line
              id="Line_1"
              data-name="Line 1"
              x1="11.488"
              transform="translate(207.573 812.89)"
              fill="none"
              stroke="#00a79d"
              stroke-linecap="round"
              stroke-width="1.5"
            />
            <g
              id="Polygon_1"
              data-name="Polygon 1"
              transform="translate(219.699 793.531) rotate(90)"
              fill="#fff"
              stroke-linecap="round"
            >
              <path
                d="M 10.17195606231689 9.461138725280762 L 1.741036295890808 9.461138725280762 C 1.615126252174377 9.461138725280762 1.551166296005249 9.382518768310547 1.524256229400635 9.335648536682129 C 1.497336268424988 9.288788795471191 1.461646199226379 9.193928718566895 1.525086283683777 9.085168838500977 L 5.740546226501465 1.858668684959412 C 5.803506374359131 1.750748753547668 5.902866363525391 1.734638690948486 5.956496238708496 1.734638690948486 C 6.010126113891602 1.734638690948486 6.109486103057861 1.750748753547668 6.172446250915527 1.858668684959412 L 10.38790607452393 9.085168838500977 C 10.4513463973999 9.193928718566895 10.41565608978271 9.288788795471191 10.3887357711792 9.335648536682129 C 10.36182594299316 9.382518768310547 10.29786586761475 9.461138725280762 10.17195606231689 9.461138725280762 Z"
                stroke="none"
              />
              <path
                d="M 5.956498622894287 2.976956367492676 L 2.611557960510254 8.711138725280762 L 9.301435470581055 8.711138725280762 L 5.956498622894287 2.976956367492676 M 5.956496238708496 0.9846363067626953 C 6.291916370391846 0.9846363067626953 6.627336025238037 1.15001392364502 6.820276260375977 1.480769157409668 L 11.03573608398438 8.707268714904785 C 11.42461585998535 9.373918533325195 10.94374656677246 10.21113872528076 10.17195606231689 10.21113872528076 L 1.741036415100098 10.21113872528076 C 0.9692459106445312 10.21113872528076 0.4883766174316406 9.373918533325195 0.8772563934326172 8.707268714904785 L 5.092716217041016 1.480769157409668 C 5.285656452178955 1.15001392364502 5.621076107025146 0.9846363067626953 5.956496238708496 0.9846363067626953 Z"
                stroke="none"
                fill="#00a79d"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <span>{{ $t("Watch") }}</span>
      </div>
    </div>

    <div class="row left_box align-items-center">
      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g id="pages-svgrepo-com" transform="translate(0.5)">
            <path
              id="Path_113"
              data-name="Path 113"
              d="M18.769.5H6.115A3.626,3.626,0,0,0,2.5,4.115V20.385A3.626,3.626,0,0,0,6.115,24H18.769a3.626,3.626,0,0,0,3.615-3.615V4.115A3.626,3.626,0,0,0,18.769.5Z"
              transform="translate(1.615 0)"
              fill="#00a79d"
              stroke="#00a79d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            />
            <path
              id="Path_114"
              data-name="Path 114"
              d="M4.115,2.5A3.626,3.626,0,0,0,.5,6.115V20.577A5.326,5.326,0,0,0,5.923,26H16.769a3.626,3.626,0,0,0,3.615-3.615"
              transform="translate(0 1.615)"
              fill="none"
              stroke="#00a79d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <span>{{ $t("Pages") }}</span>
      </div>
    </div>

    <div class="row left_box align-items-center">
      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            id="calender-svgrepo-com"
            d="M2,23.922A3.8,3.8,0,0,0,5.869,27.79H23.922a3.8,3.8,0,0,0,3.869-3.869V13.606H2ZM23.922,4.579H21.343V3.29a1.29,1.29,0,1,0-2.579,0v1.29H11.027V3.29A1.218,1.218,0,0,0,9.737,2a1.218,1.218,0,0,0-1.29,1.29v1.29H5.869A3.8,3.8,0,0,0,2,8.448v2.579H27.79V8.448A3.8,3.8,0,0,0,23.922,4.579Z"
            transform="translate(-2 -2)"
            fill="#00a79d"
          />
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <span>{{ $t("Events") }}</span>
      </div>
    </div>

    <div class="row left_box align-items-center">
      <div class="col-md-2 left_box_img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g id="video-svgrepo-com" transform="translate(-1 -1)">
            <path
              id="Path_121"
              data-name="Path 121"
              d="M21.15,13.75,9,20.365V7Z"
              transform="translate(2.45 1.75)"
              fill="none"
              stroke="#00a79d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <circle
              id="Ellipse_190"
              data-name="Ellipse 190"
              cx="13.5"
              cy="13.5"
              r="13.5"
              transform="translate(2 2)"
              fill="none"
              stroke="#00a79d"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </div>
      <div class="col-md-8 offset-lg-2 left_box_info">
        <span>{{ $t("Reels") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "../OtherComponent/SearchComponent.vue";
export default {
  name: "LeftHomeComponent",
  data() {
    return {
      name:
        JSON.parse(localStorage.getItem("user")).profile.first_name +
        " " +
        JSON.parse(localStorage.getItem("user")).profile.last_name, 
    };
  },
  components: { SearchComponent },
};
</script>

<style lang="scss" scoped>
//

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

//
.router-link-to-profile {
  text-decoration: none;
  color: #111;
}

.left {
  min-height: 100vh;
  padding: 2rem 0 0 2.5rem;
  position: fixed !important;
  left: 0;

  .left_box {
    margin-bottom: 2rem;

    .left_box_img {
      text-align: center;
    }

    .left_box_info {
      margin-left: 1rem;
    }
    
  }
}



@media screen and (max-width: 992px) {
  .left {
    display: none !important;
  }
}

@media screen and (min-width: 993px) and (max-width: 1600px) {
  .left {
    background-color: #f3f3f3;
    min-height: 100vh;
    padding: 2rem 0 0 2rem;

    .left_box {
      margin-bottom: 2rem;

      .left_box_img {
        text-align: center;
      }

      .left_box_info {
        margin-left: 2.1rem;
        width: 60% !important;
        font-size: 15px;
        
      }
    }
  }

}
.left:lang(ar) {
  right: 0px;
  direction: rtl;
  left: inherit;
}

.left .left_box:lang(ar) {
  margin-right: 0px;
}

.left .left_box_info:lang(ar) {
  text-align: start;
  margin: 0 1.5rem 0 0;
}
</style>

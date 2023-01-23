<template>
  <!-- <figure>
    <img src="@/assets/reactions/like.gif" alt="Like emoji" />
    <img src="@/assets/reactions/love.gif" alt="Love emoji" />
    <img src="@/assets/reactions/angry.gif" alt="Haha emoji" />
    <img src="@/assets/reactions/haha.gif" alt="Wow emoji" />
    <img src="@/assets/reactions/sad.gif" alt="Sad emoji" />
    <img src="@/assets/reactions/wow.gif" alt="Angry emoji" />
  </figure> -->

  <div class="div">
    <div class="row mb-3 me-0 bg-white">
      <div class="card card_post">
        <div class="card-header bg-white border-bottom-0 d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <div>
              <img
                v-if="post.model.has_media_profile === false"
                class="pd-image"
                src="@/assets/img_friends/default1.png"
                alt="Profile image"
              />
              <img
                v-else-if="post.model.media[0].collection_name === 'profile'"
                :src="post.model.media[0].src_url"
                class="pd-image"
                alt="personal profile image"
              />
              <img
                v-else-if="post.model.media[1].collection_name === 'profile'"
                :src="post.model.media[1].src_url"
                class="pd-image"
                alt="personal profile image"
              />
            </div>
            <div class="ms-3">
              <p class="mb-0">
                <router-link
                  class="router-link-to-profile"
                  :to="{
                    name: 'profile',
                    params: { id: post.model.id },
                  }"
                >
                  {{ post.model.first_name }}
                  {{ post.model.last_name }}
                </router-link>
                <span class="info-type-image" v-if="post.type == 2"
                  >&nbsp; {{ $t("update the cover photo") }}</span
                >
                <span class="info-type-image" v-if="post.type == 1"
                  >&nbsp; {{ $t("update the personal profile photo") }}</span
                >
              </p>
              <small class="text-muted" dir="auto">{{
                format_date(post.created_at)
              }}</small>
            </div>
          </div>
          <div class="d-flex align-items-center right">
            <div class="me-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle
                  id="Ellipse_181"
                  data-name="Ellipse 181"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  fill="#a5a5a5"
                ></circle>
              </svg>
            </div>

            <div class="me-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle
                  id="Ellipse_181"
                  data-name="Ellipse 181"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  fill="#a5a5a5"
                ></circle>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
              >
                <circle
                  id="Ellipse_181"
                  data-name="Ellipse 181"
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  fill="#a5a5a5"
                ></circle>
              </svg>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div style="cursor: pointer" @click="delete_post(post.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.147"
                height="15.147"
                viewBox="0 0 15.147 15.147"
              >
                <g
                  id="Group_184"
                  data-name="Group 184"
                  transform="translate(7.573 -5.632) rotate(45)"
                >
                  <rect
                    id="Rectangle_151"
                    data-name="Rectangle 151"
                    width="18.675"
                    height="2.746"
                    rx="1.373"
                    transform="translate(0 7.964)"
                    fill="#a5a5a5"
                  ></rect>
                  <rect
                    id="Rectangle_152"
                    data-name="Rectangle 152"
                    width="18.675"
                    height="2.746"
                    rx="1.373"
                    transform="translate(10.71 0) rotate(90)"
                    fill="#a5a5a5"
                  ></rect>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="card-body" dir="auto">
          <p v-if="post.content" class="card-text">{{ post.content }}</p>
          <div v-if="post.has_media" class="media_container">
            <div class="media_one" v-if="post.media.length === 1">
              <img
                v-if="post.media[0].media_type.includes('Image')"
                :src="post.media[0].src_url"
                alt
              />
              <video v-else controls :src="post.media[0].src_url"></video>
            </div>
            <div
              class="media_two d-flex justify-content-between align-items-center"
              v-if="post.media.length === 2"
            >
              <div class="media_two_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_two_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
            </div>
            <div class="media_three" v-if="post.media.length === 3">
              <div class="media_three_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_three_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
              <div class="media_three_box_under">
                <img
                  v-if="post.media[2].media_type.includes('Image')"
                  :src="post.media[2].src_url"
                  alt
                />
                <video v-else controls :src="post.media[2].src_url"></video>
              </div>
            </div>
            <div class="media_four" v-if="post.media.length === 4">
              <div class="media_four_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_four_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
              <div class="media_four_box">
                <img
                  v-if="post.media[2].media_type.includes('Image')"
                  :src="post.media[2].src_url"
                  alt
                />
                <video v-else controls :src="post.media[2].src_url"></video>
              </div>
              <div class="media_four_box">
                <img
                  v-if="post.media[3].media_type.includes('Image')"
                  :src="post.media[3].src_url"
                  alt
                />
                <video v-else controls :src="post.media[3].src_url"></video>
              </div>
            </div>
            <div class="media_bigger" v-if="post.media.length > 4">
              <div class="media_bigger_box">
                <img
                  v-if="post.media[0].media_type.includes('Image')"
                  :src="post.media[0].src_url"
                  alt
                />
                <video v-else controls :src="post.media[0].src_url"></video>
              </div>
              <div class="media_bigger_box">
                <img
                  v-if="post.media[1].media_type.includes('Image')"
                  :src="post.media[1].src_url"
                  alt
                />
                <video v-else controls :src="post.media[1].src_url"></video>
              </div>
              <div class="media_bigger_box">
                <img
                  v-if="post.media[2].media_type.includes('Image')"
                  :src="post.media[2].src_url"
                  alt
                />
                <video v-else controls :src="post.media[2].src_url"></video>
              </div>
              <div class="media_bigger_box">
                <img
                  v-if="post.media[3].media_type.includes('Image')"
                  :src="post.media[3].src_url"
                  alt
                />
                <video v-else controls :src="post.media[3].src_url"></video>
              </div>
              <p class="bigger_p d-flex align-items-center justify-content-center">
                <span>+{{ post.media.length - 4 }}</span>
              </p>
            </div>
          </div>
          <div v-if="post.sharing_post != false" class="shared">
            <SharedPostComponent :post="post.parent" />
            <!-- <SharedPostComponent
              v-if="post.shared_post.post_page"
              :post_page="post.shared_post.post_page"
            />-->
          </div>
          <div class="d-flex justify-content-between align-items-center body_box">
            <div
              class="d-flex justify-content-center align-items-center"
              role="button"
              @click="showinteractionmodel"
              dir="auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.441"
                height="11.567"
                viewBox="0 0 12.441 11.567"
              >
                <path
                  id="like-svgrepo-com"
                  d="M12.42,5.275A3.526,3.526,0,0,0,9.053,1.826,3.347,3.347,0,0,0,6.186,3.478a3.225,3.225,0,0,0-2.8-1.652A3.526,3.526,0,0,0,.021,5.275,3.556,3.556,0,0,0,.127,6.586,5.622,5.622,0,0,0,1.849,9.46l4.334,3.933L10.592,9.46a5.622,5.622,0,0,0,1.722-2.874A3.564,3.564,0,0,0,12.42,5.275Z"
                  transform="translate(0 -1.826)"
                  fill="#f55"
                ></path>
              </svg>
              <span class="ms-2">{{ post.interactions_count }}</span>
            </div>
            <InteractionComponent
              v-if="interactionModel && interaction_model"
              v-on:change="change()"
              :id="post.id"
            />
            <div>
              <span>{{ post.comments_count }} {{ $t("comments") }}</span>
            </div>
          </div>
        </div>

        <div class="card-footer bg-white d-flex justify-content-around">
          <div class="d-flex justify-content-center align-items-center">
            <svg
              v-if="post.interacted.length === 0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path fill="#767676" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
              <path
                fill="#fff"
                d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="8"
                  x2="8"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18AFFF" />
                  <stop offset="1" stop-color="#0062DF" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              v-else-if="post.interacted[0].type === 7"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#767676"
            >
              <path fill="#0073c2" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Z" />
              <path
                fill="#fff"
                d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725.1.163.132.36.089.546-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666ZM3.6 7h.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="8"
                  x2="8"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#18AFFF" />
                  <stop offset="1" stop-color="#0062DF" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              v-else-if="post.interacted[0].type === 1"
              xmlns="http://www.w3.org/2000/svg"
              width="14.592"
              height="13.567"
              viewBox="0 0 14.592 13.567"
            >
              <path
                id="like-svgrepo-com"
                d="M14.568,5.872a4.136,4.136,0,0,0-3.949-4.045A3.926,3.926,0,0,0,7.256,3.764,3.783,3.783,0,0,0,3.973,1.826,4.136,4.136,0,0,0,.025,5.871,4.171,4.171,0,0,0,.149,7.409a6.594,6.594,0,0,0,2.02,3.371l5.084,4.613,5.171-4.613a6.6,6.6,0,0,0,2.02-3.372A4.181,4.181,0,0,0,14.568,5.872Z"
                transform="translate(0 -1.826)"
                fill="#ff0000"
              ></path>
            </svg>
            <svg
              v-else-if="post.interacted[0].type === 6"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path fill="url(#a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8" />
              <path
                fill="#000"
                d="M5.2 13.551c0 .528 1.253.444 2.8.444 1.546 0 2.8.084 2.8-.444 0-.636-1.254-1.051-2.8-1.051-1.547 0-2.8.415-2.8 1.051Z"
                filter="url(#b)"
              />
              <path
                fill="url(#c)"
                d="M5.2 13.551c0 .528 1.253.444 2.8.444 1.546 0 2.8.084 2.8-.444 0-.636-1.254-1.051-2.8-1.051-1.547 0-2.8.415-2.8 1.051Z"
              />
              <path
                fill="url(#d)"
                d="M3.6 9.831c0-.79.538-1.43 1.2-1.43.663 0 1.2.64 1.2 1.43 0 .33-.093.633-.252.874a.527.527 0 0 1-.318.22c-.15.036-.373.075-.63.075s-.481-.039-.63-.075a.524.524 0 0 1-.318-.22 1.588 1.588 0 0 1-.252-.874Zm6.4 0c0-.79.537-1.43 1.2-1.43.662 0 1.2.64 1.2 1.43 0 .33-.094.633-.252.874a.524.524 0 0 1-.318.22c-.207.05-.418.075-.63.075-.257 0-.48-.039-.63-.075a.53.53 0 0 1-.32-.22 1.596 1.596 0 0 1-.25-.874Z"
              />
              <path
                fill="#000"
                d="M3.6 9.831c0-.79.538-1.43 1.2-1.43.663 0 1.2.64 1.2 1.43 0 .33-.093.633-.252.874a.527.527 0 0 1-.318.22c-.15.036-.373.075-.63.075s-.481-.039-.63-.075a.524.524 0 0 1-.318-.22 1.588 1.588 0 0 1-.252-.874Zm6.4 0c0-.79.537-1.43 1.2-1.43.662 0 1.2.64 1.2 1.43 0 .33-.094.633-.252.874a.524.524 0 0 1-.318.22c-.207.05-.418.075-.63.075-.257 0-.48-.039-.63-.075a.53.53 0 0 1-.32-.22 1.596 1.596 0 0 1-.25-.874Z"
                filter="url(#e)"
              />
              <path
                fill="#4F4F67"
                d="M4.968 9.333a.33.33 0 0 1 .007.07c0 .202-.176.367-.394.367-.217 0-.393-.165-.393-.366 0-.083.03-.16.08-.221.224.053.46.104.7.15Zm5.927.437c-.211 0-.383-.153-.393-.348.258-.038.515-.085.765-.136.014.038.021.078.02.119 0 .2-.175.365-.393.365Z"
              />
              <path
                fill="#000"
                d="M9 7.6c0-.446.163-.6.445-.6.28 0 .414.276.506 1.066 1.128 0 3.038-.534 3.222-.534.178 0 .277.085.317.267.035.158-.023.308-.221.4-.621.287-2.443.935-3.984.935-.168 0-.285-.086-.285-.301V7.6Zm-2.951.466C6.14 7.276 6.275 7 6.555 7c.282 0 .445.154.445.6v1.233c0 .215-.117.301-.285.301-1.541 0-3.363-.648-3.984-.935-.198-.092-.256-.242-.221-.4.04-.182.14-.267.317-.267.184 0 2.094.534 3.222.534Z"
                filter="url(#f)"
              />
              <path
                fill="url(#g)"
                d="M9 7.6c0-.446.163-.6.445-.6.28 0 .414.276.506 1.066 1.128 0 3.038-.534 3.222-.534.178 0 .277.085.317.267.035.158-.023.308-.221.4-.621.287-2.443.935-3.984.935-.168 0-.285-.086-.285-.301V7.6Zm-2.951.466C6.14 7.276 6.275 7 6.555 7c.282 0 .445.154.445.6v1.233c0 .215-.117.301-.285.301-1.541 0-3.363-.648-3.984-.935-.198-.092-.256-.242-.221-.4.04-.182.14-.267.317-.267.184 0 2.094.534 3.222.534Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="8"
                  x2="8"
                  y2="10.751"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E04300" />
                  <stop offset="1" stop-color="#FFA320" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="8"
                  x2="8"
                  y1="12.703"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3D0D00" />
                  <stop offset="1" stop-color="#661C04" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="8"
                  x2="8"
                  y1="8.4"
                  y2="11"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A33" />
                  <stop offset=".872" stop-color="#3B426A" />
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="11.615"
                  x2="11.615"
                  y1="9.333"
                  y2="7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9A2F00" />
                  <stop offset="1" stop-color="#D44800" />
                </linearGradient>
                <filter
                  id="b"
                  width="7.6"
                  height="3.5"
                  x="4.2"
                  y="12.5"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation=".5" />
                  <feColorMatrix
                    values="0 0 0 0 1 0 0 0 0 0.509681 0 0 0 0 0 0 0 0 0.371207 0"
                  />
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <filter
                  id="e"
                  width="8.8"
                  height="2.6"
                  x="3.6"
                  y="8.4"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation=".5" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix
                    values="0 0 0 0 0.0387428 0 0 0 0 0.0406183 0 0 0 0 0.0875053 0 0 0 1 0"
                  />
                  <feBlend in2="shape" result="effect1_innerShadow" />
                </filter>
                <filter
                  id="f"
                  width="11.199"
                  height="2.834"
                  x="2.4"
                  y="7"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy=".6" />
                  <feGaussianBlur stdDeviation=".05" />
                  <feColorMatrix
                    values="0 0 0 0 0.565875 0 0 0 0 0.151272 0 0 0 0 0 0 0 0 0.15024 0"
                  />
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
              </defs>
            </svg>
            <svg
              v-else-if="post.interacted[0].type === 3"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <path fill="url(#a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8" />
              <path
                fill="url(#b)"
                d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"
              />
              <path
                fill="url(#c)"
                d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"
              />
              <path
                fill="#2A3755"
                d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="8"
                  x2="8"
                  y1="1.64"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEEA70" />
                  <stop offset="1" stop-color="#F69B30" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8"
                  x2="8"
                  y1="7"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#472315" />
                  <stop offset="1" stop-color="#8B3A0E" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="8.005"
                  x2="8.005"
                  y1="11"
                  y2="13.457"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FC607C" />
                  <stop offset="1" stop-color="#D91F3A" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              v-else-if="post.interacted[0].type === 5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path fill="url(#a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8" />
              <path
                fill="url(#b)"
                d="M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765Z"
              />
              <path
                fill="url(#c)"
                d="M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.09.65-.238.898a.492.492 0 0 1-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 0 1-.3-.225 1.741 1.741 0 0 1-.24-.898Zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.09.65-.238.898a.49.49 0 0 1-.301.225c-.39.101-.8.101-1.19 0a.49.49 0 0 1-.3-.225 1.74 1.74 0 0 1-.238-.898Z"
              />
              <path
                fill="#000"
                d="M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.09.65-.238.898a.492.492 0 0 1-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 0 1-.3-.225 1.741 1.741 0 0 1-.24-.898Zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.09.65-.238.898a.49.49 0 0 1-.301.225c-.39.101-.8.101-1.19 0a.49.49 0 0 1-.3-.225 1.74 1.74 0 0 1-.238-.898Z"
                filter="url(#d)"
              />
              <path
                fill="#4E506A"
                d="M4.616 7.986c.128.125.136.372.017.55-.12.179-.32.223-.448.097-.128-.125-.135-.372-.017-.55.12-.18.32-.222.448-.097Zm6.489 0c.128.125.136.372.018.55-.12.179-.32.223-.45.097-.127-.125-.134-.372-.015-.55.119-.18.319-.222.447-.097Z"
              />
              <path
                fill="url(#e)"
                d="M4.157 5.153c.332-.153.596-.22.801-.22.277 0 .451.12.55.307.175.329.096.4-.198.459-1.106.224-2.217.942-2.699 1.39-.3.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662Zm6.335.087c.1-.187.273-.306.55-.306.206 0 .47.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.37-.13-.197-.46Z"
              />
              <path
                fill="url(#f)"
                d="M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671Z"
              />
              <path
                fill="url(#g)"
                d="M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.34-.566.055 0 .102.068.338.566.114.24.255.486.255.851s-.266.661-.594.661"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="8"
                  x2="8"
                  y1="1.64"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEEA70" />
                  <stop offset="1" stop-color="#F69B30" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8"
                  x2="8"
                  y1="11"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#472315" />
                  <stop offset="1" stop-color="#8B3A0E" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="7.999"
                  x2="7.999"
                  y1="7.334"
                  y2="10"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A33" />
                  <stop offset=".872" stop-color="#3B426A" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="8"
                  x2="8"
                  y1="4.934"
                  y2="7.199"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E78E0D" />
                  <stop offset="1" stop-color="#CB6000" />
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="13.5"
                  x2="13.5"
                  y1="15.05"
                  y2="11.692"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#35CAFC" />
                  <stop offset="1" stop-color="#007EDB" />
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="13.5"
                  x2="13.5"
                  y1="11.528"
                  y2="13.606"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6AE1FF" stop-opacity=".287" />
                  <stop offset="1" stop-color="#A8E3FF" stop-opacity=".799" />
                </linearGradient>
                <filter
                  id="d"
                  width="8.801"
                  height="2.666"
                  x="3.599"
                  y="7.334"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation=".5" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix
                    values="0 0 0 0 0.0411227 0 0 0 0 0.0430885 0 0 0 0 0.0922353 0 0 0 0.819684 0"
                  />
                  <feBlend in2="shape" result="effect1_innerShadow" />
                </filter>
              </defs>
            </svg>
            <svg
              v-else-if="post.interacted[0].type === 4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <g clip-path="url(#a)">
                <path fill="yellow" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8" />
                <path
                  fill="url(#c)"
                  d="M5.643 10.888C5.485 12.733 6.37 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888Z"
                />
                <path
                  fill="url(#d)"
                  d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5Zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5Z"
                />
                <path
                  fill="#000"
                  d="M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5Zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5Z"
                  filter="url(#e)"
                />
                <path
                  fill="#4E506A"
                  d="M4.481 4.567c.186.042.29.252.232.47-.057.217-.254.36-.44.317-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317Zm6.659.063c.205.047.321.28.258.52-.064.243-.282.4-.49.354-.205-.046-.322-.28-.258-.52.063-.243.282-.4.49-.354Z"
                />
                <path
                  fill="#000"
                  d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 0 1-.087.594.344.344 0 0 1-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 0 0-.59.332.346.346 0 0 1-.49.068.368.368 0 0 1-.068-.507 1.49 1.49 0 0 1 1.085-.612Zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 0 1 1.242.619.369.369 0 0 1-.066.507.347.347 0 0 1-.492-.068.8.8 0 0 0-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 0 1-.496-.024.368.368 0 0 1 .022-.51Z"
                  filter="url(#f)"
                />
                <path
                  fill="url(#g)"
                  d="M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 0 1-.087.594.344.344 0 0 1-.387-.06c-.275-.26-.656-.4-.992-.37a.8.8 0 0 0-.59.332.346.346 0 0 1-.49.068.368.368 0 0 1-.068-.507 1.49 1.49 0 0 1 1.085-.612Zm-7.665.555c.371-.353.86-.553 1.372-.562a1.49 1.49 0 0 1 1.242.619.369.369 0 0 1-.066.507.347.347 0 0 1-.492-.068.8.8 0 0 0-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 0 1-.496-.024.368.368 0 0 1 .022-.51Z"
                />
              </g>
              <defs>
                <linearGradient
                  id="b"
                  x1="8"
                  x2="8"
                  y1="1.64"
                  y2="16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FEEA70" />
                  <stop offset="1" stop-color="#F69B30" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="8"
                  x2="8"
                  y1="8"
                  y2="14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#472315" />
                  <stop offset="1" stop-color="#8B3A0E" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="8"
                  x2="8"
                  y1="4"
                  y2="7"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#191A33" />
                  <stop offset=".872" stop-color="#3B426A" />
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="8"
                  x2="8"
                  y1="1.688"
                  y2="2.888"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E78E0D" />
                  <stop offset="1" stop-color="#CB6000" />
                </linearGradient>
                <filter
                  id="e"
                  width="9"
                  height="3"
                  x="3.5"
                  y="4"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation=".5" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix
                    values="0 0 0 0 0.0980392 0 0 0 0 0.101961 0 0 0 0 0.2 0 0 0 0.819684 0"
                  />
                  <feBlend in2="shape" result="effect1_innerShadow" />
                </filter>
                <filter
                  id="f"
                  width="15.422"
                  height="7.199"
                  x=".289"
                  y="-.312"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    values="0 0 0 0 0.803922 0 0 0 0 0.388235 0 0 0 0 0.00392157 0 0 0 0.145679 0"
                  />
                  <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              v-else-if="post.interacted[0].type === 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="18"
              height="18"
            >
              <linearGradient
                id="a"
                x1="-2.313"
                x2="-2.313"
                y1="19.862"
                y2="20.738"
                gradientTransform="matrix(16 0 0 -16 45 333)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f28a2d" />
                <stop offset="1" stop-color="#fde86f" />
              </linearGradient>
              <path
                fill="url(#a)"
                fill-rule="evenodd"
                d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="b"
                cx="-2.313"
                cy="20.313"
                r=".5"
                gradientTransform="matrix(16 0 0 -16 45 333)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f28a2d" stop-opacity="0" />
                <stop offset="1" stop-color="#f08423" stop-opacity=".34" />
              </radialGradient>
              <path
                fill="url(#b)"
                fill-rule="evenodd"
                d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="c"
                cx="-2.644"
                cy="20.358"
                r=".101"
                gradientTransform="matrix(14.5998 6.5456 5.063 -11.2928 -62.74 255.526)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f28a2d" stop-opacity=".5" />
                <stop offset="1" stop-color="#f28a2d" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#c)"
                fill-rule="evenodd"
                d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="d"
                cx="-2.227"
                cy="19.541"
                r=".283"
                gradientTransform="matrix(12.5663 -9.904 -3.6032 -4.5717 110.263 79.053)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f28a2d" stop-opacity=".5" />
                <stop offset="1" stop-color="#f28a2d" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#d)"
                fill-rule="evenodd"
                d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="e"
                cx="-2.531"
                cy="19.776"
                r=".107"
                gradientTransform="matrix(15.7394 -2.8762 -.572 -3.1299 56.242 56.647)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#d45f00" stop-opacity=".15" />
                <stop offset="1" stop-color="#f28a2d" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#e)"
                fill-rule="evenodd"
                d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="f"
                cx="-2.098"
                cy="20.131"
                r=".106"
                gradientTransform="matrix(15.6768 3.1995 .6363 -3.1176 30.972 71.62)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#d45f00" stop-opacity=".15" />
                <stop offset="1" stop-color="#d45f00" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#f)"
                fill-rule="evenodd"
                d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                clip-rule="evenodd"
              />
              <linearGradient
                id="g"
                x1="-1.619"
                x2="-1.619"
                y1="18.2"
                y2="16.681"
                gradientTransform="matrix(3.4035 0 0 -.9374 13.51 22.37)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#482314" />
                <stop offset="1" stop-color="#9a4111" />
              </linearGradient>
              <path
                fill="url(#g)"
                fill-rule="evenodd"
                d="M9.7 5.9c-.1-.3-3.3-.3-3.4 0-.1.3.6.7 1.7.7s1.8-.4 1.7-.7z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="h"
                cx="-3.9"
                cy="18.924"
                r=".872"
                gradientTransform="matrix(0 -2.1326 -2.1327 0 45.352 -4.046)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#3b446b" />
                <stop offset=".688" stop-color="#202340" />
              </radialGradient>
              <path
                fill="url(#h)"
                fill-rule="evenodd"
                d="M6 4.1c0 .7-.4.9-1 1-.6.1-1.1-.2-1.1-1 0-.6.3-1.4 1.1-1.4.7 0 1 .8 1 1.4z"
                clip-rule="evenodd"
              />
              <path
                fill="#4e506a"
                fill-rule="evenodd"
                d="M4.9 3.1c.1.1.1.4-.1.5-.1.1-.3.2-.4 0s-.1-.3 0-.5c.2-.1.4-.1.5 0z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="i"
                cx="-3.914"
                cy="18.924"
                r=".872"
                gradientTransform="matrix(0 -2.1326 -2.1327 0 51.366 -4.077)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#3b446b" />
                <stop offset=".688" stop-color="#202340" />
              </radialGradient>
              <path
                fill="url(#i)"
                fill-rule="evenodd"
                d="M10 4.1c0 .7.4.9 1.1 1 .6.1 1.1-.2 1.1-1 0-.6-.3-1.4-1.1-1.4S10 3.5 10 4.1z"
                clip-rule="evenodd"
              />
              <path
                fill="#4e506a"
                fill-rule="evenodd"
                d="M11 3.1c.1.1 0 .3-.1.5-.1.1-.3.1-.4 0s0-.3.1-.5c.2-.2.3-.2.4 0z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="j"
                cx="-5.202"
                cy="20.231"
                r=".298"
                gradientTransform="matrix(-.339 -1.3177 -6.1081 1.5713 126.811 -36.933)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#e38200" />
                <stop offset="1" stop-color="#cd6700" />
              </radialGradient>
              <path
                fill="url(#j)"
                fill-rule="evenodd"
                d="M3.4 2.1c-.2.2 0 .5.3.4.6-.3 1.8-.6 2.8-.5.3 0 .4 0 .3-.4 0-.3-.4-.5-1.2-.4-1.2.1-2 .7-2.2.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="k"
                cx="-4.247"
                cy="20.267"
                r=".314"
                gradientTransform="matrix(.2577 -1.3359 -7.9278 -1.5293 172.702 26.852)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#e38200" />
                <stop offset="1" stop-color="#cd6700" />
              </radialGradient>
              <path
                fill="url(#k)"
                fill-rule="evenodd"
                d="M10.4 1.2c-.8-.1-1.2.1-1.2.4-.1.4 0 .4.3.4 1.1-.1 2.3.2 2.8.5.4.2.5-.2.3-.4s-1-.8-2.2-.9z"
                clip-rule="evenodd"
              />
              <linearGradient
                id="l"
                x1="-2.17"
                x2="-2.407"
                y1="20.358"
                y2="19.647"
                gradientTransform="matrix(9.7496 0 0 -9.079 27.91 194.578)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f34462" />
                <stop offset="1" stop-color="#cc0820" />
              </linearGradient>
              <path
                fill="url(#l)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="m"
                cx="-1.839"
                cy="20.363"
                r=".29"
                gradientTransform="matrix(8.51 3.1636 3.1637 -8.51 -39.932 190.042)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ff7091" stop-opacity=".7" />
                <stop offset="1" stop-color="#fe6d8e" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#m)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="n"
                cx="-2.308"
                cy="20.509"
                r=".29"
                gradientTransform="matrix(8.51 3.1636 3.1637 -8.51 -40.975 191.442)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#ff7091" stop-opacity=".7" />
                <stop offset="1" stop-color="#fe6d8e" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#n)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="o"
                cx="-2.505"
                cy="20.75"
                r=".249"
                gradientTransform="matrix(-1.8271 8.8932 12.246 2.5158 -254.697 -18.163)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#9c0600" />
                <stop offset="1" stop-color="#9c0600" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#o)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="p"
                cx="-1.547"
                cy="20.349"
                r=".15"
                gradientTransform="matrix(7.812 4.6261 5.8059 -9.8043 -94.645 218.657)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#9c0600" stop-opacity=".5" />
                <stop offset="1" stop-color="#9c0600" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#p)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="q"
                cx="-2.763"
                cy="20.429"
                r=".13"
                gradientTransform="matrix(8.5228 -3.1289 -4.0321 -10.983 107.977 224.84)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#9c0600" stop-opacity=".5" />
                <stop offset="1" stop-color="#9c0600" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#q)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <radialGradient
                id="r"
                cx="-1.795"
                cy="20.148"
                r=".175"
                gradientTransform="matrix(7.5205 5.0863 5.5088 -8.1451 -88.557 187.152)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#9c0600" stop-opacity=".999" />
                <stop offset="1" stop-color="#9c0600" stop-opacity="0" />
              </radialGradient>
              <path
                fill="url(#r)"
                fill-rule="evenodd"
                d="M9.7 8.5c-2.1-.6-2.8.8-2.8.8S7.1 7.7 5 7c-2-.6-3.2 1.3-3.3 2.4-.2 2.5 2 5.3 2.8 6.3.1.3.4.3.7.3 1.2-.3 4.6-1.4 5.9-3.6.5-1.1.6-3.3-1.4-3.9z"
                clip-rule="evenodd"
              />
              <defs>
                <filter
                  id="s"
                  width="6.9"
                  height="5.4"
                  x="-.2"
                  y="7.2"
                  filterUnits="userSpaceOnUse"
                >
                  <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
              </defs>
              <mask
                id="u"
                width="6.9"
                height="5.4"
                x="-.2"
                y="7.2"
                maskUnits="userSpaceOnUse"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
                  clip-rule="evenodd"
                  filter="url(#s)"
                />
              </mask>
              <radialGradient
                id="t"
                cx="-2.204"
                cy="20.844"
                r="1.226"
                gradientTransform="matrix(4.3582 3.2271 3.227 -4.3582 -57.739 105.424)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#eda83a" />
                <stop offset="1" stop-color="#ffdc5e" />
              </radialGradient>
              <path
                fill="url(#t)"
                fill-rule="evenodd"
                d="M1.3 7.7c-.5-.5-1.4-.8-1.5.4-.1.9.3 2.5 1.4 3.4 2.8 2.2 5.3 1 5.4-.6.1-1.2-1.4-1.1-1.8-1.1v-.1c.1-.1.3-.2.4-.3.4-.3.2-.8-.3-.7-.1 0-1.3.4-2.1.1-.8-.3-.9-.6-1.5-1.1z"
                clip-rule="evenodd"
                mask="url(#u)"
              />
              <radialGradient
                id="v"
                cx="15.654"
                cy="7.737"
                r="8.846"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#eda83a" />
                <stop offset="1" stop-color="#ffdc5e" />
              </radialGradient>
              <path
                fill="url(#v)"
                d="M14.3 7.8c.3-.6.8-.4 1.1-.3.4.1.7.4.7 1 0 1.5-.2 2.9-1.5 4.3-2.3 2.6-6.2 2.2-6.6.6-.3-1.2 1.1-1.4 1.6-1.4v-.1c-.2-.1-.3-.2-.5-.3-.4-.3-.3-.9.2-.8.6.1 1.4.3 2 .2 1.9-.2 2.2-1.7 3-3.2z"
              />
            </svg>

            <small v-if="post.interacted.length === 0" class="addreaction">
              <span @click="addReactionToPost(post.id, 7)">
                {{ $t("Like") }}
              </span>
              <div class="box-reaction-items">
                <span @click="addReactionToPost(post.id, 7)">
                  <!-- {{ $t("Like") }} -->

                  <img
                    class="img-reactions"
                    src="@/assets/reactions/like.gif"
                    alt="Like emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 1)">
                  <!-- {{ $t("Love") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/love.gif"
                    alt="Love emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 6)">
                  <!-- {{ $t("Angry") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/angry.gif"
                    alt="Haha emoji"
                  />
                </span>

                <span @click="addReactionToPost(post.id, 3)">
                  <!-- {{ $t("HaHaHa") }} -->
                  <img src="@/assets/reactions/haha.gif" alt="Wow emoji" />
                </span>
                <span @click="addReactionToPost(post.id, 4)">
                  <!-- {{ $t("WOW") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/wow.gif"
                    alt="Angry emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 5)">
                  <!-- {{ $t("Sad") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/sad.gif"
                    alt="Sad emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 2)">
                  <!-- {{ $t("Care") }} -->
                  <img
                    class="care-img img-reactions"
                    src="@/assets/reactions/care.gif"
                    alt="Care emoji"
                  />
                </span>
              </div>
            </small>

            <small
              v-else
              class="addreaction"
              :class="{
                like: post.interacted[0].type === 7,
                love: post.interacted[0].type === 1,
                angry: post.interacted[0].type === 6,
                HaHaHa: post.interacted[0].type === 3,
                Sad: post.interacted[0].type === 5,
                Care: post.interacted[0].type === 2,
                WOW: post.interacted[0].type === 4,
              }"
            >
              <span
                v-if="post.interacted[0].type === 1"
                @click="addReactionToPost(post.id, null)"
              >
                {{ $t("Love") }}
                <!-- <img src="@/assets/reactions/love.gif" alt="Love emoji" /> -->
              </span>
              <span
                v-else-if="post.interacted[0].type === 6"
                @click="addReactionToPost(post.id, null)"
              >
                {{ $t("Angry") }}
                <!-- <img src="@/assets/reactions/angry.gif" alt="Haha emoji" /> -->
              </span>
              <span
                v-else-if="post.interacted[0].type === 3"
                @click="addReactionToPost(post.id, null)"
              >
                {{ $t("HaHaHa") }}
                <!-- <img src="@/assets/reactions/haha.gif" alt="Wow emoji" /> -->
              </span>
              <span
                v-else-if="post.interacted[0].type === 5"
                @click="addReactionToPost(post.id, null)"
              >
                {{ $t("Sad") }}
                <!-- <img src="@/assets/reactions/sad.gif" alt="Sad emoji" /> -->
              </span>
              <span
                v-else-if="post.interacted[0].type === 2"
                @click="addReactionToPost(post.id, null)"
              >
                {{ $t("Care") }}
                <!-- <img src="@/assets/reactions/care.gif" alt="Sad emoji" /> -->
              </span>
              <span
                v-else-if="post.interacted[0].type === 4"
                @click="addReactionToPost(post.id, null)"
              >
                {{ $t("Wow") }}
                <!-- <img src="@/assets/reactions/wow.gif" alt="Angry emoji" /> -->
              </span>
              <span v-else @click="addReactionToPost(post.id, null)">
                {{ $t("Like") }}
                <!-- <img src="@/assets/reactions/like.gif" alt="Like emoji" /> -->
              </span>
              <div class="box-reaction-items">
                <span @click="addReactionToPost(post.id, 7)">
                  <!-- {{ $t("Like") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/like.gif"
                    alt="Like emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 1)">
                  <!-- {{ $t("Love") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/love.gif"
                    alt="Love emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 6)">
                  <!-- {{ $t("Angry") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/angry.gif"
                    alt="Haha emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 3)">
                  <!-- {{ $t("HaHaHa") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/haha.gif"
                    alt="Wow emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 5)">
                  <!-- {{ $t("Sad") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/sad.gif"
                    alt="Sad emoji"
                  />
                </span>

                <span @click="addReactionToPost(post.id, 4)">
                  <!-- {{ $t("Wow") }} -->
                  <img
                    class="img-reactions"
                    src="@/assets/reactions/wow.gif"
                    alt="Angry emoji"
                  />
                </span>
                <span @click="addReactionToPost(post.id, 2)">
                  <!-- {{ $t("Care") }} -->
                  <img
                    src="@/assets/reactions/care.gif"
                    class="care-img img-reactions"
                    alt="Care emoji"
                  />
                </span>
              </div>
            </small>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13.301"
              viewBox="0 0 14 13.301"
            >
              <g
                id="_-Product-Icons"
                data-name="🔍-Product-Icons"
                transform="translate(0)"
              >
                <g id="ic_fluent_comment_24_filled" transform="translate(0)">
                  <path
                    id="_-Color"
                    data-name="🎨-Color"
                    d="M4.275,13.5A2.275,2.275,0,0,1,2,11.225V5.275A2.275,2.275,0,0,1,4.275,3h9.45A2.275,2.275,0,0,1,16,5.275v5.95A2.275,2.275,0,0,1,13.725,13.5H9.675L5.9,16.172A.7.7,0,0,1,4.8,15.6V13.5Z"
                    transform="translate(-2 -3)"
                    fill="#767676"
                  ></path>
                </g>
              </g>
            </svg>
            <button class="btn_comment_style" @click="myFunction()">
              {{ $t("Comment") }}
            </button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.814"
              height="14.859"
              viewBox="0 0 11.814 14.859"
            >
              <g id="share-svgrepo-com" transform="translate(0)">
                <g id="Group_183" data-name="Group 183" transform="translate(0)">
                  <path
                    id="Path_115"
                    data-name="Path 115"
                    d="M56.469,10.19a2.322,2.322,0,0,0-1.251.364L51.567,8.006a2.332,2.332,0,0,0,0-1.288l3.552-2.48a2.333,2.333,0,1,0-.931-1.408L50.546,5.373a2.334,2.334,0,1,0,0,3.977l3.671,2.563a2.334,2.334,0,1,0,2.253-1.723Z"
                    transform="translate(-46.989)"
                    fill="#767676"
                  ></path>
                </g>
              </g>
            </svg>
            <small
              style="cursor: pointer"
              :id="'dropdownMenuButton1' + post.id"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="getSharenumber(post)"
              >{{ $t("Share") }}</small
            >
            <ul class="dropdown-menu" :aria-labelledby="'dropdownMenuButton1' + post.id">
              <li
                data-bs-toggle="modal"
                :data-bs-target="'#exampleModal' + post.id"
                class="dropdown-item"
                style="cursor: pointer"
              >
                {{ $t("share On My Profile") }}
              </li>
              <li
                v-for="(page, index) in mypages"
                :key="index"
                data-bs-toggle="modal"
                @click="setpageid(page.id)"
                :data-bs-target="'#sharepageModal' + post.id"
                style="cursor: pointer"
                class="dropdown-item"
              >
                On {{ page.name }}
              </li>
            </ul>
            <!-- Profile scrollable modal -->

            <div
              class="modal fade"
              :id="'exampleModal' + post.id"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ $t("Sharing Post on My Profile") }}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      @click="close"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <textarea
                      v-model="content"
                      name="content"
                      style="
                        width: 100%;
                        border-radius: 15px;
                        margin-bottom: 10px;
                        padding: 1rem;
                        height: auto;
                      "
                      rows="5"
                      :placeholder="
                        'Welcome ' + [[first_name]] + '  what are you thinking about?'
                      "
                    ></textarea>
                    <div class="row mb-3 me-0 bg-white">
                      <div v-if="post.sharing_post" class="shared">
                        <SharedPostComponent :post="post.parent" />
                      </div>
                      <div v-else class="card card_post">
                        <div
                          class="card-header bg-white border-bottom-0 d-flex justify-content-between"
                        >
                          <div class="d-flex align-items-center">
                            <div>
                              <img
                                v-if="post.model.has_media_profile === false"
                                src="@/assets/img_friends/default1.png"
                                alt
                              />
                            </div>
                            <div class="ms-3">
                              <p class="mb-0" v-if="post.model_type == 'Profile'">
                                {{ post.model.first_name }}
                                {{ post.model.last_name }}
                              </p>
                              <p v-else class="mb-0">
                                {{ post.model.name }}
                                <small style="color: green; font-weight: bold"
                                  >page</small
                                >
                              </p>
                              <small class="text-muted">{{
                                format_date(post.created_at)
                              }}</small>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <p v-if="post.content" class="card-text">{{ post.content }}</p>
                          <div v-if="post.has_media" class="media_container">
                            <div class="media_one" v-if="post.media.length === 1">
                              <img
                                v-if="post.media[0].media_type.includes('Image')"
                                :src="post.media[0].src_url"
                                alt
                              />
                              <video v-else controls :src="post.media[0].src_url"></video>
                            </div>
                            <div
                              class="media_two d-flex justify-content-between align-items-center"
                              v-if="post.media.length === 2"
                            >
                              <div class="media_two_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_two_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                            </div>
                            <div class="media_three" v-if="post.media.length === 3">
                              <div class="media_three_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_three_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                              <div class="media_three_box_under">
                                <img
                                  v-if="post.media[2].media_type.includes('Image')"
                                  :src="post.media[2].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[2].src_url"
                                ></video>
                              </div>
                            </div>
                            <div class="media_four" v-if="post.media.length === 4">
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[2].media_type.includes('Image')"
                                  :src="post.media[2].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[2].src_url"
                                ></video>
                              </div>
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[3].media_type.includes('Image')"
                                  :src="post.media[3].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[3].src_url"
                                ></video>
                              </div>
                            </div>
                            <div class="media_bigger" v-if="post.media.length > 4">
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[2].media_type.includes('Image')"
                                  :src="post.media[2].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[2].src_url"
                                ></video>
                              </div>
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[3].media_type.includes('Image')"
                                  :src="post.media[3].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[3].src_url"
                                ></video>
                              </div>
                              <p
                                class="bigger_p d-flex align-items-center justify-content-center"
                              >
                                <span>+{{ post.media.length - 4 }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <div class="w-100">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        @click="shareToMyProfile(this.share)"
                      >
                        {{ $t("Sharing Now") }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Profile scrollable modal -->

            <!-- Page scrollable modal -->
            <div
              class="modal fade"
              :id="'sharepageModal' + post.id"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      {{ $t("Sharing Post on My Page") }}
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      @click="close"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <textarea
                      v-model="content"
                      name="content"
                      style="
                        width: 100%;
                        border-radius: 15px;
                        margin-bottom: 10px;
                        padding: 1rem;
                        height: auto;
                      "
                      rows="5"
                      placeholder="what are you thinking about?"
                    ></textarea>
                    <div class="row mb-3 me-0 bg-white">
                      <div v-if="post.sharing_post != false" class="shared">
                        <SharedPostComponent :post="post.parent" />
                      </div>
                      <div v-else class="card card_post">
                        <div
                          class="card-header bg-white border-bottom-0 d-flex justify-content-between"
                        >
                          <div class="d-flex align-items-center">
                            <div>
                              <img
                                v-if="post.model.has_media_profile === false"
                                src="@/assets/img_friends/default1.png"
                                alt
                              />
                              <div v-else>
                                <img
                                  v-if="post.model.media[0].collection_name === 'profile'"
                                  :src="post.model.media[0].src_url"
                                  alt
                                />
                                <img v-else :src="post.model.media[0].src_url" alt />
                              </div>
                            </div>
                            <div class="ms-3">
                              <p class="mb-0" v-if="post.model_type == 'Profile'">
                                {{ post.model.first_name }}
                                {{ post.model.last_name }}
                              </p>
                              <p v-else class="mb-0">
                                {{ post.model.name }}
                                <small style="color: green; font-weight: bold"
                                  >page</small
                                >
                              </p>
                              <small class="text-muted">{{
                                format_date(post.created_at)
                              }}</small>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <p v-if="post.content" class="card-text">{{ post.content }}</p>
                          <div v-if="post.has_media" class="media_container">
                            <div class="media_one" v-if="post.media.length === 1">
                              <img
                                v-if="post.media[0].media_type.includes('Image')"
                                :src="post.media[0].src_url"
                                alt
                              />
                              <video v-else controls :src="post.media[0].src_url"></video>
                            </div>
                            <div
                              class="media_two d-flex justify-content-between align-items-center"
                              v-if="post.media.length === 2"
                            >
                              <div class="media_two_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_two_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                            </div>
                            <div class="media_three" v-if="post.media.length === 3">
                              <div class="media_three_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_three_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                              <div class="media_three_box_under">
                                <img
                                  v-if="post.media[2].media_type.includes('Image')"
                                  :src="post.media[2].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[2].src_url"
                                ></video>
                              </div>
                            </div>
                            <div class="media_four" v-if="post.media.length === 4">
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[2].media_type.includes('Image')"
                                  :src="post.media[2].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[2].src_url"
                                ></video>
                              </div>
                              <div class="media_four_box">
                                <img
                                  v-if="post.media[3].media_type.includes('Image')"
                                  :src="post.media[3].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[3].src_url"
                                ></video>
                              </div>
                            </div>
                            <div class="media_bigger" v-if="post.media.length > 4">
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[0].media_type.includes('Image')"
                                  :src="post.media[0].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[0].src_url"
                                ></video>
                              </div>
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[1].media_type.includes('Image')"
                                  :src="post.media[1].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[1].src_url"
                                ></video>
                              </div>
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[2].media_type.includes('Image')"
                                  :src="post.media[2].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[2].src_url"
                                ></video>
                              </div>
                              <div class="media_bigger_box">
                                <img
                                  v-if="post.media[3].media_type.includes('Image')"
                                  :src="post.media[3].src_url"
                                  alt
                                />
                                <video
                                  v-else
                                  controls
                                  :src="post.media[3].src_url"
                                ></video>
                              </div>
                              <p
                                class="bigger_p d-flex align-items-center justify-content-center"
                              >
                                <span>+{{ post.media.length - 4 }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <div class="w-100">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        @click="shareToMyPage(this.share)"
                      >
                        {{ $t("Sharing Now") }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Page scrollable modal -->
          </div>
        </div>
      </div>
      <!-- add and get comment -->
      <div class v-if="enableDisable">
        <div class="some__body">
          <comments-component :postid="post.id"></comments-component>
        </div>
      </div>
      <!-- End Add comment and get comments -->
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Helpers from "@/services/GlobalServices/Helpers";
import SharedPostComponent from "../HomeComponent/SharedPostComponent.vue";
import InteractionComponent from "../HomeComponent/InteractionComponent.vue";
import CommentsComponent from "../CommentComponent/CommentsComponent.vue";
import postServices from "@/services/HomePage/post.services";
import shareServices from "@/services/Share/share.services";
export default {
  data() {
    return {
      interaction_model: null,
      first_name: JSON.parse(localStorage.getItem("user")).profile.first_name,
      content: null,
      page_id: null,
      share: null,
      l_comment: false,
      enableDisable: false,
    };
  },
  props: ["post"],
  methods: {
    format_date(date) {
      return Helpers.format_date(date);
    },
    myFunction: function () {
      if (this.enableDisable) {
        this.enableDisable = false;
      } else {
        this.enableDisable = true;
      }
    },
    change() {
      this.interaction_model = null;
    },
    ...mapMutations({
      UPDATE_IS_MODAL_INTERACTION: "profile/UPDATE_IS_MODAL_INTERACTION",
    }),
    ...mapActions({
      UPDATE_POST_TO_LIKE: "profile/UPDATE_POST_TO_LIKE",
      GET_ALL_POSTS: "profile/GET_ALL_POSTS",
    }),
    async addReactionToPost(id, type) {
      postServices.InteractionWithPost(id, type).then((response) => {
        if (response.data.data != null) {
          const data = [id, response.data.data];
          this.UPDATE_POST_TO_LIKE(data);
        } else {
          const data = [id, null];
          this.UPDATE_POST_TO_LIKE(data);
        }
      });
    },

    showinteractionmodel() {
      this.UPDATE_IS_MODAL_INTERACTION();
      this.interaction_model = true;
      if (document.documentElement.style.overflow === "hidden") {
        document.documentElement.style.overflow = "auto";
      } else {
        document.documentElement.style.overflow = "hidden";
      }
    },
    delete_post(id) {
      if (confirm("Do you want to delete this post?") == true) {
        this.delete(id);
      }
    },
    async delete(id) {
      let token = JSON.parse(localStorage.getItem("token"));
      await postServices.deletepost(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.showSuccess({ message: this.$i18n.t("Deleted successfully") });
      this.$store.commit("profile/DELETE_POST", id);
    },
    getSharenumber(post) {
      if (post.sharing_post != false) {
        this.share = post.parent.id;
      } else {
        this.share = post.id;
      }
    },
    close() {
      this.content = null;
    },
    setpageid(page_id) {
      this.page_id = page_id;
    },
    async shareToMyPage(id) {
      // console.log(id, "shareFromPageToMypage")
      let formData = new FormData();
      formData.append("id", id);
      formData.append("page_id", this.page_id);
      if (this.content) {
        formData.append("content", this.content);
      }
      await shareServices.shareOnMyPage(formData).then((response) => {
        this.content = null;
        this.showSuccess({ message: "Shared successfully On My Page" });
        console.log(response);
      });
    },
    async shareToMyProfile(id) {
      let formData = new FormData();
      formData.append("id", id);
      if (this.content) {
        formData.append("content", this.content);
      }
      await shareServices.shareOnMyProfile(formData).then((response) => {
        this.content = null;
        this.showSuccess({ message: "Shared successfully On My Profile" });
        console.log(response);
      });
    },
  },
  computed: {
    ...mapGetters({
      USER: "auth/USER",
    }),
    ...mapState("profile", {
      interactionModel: "interactionModel",
    }),
    ...mapState("page", {
      mypages: "mypages",
    }),
  },
  notifications: {
    showSuccess: {
      // You can have any name you want instead of 'showSuccess'
      title: "Post",
      message: "Deleted successfully",
      type: "success", // You also can use 'VueNotifications.types.error' instead of 'error'
    },
  },
  components: { SharedPostComponent, InteractionComponent, CommentsComponent },
};
</script>
<style lang="scss" scoped>
//
.router-link-to-profile {
  text-decoration: none;
  color: #111;
}
.btn_comment_style {
  background: white;
  border: 0px;
}
.row {
  .card {
    margin-bottom: 0px;
  }

  .card_post {
    padding: 0;

    .card-header {
      img {
        width: 50px;
        height: 45px;
        border-radius: 50%;
      }
    }

    .card-body {
      padding: 0;
      overflow: hidden;

      p {
        padding-left: 1.2rem;
      }

      .media_container {
        max-height: 700px;
        width: 100% !important;
        overflow: hidden;

        .media_one {
          max-height: 100% !important;
          width: 100% !important;
          overflow: hidden;
          // text-align: center;

          img {
            width: 100% !important;
            height: 100% !important;
            object-fit: fill !important;
          }

          video {
            object-fit: cover;
          }
        }

        .media_two {
          height: 100%;
          width: 100% !important;
          overflow: hidden;

          .media_two_box {
            width: 50%;
            height: 100% !important;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }
          }
        }

        .media_three {
          height: 100%;
          width: 100% !important;
          overflow: hidden;

          .media_three_box {
            width: 50%;
            height: 50% !important;
            display: inline-block;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }

          .media_three_box_under {
            width: 100%;
            height: 50% !important;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .media_four {
          height: 100%;
          width: 100% !important;
          overflow: hidden;

          .media_four_box {
            width: 50% !important;
            height: 50% !important;
            display: inline-block;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100%;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }
        }

        .media_bigger {
          height: 100%;
          width: 100% !important;
          overflow: hidden;
          position: relative;

          .media_bigger_box {
            width: 50% !important;
            height: 50% !important;
            display: inline-block;
            overflow: hidden;

            img {
              width: 100% !important;
              height: 100% !important;
              object-fit: contain;
            }

            video {
              width: 100% !important;
              height: 100%;
              object-fit: cover;
            }
          }

          .bigger_p {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-weight: bolder;
            font-size: 20px;
            width: 100px;
            height: 100px;
            padding: 0 !important;
            background-color: rgba(119, 119, 119, 0.699);
            border-radius: 50%;
            cursor: pointer;
          }
        }
      }

      .body_box {
        margin-top: 1.5rem !important;
        padding: 0 2rem;
        margin-bottom: 0.5rem;
      }
      .shared {
        padding: 0 1.2rem;
      }
    }

    .card-footer {
      small {
        margin-left: 2.5rem;
      }

      .addreaction {
        .box-reaction-items {
          display: none;
        }
        cursor: pointer;
        position: relative;

        &:hover {
          .box-reaction-items {
            display: inline-flex !important;
            position: absolute;
            background-color: white;
            color: white;
            padding: 10px;
            border-radius: 5px;
            top: -50px;
            left: 70%;
            width: auto !important;

            span {
              margin: 0 5px;
            }
          }
        }
      }
      .like {
        color: blue !important;
        font-weight: bold !important;
      }
      .love {
        color: red !important;
        font-weight: bold !important;
      }

      .angry {
        color: rgb(128, 73, 0) !important;
        font-weight: bold !important;
      }

      .HaHaHa {
        color: #ffdf00 !important;
        font-weight: bold !important;
      }

      .Sad {
        color: rgb(90, 71, 196) !important;
        font-weight: bold !important;
      }

      .WOW {
        color: rgb(10, 3, 31) !important;
        font-weight: bold !important;
      }

      .Care {
        color: rgb(236, 10, 161) !important;
        font-weight: bold !important;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .card-footer {
    small {
      margin-left: 1rem !important;

      .box-reaction-items {
        display: none;
      }
      cursor: pointer;
      position: relative;

      &:hover {
        .box-reaction-items {
          display: block !important;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.548);
          color: white;
          padding: 10px;
          border-radius: 5px;
          top: -40px;
          left: -100% !important;
          width: auto !important;
          span {
            margin: 0 5px;
            font-size: 10px !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .div {
    padding: 0 0.5rem !important;
    .row {
      margin: 0 0 1rem 0 !important;

      .card-header {
        p {
          font-size: 0.8rem !important;
        }

        .right :nth-child(1),
        .right :nth-child(2) {
          margin-right: 0.3rem !important;
        }
      }

      .addreaction {
        .box-reaction-items {
          display: none;
        }
        cursor: pointer;
        position: relative;

        &:hover {
          .box-reaction-items {
            display: inline-block !important;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.548);
            color: white;
            padding: 10px;
            border-radius: 5px;
            top: -40px;
            left: 50%;
            width: 50px !important;
            span {
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 300px) {
  .card-footer {
    small {
      margin-left: 0.2rem !important;

      .box-reaction-items {
        display: none;
      }
      cursor: pointer;
      position: relative;

      &:hover {
        .box-reaction-items {
          display: block !important;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.548);
          color: white;
          padding: 10px;
          border-radius: 5px;
          top: -40px;
          left: -150% !important;
          width: auto !important;
          span {
            margin: 0 3px !important;
            font-size: 2px !important;
          }
        }
      }
    }
  }
}
.card-text {
  margin-right: 8px;
}
.card-text:lang(ar) {
  padding-right: 20px;
}

.ms-3:lang(ar) {
  margin-right: 10px;
}
.row .card_post .card-footer .addreaction:hover .box-reaction-items:lang(ar) {
  left: -425%;
}

html {
  height: 100%;
  background: #3a5897;
  display: flex;
  justify-content: center;
  align-items: center;
}

figure {
  overflow: hidden;
  border-radius: 90px;
  background: white;
}

img {
  width: 40px;
  transition: 0.2s ease;
}
img:hover {
  transform: scale(1.5);
  cursor: pointer;
}
.care-img {
  width: 23px;
  margin: 11px;
}
img.img-reactions {
  margin: -4px -5px 0px 0px;
}
</style>

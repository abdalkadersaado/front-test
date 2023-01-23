<template>
  <nav
    class="navbar navbar-expand-lg bg-light position-sticky justify-content-center"
  >
    <div class="container-fluid nonmargin row">
      <div class="row col-12 col-lg-4 col-md-8 col-sm-12">
        <a class="navbar-brand logo col-2" to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="49.729"
            height="45.017"
            viewBox="0 0 49.729 45.017"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                y1="0.5"
                x2="1"
                y2="0.5"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#00a79d" />
                <stop offset="1" stop-color="#2bb673" />
              </linearGradient>
            </defs>
            <g
              id="MediaPrototype01_FINISHED"
              data-name="MediaPrototype01 FINISHED"
              transform="translate(0 -0.033)"
            >
              <path
                id="Path_122"
                data-name="Path 122"
                d="M326.657,328.082l-33.109-19.114a3.392,3.392,0,0,0-5.088,2.939v38.23a3.392,3.392,0,0,0,5.088,2.939l33.109-19.116a3.391,3.391,0,0,0,0-5.877Z"
                transform="translate(-288.46 -308.479)"
                fill="url(#linear-gradient)"
              />
              <path
                id="Path_123"
                data-name="Path 123"
                d="M373.817,333.95l33.109,19.114a3.392,3.392,0,0,0,5.088-2.939V311.9a3.392,3.392,0,0,0-5.088-2.938l-33.109,19.116a3.391,3.391,0,0,0,0,5.877Z"
                transform="translate(-362.285 -308.47)"
                fill="#38bce3"
              />
              <path
                id="Path_124"
                data-name="Path 124"
                d="M500,590.48"
                transform="translate(-475.135 -557.303)"
                fill="#fff"
              />
              <path
                id="Path_125"
                data-name="Path 125"
                d="M211.54,232.37l11.45-6.61-10.74,7.02Z"
                transform="translate(-186.675 -199.195)"
                fill="#434343"
                opacity="0.39"
              />
              <path
                id="Path_126"
                data-name="Path 126"
                d="M120.911,97.513l-12.071,6.969,11.323-7.4Z"
                transform="translate(-96.047 -85.64)"
                fill="#434343"
                opacity="0.39"
              />
            </g>
          </svg>
        </a>
        <GlobalSearch></GlobalSearch>
        <button
          class="navbar-toggler togg col-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="col-lg-8">
        <div class="collapse navbar-collapse navStar" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link d-inline" to="/home" title="Home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 39.428 37.76"
                >
                  <path
                    id="home-svgrepo-com"
                    d="M38.7,21.66l-4.93-4.023c-1.91-1.552-3.82-3.116-5.73-4.668L21.446,7.6A2.773,2.773,0,0,0,19.68,7a2.843,2.843,0,0,0-1.767.6L.662,21.66c-.788.645-.74,1.194-.645,1.468s.406.74,1.421.74H3.8V42.36a2.4,2.4,0,0,0,2.388,2.4h7.461a2.34,2.34,0,0,0,2.328-2.4V34.78a1.3,1.3,0,0,1,1.253-1.242h5.014A1.2,1.2,0,0,1,23.38,34.78V42.36a2.457,2.457,0,0,0,2.447,2.4H33.17a2.4,2.4,0,0,0,2.388-2.4V23.868h2.364c1,0,1.325-.466,1.421-.74S39.485,22.3,38.7,21.66Z"
                    transform="translate(0.034 -7)"
                    fill="#a9a9a9"
                  />
                </svg>
                <span class="special_text style-mobile">Home</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/friends" title="Friends">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 39.428 37.76"
                >
                  <g id="groups-svgrepo-com" transform="translate(-7.264 -7)">
                    <path
                      id="Path_117"
                      data-name="Path 117"
                      d="M43.519,23.455c-2.165-.953-2.512-1.732-2.512-2.685a3.4,3.4,0,0,1,1.3-2.425,6.076,6.076,0,0,0,1.905-4.677C44.212,10.118,42.134,7,38.237,7A5.649,5.649,0,0,0,33.3,9.685a11.42,11.42,0,0,1,4.244,9.267,10.982,10.982,0,0,1-1.819,6.236,1.325,1.325,0,0,0,.52,1.905c2.165,1.039,4.763,2.685,6.149,5.2a1.351,1.351,0,0,0,1.126.693h2.858A3.1,3.1,0,0,0,49.409,29.6C49.5,26.746,46.637,24.841,43.519,23.455Z"
                      transform="translate(-7.243 0)"
                      fill="#a9a9a9"
                    />
                    <path
                      id="Path_118"
                      data-name="Path 118"
                      d="M29.874,30.5c-2.338-1.039-2.771-1.992-2.771-2.945a3.835,3.835,0,0,1,1.472-2.685,6.983,6.983,0,0,0,2.165-5.2c0-3.9-2.338-7.275-6.582-7.275s-6.582,3.378-6.582,7.275a6.983,6.983,0,0,0,2.165,5.2,4.209,4.209,0,0,1,1.472,2.685c0,1.039-.346,1.905-2.771,2.945-3.464,1.472-6.755,3.118-6.842,6.236a3.684,3.684,0,0,0,3.551,3.811H33.165a3.684,3.684,0,0,0,3.551-3.811C36.629,33.705,33.338,32.06,29.874,30.5Z"
                      transform="translate(-4.336 -0.723)"
                      fill="#a9a9a9"
                    />
                  </g>
                </svg>
                <span class="special_text style-mobile">Friends</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/pages" title="Pages">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 39.428 37.76"
                >
                  <g id="pages-svgrepo-com" transform="translate(0.5)">
                    <path
                      id="Path_113"
                      data-name="Path 113"
                      d="M23.812.5H7.236A4.75,4.75,0,0,0,2.5,5.236V26.548a4.75,4.75,0,0,0,4.736,4.736H23.812a4.75,4.75,0,0,0,4.736-4.736V5.236A4.75,4.75,0,0,0,23.812.5Z"
                      transform="translate(2.736 0)"
                      fill="#a9a9a9"
                      stroke="#a9a9a9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                    <path
                      id="Path_114"
                      data-name="Path 114"
                      d="M5.236,2.5A4.75,4.75,0,0,0,.5,7.236V26.18a6.977,6.977,0,0,0,7.1,7.1H21.812a4.75,4.75,0,0,0,4.736-4.736"
                      transform="translate(0 2.736)"
                      fill="none"
                      stroke="#a9a9a9"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
                <span class="special_text style-mobile">Pages</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/watch" title="Watches">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 39.428 37.76"
                >
                  <g
                    id="Group_182"
                    data-name="Group 182"
                    transform="translate(-198 -788)"
                  >
                    <g
                      id="Rectangle_133"
                      data-name="Rectangle 133"
                      transform="translate(198 788)"
                      fill="none"
                      stroke="#a9a9a9"
                      stroke-width="2"
                    >
                      <rect
                        width="33.764"
                        height="25.323"
                        rx="4"
                        stroke="none"
                      />
                      <rect
                        x="1"
                        y="1"
                        width="31.764"
                        height="23.323"
                        rx="3"
                        fill="none"
                      />
                    </g>
                    <line
                      id="Line_1"
                      data-name="Line 1"
                      x1="12.662"
                      transform="translate(208.551 815.434)"
                      fill="none"
                      stroke="#a9a9a9"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    />
                    <g
                      id="Polygon_1"
                      data-name="Polygon 1"
                      transform="translate(221.916 794.096) rotate(90)"
                      fill="#fff"
                      stroke-linecap="round"
                    >
                      <path
                        d="M 11.38957405090332 10.50480270385742 L 1.741034269332886 10.50480270385742 C 1.615124225616455 10.50480270385742 1.551164269447327 10.42618274688721 1.524254322052002 10.37932300567627 C 1.497334241867065 10.33245277404785 1.461644291877747 10.23759269714355 1.525094270706177 10.12883281707764 L 6.349354267120361 1.858663082122803 C 6.412314414978027 1.750753045082092 6.511674404144287 1.7346431016922 6.565304279327393 1.7346431016922 C 6.618934154510498 1.7346431016922 6.718294143676758 1.750753045082092 6.781254291534424 1.858673095703125 L 11.60552406311035 10.12883281707764 C 11.66896438598633 10.23759269714355 11.63327407836914 10.33245277404785 11.60635471343994 10.37932300567627 C 11.57944393157959 10.42618274688721 11.51548385620117 10.50480270385742 11.38957405090332 10.50480270385742 Z"
                        stroke="none"
                      />
                      <path
                        d="M 6.565308570861816 2.976946830749512 L 2.611551284790039 9.754802703857422 L 10.51905345916748 9.754802703857422 L 6.565308570861816 2.976946830749512 M 6.565304279327393 0.9846382141113281 C 6.900724411010742 0.9846382141113281 7.236144065856934 1.150012969970703 7.429084300994873 1.48076343536377 L 12.2533540725708 9.750932693481445 C 12.64223384857178 10.41759300231934 12.16136455535889 11.25480270385742 11.38957405090332 11.25480270385742 L 1.741034507751465 11.25480270385742 C 0.9692440032958984 11.25480270385742 0.4883747100830078 10.41759300231934 0.8772544860839844 9.750932693481445 L 5.701524257659912 1.48076343536377 C 5.894464492797852 1.150012969970703 6.229884147644043 0.9846382141113281 6.565304279327393 0.9846382141113281 Z"
                        stroke="none"
                        fill="#a9a9a9"
                      />
                    </g>
                  </g>
                </svg>
                <span class="special_text style-mobile">Watches</span>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/notifications"
                title="Notfications"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 39.428 37.76"
                >
                  <g
                    id="notification-svgrepo-com"
                    transform="translate(-29.876)"
                  >
                    <g
                      id="Group_179"
                      data-name="Group 179"
                      transform="translate(29.876 21.243)"
                    >
                      <g
                        id="Group_178"
                        data-name="Group 178"
                        transform="translate(0)"
                      >
                        <path
                          id="Path_111"
                          data-name="Path 111"
                          d="M57.609,327.811a25.1,25.1,0,0,1-2.674-4.146H34.472a25.061,25.061,0,0,1-2.653,4.147,1.954,1.954,0,0,0,.011,3.908h8.581a4.306,4.306,0,0,0,8.613,0H57.6a1.954,1.954,0,0,0,0-3.908Z"
                          transform="translate(-29.876 -323.665)"
                          fill="#a9a9a9"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_181"
                      data-name="Group 181"
                      transform="translate(36.418)"
                    >
                      <g
                        id="Group_180"
                        data-name="Group 180"
                        transform="translate(0)"
                      >
                        <path
                          id="Path_112"
                          data-name="Path 112"
                          d="M146.11,16.088a25.161,25.161,0,0,1-.807-6.466c0-.014,0-.029,0-.043A7.482,7.482,0,0,0,139.936,2.4a2.1,2.1,0,1,0-4.158-.019,7.482,7.482,0,0,0-5.432,7.2c0,.021,0,.042,0,.063a25.1,25.1,0,0,1-.787,6.446H146.11Z"
                          transform="translate(-129.559)"
                          fill="#a9a9a9"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <span class="special_text style-mobile">Notfications</span>
              </router-link>
            </li>
          </ul>
          <div class="d-flex align-items-center nav_end">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <div class="dropstart">
                  <a
                    class="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="40"
                      height="40"
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
                        fill="#a9a9a9"
                        stroke="#a9a9a9"
                      />
                    </svg>
                  </a>

                  <ul class="dropdown-menu">
                    <li dir="auto">
                      <router-link
                        class="dropdown-item pro"
                        to="/personal-profile"
                        title="Profile"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="25"
                          height="25"
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
                            fill="#a9a9a9"
                            stroke="#a9a9a9"
                          />
                        </svg>
                        {{ userAuth }}
                      </router-link>
                    </li>
                    <li>
                      <div id="language-picker-container" class="d-inline-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 48 48"
                          width="38px"
                          height="38px"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          id="dropdownMenuButton12"
                        >
                          <g id="surface157465146">
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(81.176472%, 86.274511%, 85.09804%);
                                fill-opacity: 1;
                              "
                              d="M 15 13 L 40 13 C 41.105469 13 42 13.894531 42 15 L 42 40 C 42 41.105469 41.105469 42 40 42 L 26 42 Z M 15 13 "
                            />
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(32.941177%, 43.137255%, 47.843137%);
                                fill-opacity: 1;
                              "
                              d="M 26.832031 34.855469 L 25.914062 33.078125 L 26.804688 32.617188 C 26.867188 32.589844 32.90625 29.410156 35.847656 23.515625 L 36.292969 22.621094 L 38.082031 23.511719 L 37.636719 24.40625 C 34.394531 30.902344 27.992188 34.257812 27.722656 34.398438 Z M 26.832031 34.855469 "
                            />
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(32.941177%, 43.137255%, 47.843137%);
                                fill-opacity: 1;
                              "
                              d="M 38.019531 34 L 37.148438 33.511719 C 36.941406 33.394531 32.058594 30.609375 28.652344 25.84375 L 30.28125 24.679688 C 33.417969 29.074219 38.085938 31.742188 38.132812 31.769531 L 39 32.261719 Z M 26 22 L 40 22 L 40 24 L 26 24 Z M 26 22 "
                            />
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(32.941177%, 43.137255%, 47.843137%);
                                fill-opacity: 1;
                              "
                              d="M 32 20 L 34 20 L 34 24 L 32 24 Z M 32 20 "
                            />
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(12.941177%, 58.823532%, 95.294118%);
                                fill-opacity: 1;
                              "
                              d="M 33 35 L 8 35 C 6.894531 35 6 34.105469 6 33 L 6 8 C 6 6.894531 6.894531 6 8 6 L 22 6 Z M 33 35 "
                            />
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(24.705882%, 31.764707%, 70.980394%);
                                fill-opacity: 1;
                              "
                              d="M 26 42 L 23 35 L 33 35 Z M 26 42 "
                            />
                            <path
                              style="
                                stroke: none;
                                fill-rule: nonzero;
                                fill: rgb(100%, 100%, 100%);
                                fill-opacity: 1;
                              "
                              d="M 19.171875 24 L 14.8125 24 L 13.804688 27 L 11 27 L 15.765625 14 L 18.207031 14 L 23 27 L 20.195312 27 Z M 15.445312 22 L 18.546875 22 L 16.984375 17.285156 Z M 15.445312 22 "
                            />
                          </g>
                        </svg>
                        <div>
                          <select
                            class="form-select"
                            name="language-picker"
                            id="language-picker"
                            v-model="lang"
                            @change="handleChange($event)"
                          >
                            <option value="choose-one" disabled="true">
                              Select your language…
                            </option>
                            <option value="en">English</option>
                            <option lang="en" value="ar">العربية</option>
                            <option lang="fr" value="fr">French</option>
                            <option value="cs">Chinese</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <router-link
                        to="/setting"
                        title="Settings"
                        class="dropdown-item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 33.327 31.327"
                        >
                          <g
                            id="settings-svgrepo-com"
                            transform="translate(0 -14.643)"
                          >
                            <g
                              id="Group_2"
                              data-name="Group 2"
                              transform="translate(0 14.643)"
                            >
                              <path
                                id="Path_8"
                                data-name="Path 8"
                                d="M266.911,243.89l-.089-1.052a.681.681,0,0,0-.738-.621l-1.031.089a6.424,6.424,0,0,0-1.209-2.349l.663-.785a.683.683,0,0,0-.082-.963l-.806-.683a.683.683,0,0,0-.963.082l-.656.779a6.412,6.412,0,0,0-2.527-.806l-.089-1a.681.681,0,0,0-.738-.621l-1.052.089a.681.681,0,0,0-.621.738l.089,1a6.409,6.409,0,0,0-2.363,1.223l-.765-.642a.683.683,0,0,0-.963.082l-.683.806a.683.683,0,0,0,.082.963l.765.642a6.351,6.351,0,0,0-.8,2.541l-1,.089a.681.681,0,0,0-.621.738l.089,1.052a.681.681,0,0,0,.738.621l1-.089a6.419,6.419,0,0,0,1.229,2.349l-.656.779a.683.683,0,0,0,.082.963l.806.683a.683.683,0,0,0,.963-.082l.663-.785a6.471,6.471,0,0,0,2.52.792l.089,1.031a.681.681,0,0,0,.738.622l1.052-.089a.681.681,0,0,0,.622-.738l-.089-1.038a6.489,6.489,0,0,0,2.336-1.216l.8.676a.683.683,0,0,0,.963-.082l.683-.806a.683.683,0,0,0-.082-.963l-.8-.676a6.418,6.418,0,0,0,.8-2.506l1.038-.089A.7.7,0,0,0,266.911,243.89Zm-5.409,2.431a3.524,3.524,0,1,1-.423-4.965A3.52,3.52,0,0,1,261.5,246.321Z"
                                transform="translate(-233.585 -220.836)"
                                fill="#a9a9a9"
                              />
                              <path
                                id="Path_9"
                                data-name="Path 9"
                                d="M17.214,34.016l-.656-1.27a8.934,8.934,0,0,0,2.356-2.814l1.373.437a.954.954,0,0,0,1.2-.622l.444-1.4a.954.954,0,0,0-.622-1.2l-1.38-.437a8.974,8.974,0,0,0-.314-3.647L20.9,22.4a.956.956,0,0,0,.41-1.284l-.676-1.3a.956.956,0,0,0-1.284-.41l-1.291.669a8.973,8.973,0,0,0-2.793-2.363l.437-1.38a.954.954,0,0,0-.622-1.2l-1.4-.444a.954.954,0,0,0-1.2.621l-.437,1.373a9.022,9.022,0,0,0-3.661.3l-.656-1.27a.956.956,0,0,0-1.284-.41l-1.3.676a.956.956,0,0,0-.41,1.284l.649,1.257a9.46,9.46,0,0,0-2.363,2.834L1.684,20.93a.954.954,0,0,0-1.2.621l-.444,1.4a.954.954,0,0,0,.621,1.2L2,24.57a9.039,9.039,0,0,0,.307,3.688L1.069,28.9a.956.956,0,0,0-.41,1.284l.676,1.3a.956.956,0,0,0,1.284.41l1.236-.642A9.1,9.1,0,0,0,6.69,33.64l-.423,1.332a.954.954,0,0,0,.622,1.2l1.4.444a.954.954,0,0,0,1.2-.621l.423-1.339a9,9,0,0,0,3.674-.328l.649,1.257a.956.956,0,0,0,1.284.41l1.3-.676A.981.981,0,0,0,17.214,34.016Zm-4.521-9.275a2.042,2.042,0,1,1-2.752-.874A2.039,2.039,0,0,1,12.693,24.741Zm-4.5-4.48a5.841,5.841,0,0,1,1.824-.6l-.082,1.864a4.356,4.356,0,0,0-1.018.376A4.283,4.283,0,0,0,6.7,26.592l-1.537.785A6.063,6.063,0,0,1,8.192,20.261Zm5.58,10.777a6.07,6.07,0,0,1-7.581-1.66l1.544-.8a4.261,4.261,0,0,0,6.017.266l1.6,1.018A6.249,6.249,0,0,1,13.772,31.038Zm1.182-4.091a4.271,4.271,0,0,0-2.78-5.334l.082-1.9a6.067,6.067,0,0,1,4.33,8.271Z"
                                transform="translate(0 -14.643)"
                                fill="#a9a9a9"
                              />
                            </g>
                          </g>
                        </svg>
                        {{ $t("Settings") }}</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/login"
                        @click="logout"
                        v-if="AUTHINTICATED"
                        class="dropdown-item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>
                        {{ $t("Logout") }}</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <div class="memo_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 44 44"
                  >
                    <circle
                      id="Ellipse_19"
                      data-name="Ellipse 19"
                      cx="22"
                      cy="22"
                      r="22"
                      fill="#e1e1e1"
                    />
                  </svg>
                  <svg
                    class="memo_svg"
                    id="MemoEmptyLogo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="27.008"
                    height="20.228"
                    viewBox="0 0 27.008 20.228"
                  >
                    <rect
                      id="Rectangle_112"
                      data-name="Rectangle 112"
                      width="5.791"
                      height="21.807"
                      rx="2.895"
                      transform="matrix(0.753, 0.658, -0.658, 0.753, 14.356, 0)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_113"
                      data-name="Rectangle 113"
                      width="5.791"
                      height="17.936"
                      rx="2.895"
                      transform="translate(20.053 1.226)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_114"
                      data-name="Rectangle 114"
                      width="5.791"
                      height="21.807"
                      rx="2.895"
                      transform="matrix(0.753, 0.658, -0.658, 0.753, 22.649, 0.001)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import GlobalSearch from "@/components/OtherComponent/GlobalSearchComponent.vue";
export default {
  name: "NavbarComponent",
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
    };
  },
  components: {
    GlobalSearch,
  },
  computed: {
    ...mapGetters({
      USER: "auth/USER",
      AUTHINTICATED: "auth/AUTHINTICATED",
    }),
    userAuth() {
      if (this.AUTHINTICATED) {
        let user = JSON.parse(localStorage.getItem("user")).profile.name;
        return user;
      } else {
        let user = "Guest";
        return user;
      }
    },
  },
  methods: {
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    logout() {
      this.$store.commit("auth/logout");
    },
  },
};
</script>
<style lang="scss" scoped>
nav {
  .logo {
    width: auto;
  }
  z-index: 1055;
  top: 0px;
  .navStar {
    li {
      margin: 10px;
    }

    .nav_end li {
      margin: 5px;
    }

    .pro:lang(ar) {
      display: flex;
      flex-direction: row-reverse;
      svg {
        margin: 0 0 0 0.5rem !important;
      }
    }
  }

  .memo_icon {
    position: relative;
    .memo_svg {
      position: absolute;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
    }
  }

  .dropstart .dropdown-toggle::before {
    display: none;
  }
  select:focus {
    box-shadow: none;
  }

  .style-mobile {
    margin-left: unset;
    display: none;
  }
}

@media screen and (max-width: 992px) {
  nav {
    .nonmargin {
      margin: 0px !important;
    }
    .logo {
      width: 10%;
      margin-right: 10px;
      margin-left: 10px;
    }
    top: 0px;
    .navStar li {
      margin: 5px;
    }

    .dropstart .dropdown-menu {
      right: auto;
      left: 100%;
    }
    .style-mobile {
      margin-left: 10rem !important;
      display: initial;
    }
  }
}
</style>

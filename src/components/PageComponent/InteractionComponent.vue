<template>
  <div class="iteraction-modal" @click="checkClick" ref="iteractiontpageWrap">
    <div class="Interaction">
      <div v-if="!isshow">
        <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="true"
            >
              {{ $t("all") }} {{ interaction.length }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="like-tab"
              data-bs-toggle="tab"
              data-bs-target="#like"
              type="button"
              role="tab"
              aria-controls="like"
              aria-selected="true"
            >
              {{ $t("Like") }} {{ likelength }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="love-tab"
              data-bs-toggle="tab"
              data-bs-target="#love"
              type="button"
              role="tab"
              aria-controls="love"
              aria-selected="false"
            >
              {{ $t("Love") }} {{ lovelength }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="Angry-tab"
              data-bs-toggle="tab"
              data-bs-target="#Angry"
              type="button"
              role="tab"
              aria-controls="Angry"
              aria-selected="false"
            >
              {{ $t("Angry") }} {{ angrylength }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="Sad-tab"
              data-bs-toggle="tab"
              data-bs-target="#Sad"
              type="button"
              role="tab"
              aria-controls="Sad"
              aria-selected="false"
            >
              {{ $t("Sad") }} {{ sadlength }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="HaHaHa-tab"
              data-bs-toggle="tab"
              data-bs-target="#HaHaHa"
              type="button"
              role="tab"
              aria-controls="HaHaHa"
              aria-selected="false"
            >
              {{ $t("HaHaHa") }} {{ hahahalength }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="care-tab"
              data-bs-toggle="tab"
              data-bs-target="#care"
              type="button"
              role="tab"
              aria-controls="care"
              aria-selected="false"
            >
              {{ $t("care") }} {{ carelength }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="wow-tab"
              data-bs-toggle="tab"
              data-bs-target="#wow"
              type="button"
              role="tab"
              aria-controls="wow"
              aria-selected="false"
            >
              {{ $t("Wow") }} {{ wowlength }}
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane overflow-auto fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="like-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade show"
            id="like"
            role="tabpanel"
            aria-labelledby="like-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 7" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade"
            id="love"
            role="tabpanel"
            aria-labelledby="love-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 1" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade"
            id="Angry"
            role="tabpanel"
            aria-labelledby="Angry-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 6" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade"
            id="Sad"
            role="tabpanel"
            aria-labelledby="Sad-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 5" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade"
            id="HaHaHa"
            role="tabpanel"
            aria-labelledby="HaHaHa-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 3" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade"
            id="care"
            role="tabpanel"
            aria-labelledby="HaHaHa-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 2" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
          <div
            class="tab-pane overflow-auto fade"
            id="wow"
            role="tabpanel"
            aria-labelledby="HaHaHa-tab"
          >
            <div v-for="(item, index) in interaction" :key="index">
              <div v-if="item.type === 4" class="mt-4">
                <h5 style="color: white !important">{{ item.user.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="justify-content-center d-flex align-items-center h-100">
        <div class="spinner-border text-white" role="status" style="z-index: 5555">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import pageServices from "@/services/Pages/page.services";
export default {
  name: "InteractionComponent",
  props: ["id"],
  data() {
    return {
      interaction: [],
      isshow: null,
      likelength: 0,
      carelength: 0,
      wowlength: 0,
      angrylength: 0,
      sadlength: 0,
      hahahalength: 0,
      lovelength: 0,
    };
  },
  methods: {
    ...mapMutations({
      UPDATE_IS_MODAL_INTERACTION: "page/UPDATE_IS_MODAL_INTERACTION",
    }),
    checkClick(e) {
      if (e.target === this.$refs.iteractiontpageWrap) {
        this.UPDATE_IS_MODAL_INTERACTION();
        document.documentElement.style.overflow = "auto";
        this.$emit("change");
      }
    },
    async getiteracion(id, data) {
      await pageServices.getInteractionWithPagePost(id, data).then((response) => {
        response.data.data.items.forEach((item) => {
          const data = {
            id: item.id,
            type: item.type,
            user: item.profile,
          };
          if (data.type === 7) {
            this.likelength += 1;
          }
          if (data.type === 1) {
            this.lovelength += 1;
          }
          if (data.type === 2) {
            this.carelength += 1;
          }
          if (data.type === 3) {
            this.hahahalength += 1;
          }
          if (data.type === 4) {
            this.wowlength += 1;
          }
          if (data.type === 5) {
            this.sadlength += 1;
          }
          if (data.type === 6) {
            this.angrylength += 1;
          }
          this.interaction.push(data);
        });
        this.isshow = null;
      });
    },
  },
  created() {
    this.getiteracion(this.id, 0);
    this.isshow = true;
  },
};
</script>

<style lang="scss" scoped>
.iteraction-modal {
  top: -100px;
  left: 0;
  position: fixed !important;
  width: 100%;
  height: calc(100% + 300px) !important;
  background-color: rgba(255, 255, 255, 0.377);
  opacity: 0.95;
  z-index: 1200;
  cursor: pointer;

  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    .nav-item {
      button {
        color: white !important;
      }
      .active {
        background-image: linear-gradient(
          to right top,
          #39a95e,
          #00af89,
          #00b2af,
          #00b2cc,
          #20b0de
        ) !important;
        color: white !important;
        padding: 0.5rem 2rem;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 70% !important;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    .nav-item {
      button {
        color: white !important;
      }
      .active {
        background-image: linear-gradient(
          to right top,
          #39a95e,
          #00af89,
          #00b2af,
          #00b2cc,
          #20b0de
        ) !important;
        color: white !important;
        padding: 0.5rem 2rem;
      }
    }
  }
}

@media screen and (max-width: 912px) {
  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 85% !important;
    height: 50%;
    top: 35% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    .nav-item {
      button {
        color: white !important;
        font-size: 12px !important;
      }
      .active {
        background-image: linear-gradient(
          to right top,
          #39a95e,
          #00af89,
          #00b2af,
          #00b2cc,
          #20b0de
        ) !important;
        color: white !important;
        padding: 0.5rem 1rem !important;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 85% !important;
    height: 50%;
    top: 40% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    .nav-item {
      button {
        color: white !important;
        font-size: 12px !important;
      }
      .active {
        background-image: linear-gradient(
          to right top,
          #39a95e,
          #00af89,
          #00b2af,
          #00b2cc,
          #20b0de
        ) !important;
        color: white !important;
        padding: 0.5rem 1rem !important;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 85% !important;
    height: 50%;
    top: 48% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    ul {
      text-align: left !important;
      justify-content: left !important;
      .nav-item {
        margin: 0 0 0.5rem 0 !important;
        button {
          color: white !important;
          font-size: 12px !important;
        }
        .active {
          background-image: linear-gradient(
            to right top,
            #39a95e,
            #00af89,
            #00b2af,
            #00b2cc,
            #20b0de
          ) !important;
          color: white !important;
          padding: 0.5rem 1.3rem !important;
        }
      }
    }

    h5 {
      font-size: 0.8rem !important;
    }
  }
}

@media screen and (max-width: 414px) {
  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 90% !important;
    height: 50%;
    top: 48% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    ul {
      text-align: left !important;
      justify-content: left !important;
      .nav-item {
        margin: 0 0 0.5rem 0 !important;
        button {
          color: white !important;
          font-size: 12px !important;
        }
        .active {
          background-image: linear-gradient(
            to right top,
            #39a95e,
            #00af89,
            #00b2af,
            #00b2cc,
            #20b0de
          ) !important;
          color: white !important;
          padding: 0.5rem 1.3rem !important;
        }
      }
    }

    h5 {
      font-size: 0.8rem !important;
    }
  }
}

@media screen and (max-width: 280px) {
  .Interaction {
    background-color: rgba(0, 0, 0, 0.911);
    // background-image: linear-gradient(to right top, #39a95e, #00af89, #00b2af, #00b2cc, #20b0de);
    position: absolute;
    width: 90% !important;
    height: 58% !important;
    top: 48% !important;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1800 !important;
    border-radius: 25px;
    padding: 1rem;
    color: rgb(255, 255, 255);
    overflow: auto !important;

    ul {
      text-align: left !important;
      justify-content: left !important;
      .nav-item {
        margin: 0 0 0.3rem 0 !important;
        button {
          color: white !important;
          font-size: 10px !important;
        }
        .active {
          background-image: linear-gradient(
            to right top,
            #39a95e,
            #00af89,
            #00b2af,
            #00b2cc,
            #20b0de
          ) !important;
          color: white !important;
          padding: 0.5rem 1.3rem !important;
        }
      }
    }

    h5 {
      font-size: 0.8rem !important;
    }
  }
}
</style>

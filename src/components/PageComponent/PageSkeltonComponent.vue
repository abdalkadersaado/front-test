<template>
  <div>
    <!-- <h2 class="text-center mb-3 text-primary">{{ $t("Pages Descover") }}</h2> -->
    <div class="row card-group px-5">
      <div class="col-lg-6 mb-4">
        <div class="card">
          <!-- <img src="" class="card-img-top skeleton_animation" /> -->
          <img
            src="//placebear.com/300/200"
            class="card-img-top"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
          <div class="card-body">
            <h5
              class="card-title skeleton_animation"
              style="height: 30px; width: 25%"
            ></h5>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span class="skeleton_animation" style="width: 50px; height: 30px"></span>
            <span class="skeleton_animation" style="width: 50px; height: 30px"></span>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <!-- <img src="" class="card-img-top skeleton_animation" /> -->
          <img
            src="//placebear.com/300/200"
            class="card-img-top"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
          <div class="card-body">
            <h5
              class="card-title skeleton_animation"
              style="height: 30px; width: 25%"
            ></h5>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span class="skeleton_animation" style="width: 50px; height: 30px"></span>
            <span class="skeleton_animation" style="width: 50px; height: 30px"></span>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mb-4">
        <div class="card">
          <!-- <img src="" class="card-img-top skeleton_animation" /> -->
          <img
            src="//placebear.com/300/200"
            class="card-img-top"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
          <div class="card-body">
            <h5
              class="card-title skeleton_animation"
              style="height: 30px; width: 25%"
            ></h5>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span class="skeleton_animation" style="width: 50px; height: 30px"></span>
            <span class="skeleton_animation" style="width: 50px; height: 30px"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageSkeltonComponent",
};
</script>
<style lang="scss" scoped>
.card-group {
  .card {
    .skeleton_animation {
      animation: skeleton-loading 2s linear infinite alternate;
    }

    @keyframes skeleton-loading {
      0% {
        background-color: rgba($color: #777, $alpha: 1);
      }
      25% {
        background-color: rgba($color: #777, $alpha: 0.8);
      }
      50% {
        background-color: rgba($color: #777, $alpha: 0.6);
      }
      75% {
        background-color: rgba($color: #777, $alpha: 0.8);
      }
      100% {
        background-color: rgba($color: #777, $alpha: 1);
      }
    }
    .card-img-top {
      height: 200px !important;
      object-fit: fill;
    }
  }
}
</style>

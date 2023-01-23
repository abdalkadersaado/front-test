<template>
  <div>
    <div class="page-box">
      <div class="row">
        <div class="col-3">
          <!-- <img class="page-img" src="@/assets/page/pagecover.png" alt="" /> -->
          <img
            src="@/assets/page/pagecover.png"
            class="page-img"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="row">
              <span class="skeleton_animation" style="width: 50px; height: 20px"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box">
      <div class="row">
        <div class="col-3">
          <!-- <img class="page-img" src="@/assets/page/pagecover.png" alt="" /> -->
          <img
            src="@/assets/page/pagecover.png"
            class="page-img"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="row">
              <span class="skeleton_animation" style="width: 50px; height: 20px"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box">
      <div class="row">
        <div class="col-3">
          <!-- <img class="page-img" src="@/assets/page/pagecover.png" alt="" /> -->
          <img
            src="@/assets/page/pagecover.png"
            class="page-img"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="row">
              <span class="skeleton_animation" style="width: 50px; height: 20px"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box">
      <div class="row">
        <div class="col-3">
          <!-- <img class="page-img" src="@/assets/page/pagecover.png" alt="" /> -->
          <img
            src="@/assets/page/pagecover.png"
            class="page-img"
            alt="..."
            style="filter: grayscale(100) contrast(0%) brightness(1.8)"
          />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="row">
              <span class="skeleton_animation" style="width: 50px; height: 20px"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-box {
  margin: 0.5rem 0;
  padding: 15px 5rem 20px 15px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 2px #ccc;

  .page-img {
    width: 50px;
    height: 50px;
    // width: 267%;
    // height: 137%;
    border-radius: 20%;
    margin-right: 5%;
  }
}
.name-page {
  color: black;
  font-size: 90%;
  margin: 0px 0px 0px 20px;
  font-weight: 500;
}

.skeleton_animation {
  animation: skeleton-loading 2s linear infinite alternate;
  margin: 8px 30px;
}
@media only screen and (max-width: 1200px) {
  .skeleton_animation {
    margin: 8px 35px 0px 43px;
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: rgba($color: rgb(196, 192, 192), $alpha: 1);
  }
  25% {
    background-color: rgba($color: rgb(196, 192, 192), $alpha: 0.8);
  }
  50% {
    background-color: rgba($color: rgb(196, 192, 192), $alpha: 0.6);
  }
  75% {
    background-color: rgba($color: rgb(196, 192, 192), $alpha: 0.8);
  }
  100% {
    background-color: rgba($color: rgb(196, 192, 192), $alpha: 1);
  }
}
.card-img-top {
  height: 200px !important;
  object-fit: fill;
}
</style>

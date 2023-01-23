<template lang="">
  <!--
//  Add and remove a "loading-skeleton" class on the container elements.
-->
  <div class="container loading-skeleton">
    <div class="row">
      <div class="col">
        <div class="card">
          <img src="//placebear.com/300/200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="//placebear.com/300/200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="//placebear.com/300/200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="//placebear.com/300/200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
// Codepen presentation
.container {
  margin-top: 4em;
  margin-bottom: 4em;
}

// Bootstrap Loading Skeleton
%loading-skeleton {
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-color: #eee;
  border-color: #eee;

  &::placeholder {
    color: transparent;
  }
}
@keyframes loading-skeleton {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;

  img {
    filter: grayscale(100) contrast(0%) brightness(1.8);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  .btn,
  label,
  .form-control {
    @extend %loading-skeleton;
  }
}
</style>

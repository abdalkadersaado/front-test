<template>
    <div>
        <div  class="page-media">
            <div  >
                <img class="page-cover skeleton_animation"  src="" alt="">
                
                <img class="page-profile skeleton_animation"  src="" alt="">
                
                <div class="info" >
                    <h1 class="title skeleton_animation mt-3" style="height: 50px; width: 200px;"></h1>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SkeltonPageProfileComponent",
}
</script>
<style lang="scss" scoped>

.page-media {
            width: 100%;
            position: relative;
            

            .page-cover {
                width: 100%;
                object-fit: cover;
                height: 300px !important;
                border-radius: 10px !important;
            }

            .page-profile {
                position: absolute;
                top: 250px;
                right: 50px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                object-fit: cover;
                z-index: 999;
            }

            .title {
                font-style: italic;
            }
        }
.skeleton_animation {
  animation: skeleton-loading 2s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: rgba($color: #777, $alpha: 1.0);
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
    background-color: rgba($color: #777, $alpha: 1.0);
  }
}
</style>
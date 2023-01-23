<template>
    <div>
        <img class="img" src="@/assets/soon.jpg" alt="">
    </div>
</template>
<script>
export default {
    name: "SoonView",
}
</script>
<style scoped>
    div {
        height: calc(100vh - 71px) !important;
    }
    .img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    @media screen and (max-width:992px) {
        div {
            background-color: #000000;
        }
        .img {
            object-fit: contain;

        }
    }
</style>
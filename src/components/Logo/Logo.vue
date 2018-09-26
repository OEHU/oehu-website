<template>
    <div class="Logo">
        <div class="Logo-owl-head" />
        <img src="./Logo.png" />
        <h1 class="tagline">
            Sharing energy data for the better
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style scoped lang="scss">
.Logo{
    text-align: center;
}
.Logo-owl-head {
    width: 100%;
    height: 60px;
    background: url('./Owl-header.png') top center no-repeat;
    background-size: contain;
}
@media(min-width: 480px) {
    .Logo-owl-head {
        height: 120px;
    }
}

img {
    max-width: 70%;
    padding: 30px 60px 15px 60px;
    display: inline-block;
}
@media(min-width: 480px) {
    img {
        padding: 60px 60px 30px 60px;
    }
}
.tagline {
    margin: 0;
    text-align: center;
    color: #000;
}
</style>

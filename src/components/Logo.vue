<template>
    <div class="logo">
        <HeadCutout/>
        <img src="../assets/images/logo/Logo.png" />
        <h2 class="tagline is-size-1">
            Sharing energy data for the better
        </h2>
    </div>
</template>

<script>
    import HeadCutout from '@/components/header/HeadCutout.vue';

    export default {
        components: {HeadCutout},
        name: 'Logo'
    }
</script>

<style scoped lang="scss">
.logo {
    text-align: center;

    .tagline {
        margin: 0;
        text-align: center;
        color: #000;
    }

    img {
        width: 480px;
        max-width: 70%;
        padding: 30px 60px 15px 60px;
        display: inline-block;
    }
    @media(min-width: 480px) {
        img {
            padding: 60px 60px 30px 60px;
        }
    }
}
</style>

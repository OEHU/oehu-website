<template>
    <div class="logo">
        <HeadCutout/>
        <div>
            <img src="../assets/images/logo/Logo.png"/>
        </div>

        <h2 class="tagline">
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
    @import '../assets/sass/mix.scss';

    .logo {
        text-align: center;

        .tagline {
            position: relative;
            z-index: 1;

            margin: 0 auto;

            line-height: 35px;
            font-size: 24px;
            font-weight: 400;
            color: #000;

            width: 280px;
            max-width: 100%;

            @media (min-width: 374px) {
                font-size: 28px;
                line-height: 44px;
            }

            @media (min-width: 480px) {
                font-size: 3rem;
                line-height: 4rem;

                width: 1100px;
                max-width: 80%;
            }
        }

        img {
            width: 275px;
            max-width: 80%;
            margin: 40px auto;
            display: block;

            @include minimum-desktop() {
                width: auto;
                max-width: 480px;
            }
            @include tablet() {
                width: auto;
                max-width: 40%;
            }
        }
    }
</style>

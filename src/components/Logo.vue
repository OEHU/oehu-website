<template>
    <div class="logo">
        <HeadCutout/>
        <div>
            <img src="../assets/images/logo/Logo.png"/>
        </div>

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
    @import '../assets/sass/mix.scss';

    .logo {
        text-align: center;

        .tagline {
            margin: 0;
            text-align: center;
            color: #000;
        }

        img {
            max-width: 70%;
            margin: 40px auto;
            display: block;

            @include minimum-desktop() {
                max-width: 480px;
            }
            @include tablet() {
                max-width: 40%;
            }
        }
    }
</style>

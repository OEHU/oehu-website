<template>
    <div class="app" id="app">

        <Logo />

        <router-view/>

    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'

    export default {
        components: {Logo},
        head() {
            return {
                title: 'OEHU'
            }
        }
    }
</script>

<style lang="scss">

* {
    box-sizing: border-box;
}



</style>

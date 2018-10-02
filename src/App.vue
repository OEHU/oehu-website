<template>
    <div class="App" id="app">

        <Logo />

        <router-view/>

    </div>
</template>

<script>
    import Hero from '@/components/Hero.vue'
    import Logo from '@/components/Logo.vue'

    export default {
        components: {Logo, Hero},
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

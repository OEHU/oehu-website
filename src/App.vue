<template>
    <div id="app">
        <Hero title="OEHU" subtitle="Power to the people" />

        <router-view/>

        <Social />
    </div>
</template>

<script>
    import Hero from '@/components/Hero.vue'
    import Social from '@/components/Social.vue'

    export default {
        components: {Hero, Social},
        head() {
            return {
                title: 'OEHU'
            }
        }
    }


</script>

<style lang="scss">

</style>

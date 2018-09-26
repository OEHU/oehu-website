<template>
    <div class="App" id="app">

        <Logo />

        <router-view/>

    </div>
</template>

<script>
    import Hero from '@/components/Hero.vue'
    import Logo from '@/components/Logo/Logo.vue'

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

.App {
    background: #0086ff;
    color: #fff;
}

h1 {
    font-size: 22px;
    font-family: serif;
}
h1.tagline {
    font-size: 22px;
    font-family: serif;
}
@min-width(480px) {
    h1 {
        font-size: 40px;
        font-family: serif;
    }
    h1.tagline {
        font-size: 40px;
        font-family: serif;
    }
}

.flex {
    display: flex;
    justify-content: space-between;
}
.flex.center { justify-content: center; }
.flex.space-around { justify-content: space-around; }

.title {

}

</style>

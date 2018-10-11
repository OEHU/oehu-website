<template>
    <div class="app" v-bind:class="{ hasScrolled: this.scrolled }" id="app">
        <router-view/>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
    data () {
      return {
        scrolled: false
      };
    },
    methods: {
        handleScroll () {
            let xyz = document.getElementById('app').getBoundingClientRect()
            this.scrolled = Math.abs(xyz.top) > 400;
        },
    },
    components: {Logo},
    head() {
        return {
            title: 'OEHU'
        }
    },
    created () {
      document.body.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      document.body.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
}

</style>

<template>
    <section class="hero is-primary is-medium">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">
                    {{title}}
                </h1>
                <h2 class="subtitle is-3">
                    {{subtitle}}
                </h2>
            </div>
        </div>
        <div class="hero-foot">
            <nav class="tabs">
                <div class="container">
                    <ul>
                        <router-link tag="li" to="/"><a>Home</a></router-link>
                        <router-link tag="li" to="/about"><a>About</a></router-link>
                        <router-link tag="li" to="/explorer"><a>Explorer</a></router-link>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Hero',
        props: ['title', 'subtitle'],

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

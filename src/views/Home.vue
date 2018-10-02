<template>
    <div class="Home">

        <WhatIs />

        <Social />

    </div>
</template>

<script>
    import WhatIs from '@/components/WhatIs/WhatIs.vue';
    import Social from '@/components/Social.vue';

    export default {
        name: 'home',
        components: {WhatIs, Social},
    }
</script>

<style scoped lang="scss">
</style>

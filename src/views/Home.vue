<template>
    <div class="home">

        <WhatIs />

        <Social />

    </div>
</template>

<script>
    import WhatIs from '@/components/home/WhatIs.vue';
    import Social from '@/components/common/Social.vue';

    export default {
        name: 'home',
        components: {WhatIs, Social},
    }
</script>

<style scoped lang="scss">
</style>

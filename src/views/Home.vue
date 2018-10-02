<template>
    <div class="home">

        <WhatIs />

        <Social />

        <HowItWorks />

    </div>
</template>

<script>
    import WhatIs from '@/components/home/WhatIs.vue';
    import Social from '@/components/common/Social.vue';
    import HowItWorks from '@/components/home/HowItWorks.vue';

    export default {
        name: 'home',
        components: {WhatIs, Social, HowItWorks},
    }
</script>

<style scoped lang="scss">
</style>

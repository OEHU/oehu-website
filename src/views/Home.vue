<template>
    <div class="home">
        <WhatIs />
        <Social />
        <HowItWorks />
        <DevicesConnected />
    </div>
</template>

<script>
    import WhatIs from '@/components/home/WhatIs.vue';
    import Social from '@/components/common/Social.vue';
    import HowItWorks from '@/components/home/HowItWorks.vue';
    import DevicesConnected from "@/components/home/DevicesConnected";

    export default {
        name: 'home',
        components: {DevicesConnected, WhatIs, Social, HowItWorks},
    }
</script>

<style scoped lang="scss">
</style>

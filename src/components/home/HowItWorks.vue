<template>
    <div class="how-it-works">
        <div class="container">
            <div class="how-it-works-columns columns is-gapless">
                <div class="column">
                </div>
                <div class="column content">
                    <h1 class="title">
                        How it works
                    </h1>
                    <p>
                        The Rotterdam Open Energy Hub/OEHU is a public, open-source, distributed database for smart dit
                        is een Hyperlinks style. Users can contribute their data and in return gain access to a personal
                        energy usage dashboard, detailed datasets from all contributors, and cloud-based data analysis
                        tools.
                    </p>
                    <Button title="Get Started!" />
                    <Button title="How Can I Contribute?" />
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>

</template>

<script>
    import Button from '@/components/common/Button.vue'
    import FlowBackground from '@/components/home/FlowBackgroundLeft.vue'

    export default {
        name: 'WhatIs',
        components: {Button, FlowBackground},
    }
</script>

<style scoped lang="scss">
    .how-it-works {
        overflow: hidden;
        position: relative;

        .columns {
            padding: 60px 0;
        }
    }
</style>
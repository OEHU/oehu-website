<template>
    <div class="what-is">
        <div class="container">
            <div class="what-is-columns columns is-gapless">
                <div class="column content">
                    <h1 class="title">
                        What is OEHU?
                    </h1>
                    <p>
                        Rotterdam The Hague Open Energy Hub/OEHU is a public, open-source, distributed database for
                        smart
                        meter
                        data. Users can contribute their data and in return gain access to a personal energy usage
                        dashboard,
                        detailed datasets from all contributors and cloud-based data analysis tools.
                    </p>
                    <Button title="Learn more">
                    </Button>
                </div>
                <div class="column">
                    <PhoneMockup/>
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>

</template>

<script>
    import Button from '@/components/common/Button.vue'
    import PhoneMockup from '@/components/home/PhoneMockup.vue'
    import FlowBackground from '@/components/home/FlowBackground.vue'

    export default {
        name: 'WhatIs',
        components: {Button, PhoneMockup, FlowBackground},
        head() {
            return {
                title: 'What is OEHU?'
            }
        }
    }
</script>

<style scoped lang="scss">

    .what-is {
        overflow: hidden;
        position: relative;

        .columns {
            padding-left: 10%;

            margin-bottom: 0 !important;

            .content {
                padding-top: 10% !important;
            }
        }
    }

</style>
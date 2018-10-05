<template>
    <div class="what-is">
        <div class="container">
            <div class="what-is-columns columns is-gapless">
                <div class="column content is-three-fifths is-four-fifths-tablet">
                    <h1 class="title">
                        What is OEHU?
                    </h1>
                    <p>
                        The Rotterdam Open Energy Hub/OEHU is a public, open-source, distributed database for smart
                        meter data.
                        Users can contribute their data dit is een Hyperlinks style to a personal energy usage
                        dashboard, detailed datasets from all contributors,
                        and cloud-based data analysis tools.
                    </p>
                    <Button class="readmore" title="read more"/>
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
    import Button from "@/components/common/Button.vue";
    import PhoneMockup from "@/components/home/PhoneMockup.vue";
    import FlowBackground from "@/components/home/FlowBackgroundRight.vue";

    export default {
        name: "WhatIs",
        components: {Button, PhoneMockup, FlowBackground}
    };
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .what-is {
        position: relative;

        .columns {
            margin-bottom: 0 !important;
            .content {
                padding-top: 10% !important;
                padding-left: 10% !important;

            }
        }

        .title {
            color: #ffffff;
            letter-spacing: -0.15px;
            margin-bottom: 30px;
        }

        .readmore {
            margin: 50px 0;
        }
    }


</style>
<template>
    <div class="what-is">
        <div class="what-is-columns columns is-gapless">
            <div class="column content is-three-fifths is-four-fifths-tablet">
                <Title title="What is OEHU?" color="white" />
                <p>
                    The Rotterdam Open Energy Hub/OEHU is a public, open-source, distributed database for smart
                    meter data.
                    Users can contribute their data dit is een Hyperlinks style to a personal energy usage
                    dashboard, detailed datasets from all contributors,
                    and cloud-based data analysis tools.
                </p>
                <Button class="readmore" title="Read more"/>
            </div>
            <div class="column">
                <PhoneMockup class="PhoneMockup" />
            </div>
        </div>
        <FlowBackground class="FlowBackground" />
    </div>

</template>

<script>
    import Button from "@/components/common/Button.vue";
    import Title from "@/components/common/Title.vue";
    import PhoneMockup from "@/components/home/PhoneMockup.vue";
    import FlowBackground from "@/components/home/FlowBackgroundRight.vue";

    export default {
        name: "WhatIs",
        components: {Button, Title, PhoneMockup, FlowBackground}
    };
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .what-is {

        position: relative;
        padding: 0 10%;

        .columns {
            margin-top: 30px;

            @media (min-width: 480px) {
                .content {
                    margin-top: 125px;
                    padding-right: 10%;
                    padding-left: 10%;
                }
            }
        }

        .what-is-columns {
            margin-top: 0;
            margin-bottom: 0;
            padding-top: 30px;
            padding-bottom: 30px;

            @media (min-width: 480px) {
                padding-top: 58px;
                padding-bottom: 58px;
            }
        }

        .readmore {
            margin: 12px 0;
            @media (min-width: 480px) {
                margin: 24px 0;
            }
        }

        p {
            font-size: 18px;
            @media (min-width: 480px) {
                font-size: 1.6rem;
            }
        }

    }

</style>
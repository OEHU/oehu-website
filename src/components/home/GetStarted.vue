<template>
    <div class="base">
        <div class="get-started">
            <div class="container">
                <div class="get-started-columns columns">
                    <div class="column content">
                        <Title
                            title="Get started & sign up for a dashboard"
                            color="#fff"
                            />
                        <p>
                            Rotterdam The Hague Open Energy Hub/OEHU is a public, open-source, distributed database for smart meter data. Users can contribute their data and in return gain access to a personal energy usage dashboard, detailed datasets from all contributors and cloud-based data analysis tools.
                        </p>
                        <div class="buttons">
                            <div v-on:click="getStarted()">
                                <Button class="oehu-btn-primary" title="Get Started!" />
                            </div>
                            <div v-on:click="goFaq()">
                                <Button class="faq" title="FAQ"/>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <img class="smart_oehu_image" src="../../assets/images/smart_oehu.svg"/>
                    </div>
                </div>
            </div>
        </div>
        <FlowBackground />
    </div>
</template>

<script>
    import Button from "@/components/common/Button.vue";
    import Title from "@/components/common/Title.vue";
    import PhoneMockup from "@/components/home/PhoneMockup.vue";
    import FlowBackground from "@/components/home/FlowBackgroundRight.vue";

    export default {
        name: "WhatIs",
        components: {Button, Title, PhoneMockup, FlowBackground},
        methods: {
            getStarted: function() {
                document.location = '/get-started';
            },
            goFaq: function() {
                document.location = '/faq';
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .base {
        position: relative;
        padding-top: 10% !important;
        padding-bottom: 10% !important;
    }

    .get-started {
        position: relative;

        width: 1500px;
        max-width: 80%;
        margin: 0 auto;

        @include mobile() {
            max-width: 90%;
        }

        .columns {
            .column:first-child {
                flex: 2;
            }
            .column:last-child {
                flex: 1;
                text-align: center;
                display: flex;
                justify-content: center;
                flex-direction: column;
            }
        }

        .buttons {
            margin-bottom: 40px;
        }
    }

    p {
        font-size: 28px;
        line-height: 48px;

        @include mobile() {
            font-size: 18px;
            line-height: 27px;
            font-weight: 400;
        }
    }

    .smart_oehu_image {
        position: relative;
        z-index: 2;
        max-width: 300px;

        @include mobile() {
            display: none;
        }
    }

</style>
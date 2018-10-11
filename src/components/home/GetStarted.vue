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
                            Be wise & own your own data! You'll get full access to your data & charts in return.
                        </p>
                        <p>
                            You will need a Raspberry Pi, that you connect to your smart meter. At the first time you configure some basic things. After that the Pi will autonomously upload your energy data to a decentralized database. You stay owner of your data, and you'll have instantly access to a live & personal dashboard. That's it!
                        </p>

                        <p>
                            If you're curious and want to start, click <i>Get Started</i> below. The guide will show you where to buy the Pi, and how to configure it. From then you'll have full control and get nice insights.
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
        font-size: 18px;
        line-height: 27px;

        @media (min-width: 480px) {
            font-size: 28px;
            line-height: 48px;
        }
    }

    .smart_oehu_image {
        position: relative;
        z-index: 2;
        max-width: 300px;
        display: block;
        margin: 0 auto;

        @include mobile() {
            display: none;
        }
    }

</style>
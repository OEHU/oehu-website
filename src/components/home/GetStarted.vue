<template>
    <div class="get-started">
        <div class="container">
            <div class="get-started-columns columns is-gapless">
                <div class="column content is-three-fifths">
                    <h1 class="title">
                        Get Started & sign up for a dashboard
                    </h1>
                    <p>
                        Rotterdam The Hague Open Energy Hub/OEHU is a public, open-source, distributed database for
                        smart
                        meter
                        data. Users can contribute their data and in return gain access to a personal energy usage
                        dashboard,
                        detailed datasets from all contributors and cloud-based data analysis tools.
                    </p>
                    <div class="buttons">
                        <Button class="oehu-btn-primary" title="Get Started!"/>
                        <Button class="faq" title="FAQ"/>
                    </div>
                </div>
                <div class="column">
                    <img class="smart_oehu_image" src="../../assets/images/smart_oehu.png"/>
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

    .get-started {
        overflow: hidden;
        position: relative;
        .columns {
            .content {
                padding-top: 10% !important;
                padding-bottom: 10% !important;
            }
        }

        .title {
            color: #ffffff;
            /*line-height: 80px;*/
        }

        .buttons {
            margin-bottom: 40px;
        }
    }

    .smart_oehu_image {
        position: relative;
        z-index: 2;
        width: 80%;
        top: 30%    ;
        left: 30%;

        @include tablet() {
            left: 15%;
        }
        @include mobile() {
            display: none;
        }
    }

</style>
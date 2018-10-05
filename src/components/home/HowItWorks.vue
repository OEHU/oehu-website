<template>
    <div class="how-it-works">
        <div class="container">
            <div class="how-it-works-columns columns">
                <div class="column">
                    <img class="oehu_home_image" src="../../assets/images/oehu_home.png"/> <!-- //TODO: SVG -->
                </div>

                <div class="column content is-four-fifths-tablet is-three-fifths-desktop">
                    <h1 class="title">
                        How it works
                    </h1>
                    <p>
                        The Rotterdam Open Energy Hub/OEHU is a public, open-source, distributed database for smart
                        meters. Users can contribute their data and in return gain access to a personal
                        energy usage dashboard, detailed datasets from all contributors, and cloud-based data analysis
                        tools.
                    </p>
                    <Button class="oehu-btn-primary" title="Get Started!"/>
                    <Button class="contribute" title="How Can I Contribute?"/>
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>

</template>

<script>
    import Button from "@/components/common/Button.vue";
    import FlowBackground from "@/components/home/FlowBackgroundLeft.vue";

    export default {
        name: "HowItWorks",
        components: {Button, FlowBackground}
    };
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .how-it-works {
        position: relative;
        background: $primary;

        &-columns {
            padding: 100px 0;
        }

        .oehu_home_image {
            position: relative;
            z-index: 2;
        }

        .content {
            .title {
                color: #ffffff;
            }
        }
    }
</style>
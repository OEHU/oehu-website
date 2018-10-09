<template>
    <div class="how-it-works">
        <div class="">
            <div class="how-it-works-columns columns">
                <div class="column">
                    <img class="oehu_home_image" src="../../assets/images/oehu_home.png"/> <!-- //TODO: SVG -->
                </div>

                <div class="column content is-four-fifths-tablet is-three-fifths-desktop">
                <div class="column content is-four-fifths-tablet is-Title-fifths-desktop">

                    <Title title="How it works" color="white" class="title"/>

                    <p>
                        The Rotterdam Open Energy Hub/OEHU is a public, open-source, distributed database for smart
                        meters. Users can contribute their data and in return gain access to a personal
                        energy usage dashboard, detailed datasets from all contributors, and cloud-based data analysis
                        tools.
                    </p>

                    <div class="btn-wrapper">
                        <div v-on:click="getStarted()">
                            <Button class="oehu-btn oehu-btn-primary" title="Get Started!"/>
                        </div>
                        <!-- <Button class="oehu-btn contribute" title="How can I contribute?"/> -->
                    </div>
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>
  </div>

</template>

<script>
    import Button from "@/components/common/Button.vue";
    import Title from "@/components/common/Title.vue";
    import FlowBackground from "@/components/home/FlowBackgroundLeft.vue";

    export default {
        name: "HowItWorks",
        components: {Button, Title, FlowBackground},
        methods: {
            getStarted: function() {
                document.location = '/get-started';
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .how-it-works {
        position: relative;
        background: $primary;

        &-columns {
            padding: 100px 0 50px 0;

            @include mobile() {
                padding: 30px 0;
            }
        }

        .oehu_home_image {
            position: relative;
            z-index: 2;
        }

        .content {
            .title {
                margin: 0 auto 50px auto;
                max-width: 80vw;
                font-weight: 400;

                @include mobile() {
                    margin: 0 auto 24px auto;
                }
            }
            p {
                margin: 0 auto 40px auto;
                max-width: 80vw;
                font-weight: 400;
                font-size: 32px;

                @include mobile() {
                    font-size: 18px;
                }
            }
        }

        .btn-wrapper {
            max-width: 80vw;
            margin: 0 auto;

            @include minimum-desktop() {
                display: flex;
            }
        }

        .oehu-btn {
            @include mobile() {
                display: block;
                width: 100%;
                max-width: 80vw;
                margin: 15px auto;
                margin-bottom: 15px;
            }
        }
        .oehu-btn-primary {
        }
    }
</style>
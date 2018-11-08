<template>
    <div style="position: relative;">

        <img src="../../assets/images/oehu-home-connected-square.svg" class="only-on-mobile" />

        <div class="how-it-works">
            <div class="how-it-works-columns columns">

                <div class="column">
                    <div class="not-on-mobile">
                        <img class="oehu_home_image" src="../../assets/images/oehu_home.svg"/>
                    </div>
                </div>

                <div class="column content">

                    <Title title="How it works" color="white" class="title"/>

                    <p>
                        If you have a smart meter, this meter is continuously sharing energy data. The default information it shares is the amount of kWh of electricity & m3 of gas that is used, with a precision of 20 seconds.
                    </p>

                    <p>
                        Right now the data is shared with your net deliverer. With OEHU it's possible to own your own data.
                    <p>

                    <p>
                        It's fairly easy: You connect a Raspberry Pi to your smart meter using an USB cable. After configuration it sends the data to a shared database in which you stay owner of yóur data. You'll instantly have access to your real time, personalized dashboard.
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
        <FlowBackground class="not-on-mobile" />
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
    width: 1500px;
    max-width: 80%;

    @include mobile() {
        max-width: 90%;
    }

    margin: 0 auto;

    position: relative;
    background: $primary;

    &-columns {
        margin-top: 0;
        margin-bottom: 0;
        padding: 100px 0 50px 0;

        @include mobile() {
            padding: 30px 0;
        }

        .column:first-child {
            flex: 1;
            text-align: center;

            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        .column:last-child {
            flex: 2;
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
            font-size: 18px;
            @media (min-width: 480px) {
                font-size: 28px;
                line-height: 48px;
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

}

.only-on-mobile {
    width: 100%;
}

</style>
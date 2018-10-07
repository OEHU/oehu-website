<template>
    <div class="devices-connected">
        <div class="container">
            <div class="devices-connected-columns ">
                <Title
                    title="These OEHU's already connected"
                    color="black"
                    />
                <div class="meters-wrapper">
                    <Meter class="meter" value="00042" textAbove="" description="Meters connected"/>
                    <Meter class="meter" value="00026" textAbove="Past 24Hr" description="Average KwH usage per household"/>
                    <Meter class="meter" value="00004" textAbove="Past 24Hr" description="Average generated per household"/>
                    <Meter class="meter" value="00038" textAbove="Past 24Hr" description="Average generated per household"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Meter from '@/components/common/Meter.vue'
    import Title from '@/components/common/Title.vue'

    export default {
        name: 'DevicesConnected',
        components: {Meter, Title},
    }
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .meters-wrapper {
        width: 80vw;
        margin: 0 auto;

        @media (min-width: 480px) {
            width: auto;
            display: flex;
            justify-content: space-between;
        }

        .meter {
            border-bottom: solid #fff 2px;

            @media (min-width: 480px) {
                border-bottom: none;
            }
        }
        .meter:last-child {
            border-bottom: none;
        }
    }

    .devices-connected {
        margin-bottom: 150px;
        margin-top: 100px;
    }
</style>
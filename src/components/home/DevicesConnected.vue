<template>
    <div class="devices-connected">
        <div class="container">
            <div class="devices-connected-columns ">
                <h2 class="is-size-1">These OEHU's already connected</h2>
                <div class="meters-wrapper">
                    <Meter class="meter" value="00042" textAbove="" description="Meters connected"/>
                    <Meter class="meter" value="00026" textAbove="Past 24Hr" description="Average KwH usage per household"/>
                    <Meter class="meter" value="00004" textAbove="Past 24Hr" description="Average generated per household"/>
                    <Meter class="meter" value="00038" textAbove="Past 24Hr" description="Average generated per household"/>
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>

</template>

<script>
    import Meter from '@/components/common/Meter.vue'

    export default {
        name: 'DevicesConnected',
        components: {Meter},
    }
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    h2 {
        text-align: center;
        color: black;
        margin-bottom: 100px;
    }

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
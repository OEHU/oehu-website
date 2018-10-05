<template>
    <div class="devices-connected">
        <div class="container">
            <div class="devices-connected-columns ">
                <h2 class="is-size-1">These OEHU's already connected</h2>
                <div class="">
                    <div class="meter_item"><Meter value="00042" textAbove="" description="meters connected"/></div>
                    <div class="meter_item"><Meter value="00026" textAbove="Past 24Hr" description="average KwH usage per household"/></div>
                    <div class="meter_item"><Meter value="00004" textAbove="Past 24Hr" description="average generated per household"/></div>
                    <div class="meter_item"><Meter value="00038" textAbove="Past 24Hr" description="average generated per household"/></div>
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
    h2 {
        text-align: center;
        color: black;
        margin-bottom: 100px;
    }

    .devices-connected {
        margin-bottom: 150px;
        margin-top: 100px;

        .meter_item {
            margin-right: 50px;
        }
    }
</style>
<template>
    <div class="devices-connected">
        <div class="container">
            <div class="devices-connected-columns ">
                <h2 class="is-size-1">These OEHU's already connected</h2>

                <div class="columns">
                    <div class="column"><Meter value="00025" textAbove="" description="meters connected"/></div>
                    <div class="column"><Meter value="00028" textAbove="past 24Hr" description="average KwH usage per household"/></div>
                    <div class="column"><Meter value="00045" textAbove="past 24Hr" description="average generated per household"/></div>
                    <div class="column"><Meter value="00045" textAbove="past 24Hr" description="average generated per household"/></div>
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

</style>
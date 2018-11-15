<template>
    <div class="devices-connected">
        <div class="container">
            <div class="devices-connected-columns ">
                <div class="meters-wrapper">
                    <Meter class="meter" :value="metersConnectedCount" valuePrecision=0
                            textAbove="" description="Meters active"/>
                    <Meter class="meter" :value="averageKwHUsage" valuePrecision=2
                            textAbove="Past 24Hr" description="Average KwH usage per household"/>
                    <Meter class="meter" :value="averageKwHGenerated" valuePrecision=2
                            textAbove="Past 24Hr" description="Average KwH generated per household"/>
                    <Meter class="meter" :value="averageGasUsed" valuePrecision=2
                            textAbove="Past 24Hr" description="Gas used per household"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'
    import Meter from '@/components/common/Meter.vue'

    export default {
        name: 'DevicesConnected',
        components: {Meter},
        data () {
            return {
                metersConnectedCount: 0,
                averageKwHUsage: 0,
                averageKwHGenerated: 0,
                averageGasUsed: 0,
            }
        },
        methods: {
            async getStatistics() {
                try {
                    const response = await axios.get('https://api.oehu.org/statistics');
                    this.handleStatisticData(response.data);
                } catch (error) {
                    console.error(error);
                }
            },
            handleStatisticData(statistics) {
                console.log('statistics', statistics, statistics.devicesConnected);
                this.metersConnectedCount = statistics.devicesConnected;
                this.averageKwHUsage = statistics.averageUseEnergy;
                this.averageKwHGenerated = statistics.averageGeneratedEnergy;
                this.averageGasUsed = statistics.averageUseGas;
            }
        },
        mounted() {
            this.getStatistics();
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .devices-connected {
        margin-bottom: 60px;
        margin-top: 100px;

        @include mobile() {
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }

    .title {
        text-align: center;

        @include minimum-desktop() {
            margin-bottom: 80px;
        }
    }

    .meters-wrapper {
        width: 80vw;
        margin: 0 auto 0 auto;

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

</style>
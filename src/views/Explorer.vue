<template>
    <div class="container content">

        <Bar></Bar>

        <!--<div class="explorer-list">-->
            <!--<div class="flex row header-row">-->
                <!--<div>DEVICE ID</div>-->
                <!--<div>KWH RECEIVED</div>-->
                <!--<div>KWH DELIVERED</div>-->
            <!--</div>-->
            <!--<div v-for="data in output" :key="data.id" class="flex row">-->
                <!--<div>{{data.id}}</div>-->
                <!--<div>{{data.data.electricityReceived.total}}</div>-->
                <!--<div>{{data.data.electricityDelivered.total}}</div>-->
            <!--</div>-->
        <!--</div>-->

    </div>
</template>

<script>
    import axios from 'axios';
    import { Bar } from 'vue-chartjs'

    export default {
        components: {Bar},
        extends: Bar,
        data: () => ({
            htmlLegend: null,
            output: [],
            datacollection: {
                    labels: ['January', 'February'],
                    datasets: [
                        {
                            label: 'GitHub Commits',
                            backgroundColor: '#f87979',
                            data: [40, 20]
                        }
                    ]
                }
        }),
        mounted() {
            // axios.get('http://api.oehu.org/data')
            //     .then((response) => {
            //         console.log(response.data);
            //         this.output = response.data;
            //     });

            this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false});
            this.htmlLegend = this.generateLegend()
        }
    }
</script>

<style lang="scss">
    .explorer-list {
        .header-row {
            font-weight: bold;
        }

        .flex {
            display: flex;
            justify-content: center;
            > div {
                flex: 1
            }
        }
    }
</style>

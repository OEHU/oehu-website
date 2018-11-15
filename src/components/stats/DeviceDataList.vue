<template>
    <div class="device-data-list">
        <table>
          <tr>
            <th>Time</th>
            <th>Electricity received</th>
            <th>Electricity delivered</th>
            <th>Gas received</th>
          </tr>
          <tr>
            <th></th>
            <th>
                <table>
                    <tr>
                        <td><small>Total</small></td>
                        <td><small>Tarrif1</small></td>
                        <td><small>Tarrif2</small></td>
                    </tr>
                </table>
            </th>
            <th>
                <table>
                    <tr>
                        <td><small>Total</small></td>
                        <td><small>Tarrif1</small></td>
                        <td><small>Tarrif2</small></td>
                    </tr>
                </table>
            </th>
            <th></th>
          </tr>
          <tr v-for="tx in transactions">
            <td>{{ tx.metadata.metadata.lastUpdateFormatted }}</td>
            <td>
                <table>
                    <tr>
                        <td>{{ tx.metadata.metadata.electricityReceived.total ? tx.metadata.metadata.electricityReceived.total.toFixed(2) : 0 }}</td>
                        <td>{{ tx.metadata.metadata.electricityReceived.tarrif1 ? tx.metadata.metadata.electricityReceived.tarrif1.toFixed(2) : 0 }}</td>
                        <td>{{ tx.metadata.metadata.electricityReceived.tarrif2 ? tx.metadata.metadata.electricityReceived.tarrif2.toFixed(2) : 0 }}</td>
                    </tr>
                </table>
            </td>
            <td>
                <table>
                    <tr>
                        <td>{{ tx.metadata.metadata.electricityDelivered.total ? tx.metadata.metadata.electricityDelivered.total.toFixed(2) : 0 }}</td>
                        <td>{{ tx.metadata.metadata.electricityDelivered.tarrif1 ? tx.metadata.metadata.electricityDelivered.tarrif1.toFixed(2) : 0 }}</td>
                        <td>{{ tx.metadata.metadata.electricityDelivered.tarrif2 ? tx.metadata.metadata.electricityDelivered.tarrif2.toFixed(2) : 0 }}</td>
                    </tr>
                </table>
            </td>
            <td>{{ tx.metadata.metadata.gasReceived }}</td>
          </tr>
        </table>
    </div>
</template>

<script>
    import moment from 'moment';

    import Button from "@/components/common/Button.vue";
    import Meter from "@/components/common/Meter.vue";
    import Title from '@/components/common/Title.vue'

    let getApiUrl = (deviceId) => {
        let apiUrl = 'https://api.oehu.org/transactions?raw=true';
        return apiUrl + (deviceId ? '&deviceId=' + deviceId : '');
    }

    let onlyOneTransactionPerDevice = (transactions) => {
        let ret = [], idsDone = [];
        for (let i in transactions) {
            if( idsDone[transactions[i].asset.id] == undefined ) {
                ret.push(transactions[i]);
                idsDone[transactions[i].asset.id] = true;
            }
        }
        return ret;
    }

    export default {
        name: "device-data-list",
        props: ["deviceId"],
        data() {
            return {
                transactions: []
            }
        },
        components: {
            Button,
            Title
        },
        methods: {
            async getTransactions() {
                try {
                    var self = this;
                    // Get transactions
                    let transactions = await this.axios.get(getApiUrl(this.deviceId));
                    // Get formatted date
                    for (var i = 0; i <= transactions.data.length - 1; i++) {
                        transactions.data[i].metadata.metadata.lastUpdateFormatted =
                            moment(transactions.data[i].metadata.metadata.lastUpdate).format('YYYY-MM-DD HH:mm:ss');
                    }
                    self.transactions = transactions.data;
                    // If no deviceId is set: show only 1 tx per device
                    if( ! this.deviceId) {
                        self.transactions = onlyOneTransactionPerDevice(self.transactions);
                    }
                    // After 60 seconds: reload data
                    setTimeout(function() {
                        self.getTransactions();
                    }, 60000)
                } catch (error) {
                    console.error(error);
                }
            }
        },
        mounted() {
            // this.deviceId = self.$cookies.get("devices");

            // // Redirect to login if not logged in
            // if(this.deviceId == undefined)
            //   console.log('Not logged in');
            // else
              this.getTransactions();

        }
    }
</script>

<style scoped lang="scss">
    .device-data-list > table {
        width: 80vw;
        max-width: 100%;
        margin: 0 auto;
    }
    .device-data-list table table {
        width: 100%;
    }
    .device-data-list table table td {
        width: 33%;
    }
</style>

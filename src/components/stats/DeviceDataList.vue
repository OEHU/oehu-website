<template>
  <div class="device-data-list flex flex-wrap">
    <div class="device-data-list_item" :key="tx.id" v-for="tx in transactions">
      <div class="lastUpdateFormatted">{{ tx.metadata.metadata.lastUpdateFormatted }}</div>

      <div class="electricityReceived">
        <label>Electricity received</label>
        <small>Total</small>
        <span>{{ tx.metadata.metadata.electricityReceived.total ? tx.metadata.metadata.electricityReceived.total.toFixed(2) : 0 }}</span>
        <small>Tariff1</small>
        <span>{{ tx.metadata.metadata.electricityReceived.tariff1 ? tx.metadata.metadata.electricityReceived.tariff1.toFixed(2) : 0 }}</span>
        <small>Tariff2</small>
        <span>{{ tx.metadata.metadata.electricityReceived.tariff2 ? tx.metadata.metadata.electricityReceived.tariff2.toFixed(2) : 0 }}</span>
      </div>

      <div class="electricityDelivered">
        <label>Electricity delivered</label>
        <small>Total</small>
        <span>{{ tx.metadata.metadata.electricityDelivered.total ? tx.metadata.metadata.electricityDelivered.total.toFixed(2) : 0 }}</span>
        <small>Tariff1</small>
        <span>{{ tx.metadata.metadata.electricityDelivered.tariff1 ? tx.metadata.metadata.electricityDelivered.tariff1.toFixed(2) : 0 }}</span>
        <small>Tariff2</small>
        <span>{{ tx.metadata.metadata.electricityDelivered.tariff2 ? tx.metadata.metadata.electricityDelivered.tariff2.toFixed(2) : 0 }}</span>
      </div>

      <div>
        <label>Gas received</label>
        {{ tx.metadata.metadata.gasReceived }}
      </div>
    </div>
  </div>
</template>



<script>
import moment from "moment";
import Button from "@/components/common/Button.vue";
import Title from "@/components/common/Title.vue";

let getApiUrl = deviceId => {
  let apiUrl = "https://api.oehu.org/transactions?raw=true";
  return apiUrl + (deviceId ? "&deviceId=" + deviceId : "");
};

let onlyOneTransactionPerDevice = transactions => {
  let ret = [],
    idsDone = [];
  for (let i in transactions) {
    if (idsDone[transactions[i].asset.id] == undefined) {
      ret.push(transactions[i]);
      idsDone[transactions[i].asset.id] = true;
    }
  }
  return ret;
};

export default {
  name: "device-data-list",
  props: ["deviceId"],
  data() {
    return {
      transactions: []
    };
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
          transactions.data[i].metadata.metadata.lastUpdateFormatted = moment(
            transactions.data[i].metadata.metadata.lastUpdate
          ).format("YYYY-MM-DD HH:mm:ss");
        }
        self.transactions = transactions.data;
        // If no deviceId is set: show only 1 tx per device
        if (!this.deviceId) {
          self.transactions = onlyOneTransactionPerDevice(self.transactions);
        }
        // After 60 seconds: reload data
        setTimeout(function() {
          self.getTransactions();
        }, 60000);
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.getTransactions();
  }
};
</script>

<style scoped lang="scss">
.device-data-list {
  width: 81%;
  margin: 0 auto;
}
.device-data-list_item {
  max-width: 100vw;
  overflow: auto;
  margin-bottom: 30px;
  transition: color 0.1s 0.8s;
  padding: 2px;
  text-align: center;
}
@media (min-width: 1200px) {
  .device-data-list_item {
    max-width: 26vw;
    padding: 15px;
  }
}
.device-data-list_item:hover,
.device-data-list_item:focus,
.device-data-list_item.is-active {
  background-color: #fff;
  color: #000;
  transition: color 0s, background 0s 0.8s;
}
label {
  font-weight: bold;
  color: #000;
  display: block;
  width: 100%;
  margin-top: 15px;
  border-radius: 15px;
}
small {
  margin: 0 10px;
}
.lastUpdateFormatted {
  font-size: 1.2em;
  margin: 15px 0;
  color: #000;
  background: #fff;
  padding: 1px 15px;
}
.lastUpdateFormatted label {
  margin-top: 0;
}

.flex > div {
  width: 100%;
}
</style>

<template>
  <div class="device-data-list flex flex-wrap">
    <div class="device-data-list_item table-header">
      <div class="lastUpdateFormatted">Date/time</div>
      <div class="electricityReceived">
        KwH received
        <div>
          <span>Total</span>
          <span>Tariff1</span>
          <span>Tariff2</span>
        </div>
      </div>
      <div class="electricityDelivered">
        KwH delivered
        <div>
          <span>Total</span>
          <span>Tariff1</span>
          <span>Tariff2</span>
        </div>
      </div>
      <div class="gasReceived">Gas received</div>
      <div class="deviceId">Device</div>
    </div>
    <div class="device-data-list_item" :key="tx.id" v-for="tx in transactions">
      <div class="lastUpdateFormatted">
        {{ tx.metadata.metadata.lastUpdateFormatted }}
      </div>

      <div class="electricityReceived">
        <span>{{ tx.metadata.metadata.electricityReceived.total ? tx.metadata.metadata.electricityReceived.total.toFixed(2) : 0 }}</span>
        <span>{{ tx.metadata.metadata.electricityReceived.tariff1 ? tx.metadata.metadata.electricityReceived.tariff1.toFixed(2) : 0 }}</span>
        <span>{{ tx.metadata.metadata.electricityReceived.tariff2 ? tx.metadata.metadata.electricityReceived.tariff2.toFixed(2) : 0 }}</span>
      </div>

      <div class="electricityDelivered">
        <span>{{ tx.metadata.metadata.electricityDelivered.total ? tx.metadata.metadata.electricityDelivered.total.toFixed(2) : 0 }}</span>
        <span>{{ tx.metadata.metadata.electricityDelivered.tariff1 ? tx.metadata.metadata.electricityDelivered.tariff1.toFixed(2) : 0 }}</span>
        <span>{{ tx.metadata.metadata.electricityDelivered.tariff2 ? tx.metadata.metadata.electricityDelivered.tariff2.toFixed(2) : 0 }}</span>
      </div>

      <div class="gasReceived">
        {{ tx.metadata.metadata.gasReceived }}
      </div>

      <div class="deviceId" :title="tx.deviceId">
        {{ tx.deviceId }}
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
      transactions: [],
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

        let electricity = []
        let gas = []
        let lastTwoTransactions = transactions.data.slice(1,3)
        for(var j = 0; j < lastTwoTransactions.length; j++){
            electricity.push(lastTwoTransactions[j].metadata.metadata.electricityReceived.total)
            gas.push(lastTwoTransactions[j].metadata.metadata.gasReceived)
        }

        let currentElectricity = electricity[0] - electricity[1]
        let currentGas = gas[0] - gas[1]

        this.$root.$emit('currentElectricity',currentElectricity);
        this.$root.$emit('currentGas', currentGas);

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
  margin: 0 auto;
  overflow-x: auto;
  max-width: 97%;
  width: 930px;
}
.device-data-list_item {
  display: flex;
  text-align: right;
  padding: 4px 0;
  margin: 0 auto;
}
.deviceId {
  min-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.lastUpdateFormatted {
  width: 180px;
}
.electricityReceived {
  width: 260px;
}
.electricityDelivered {
  width: 260px;
}
.gasReceived {
  width: 150px;
}
.electricityReceived span,
.electricityDelivered span {
  width: 80px;
  display: inline-block;
}

.table-header {
  font-weight: bold;
}
.table-header span {
  font-size: 0.8em;
}
</style>

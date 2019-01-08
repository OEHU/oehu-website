<template>
  <div>
    <bar-chart v-if="loadedKwh7Days" :chart-data="chartData, options"></bar-chart>
  </div>
</template>

<script>
import BarChart from "@/components/common/BarChart.vue";

let apiUrl = 'https://api.oehu.org/';

export default {
  name: "weekchart",
  data() {
    return {
      data: [],
      loadedKwh7Days: false,
      isCookieSet: false,
      deviceId: 0,
      devices: [],
      electricityReceived: 0,
      electricityDelivered: 0,
      gasReceived: 0,
      barChartData: null,
      chartData: null,
      chartDataKwh31Days: null,
      chartDataGas7Days: null,
      chartDataGas31Days: null,
      tab: "24hours",
      activeTab: null,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 18
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 16
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 14
              }
            }
          ]
        }
      }
    };
  },
  components: {
    BarChart
  },
  methods: {
    getDeviceData: async function() {
      try {
        let self = this;
        const response = await this.axios.get(
          apiUrl + "devices?deviceId=" + self.deviceId
        );
        this.handleDevicesData(response.data[0]);
        // After 10 seconds: reload data
        setTimeout(function() {
          self.getDeviceData();
        }, 10000);
      } catch (error) {
        // console.error(error);
      }
    },
    getDashboardStatistics: async function(days) {
      this.loadedKwh7Days = false;

      /**
       * KwH
       */
      try {
        const response = await this.axios.get(
          apiUrl + `statistics/dashboard?data=kwh&days=${days}&deviceId=${this.deviceId}`
        );

        // Fill chart
        this.chartData = {
          labels: response.data.xAxis,
          datasets: [
            {
              label: "KwH usage",
              backgroundColor: "#FFE200",
              data: response.data.yAxis
            }
          ]
        };
        this.loadedKwh7Days = true;
      } catch (error) {
        console.error(error);
      }
    },
    handleDevicesData(data) {
      this.devices.push({
        id: data.deviceId,
        position: {
          lat: data.metadata.metadata.location.coordinates[0],
          lng: data.metadata.metadata.location.coordinates[1]
        },
        electricityReceived: data.metadata.electricityReceived,
        electricityDelivered: data.metadata.electricityDelivered,
        gasReceived: data.metadata.gasReceived
      });
      this.electricityReceived =
        data.metadata.metadata.electricityReceived.total;
      this.electricityDelivered =
        data.metadata.metadata.electricityDelivered.total;
      this.gasReceived = data.metadata.metadata.gasReceived;
    },
  },
  beforeMount() {
    this.deviceId = self.$cookies.get("devices");
  },
  mounted() {
    // Redirect to login if not logged in
    if (this.deviceId == undefined) {
        document.location = "/login";
    } else {
        this.getDeviceData();
        this.getDashboardStatistics(7);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/mix.scss";
</style>

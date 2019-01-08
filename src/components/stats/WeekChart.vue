<template>
  <div class="WeekChart">
    <bar-chart :chart-data="chartData, options"></bar-chart>
  </div>
</template>

<script>
import BarChart from "@/components/common/BarChart.vue";

let apiUrl = 'https://api.oehu.org/';

export default {
  name: "weekchart",
  props: ['title', 'days', 'dataType'],
  data() {
    return {
      data: [],
      // loadedKwh7Days: false,
      isCookieSet: false,
      deviceId: 0,
      devices: [],
      electricityReceived: 0,
      electricityDelivered: 0,
      gasReceived: 0,
      barChartData: null,
      chartData: null,
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
    initChart: async function(days, dataType, title) {

      console.log(days, dataType, title)

      // Days must be integer
      days = parseInt(days);

      // Default to kwh if no dataType is given
      if(dataType != 'kwh' && dataType != 'gas')
        dataType = 'kwh'

      // Do API call
      const response = await this.axios.get(
        apiUrl + `statistics/dashboard?data=${dataType}&days=${days}&deviceId=${this.deviceId}`
      );

      // Fill chart
      this.chartData = {
        labels: response.data.xAxis,
        datasets: [
          {
            label: title,
            backgroundColor: "#FFE200",
            data: response.data.yAxis
          }
        ]
      };
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
  async mounted() {
    // Redirect to login if not logged in
    if (this.deviceId == undefined) {
        document.location = "/login";
    } else {
        await this.getDeviceData();
        this.initChart(this.days, this.dataType, this.title);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/mix.scss";

.WeekChart {
  margin: 0 auto;
}
</style>

<template>
  <div class="dashboard">
    <Logo/>
    <div class="container">
      <Title align="center" title="Your Own Dashboard" class="Title"/>
      <p align="center">This page is dedicated to you!</p>

      <div class="meters-wrapper">
        <Meter
          class="meter"
          :value="this.electricityReceived"
          valuePrecision="3"
          textAbove
          description="Electricity received"
        />
        <Meter
          class="meter"
          :value="this.electricityDelivered"
          valuePrecision="0"
          textAbove
          description="Electricity delivered"
        />
        <Meter
          class="meter"
          :value="this.gasReceived"
          valuePrecision="0"
          textAbove
          description="Gas received"
        />
      </div>

      <Map :markers="devices"></Map>

      <h1>Gas received</h1>

      <b-tabs type="is-boxed" v-model="activeTab" expanded>
        <b-tab-item label="Last 24 hours">
          <div class="small">
            <bar-chart v-if="loaded" :chart-data="barChartData, options"></bar-chart>
          </div>
        </b-tab-item>

        <b-tab-item label="Last 7 days">
          <div class="small">
            <line-chart v-if="loaded" :chart-data="lineChartData, options"></line-chart>
          </div>
        </b-tab-item>

        <b-tab-item label="Last Month">
          <div  class="small">
            <bar-chart v-if="loaded" :chart-data="barChartData, options"></bar-chart>
          </div>
        </b-tab-item>
      </b-tabs>
    </div>

    <DeviceDataList :deviceId="this.deviceId"/>

    <Footer/>
    <FooterClosing/>
  </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
import DeviceDataList from "@/components/stats/DeviceDataList.vue";
// import DayChart from '@/components/stats/DayChart.vue'
import Footer from "@/components/footer/Footer.vue";
import FooterClosing from "@/components/footer/FooterClosing.vue";
import Logo from "@/components/Logo.vue";
import Map from "@/components/common/Map.vue";
import Meter from "@/components/common/Meter.vue";
import Title from "@/components/common/Title.vue";
import BarChart from "@/components/common/BarChart.vue";
import LineChart from "@/components/common/LineChart.vue";

export default {
  name: "dashboard",
  data() {
    return {
      data: [],
      loaded: false,
      dashboardData: [],
      isCookieSet: false,
      deviceId: 0,
      devices: [],
      electricityReceived: 0,
      electricityDelivered: 0,
      gasReceived: 0,
      barChartData: null,
      lineChartData: null,
      tab: "24hours",
      activeTab: null,
      options: {
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
    Meter,
    Logo,
    Button,
    // DayChart,
    DeviceDataList,
    Map,
    Title,
    Footer,
    FooterClosing,
    BarChart,
    LineChart
  },
  methods: {
    start: async function() {
      try {
        const response = await this.axios.get(
          "http://oehu.local:8000/oehu/start"
        );
        console.log("Start response: ", response);
      } catch (error) {
        console.error(error);
      }
    },
    stop: async function() {
      try {
        const response = await this.axios.get(
          "http://oehu.local:8000/oehu/stop"
        );
        console.log("Stop response: ", response);
      } catch (error) {
        console.error(error);
      }
    },
    getDeviceData: async function() {
      try {
        let self = this;
        const response = await this.axios.get(
          "https://api.oehu.org/devices?deviceId=" + self.deviceId
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
    getDashboardStatistics: async function() {
      this.loaded = false;
      try {
        const response = await this.axios.get(
          "https://api.oehu.org/dashboard?deviceId=" + this.deviceId
        );

        //fill BarChart example
        this.barChartData = {
          labels: response.data.xAxis,
          datasets: [
            {
              label: "KwH usage",
              backgroundColor: "#FFE200",
              data: response.data.yAxis
            }
          ]
        };
        //fill LineChart example
        this.lineChartData = {
          labels: response.data.xAxis,
          datasets: [
            {
              label: "KwH usage",
              backgroundColor: "#FFE200",
              data: response.data.yAxis
            }
          ]
        };
        this.loaded = true;
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
    if (this.deviceId == undefined) document.location = "/login";
    else this.getDeviceData();
    this.getDashboardStatistics();
  }
};
</script>

<style scoped lang="scss">
@import "../assets/sass/mix.scss";

.dashboard {
  font-size: 18px;
  font-weight: 400;

  dl {
    margin-top: 45px;
  }

  dd {
    margin-left: 50px;
  }

  p {
    margin: 30px 0;
  }

  .meters-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .container {
    width: 50vw;
    max-width: 100vw;
    margin: 0 auto;
    padding-bottom: 70px;

    @include mobile() {
      width: 100%;
    }
  }
}

.small {
  width: 600px;
  height: 600px;
}

.Title {
  margin-top: 50px;
}

h2 {
  margin: 30px 0 15px 0;
  font-size: 38px;
  line-height: 64px;

  @include mobile() {
    font-size: 28px;
    line-height: 44px;
  }
}
</style>

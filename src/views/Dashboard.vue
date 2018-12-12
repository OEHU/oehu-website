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
            <bar-chart :chart-data="barChartData, options"></bar-chart>
          </div>
        </b-tab-item>

        <b-tab-item label="Last 7 days">
          <div class="small">
            <line-chart :chart-data="lineChartData, options"></line-chart>
          </div>
        </b-tab-item>

        <b-tab-item label="Last Month">
          <div class="small">
            <bar-chart :chart-data="barChartData, options"></bar-chart>
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
                fontSize: 16,                

              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 14,
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
    async getDeviceData() {
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

    fillData() {
      (this.barChartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#FFE200",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: "Data One",
            backgroundColor: "#000000",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }),
        (this.lineChartData = {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          datasets: [
            {
              label: "GitHub Commits",
              backgroundColor: "#FFE200",
              data: [40, 45, 50, 53, 56, 55, 52, 51, 48, 49, 50, 51]
            }
          ]
        });
    }
  },
  beforeMount() {
    this.deviceId = self.$cookies.get("devices");
  },
  mounted() {
    // Redirect to login if not logged in
    if (this.deviceId == undefined) document.location = "/login";
    else this.getDeviceData();

    this.fillData();
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
  max-width: 600px;
  max-height: 600px;
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

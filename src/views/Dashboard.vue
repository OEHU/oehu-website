<template>
  <div class="dashboard">
    <Logo/>
    <div class="container">
      <Title align="center" title="Your Own Dashboard" class="Title"/>

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

      <br />

      <h1>KwH usage</h1>

      <br />

      <b-tabs type="is-boxed" v-model="activeTab" expanded>
        <b-tab-item label="KwH last week">
          <WeekChart days=7 dataType="kwh" title="KwH last week" />
        </b-tab-item>
        <b-tab-item label="KwH last month">
          <WeekChart days=31 dataType="kwh" title="KwH last month" />
        </b-tab-item>
        <b-tab-item label="Gas last week">
          <WeekChart days=7 dataType="gas" title="Gas last month" />
        </b-tab-item>
        <b-tab-item label="Gas last month">
          <WeekChart days=31 dataType="gas" title="Gas last month" />
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
import WeekChart from '@/components/stats/WeekChart.vue'
import Footer from "@/components/footer/Footer.vue";
import FooterClosing from "@/components/footer/FooterClosing.vue";
import Logo from "@/components/Logo.vue";
import Map from "@/components/common/Map.vue";
import Meter from "@/components/common/Meter.vue";
import Title from "@/components/common/Title.vue";
import BarChart from "@/components/common/BarChart.vue";
import LineChart from "@/components/common/LineChart.vue";

let apiUrl = 'https://api.oehu.org/';

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
      activeTab: null
    };
  },
  components: {
    Meter,
    Logo,
    Button,
    WeekChart,
    DeviceDataList,
    Map,
    Title,
    Footer,
    FooterClosing
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
    }
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

<template>
    <div class="explorer">
        <Logo/>
        <div class="container">
            <Title align="center" title="OEHU Data Explorer" class="Title" />
            <p align="center">
                This page shows info from all OEHU connected devices.
            </p>
            <br />
            <Maps />
        </div>
        <DevicesConnected />
        <DeviceDataList />
        <br />
        <br />
        <br />
        <br />
        <Footer/>
        <FooterClosing/>
    </div>
</template>

<script>
    import Button from "@/components/common/Button.vue";
    import DeviceDataList from '@/components/stats/DeviceDataList.vue'
    import DayChart from '@/components/stats/DayChart.vue'
    import Footer from "@/components/footer/Footer.vue";
    import DevicesConnected from "@/components/home/DevicesConnected";
    import FooterClosing from "@/components/footer/FooterClosing.vue";
    import Logo from '@/components/Logo.vue'
    import Map from "@/components/common/Map.vue";
    import Maps from "@/components/home/Maps";
    import Meter from "@/components/common/Meter.vue";
    import Title from '@/components/common/Title.vue'

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
                gasReceived: 0
            }
        },
        components: {
            Meter,
            Logo,
            Button,
            DayChart,
            DeviceDataList,
            DevicesConnected,
            Map,
            Maps,
            Title,
            Footer,
            FooterClosing
        },
        methods: {
            start: async function () {
                try {
                    const response = await this.axios.get('http://oehu.local:8000/oehu/start');
                    console.log('Start response: ', response);
                } catch (error) {
                    console.error(error);
                }
            },
            stop: async function () {
                try {
                    const response = await this.axios.get('http://oehu.local:8000/oehu/stop');
                    console.log('Stop response: ', response);
                } catch (error) {
                    console.error(error);
                }
            },
            async getDeviceData() {
                try {
                    var self = this; 
                    const response = await this.axios.get('https://api.oehu.org/devices?deviceId=' + this.deviceId);
                    this.handleDevicesData(response.data[0]);
                    // After 10 seconds: reload data
                    setTimeout(function() {
                        self.getDeviceData();
                    }, 10000)
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
                })
                this.electricityReceived = data.metadata.metadata.electricityReceived.total
                this.electricityDelivered = data.metadata.metadata.electricityDelivered.total
                this.gasReceived = data.metadata.metadata.gasReceived
            }
        },
        mounted() {
            this.deviceId = self.$cookies.get("devices");

            // Redirect to login if not logged in
            if(this.deviceId == undefined)
              document.location = '/login';
            else
                this.getDeviceData();
    
            if (this.$cookies.get("devices")) {
                this.isCookieSet = true;
            }
        }
    }
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
        }

        .container {
            width: 50vw;
            max-width: 100vw;
            margin: 0 auto;
            padding-bottom: 100px;

            @include mobile() {
                width: 90%;
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

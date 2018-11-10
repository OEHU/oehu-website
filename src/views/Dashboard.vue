<template>
    <div class="dashboard">
            <Logo/>
            <div class="container">
                <Title align="center" title="Your Own Dashboard" class="Title" />
                <p align="center">
                    This page is dedicated to you!
                </p>
                <div class="meters-wrapper">
                    <Meter class="meter" :value="this.devices[0].electricityReceived.total" valuePrecision=0
                            textAbove="" description="Electricity received"/>
                    <Meter class="meter" :value="this.devices[0].electricityDelivered.total" valuePrecision=0
                            textAbove="" description="Electricity delivered"/>
                    <Meter class="meter" :value="this.devices[0].gasReceived" valuePrecision=0
                            textAbove="" description="Gas received"/>
                </div>
                <br />
                <p style="text-align: center;">
                    <Button title="Start" v-on:click.native="start()" />
                    <Button title="Stop" v-on:click.native="stop()" />
                </p>
                <Map :markers="devices"></Map>
                <dl>
                    <dt><b>Electricity received:</b></dt>
                    <dd>{{this.devices[0].electricityReceived}}</dd>

                    <dt><b>Electricity delivered:</b></dt>
                    <dd>{{this.devices[0].electricityDelivered}}</dd>

                    <dt><b>Gas received:</b></dt>
                    <dd>{{this.devices[0].gasReceived}}</dd>
                </dl>
            </div>
        <Footer/>
        <FooterClosing/>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'
    import Title from '@/components/common/Title.vue'
    import Meter from "@/components/common/Meter.vue";
    import Button from "@/components/common/Button.vue";
    import Footer from "@/components/footer/Footer.vue";
    import FooterClosing from "@/components/footer/FooterClosing.vue";
    import Map from "@/components/common/Map.vue";

    export default {
        name: "dashboard",
        data() {
            return {
                data: [],
                isCookieSet: false,
                deviceId: 0,
                devices: [
                ],
                electricityReceived: 0
            }
        },
        components: {
            Meter,
            Logo,
            Button,
            Map,
            Title,
            Footer,
            FooterClosing
        },
        methods: {
            async getDeviceData() {
                try {
                    var self = this; 
                    const response = await this.axios.get('https://api.oehu.org/devices?deviceId=' + this.deviceId);
                    this.handleDevicesData(response.data[0]);
                    console.log('device data: ', response.data[0]);
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
                        lat: data.metadata.location.coordinates[0],
                        lng: data.metadata.location.coordinates[1]
                    },
                    electricityReceived: data.metadata.electricityReceived,
                    electricityDelivered: data.metadata.electricityDelivered,
                    gasReceived: data.metadata.gasReceived
                })
            }
        },
        mounted() {
            this.deviceId = self.$cookies.get("devices");

            this.getDeviceData();
            if (this.$cookies.get("devices")) {
                this.isCookieSet = true;
            }
        },
        start() {
            try {
                const response = await this.axios.get('http://oehu.local:8000/oehu/start');
                console.log('Start response: ', response);
            } catch (error) {
                console.error(error);
            }
        },
        stop() {
            try {
                const response = await this.axios.get('http://oehu.local:8000/oehu/stop');
                console.log('Stop response: ', response);
            } catch (error) {
                console.error(error);
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

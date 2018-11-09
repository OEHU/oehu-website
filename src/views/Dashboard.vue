<template>
    <div class="dashboard">
            <Logo/>
            <div class="container">
                <Title title="Your Own Dashboard" class="Title"/>
                <p>
                    This page is dedicated to you!
                </p>
                <p>
                    <b>Electricity received:</b>
                    {{this.devices[0].electricityReceived}}
                </p>
                <p>
                    <b>Electricity delivered:</b>
                    {{this.devices[0].electricityDelivered}}
                </p>
                <p>
                    <b>Gas received:</b>
                    {{this.devices[0].gasReceived}}
                </p>
                <Map :markers="devices"></Map>
            </div>
        <Footer/>
        <FooterClosing/>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'
    import Title from '@/components/common/Title.vue'
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
                ]
            }
        },
        components: {
            Logo,
            Map,
            Title,
            Footer,
            FooterClosing
        },
        methods: {
            async getDeviceData() {
                try {
                    const response = await this.axios.get('https://api.oehu.org/devices?deviceId=' + this.deviceId);
                    this.handleDevicesData(response.data[0]);
                } catch (error) {
                    console.error(error);
                }
            },
            handleDevicesData(data) {
                console.log(data);
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
                console.log(this.devices[0].electricityReceived)
            }
        },
        mounted() {
            this.deviceId = self.$cookies.get("devices");

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

        p {
            margin: 30px 0;
        }

        .container {
            width: 60vw;
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

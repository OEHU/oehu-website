<template>
    <div class="dashboard">

        <Logo/>

        <div class="container">

            <Title title="Your Own Dashboard" class="Title" />

            <p>
                This page is dedicated to you!
            </p>


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

    export default {
        name: "dashboard",
        data() {
            return {

            }
        },
        components: {
            Logo,
            Title,
            Footer,
            FooterClosing
        },
        methods: {
            async getDeviceData() {
                try {
                    const response = await this.axios.get('https://api.oehu.org/data?deviceId=' + this.deviceId);
                    this.handleDevicesData(response.data);
                } catch (error) {
                    console.error(error);
                }
            },
            handleDevicesData() {
                // let's generate a map
                // let's generate some cool data!
            }
        },
        mounted() {
            this.getDeviceData();
        }
    };
</script>

<style scoped lang="scss">

    @import '../assets/sass/mix.scss';

    .dashboard {
        font-size: 18px;
        font-weight: 400;

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

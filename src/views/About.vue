<template>
    <div class="about">

        <Logo />

        <div class="container">

            <Title title="About" class="Title">
                About
            </Title>

            <p>
                The Virtual Energy Hub/<a href="/" title="To the main page"><b>OEHU</b></a> is a public, open-source, distributed database for <b>smart meter data</b>. Users can contribute their data and in return gain access to a <b>personal dashboard</b>, detailed datasets from all contributors, and cloud-based data analysis tools. 
            </p>

            <img class="image" src="../assets/images/icon/OEHU_DASHBOARD.svg" />


            <p>
                The primary goal of the Hub is to make <b>energy data</b> more accessible for the people who actually produce this data (i.e. everyone). Obviously, this goal is closely aligned with the movement for self-sovereign and <b>community-owned</b> data, a movement that has been growing in recent years thanks to Distributed Ledger Technologies such as Blockchains. 
            </p>

            <img class="image" src="../assets/images/icon/OEHU_DECENTRALISED.svg" />

            <p>
                Why is it important for users to have easy access to both their data and that of their peers? Because data is currently (overwhelmingly) collected and stored in large, privately owned data silos. These silos are informational bottlenecks; their contents is controlled, distributed, and potentially even changed by the people who own the silos, not the people who produce the data. We can <b>innovate</b> faster if the data in these silos is publically available, and able to be <b>immediately utilized</b> for whatever means. 
            </p>

            <img class="image" src="../assets/images/icon/OEHU_PERFECT.svg" />

            <p>
                OEHU is currently in the initial stages of development, We are focussing our efforts on <b>onboarding smart meters</b> (beginning to populate the database), as well as build our <b>community</b>. In the coming months we will be developing a data explorer and a set of tools for <b>data analysis</b>. 
            </p>

            <img class="image" src="../assets/images/icon/OEHU_SMART_METER.svg" />

            <p>
                Obviously we have plans beyond the next few months - we will publish our roadmap in the future, for a more detailed overview of our long term goals. For now: <a href="/get-started">Get started</a>!
            </p>

            <img class="image" src="../assets/images/icon/OEHU_HOME.svg" />

        </div>

        <GetStarted />

        <Footer/>
        <FooterClosing/>

    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import GetStarted from "@/components/home/GetStarted";
import Title from '@/components/common/Title.vue'
import Footer from "@/components/footer/Footer.vue";
import FooterClosing from "@/components/footer/FooterClosing.vue";

export default {
  name: "about",
  components: {
    Logo,
    Title,
    Footer,
    GetStarted,
    FooterClosing
  }
};
</script>

<style scoped lang="scss">

@import '../assets/sass/mix.scss';

.about {

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

        position: relative;
        z-index: 9999;
    }

    img {
        margin: 30px 0;
        display: block;
    }

    .image {
        margin: 30px auto;
        width: 500px;
        max-width: 100%;
    }
}

.Title {
    margin-top: 50px;
}

h2 {
    margin: 30px 0 15px 0;
    font-size: 28px;
    line-height: 44px;
}

ol {
    margin: 15px 45px;
}

p {
    margin: 15px 0;

    @include tablet() {
        font-size: 1.6em;
        line-height: 1.5;
    }
    @include minimum-desktop() {
        font-size: 1.6em;
        line-height: 1.5;
    }
}

</style>

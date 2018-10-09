<template>
    <div class="about">

        <Logo />

        <div class="container">

            <Title title="About" class="Title">
                About
            </Title>

            <p>
                The Virtual Energy Hub/<a href="/" title="To the main page"><b>OEHU</b></a> is a public, open-source, distributed <b>database for smart meter data</b>. Users can contribute their data and in return gain access to a <b>personal energy usage dashboard</b>, detailed datasets from all contributors, and cloud-based data analysis tools. 
            </p>

            <p>
                The primary goal of the Hub is to make energy data more accessible for the people who actually produce this data (i.e. everyone). Obviously, this goal is closely aligned with the movement for self-sovereign and community-owned data, a movement that has been growing in recent years thanks to Distributed Ledger Technologies such as Blockchains. 
            </p>

            <p>
                Why is it important for users to have easy access to both their data and that of their peers? Because data is currently (overwhelmingly) collected and stored in large, privately owned data silos. These silos are informational bottlenecks; their contents is controlled, distributed, and potentially even changed by the people who own the silos, not the people who produce the data. We can innovate faster if the data in these silos is publically available, and able to be immediately utilized for whatever means. 
            </p>

            <p>
                OEHU is currently in the initial stages of development, We are focussing our efforts on  onboarding smart meters (beginning to populate the database), as well as build our community. In the coming months we will be developing a data explorer and a set of tools for data analysis. 
            </p>

            <p>
                Obviously we have plans beyond the next few months - we will publish our roadmap in the future, for a more detailed overview of our long term goals! 
            </p>

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
        width: 800px;
        max-width: 100vw;
        margin: 0 auto;
        padding-bottom: 100px;

        position: relative;
        z-index: 9999;
    }

    img {
        margin: 30px 0;
        display: block;
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
    max-width: 800px;
}

p {
    margin: 15px 0;
    max-width: 800px;

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

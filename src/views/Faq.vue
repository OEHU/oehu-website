<template>
    <div class="faq">

        <Logo />

        <div class="container">

            <Title title="Faq" class="Title">
                Faq
            </Title>

            <h2>
                How do I share my data?
            </h2>

            <p>
                Sharing your data is easy. Simply buy the needed hardware and follow the setup for creating your personal energy dashboard, and you're set!
            </p>

            <h2>
                Why would I share my data? 
            </h2>

            <p>
                There are two reasons to share your data. First of all, your data is already being collected and funneled into the data silos discussed on <a href="/about">About</a>: sharing it with an open database will allow other people to use open data, and incentivize others to join you in sharing their data as well! The more data, the better the datasets. 
            </p>

            <p>
                Secondly, as OEHU develops, so will the incentives to share. By implementing a valourization mechanism atop the database, those who share their data will be able to passively earn from sharing their data with those who want to access it. 
            </p>

            <h2>
                What kind of data can I share? 
            </h2>

            <p>
                Currently the database only supports smart meter data. However, we plan to extend the database to support other kinds of data in the future (solar panels, home wind turbines, etc).
            </p>

            <h2>
                What kind of devices are supported? 
            </h2>

            <p>
                Starting point is that we will support common smart meter(s) used in the European Union. You'll connect a device to your smart meter; for this we'll use the Raspberry Pi 3B. With this setup we made it easy to onboard your smart meter.
            </p>

            <h2>
                What kind of personal info do you need? 
            </h2>
            
            <p>
                To register for a personal dashboard, we only need your email address and a password. These are encrypted client-side so we have no access to this information; they are only necessary for logging in.
            </p>

            <p>
                Any additional information that you choose to provide will simply serve to create better datasets. Geo-location will be scrambled by ~100 meters to protect your privacy.
            </p>

            <p>
                Emails provided for the newsletter will be kept in a separate database from the login information, and will only be used to send occasional updates about the progress of OEHU.
            </p>

            <h2>
                How does OEHU earn money? 
            </h2>

            <p>
                For the meanwhile, it doesn’t. The project is funded by BlockLab, that has funded this project by using subsidy from <a href="https://mrdh.nl/" target="_blank">MRDH</a>.
            </p>

            <h2>
                Who is behind OEHU?
            </h2>

           <p>
                OEHU is funded by BlockLab, a blockchain innovation lab supported by the port of Rotterdam and <a href="https://mrdh.nl/" target="_blank">MRDH</a>. 
            </p>

            <p>
                OEHU, an open source project, is created by a decentralized team of ambitious people. See <a href="https://github.com/orgs/OEHU/people">github.com/orgs/OEHU/people</a> for a list of contributors so far. Feel free to contribute! Leave a message in OEHU's Telegram channel :)
            </p>

            <h2>
                Where can I find the documentation?
            </h2>

            <p>
                Read how to start using OEHU on the <a href="/get-started" target="_blank">Get Started!</a> page.
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
  name: "faq",
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

.faq {

    font-size: 18px;
    font-weight: 400;

    .container {
        width: 50vw;
        max-width: 100vw;
        margin: 0 auto;
        padding-bottom: 100px;

        position: relative;
        z-index: 2;
    }

    img {
        margin: 30px 0;
        display: block;
    }
}

.Title {
    margin-top: 50px;
}

h1 {
    @include mobile() {
        font-size: 64px;
        line-height: 80px;
    }
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


ol {
    margin: 15px 45px;
    max-width: 50vw;
}

p {
    margin: 15px 0;
    max-width: 50vw;

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

<template>
    <div class="home">
        <Logo showTagLine={true} />
        <WhatIs />
        <Social />
        <HowItWorks />
        <Title
            title="These OEHU's already connected"
            color="black"
            class="title"
            />
        <DevicesConnected />
        <Maps/>
        <GetStarted />
        <Footer/>
        <FooterClosing/>
    </div>
</template>

<script>
import Title from '@/components/common/Title.vue'
import Logo from '@/components/Logo.vue'
import WhatIs from "@/components/home/WhatIs.vue";
import Social from "@/components/common/Social.vue";
import HowItWorks from "@/components/home/HowItWorks.vue";
import DevicesConnected from "@/components/home/DevicesConnected";
import Maps from "@/components/home/Maps";
import GetStarted from "@/components/home/GetStarted";
import Footer from "@/components/footer/Footer.vue";
import FooterClosing from "@/components/footer/FooterClosing.vue";

export default {
  name: "home",
  components: {
    Logo,
    DevicesConnected,
    WhatIs,
    Title,
    Social,
    HowItWorks,
    Maps,
    GetStarted,
    Footer,
    FooterClosing
  }
};
</script>

<style scoped lang="scss">

@import '../assets/sass/mix.scss';

.title {
    text-align: center;

    @include minimum-desktop() {
        margin-bottom: 80px;
    }
}

</style>

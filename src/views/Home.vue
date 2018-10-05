<template>
    <div class="home">
        <Logo />
        <WhatIs />
        <Social />
        <HowItWorks />
        <DevicesConnected />
        <Maps/>
        <GetStarted />
        <Footer/>
        <FooterClosing/>
    </div>
</template>

<script>
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
</style>

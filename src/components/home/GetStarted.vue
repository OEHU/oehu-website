<template>
    <div class="get-started">
        <div class="container">
            <div class="get-started-columns columns is-gapless">
                <div class="column content">
                    <h1 class="title">
                        Get Started & sign up for a dashboard
                    </h1>
                    <p>
                        Rotterdam The Hague Open Energy Hub/OEHU is a public, open-source, distributed database for
                        smart
                        meter
                        data. Users can contribute their data and in return gain access to a personal energy usage
                        dashboard,
                        detailed datasets from all contributors and cloud-based data analysis tools.
                    </p>
                    <Button class="started" title="Get Started!" />
                    <span class="space"></span>
                    <Button class="faq" title="FAQ" />
                </div>
                <div class="column">
                    <img class="smart_oehu_image" src="../../assets/images/smart_oehu.png"/>
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>

</template>

<script>
import Button from "@/components/common/Button.vue";
import PhoneMockup from "@/components/home/PhoneMockup.vue";
import FlowBackground from "@/components/home/FlowBackgroundRight.vue";

export default {
  name: "WhatIs",
  components: { Button, PhoneMockup, FlowBackground }
};
</script>

<style scoped lang="scss">
.get-started {
  overflow: hidden;
  position: relative;
  .columns {
    padding-left: 10%;
    margin-bottom: 0 !important;
    position: relative;
    bottom: 100px;
    .content {
      padding-top: 10% !important;
    }
  }

  .title {
    color: #ffffff;
    font-size: 64px;
    font-weight: 400;
    line-height: 80px;
    font-family: YoungSerif;
  }
}

.phone-mockup {
  overflow: hidden;
  position: relative;

  &-phone {
    max-width: 250px;
    padding: 40px 0;
    position: relative;
    left: 50%;
    z-index: 2;
  }
}

.started {
  background-color: #ffde00;
  color: black;
  border-color: #ffde00;
}
.space {
  margin-left: 15px;
}

.content p {
    font-size: 32px;
    font-weight: 400;
    width: 750px;
    font-family: WorkSerif;
}

.smart_oehu_image {
    position: relative;
    top: 150px;
    left: 100px;
    z-index: 2;
}

.faq{
    width: 132px;
}
</style>
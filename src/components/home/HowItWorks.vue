<template>
    <div class="how-it-works">
        <div class="container">
            <div class="how-it-works-columns columns is-gapless">
                <div class="column">
                  <img class="oehu_home_image" src="../../assets/images/oehu_home.png"/>
                </div>
                 
                <div class="column content">
                    <h1 class="title">
                        How it works
                    </h1>
                    <p>
                        The Rotterdam Open Energy Hub/OEHU is a public, open-source, distributed database for smart dit
                        is een Hyperlinks style. Users can contribute their data and in return gain access to a personal
                        energy usage dashboard, detailed datasets from all contributors, and cloud-based data analysis
                        tools.
                    </p>
                    <Button class="get_started" title="Get Started!" />
                    <span class="space"></span>
                    <Button class="contribute" title="How Can I Contribute?" />
                </div>
            </div>
        </div>
        <FlowBackground/>
    </div>

</template>

<script>
import Button from "@/components/common/Button.vue";
import FlowBackground from "@/components/home/FlowBackgroundLeft.vue";

export default {
  name: "HowItWorks",
  components: { Button, FlowBackground }
};
</script>

<style scoped lang="scss">
.how-it-works {
  position: relative;
  overflow: hidden;
}
.columns {
  padding: 60px 0;
}
.title {
  color: #ffffff;
  font-size: 64px;
  font-weight: 400;
  font-family: YoungSerif;
}
.oehu_home_image {
  position: absolute;
  left: 115px;
  top: 220px;
  z-index: 2;
}
.get_started {
  background-color: #ffde00;
  color: black;
  border-color: #ffde00;
}
.space {
  margin-left: 35px;
}
.content p {
  font-size: 32px;
  font-weight: 400;
  font-family: WorkSerif;
}
</style>
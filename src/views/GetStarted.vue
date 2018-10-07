<template>
    <div class="get-started">

        <Logo />

        <div class="container">

            <Title title="Get Started" class="Title">
                Get Started
            </Title>

            <h2>
                Part 1: get the right stuff
            </h2>
            
            <p>
                To be able to use OEHU to read the data of your smart meter you need the following equipement:
            </p>

            <ol>
                <li>Raspberry Pi (Rpi) (preferably version 2B and up);</li>
                <li>Power cable (micro-usb) for the Rpi;</li>
                <li>Ethernet cable to connect to your home internet network if your Rpi doesn’t have wifi or you don’t have a wifi dongle;</li>
                <li>Smart Meter cable (P1 cable); (available here: https://www.sossolutions.nl/slimme-meter-kabel)</li>
                <li>Micro-SD card of 8GB</li>
            </ol>

            <p>
                We provide an all-in-one set for your convenience. You can purchase this set here [link to shop].  Bij SOS Solutions een winkelmandje maken.
            </p>

            <p>
                When you have the right stuff, continue with part 2.
            </p>

            <h2>
                Part 2: Preparations
            </h2>

            <p>
                Step 1: download the OEHU software for your Rpi: here <link>;
            </p>
            <p>
                Step 2: unzip the downloaded image and copy the file to the micro-SD-card;
            </p>
            <p>
                NB. our set provides a USB SD-card reader in case your laptop lacks an SD-card slot.
            </p>
            <p>
                Step 3: connect everything to your Rpi:
            </p>
            <ol>
                <li>Slide the micro-SD card into the designated slot of the Rpi;</li>
                <li>If your Rpi doesn’t have Wifi build-in: Connect the Ethernet cable or Wifi dongle to the Rpi, otherwise skip this;</li>
                <li>Connect the P1 connector of the P1 cable to the P1 port of your smart meter. NB. Usually you have to slide aside a rubber lit to access the P1 port;</li>
                <li>Connect the USB connector of the P1 cable to the Rpi;</li>
                <li>Finally, connect the power cable to the Rpi and plug it into a power socket. This will make your Rpi boot;</li>
                <li>
                    Get yourself a nice cup of coffee, because the booting will take up to 20 minutes. Just let the Rpi do its thing. You know it is ready when you see either:
                    <ol>
                        <li>a new Wifi network called OEHU Setup, or,</li>
                        <li>when Wifi is not available on the Rpi and you use ethernet instead: you see that your Rpi is connected on this website: http://oehu.org/setup;</li>
                    </ol>
                </li>
            </ol>

            <h2>
                Part 3: Configure & Go!
            </h2>
            
            <p>
                If wifi is available on your Rpi, your Rpi is turned into a hotspot by now and is sending out a Wifi network called: OEHU Setup. Then start with step 1, otherwise go straight to step 5.
            </p>

            <p>
                Step 1: change the Wifi connection of your laptop to the network: OEHU Setup;
            </p>

            <p>
                Step 2: browse to http://oehu.local;
            </p>

            <p>
                Step 3: Here you need to select your own (home) Wifi network. Make sure the Rpi and your laptop are on the same network. Click the Submit button. <i>Be aware: enter the credentials right the first time, otherwise the Rpi will freeze and you need to start all over again.</i>
            </p>

            <p>
                Step 4: change the Wifi connection of your laptop back to your own (home) Wifi network;
            </p>

            <p>
                ----
            </p>

            <p>
                Step 5: To configure your Rpi go to http://oehu.org/setup;
            </p>

            <p>
                Step 6: Fill in your location and give in the accuracy in meter that you want the viewer to show your location on the map. Click Next. <i>NB. It is possible to choose anonymity instead of giving in your precise location. Check the box if you want to stay anonymous.</i>
            </p>

            <p>
                Step 7: Specify the type of building where the smart meter is located. Also specify the amount of occupants of the building. Click Next. 
            </p>

            <p>
                Step 8: Choose your username and password that gives you access to your dashboard on the OEHU website. Make sure you save the passfrase, username and password by downloading the file and storing this in a save location. Normally, the download of the pdf with this information starts automatically. Click Next. 
            </p>

            <p>
                Step 9: If you entered an username and password in step 4, you will now enter your dashboard on the OEHU website: http://oehu.org/dashboard Typically, after 10 seconds the first information of your smart meter should be visible in the dashboard.
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
  name: "get-started",
  components: {
    Logo,
    Title,
    Footer,
    FooterClosing
  }
};
</script>

<style scoped lang="scss">

.get-started {
    font-size: 18px;
    font-weight: 400;
    
    .container {
        padding-bottom: 100px;
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
    max-width: 700px;
}

p {
    margin: 15px 0;
    max-width: 700px;
}

</style>

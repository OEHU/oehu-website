<template>
    <div class="get-started">

        <Logo />

        <div class="container">

            <Title title="Get Started" class="Title">
                Get Started
            </Title>

            <p>
                So, you want to have full access to your energy data and view nice usage charts. It's takes three steps to be up & running:
            </p>

            <ol>
                <li>Get the right stuff</li>
                <li>Connect/prepare your OEHU</li>
                <li>Configure & go</li>
            </ol>

            <img class="image" src="../assets/images/icon/OEHU_DASHBOARD.svg" alt="Mobile phone with OEHU dashboard data" />

            <h2>
                Part 1: get the right stuff
            </h2>
            
            <p>
                To be able to use OEHU to read the data of your smart meter you need the following equipement:
            </p>

            <ol>
                <li>
                    <a href="https://www.sossolutions.nl/raspberry-pi-3-model-b-plus" target="_blank"><b>Raspberry Pi</b></a> (Rpi), preferably version 2B and up
                    <br /><br />
                </li>
                <li>
                    <b>Power + micro-usb cable</b> for the Rpi
                    <br /><br />
                </li>
                <li>
                    <a href="https://www.sossolutions.nl/slimme-meter-kabel" target="_blank"><b>Smart Meter P1 cable</b></a>
                    <br /><br />
                </li>
                <li>
                    <b>Micro-SD card</b> of 8GB
                    <br /><br />
                </li>
                <li>
                    Optional: Ethernet cable to connect to your home internet network if your Rpi doesn't have WiFi or you don’t have a WiFi dongle
                    <br /><br />
                </li>
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

            <h3>Step 1</h3>

            <p>
                Download the OEHU software for your Rpi: here [link];
            </p>

            

                <h3>Step 2</h3>

                <p>
                    Unzip the downloaded image and copy the file to the micro-SD-card; NB. our set provides a USB SD-card reader in case your laptop lacks an SD-card slot.
                </p>

                <h3>Step 3</h3>

                <p>
                    Connect everything to your Rpi:
                </p>
                <ol>
                    <li>Slide the micro-SD card into the designated slot of the Rpi;</li>
                    <li>If your Rpi doesn’t have WiFi build-in: Connect the Ethernet cable or WiFi dongle to the Rpi, otherwise skip this;</li>
                    <li>
                        Connect the P1 connector of the P1 cable to the P1 port of your smart meter. NB. Usually you have to slide aside a rubber lit to access the P1 port

                        <img class="image" src="../assets/images/icon/OEHU_R_PI_+_CABLE.svg" alt="" />
                    </li>
                    <li>
                        Connect the USB connector of the P1 cable to the Rpi

                        <img class="image" src="../assets/images/icon/OEHU_METER_R_PI_+_CABLE.svg" alt="" />
                    </li>
                    <li>Finally, connect the power cable to the Rpi and plug it into a power socket. This will make your Rpi boot;</li>
                    <li>
                        Get yourself a nice cup of coffee, because the booting will take up to 20 minutes. Just let the Rpi do its thing. You know it is ready when you see either:
                        <ol>
                            <li>A new WiFi network called OEHU Setup, or,</li>
                            <li>When WiFi is not available on the Rpi and you use ethernet instead: you see that your Rpi is connected on this website: <a href="https://oehu.org/setup" target="_blank">oehu.org/setup</a></li>
                        </ol>
                    </li>
                </ol>

            

            <h2>
                Part 3: Configure & Go!
            </h2>
            
                

                <p>
                    If WiFi is available on your Rpi, your Rpi is turned into a hotspot by now and is sending out a WiFi network called: OEHU Setup. Then start with step 1, otherwise go straight to step 5.

                    <img class="image" src="../assets/images/icon/OEHU_R_PI.svg" alt="" />
                </p>

                <h3>Step 1</h3>

                <p>
                    Change the WiFi connection of your laptop to the network: OEHU Setup;
                </p>

                <h3>Step 2</h3>

                <p>
                    Browse to <a href="http://oehu.local" target="blank">oehu.local</a>
                </p>

                <h3>Step 3</h3>

                <p>
                    Here you need to select your own (home) WiFi network. Make sure the Rpi and your laptop are on the same network. Click the Submit button. <i>Be aware: enter the credentials right the first time, otherwise the Rpi will freeze and you need to start all over again.</i>
                </p>

                <h3>Step 4</h3>

                <p>
                    Change the WiFi connection of your laptop back to your own (home) WiFi network;
                </p>

            

            <h3>Step 5</h3>

            <p>
                To configure your Rpi go to <a href="https://oehu.org/setup" target="_blank">oehu.org/setup</a>
            </p>

            <h3>Step 6</h3>

            <p>
                Fill in your location and give in the accuracy in meter that you want the viewer to show your location on the map. Click Next.
            </p>

            <p>
                <i>NB. It is possible to choose anonymity instead of giving in your precise location. Check the box if you want to stay anonymous.</i>
            </p>

            <h3>Step 7</h3>

            <p>
                Specify the type of building where the smart meter is located. Also specify the amount of occupants of the building. Click Next. 
            </p>

            <h3>Step 8</h3>

            <p>
                Choose your username and password that will give you access to your dashboard on the OEHU website.
            </p>

            <p>
                Make sure you save the passphrase, username and password by writing it down on paper or storing this in your password manager. The passphrase is important: It gives you access to your data, and lets you modify it. 
            </p>

            <p>
                Click Next.
            </p>

            <h3>Step 9</h3>

            <p>
                If you entered an username and password in step 4, you will now enter your dashboard on the OEHU website: <a href="https://oehu.org/dashboard">oehu.org/dashboard</a>. Typically, after 10 seconds the first information of your smart meter should be visible in the dashboard.
            </p>

            <h3>Congratulations!</h3>

            <p>
              You're now running your own node. In the future, just go to <a href="https://oehu.org" target="_blank">oehu.org</a> to view your dashboard 😄
            </p>

            <img class="image" src="../assets/images/icon/OEHU_PERFECT.svg" alt="" />

            <p>
                <!-- [example screenshot of personal OEHU dashboard] -->
            </p>

            <h2>Questions about the setup?</h2>

            <p>
                Join the OEHU community <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">on Telegram</a> or ask your question <a href="https://twitter.com/oehu_project" target="_blank">via Twitter</a>. We are happy to help if needed!
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

@import '../assets/sass/mix.scss';

.get-started {
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

    img {
        margin: 30px 0;
        display: block;
    }

    .image {
        display: block;
        width: 500px;
        max-width: 100%;
        margin: 0 auto;
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

h3 {
    font-size: 28px;
    line-height: 1.5;
}

ol {
    margin: 15px 45px;
    max-width: 800px;
}

li, p {
    @include tablet() {
        font-size: 28px;
        line-height: 1.5;
    }
    @include minimum-desktop() {
        font-size: 28px;
        line-height: 1.5;
    }
}

p {
    margin: 15px 0;
    max-width: 800px;
}

</style>

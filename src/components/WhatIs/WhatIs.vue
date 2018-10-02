<template>
    <div class="WhatIs space-between center">
        <div class="WhatIs-text">
            <h1 class="title">
                What is OEHU?
            </h1>
            <p>
                Rotterdam The Hague Open Energy Hub/OEHU is a public, open-source, distributed database for smart meter
                data. Users can contribute their data and in return gain access to a personal energy usage dashboard,
                detailed datasets from all contributors and cloud-based data analysis tools.
            </p>
            <Button title="Learn more">
                Learn more
            </Button>
        </div>
        <div class="PhoneMockup">

        </div>
    </div>
</template>

<script>
    import Button from '@/components/Button.vue'

    export default {
        name: 'WhatIs',
        components: {Button},
        head() {
            return {
                title: 'What is OEHU?'
            }
        }
    }
</script>

<style scoped lang="scss">

    .WhatIs {
        max-width: calc(100vw - 50px);
        padding: 50px 25px;
    }

    @media(min-width: 680px) {
        .WhatIs {
            padding: 20% 0 50px 25px;
            max-width: 100%;
            background: url('./AppMockup.png') bottom right no-repeat;
            background-size: contain;
        }
    }

    .WhatIs-text {
        text-align: left;
        margin: 0 auto;
        max-width: 360px;
    }

    @media(min-width: 680px) {
        .WhatIs-text {
            margin-top: -10%;
            position: relative;
            left: -15%;
        }
    }

    @media(min-width: 1200px) {
        .WhatIs-text {
            left: 0%;
            max-width: 540px;
        }
    }

    .PhoneMockup {
        min-width: 300px;
        display: none;
    }

    .title {
        text-align: left;
        color: #fff;
    }

    Button {
        margin: 25px 0;
    }

</style>
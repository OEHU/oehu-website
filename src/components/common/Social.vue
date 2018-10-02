<template>
    <div class="Social">

        <h1>Join our community!</h1>

        <p>
            Stay up to date on OEHU's developments by subscribing to our newsletter or follow us on one of the channels
            below
        </p>

        <NewsletterSubscribe/>

        <div class="social-icons flex center">
            <span class="social-icon">
                <a href="https://twitter.com/oehu_project" target="_blank">
                    <img src="../../assets/images/social/Twitter.png"/>
                </a>
            </span>
            <span class="social-icon">
                <a href="https://www.linkedin.com/company/11865484/admin/overview/" target="_blank">
                    <img src="../../assets/images/social/LinkedIn.png"/>
                </a>
            </span>
            <span class="social-icon">
                <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">
                    <img src="../../assets/images/social/Telegram.png"/>
                </a>
            </span>
        </div>
    </div>
</template>

<script>
    import NewsletterSubscribe from '@/components/common/NewsletterSubscribe.vue';

    export default {
        components: {NewsletterSubscribe},
        name: 'Social'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Social {
        background: #fff;
        color: #333;
        text-align: center;
        padding: 25px 0;
    }

    .Social h1 {
        font-size: 40px;
        font-family: serif;
    }

    .Social h1,
    .Social p {
        max-width: 65vw;
        margin: 0 auto;
    }

    .social-icon {
        max-width: 60px;
        margin: 5px;
    }
</style>

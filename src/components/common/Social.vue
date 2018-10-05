<template>
    <div class="social">
        <div class="container">

            <h1>Join our community!</h1>

            <p>
                Stay up to date on OEHU's developments by subscribing to our newsletter or follow us on one of the
                channels below
            </p>

            <NewsletterSubscribe/>

            <div class="social-icons flex center">
            <span class="social-icon">
                <a href="https://github.com/OEHU/" target="_blank">
                    <img src="../../assets/images/social/Github.png"/>
                </a>
            </span>
                <span class="social-icon">
                <a href="https://twitter.com/oehu_project" target="_blank">
                    <img src="../../assets/images/social/Twitter.png"/>
                </a>
            </span>
                <span class="social-icon">
                <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">
                    <img src="../../assets/images/social/Telegram.png"/>
                </a>
            </span>
                <span class="social-icon">
                <a href="https://www.linkedin.com/company/11865484/admin/overview/" target="_blank">
                    <img src="../../assets/images/social/LinkedIn.png"/>
                </a>
            </span>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsletterSubscribe from "@/components/common/NewsletterSubscribe.vue";

    export default {
        components: {NewsletterSubscribe},
        name: "Social"
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .social {
        background: #fff;
        color: #333;
        text-align: center;
        padding: 25px 0;
        p {
            font-size: 1.8rem;
            font-weight: 400;

            @include tablet() {
                font-size: 1.6rem;
            }
            @include mobile() {
                font-size: 1.3rem;
            }
        }
        h1 {
            font-size: 4rem;
            font-weight: 400;

            @include tablet() {
                font-size: 3.4rem;
            }
            @include mobile() {
                font-size: 2.7rem;
            }
        }
        .social-icon {
            max-width: 60px;
            margin: 5px;

            @include mobile() {
                max-width: 40px;
            }
        }

    }
</style>

<template>
    <div class="social">
        <div class="container">

            <Title title="Join our community!" color="black" />

            <p>
                Stay up to date on OEHU's developments by subscribing to our newsletter or follow us on one of the
                channels below
            </p>

            <NewsletterSubscribe/>

            <div class="social-icons flex center">

                <span class="social-icon">
                    <a href="https://github.com/OEHU/" target="_blank">
                        <img src="../../assets/images/social/github.svg"/>
                    </a>
                </span>
                <span class="social-icon">
                    <a href="https://twitter.com/oehu_project" target="_blank">
                        <img src="../../assets/images/social/twitter.svg"/>
                    </a>
                </span>
                <span class="social-icon">
                    <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">
                        <img src="../../assets/images/social/telegram.svg"/>
                    </a>
                </span>
                <span class="social-icon">
                    <a href="https://www.linkedin.com/company/11865484/admin/overview/" target="_blank">
                        <img src="../../assets/images/social/linkedin.svg"/>
                    </a>
                </span>

            </div>
        </div>
    </div>
</template>

<script>
    import NewsletterSubscribe from "@/components/common/NewsletterSubscribe.vue";
    import Title from "@/components/common/Title.vue";

    export default {
        components: {Title, NewsletterSubscribe},
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
        padding: 30px 0;

        @include mobile() {
            padding: 25px 0;
        }

        p {
            font-size: 1.3rem;
            font-weight: 400;
            margin: 15px auto;
            width: 1100px;
            max-width: 80%;

            @include tablet() {
                font-size: 1.6rem;
            }
            @include mobile() {
                margin-top: 10px;
                font-size: 18px;
            }

        }
        h1 {
            margin-bottom: 15px;

            @include tablet() {
                font-size: 3.4rem;
            }
            @include mobile() {
                margin-bottom: 10px;
                font-weight: 400;
            }
        }
        .social-icons {
            @include mobile() {
                margin-bottom: 20px;
            }
            margin-bottom: 50px;
        }
        .social-icon {
            max-width: 60px;
            margin: 5px;

            @include mobile() {
                max-width: 40px;
            }
        }
        .social-icon a {
            display: block;
        }
    }
</style>

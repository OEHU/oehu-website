<template>
    <div class="header">    
        <svg class="head-cutout" width="100%" viewBox="0 0 1444 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Desktop-HD-Home-01" fill="#000000">
                    <path d="M1.13686838e-13,2.13162821e-14 C1.13686838e-13,2.13162821e-14 601.669931,360 1444,2.13162821e-14 C1444,2.13162821e-14 1.13686838e-13,2.13162821e-14 1.13686838e-13,2.13162821e-14 Z" id="Path-2"></path>
                </g>
            </g>
        </svg>

        <div class="Navigation flex">

            <router-link :to="{name: 'login'}">
                <Button class="login" title="log in" />
            </router-link>

            <div class="menu_button">
                <div @click="openNav()"/>
            </div>

            <div ref="menu" class="overlay">

                <div class="overlay-header">
                    <img src="../../assets/images/logo/LogoSmall.png" @click="closeNav()" />
                    <a class="closebtn" @click="closeNav()">&times;</a>
                </div>

                <div class="overlay-content">

                    <nav>
                        <a href="/">Home</a>
                        <a href="/get-started">Get started<i>!</i></a>
                        <a href="/faq">About</a>
                        <a href="/faq">FAQ</a>
                    </nav>

                    <div class="two-column-on-desktop">
                        <div class="heading">
                            Follow us on
                        </div>

                        <div class="social-icons flex center">
                            <a href="https://github.com/OEHU/" target="_blank">
                                <img src="../../assets/images/social/Github.png" />
                            </a>
                            <a href="https://twitter.com/oehu_project" target="_blank">
                                <img src="../../assets/images/social/Twitter.png"/>
                            </a>
                            <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">
                                <img src="../../assets/images/social/Telegram.png"/>
                            </a>
                            <a href="https://www.linkedin.com/company/11865484/admin/overview/" target="_blank">
                                <img src="../../assets/images/social/LinkedIn.png"/>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
export default {
  name: "HeadCutOUt",
  components: {Button},
  methods: {
      closeNav(){
        this.$refs.menu.style.display = "none"; 
      },
      openNav(){
        this.$refs.menu.style.display = "block"; 
      }
  }
};
</script>

<style scoped lang="scss">

    @import '../../assets/sass/mix.scss';

    .header {
        position: relative;
    }

    .head-cutout {
        max-height: 150px;
    }

    .Navigation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: right;
        padding: 30px 30px;
        justify-content: flex-end;

        @include mobile()  {
            padding: 15px;
        }
    }

    .Navigation > a,
    .Navigation button {
        margin-bottom: 0;
    }

    .login {
        height: 50px;
        line-height: 42px;
        padding-top: 0;
        padding-bottom: 0;

        @include mobile() {
            height: 40px;
            line-height: 40px;
        }
    }

    .menu_button div {
        cursor: pointer;
        background: url("../../assets/images/menu.png") no-repeat center center;
        background-size: contain;
        width: 40px;
        height: 100%;
    }
    .overlay {
        width: 100%;
        display: none;
        padding: 30px;
        height: 100%;
        position: fixed;
        z-index: 99999;
        left:0;
        top:0;
        background-color: white;
        overflow-x: hidden;

        @include mobile() {
            padding: 15px;
        }
    }

    .overlay-header {
        display: flex;
        justify-content: space-between;
    }

    .overlay-content{
        padding-top: 44px;
        text-align: left;

        @include mobile() {
            padding-top: 16px;
        }
    }

    .overlay a,
    .heading {
        text-transform: none;
        color: #020303;
        font-family: YoungSerif, serif;
        font-weight: 400;

        font-size: 64px;
        line-height: 92px;

        @include mobile() {
            font-size: 32px;
            line-height: 46px;
        }
    }

    .overlay a {
        text-decoration: none;
        display: block;
        transition: 0.3s;
    }
    .overlay a:hover, .overlay a:focus {
        color: #0087ff;
    }

    a.closebtn {
        float: right;
        width: 40px;
        height: 40px;
        padding: 0;
        background: url('../../assets/images/btn-close.svg') no-repeat center center;
        background-size: contain;
        text-indent: 9999px;

        @include mobile() {
            width: 40px;
            height: 40px;
        }
    }

    .two-column-on-desktop {
        margin-top: 90px;

        @include tablet() {
            display: flex;
            justify-content: space-between;
        }
        @include minimum-desktop() {
            display: flex;
            justify-content: space-between;
        }

        > * {
            flex: 1;
        }

        @include tablet() {
            .heading {
                justify-content: center;
                flex-direction: column;
                display: flex;
            }
        }
        @include minimum-desktop() {
            .heading {
                justify-content: center;
                flex-direction: column;
                display: flex;
            }
        }

    }

    .social-icons.center {
        margin-top: 15px;
        width: 100vw;
        justify-content: flex-start;
        text-align: left;

        @include tablet() {
            justify-content: flex-end;
        }
        @include minimum-desktop() {
            justify-content: flex-end;
        }
    }

    .social-icons a {
        display: block;
    }

    .social-icons a:first-child img {
        margin-left: 0;
    }
    .social-icons img {
        margin: 0 11px;
        width: 74px;

        @include mobile() {
            margin: 0 5px;
            width: 37px;
        }
    }

    /*@media screen and (max-height: 450px) {*/
        /*.overlay a {font-size: 20px}*/
        /*.overlay .closebtn {*/
            /*font-size: 40px;*/
            /*top: 15px;*/
            /*right: 35px;*/
        /*}*/
    /*}*/

</style>

<template>
    <div class="header">    

        <img src="../../assets/images/owl-header.svg" style="width: 100vw !important; min-height: 60px; !important" />

        <div class="Navigation flex">

            <a href="/" target="_top" class="small-logo">
                <img src="../../assets/images/oehu-logo-small.svg" />
            </a>

            <div v-if="isCookieSet">
                <Button v-on:click.native="logout()" class="login" title="logout" />
            </div>

            <div v-else> 
                <router-link :to="{name: 'login'}">
                        <Button class="login" title="log in" />
                </router-link>
            </div>
  

            <div class="menu_button">
                <div @click="openNav()"/>
            </div>

            <div ref="menu" class="overlay">

                <div class="overlay-header">
                    <img src="../../assets/images/oehu-logo-small.svg" @click="closeNav()" />
                    <a class="closebtn" @click="closeNav()">&times;</a>
                </div>

                <div class="overlay-content">

                    <nav>
                        <a href="/">Home</a>
                        <a href="/get-started">Get started<i>!</i></a>
                        <a href="/about">About</a>
                        <a href="/faq">FAQ</a>
                    </nav>

                    <div class="two-column-on-desktop">
                        <div class="heading">
                            Follow us on &raquo;
                        </div>

                        <div class="social-icons flex center">
                            <a href="https://github.com/OEHU/" target="_blank">
                                <img src="../../assets/images/social/github.svg" />
                            </a>
                            <a href="https://twitter.com/oehu_project" target="_blank">
                                <img src="../../assets/images/social/twitter.svg"/>
                            </a>
                            <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">
                                <img src="../../assets/images/social/telegram.svg"/>
                            </a>
                            <a href="https://www.linkedin.com/company/11865484/admin/overview/" target="_blank">
                                <img src="../../assets/images/social/linkedin.svg"/>
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
  data(){
      return {
          isCookieSet: false
      }
  },
  methods: {
      closeNav(){
        this.$refs.menu.style.display = "none"; 
      },
      openNav(){
        this.$refs.menu.style.display = "block"; 
      },
      logout(){
        this.$cookies.remove("devices");
        this.$router.push('/')
      }
  },
  mounted() {
    if (this.$cookies.get("devices")) {
      this.isCookieSet = true;
    }
  }
};
</script>

<style scoped lang="scss">

@import '../../assets/sass/mix.scss';

.header {
    position: relative;
}

.small-logo {
    position: fixed;
    top: 30px;
    left: 30px;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.4s;
}

.hasScrolled .small-logo {
    opacity: 1;
    transition: opacity 0.4s;
}

.Navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px;
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
    border-color: #efefef;
    color: #efefef;
    height: 40px;
    line-height: 32px;
    position: fixed;
    top: 30px;
    right: 60px;
    padding-top: 0;
    padding-bottom: 0;
    z-index: 1000;

    font-size: 18px;

    opacity: 1;
    transition: all 0.4s;

    @include mobile() {
        right: auto;
        left: 30px;
    }
}
.login:hover,
.login:focus {
    border-color: #fff;
    color: #000;
}

.hasScrolled .login {
    transition: all 0.4s;
    opacity: 0;

    @include mobile() {
        transition: all 0.8s;
        border-color: #000;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        text-indent: -9999px;
    }
}

.menu_button {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1000;
}
.menu_button:hover,
.menu_button:focus {
    filter: brightness(100%);
}

.menu_button div {
    cursor: pointer;
    background: url("../../assets/images/btn-hamburger.svg") no-repeat center center;
    background-size: contain;
    width: 40px;
    height: 40px;
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

</style>

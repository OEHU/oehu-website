<template>
    <div class="header">    
    <svg class="head-cutout" width="100%" viewBox="0 0 1444 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD-Home-01" fill="#000000">
                <path d="M1.13686838e-13,2.13162821e-14 C1.13686838e-13,2.13162821e-14 601.669931,360 1444,2.13162821e-14 C1444,2.13162821e-14 1.13686838e-13,2.13162821e-14 1.13686838e-13,2.13162821e-14 Z" id="Path-2"></path>
            </g>
        </g>
    </svg>
    <router-link :to="{name: 'login'}">
        <Button  class="login" title="log in" />
    </router-link>
    <div class="menu_button"><input @click="openNav()" type="submit" name="" value=""></div>
        <div ref="menu" class="overlay">
            <a class="closebtn" @click="closeNav()">&times;</a>
            <img src="../../assets/images/logo/LogoSmall.png" />
            <div class="overlay-content">
                <a href="#">Menu item</a>
                <a href="#">Menu item</a>
                <a href="#">Menu item</a>
                <a href="#">Menu item</a>

                <span>Follow us on</span>
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
    </div>
</template>

<script>
import Button from "@/components/common/Button.vue";
export default {
  name: "HeadCutOUt",
  components: {Button},
  methods: {
      closeNav(){
        this.$refs.menu.style.width = "0%"; 
      },
      openNav(){
        this.$refs.menu.style.width = "100%"; 
      }
  }
};
</script>

<style scoped lang="scss">
    .head-cutout {
        max-height: 150px;
    }
    .login {
        width: 120px;
        height: 50px;
        position: relative;
        float:right;
        right: 150px;
        bottom: 130px;
    }
    .menu_button input{
        position: relative;
        left: 100px;
        float:right;
        bottom: 130px;
        cursor: pointer;
        background:url("../../assets/images/menu.png") no-repeat;
        border: none;
        width: 100px;
        height: 50px;
    }
    .overlay{
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        left:0;
        top:0;
        background-color: white;
        overflow-x: hidden;
        z-index: 3;
    }

    .overlay-content{
        position: relative;
        top: 5%;
        width: 100%;
        right: 40%;
        margin-top: 30px;
    }

    .overlay span {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #000000;
        display: block;
        transition: 0.3s;
        position: relative;
        top: 75px;
        left: 16px;
    }

    .overlay img {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #000000;
        display: block;
        transition: 0.3s;
        position: relative;
        top: 75px;
        left: 95px;
    }

    .overlay a {
        padding: 8px;
        text-decoration: none;
        font-size: 36px;
        color: #000000;
        display: block;
        transition: 0.3s;
    }
    
    .overlay a:hover, .overlay a:focus {
        color: #186dff;
    }

    .overlay .closebtn{
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }

    .social-icon{
        width: 120px;
    }

    .social-icons{
        position: relative;
        left: 70%;
        bottom: 185px;
    }

    @media screen and (max-height: 450px) {
        .overlay a {font-size: 20px}
        .overlay .closebtn {
            font-size: 40px;
            top: 15px;
            right: 35px;
        }
    }

</style>

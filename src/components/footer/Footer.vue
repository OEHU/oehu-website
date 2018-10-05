
<template>
    <div class="footer_container">
        <div class="social">
            <div class="social-icons flex center">
                <span class="social-icon">
                    <a href="https://github.com/OEHU/" target="_blank">
                        <img src="../../assets/images/social/github_footer.png"/>
                    </a>
                </span>
                <span class="social-icon">
                    <a href="https://twitter.com/oehu_project" target="_blank">
                        <img src="../../assets/images/social/twitter_footer.png"/>
                    </a>
                </span>
                <span class="social-icon">
                    <a href="https://t.me/joinchat/A8b03hI61nBIbnVF18582A" target="_blank">
                        <img src="../../assets/images/social/telegram_footer.png"/>
                    </a>
                </span>                
                <span class="social-icon">
                    <a href="https://www.linkedin.com/company/11865484/admin/overview/" target="_blank">
                        <img src="../../assets/images/social/linkedin_footer.png"/>
                    </a>
                </span>
            </div>
        </div>

        <a class="contact" href="mailto:contact@oehu.org">contact@oehu.org</a> 

        <div class="footer_logo">
            <img src="../../assets/images/oehu_footer.png"/>
        </div>

        <div class="footer_menu">
            <ul>
                <li><a href="#">Menu Item</a></li>
                <li><a href="#">Menu Item</a></li>
                <li><a href="#">Menu Item</a></li>
                <li><a href="#">Menu Item</a></li>
                <li><a href="#">Menu Item</a></li>
                <li><a href="#">Menu Item</a></li>
            </ul>
        </div>

        
    </div>
    
</template>


<script>
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped lang="scss">
.footer_container {
  background: black;
  height: 240px;
  position: relative;
}

.social {
  background: black;
  color: #333;
  text-align: center;
  padding: 25px 0;
  h1 {
    font-size: 40px;
    font-family: serif;
  }
  h1,
  p {
    max-width: 65vw;
    margin: 0 auto;
  }
  .social-icon {
    max-width: 60px;
    margin: 21px;
  }
}
.social-icons {
  position: relative;
  top: 120px;
}
.contact {
    color: white;
    position: relative;
    left: 50px;
    top: 25px;
}

.contact:hover {
   color: #186dff;
}
.closing {
  float: right;
  color: black;
  font-size: 18px;
  font-weight: 600;
  height: 21px;
}
.footer_logo {
  position: relative;
  bottom: 220px;
  left: 50px;
}
.footer_menu {
  position: relative;
  left: 1750px;
  bottom: 250px;
}
.footer_menu ul li a{
  color: white;
}
.footer_menu ul li a:hover {
  color: #186dff;
  cursor: pointer;
}
.hover_item {
  position: relative;
  right: 43px;
}
</style>
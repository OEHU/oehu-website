
<template>
    <div class="footer_container">

        <div class="footer_logo">
            <img src="../../assets/images/oehu_footer.svg" @click="goHome()"/>
        </div>

        <div class="flex column-wrapper">

          <a class="contact" href="mailto:contact@oehu.org">
          </a> 

          <div class="social">
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

          <div class="footer_menu">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/get-started">Get started</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/faq">FAQ</a></li>
              </ul>
          </div>
        
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  methods: {
      goHome(){
        document.location = '/';
      }
  }
};
</script>

<style scoped lang="scss">

@import '../../assets/sass/mix.scss';

.footer_container {
  background: black;
  position: relative;
  padding: 30px 0 0 0;

  @include minimum-desktop() {
    height: 240px;
    padding: 0;
  }
}

.flex {
  @include mobile() {
    display: block;
  }
}
.flex.column-wrapper > * {
  @include minimum-desktop() {
    flex: 1;
  }
  @include tablet() {
    flex: 1;
  }
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
  h1, p {
    max-width: 65vw;
    margin: 0 auto;
  }
  .social-icon {
    max-width: 60px;
    margin: 5px;

    @include mobile() {
      margin: 21px 15px;
      display: inline-block;
    }
  }
  .social-icon a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
}

.social-icons {
  @include minimum-desktop() {
    position: relative;
    top: 120px;
  }
}

.footer_logo {  
  @include tablet() {
    position: absolute;
    left: 30px;
    top: -62px;
  }
  @include minimum-desktop() {
    position: absolute;
    left: 30px;
    top: -62px;
  }
}
.footer_logo img {
  display: block;
  margin: 0 auto;
  
  @include minimum-desktop() {
    margin: 0;
  }
}

.footer_menu {
  color: white;
  text-align: right;

  @include mobile() {
    display: none;
  }
}
.footer_menu ul {
  padding: 30px;
}
.footer_menu a {
  color: #fff;
  display: block;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
}
.footer_menu a:hover {
  color: #176af8;
  cursor: pointer;
}
</style>
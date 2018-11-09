<template>
  <div>
    <Logo />
    <div class="container">
      <div class="form">
          <form class="login-form">
              <input type="text" placeholder="email" v-model="email"/>
              <input type="password" placeholder="Password" v-model="password"/>
              <button type="button" v-on:click="login">login</button>
          </form>
      </div>
    </div>
    <Footer/>
    <FooterClosing/>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
import Footer from "@/components/footer/Footer.vue";
import FooterClosing from "@/components/footer/FooterClosing.vue";

export default {
  name: "login",
  components: {
    Logo,
    Footer,
    FooterClosing
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function() {
     let self = this;
     this.axios
        .post("https://api.oehu.org/account/login", {
          email: this.email,
          password: this.password,
        })
        .then(function(response) {
          self.$cookies.set("devices",response.data.devices)
          self.$router.push('/dashboard')
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  height: 1090px;
}

.form {
  position: relative;
  top: 100px;
  z-index: 1;
  background: #ffffff;
  max-width: 560px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }

  button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #0086ff;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &:hover,
    &:focus,
    &:active {
      background: #0086ff;
    }
  }
}
</style>


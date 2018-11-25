<template>
  <div>
    <Logo />
    <div class="container">
      <div class="form">
          <form>
            <div class="error-message" v-if="error != ''">
                <span class="error-text">Wrong login credentials!</span>
            </div>
            <input type="text" placeholder="E-mail" v-model="email"/>
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
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login: function() {
      let self = this;
      this.axios
        .post("https://api.oehu.org/account/login", {
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          self.$cookies.set("devices", response.data.devices[0], "7D");
          self.$router.push("/dashboard");
        })
        .catch(function(error) {
          self.error = error;
        });
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  .form {
    z-index: 1;
    background: #ffffff;
    max-width: 560px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    input {
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      font-size: 14px;
    }
    button {
      text-transform: uppercase;
      background: #0086ff;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      cursor: pointer;
      &:hover,
      &:focus,
      &:active {
        background: #0085fae7;
      }
    }
    .error-message {
      position: relative;
      bottom: 15px;
      background-color: #fce4e4;
      border: 1px solid #fcc2c3;
      text-align: center;
      padding: 20px 30px;
      .error-text {
        color: #ff0000;
        font-size: 16px;
      }
    }
  }
}
</style>
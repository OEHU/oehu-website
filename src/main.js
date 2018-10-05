import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueFormGenerator from 'vue-form-generator'


import '@/assets/sass/main.scss'

Vue.config.productionTip = false
Vue.use(VueFormWizard)
Vue.use(VueFormGenerator)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

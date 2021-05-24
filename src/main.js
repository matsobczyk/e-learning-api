import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

new Vue({
  render: h => h(App),
}).$mount('#app')

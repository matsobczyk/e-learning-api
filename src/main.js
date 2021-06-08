import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LoginForm from './components/LoginForm.vue'
import TestForm from './components/TestForm.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

const routes = [
  { path: '/login', component: LoginForm},
  { path: '/test', component: TestForm},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

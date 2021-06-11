import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import LoginForm from './components/LoginForm.vue'
import TestForm from './components/TestForm.vue'
import ScorePage from './components/ScorePage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

import VueCountdown from '@chenfengyuan/vue-countdown';
Vue.component(VueCountdown.name, VueCountdown);

const routes = [
  {path: '/login', component: LoginForm},
  {name: 'Test', path: '/test', component: TestForm, props: true},
  {name: 'Score', path: '/score', component: ScorePage, props: true},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

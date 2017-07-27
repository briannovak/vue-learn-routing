import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Hello';
import GoodBye from './components/GoodBye';
import Wat from './components/Wat';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/goodbye/:message',
    name: 'goodbye',
    component: GoodBye,
    children: [{
      path: 'wat',
      name: 'wat',
      component: Wat,
    }],
  }],
});

export default router;

import Vue from 'vue';
import Router from 'vue-router';
import homepage from '@/docs/homepage';
import dashboard from '@/docs/dashboard';
import demo from '@/docs/demo';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      props: true,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      props: true,
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
    }
    // {
    //   path: '/components/listgroup',
    //   name: 'demo',
    //   component: demo,
    // }
  ],
});

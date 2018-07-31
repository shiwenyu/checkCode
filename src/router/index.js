import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Reposity from '../components/reposity'
import WaterMark from '../components/addWarterMark'
import store from '../store/index'
import * as types from '../store/type'

Vue.use(Router)

if(window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))  
} 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/reposity',
      name: 'reposity',
      meta: {
          requireAuth: true
      },
      component: Reposity
    },
    {
      path: '/watermark',
      name: 'watermark',
      component: WaterMark
    }
  ]
});



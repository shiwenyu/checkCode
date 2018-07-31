// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './http.js'
import App from './App'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.axios = axios;

router.beforeEach((from, to, next) => {
  if(to.matched.some(r => r.meta.requireAuth)) { // 判断是不是去往需要验证的页面
        //  next();
        if(!store.state.token) { //token为空，保留跳转的路径
          next({
            path: '/',
            query: {redirect: to.fullPath}
          });
        } else {
          next()
        }
  }
  else {
     next()
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  store,
  router,
  components: { App },
  template: '<App/>'
})

import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import {getUserInfo} from 'common/js/cache'

import 'common/stylus/index.styl'

// import VConsole from 'vconsole'
// let vConsole = new VConsole()

console.log('hello world')

fastclick.attach(document.body)
// 登录校验
router.beforeEach((to, from, next) => {
  const LOGIN_ROUTE = '/login'
  const INDEX_ROUTE = '/index'
  let isLogin = Boolean(getUserInfo())
  console.log(isLogin)
  if (isLogin) {//如果登录信息存在
    // if (to.matched.length) {//路由如果存在
    //   next()
    // } else {//路由信息如果不存在，跳转到首页
    //   // 这里需要加上是否是首页的判断
    //   // 如果是index，直接next()，否则跳到index
    //   // 如果不这样，在Mac上面会报Maximum call stack size的错误
    //   if (to.path !== INDEX_ROUTE) {
    //     next(INDEX_ROUTE)
    //   } else {
    //     next()
    //   }
    // }
  } else {//登录信息如果不存在，直接跳转到登录页面
    // if (to.path !== LOGIN_ROUTE) {
    //   next(LOGIN_ROUTE)
    // } else {
    //   next()
    // }
  }


  if (to.matched.length) {//路由如果存在
    next()
  } else {//路由信息如果不存在，跳转到首页
    // 这里需要加上是否是首页的判断
    // 如果是index，直接next()，否则跳到index
    // 如果不这样，在Mac上面会报Maximum call stack size的错误
    if (to.path !== INDEX_ROUTE) {
      next(INDEX_ROUTE)
    } else {
      next()
    }
  }



  
})
// Vue.use(VueLazyLoad, {
//   loading: require('common/image/default.png')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
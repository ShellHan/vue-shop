/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component: MSite,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/search',
      component: Search,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta:{
        isShowFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        isShowFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]

})


import Vue from 'vue'
import Router from 'vue-router'

import Login from 'components/login/login'
import Index from 'components/index/index'
import Vip from 'components/vip/vip'

// 我的---BEGIN
import Mine from 'components/mine/mine'
import MineBaseInfo from 'components/mine/baseinfo'
import MineQRcode from 'components/mine/qrcode'
import MineIRecommend from 'components/mine/irecommend'
import MinePassword from 'components/mine/password'
// 我的---END

// 我的餐厅---BEGIN
import RestaurantInfo from 'components/index/restaurantinfo'
// 我的餐厅---END  

// VIP---BEGIN
import ScanCode from 'components/vip/scancode'
import Premium from 'components/vip/Premium'
import Share from 'components/vip/share'
import Transfer from 'components/vip/transfer'
import Withdraw from 'components/vip/withdraw'
import Deal from 'components/vip/deal'
import ChooseBank from 'components/vip/chooseBank'
// VIP---END
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'restaurantinfo',
          component: RestaurantInfo
        }
      ]
    },
    {
      path: '/vip',
      component: Vip,
      children: [
        {
          path: 'scancode',
          component: ScanCode
        },
        {
          path: 'premium',
          component: Premium
        },
        {
          path: 'share',
          component: Share
        },
        {
          path: 'transfer',
          component: Transfer
        },
        {
          path: 'withdraw',
          component: Withdraw,
            children: [
              {
                path: 'chooseBank',
                component: ChooseBank
              }
            ]
        },
        {
          path: 'deal',
          component: Deal
        }
      ]
    },
    {
      path: '/mine',
      component: Mine,
      children: [
        {
          path: 'baseinfo',
          component: MineBaseInfo
        },
        {
          path: 'qrcode',
          component: MineQRcode
        },
        {
          path: 'irecommend',
          component: MineIRecommend
        },
        {
          path: 'password',
          component: MinePassword
        },
      ]
    }
  ]
})

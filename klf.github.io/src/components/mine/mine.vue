<template>
  <div>
    <div class="wrapper">
        <div class="header" ref="header">
          <div class="background">
            <img src="~common/image/mine/background.png" />
          </div>
          <div class="img-wrapper" ref="imgWrapper">
            <img src="~common/image/mine/head.png" />
          </div>
          <div class="store-name">
            何方私房菜
          </div>
          <div class="person">
            <label>店员：</label>
            <span>12383843383</span>
          </div>
        </div>
        <div class="menu">
          <ul class="list">
            <li class="item" @click="goToBaseInfo">
              <span>基本信息</span>
              <i></i>
            </li>
            <li class="item" @click="goToQRcode">
              <span>推荐码</span>
              <i></i>
            </li>
            <li class="item" @click="goToIRecommend">
              <span>推荐会员</span>
              <i></i>
            </li>
          </ul>
          <div class="reset-pwd" @click="goToPassword">
            <span>修改密码</span>
            <i></i>
          </div>
          <div class="change-account" @click="logout">
            切换账号
          </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex'
  import {setLoginPage} from 'common/js/mixin'

  export default {
    mixins: [setLoginPage],
    data () {
      return {

      }
    },
    created () {
      window.onresize = () => {
        // this._calcWidth()
      }
    },
    mounted () {
      // this._calcWidth()
    },
    methods: {
      goToBaseInfo() {
        this.$router.push({
          path: '/mine/baseinfo'
        })
      },
      goToQRcode() {
        this.$router.push({
          path: '/mine/qrcode'
        })
      },
      goToIRecommend() {
        this.$router.push({
          path: '/mine/irecommend'
        })
      },
      goToPassword() {
        this.$router.push({
          path: '/mine/password'
        })
      },
      logout() {
        this.setAutoLogin(false)
        this.$router.push({
          path: '/login'
        })
      },
      // _calcWidth() {
      //   let clientWidth = window.innerWidth
      //   // 在320rem屏幕宽的时候，修改密码被挡住，需要滚动条，这里适当优化下
      //   if(clientWidth < 340) {
      //     this.$refs.header.style.height = '200rem'
      //     this.$refs.imgWrapper.style['margin-top'] = '45rem'
      //   } else {
      //     this.$refs.header.style.height = '220rem'
      //     this.$refs.imgWrapper.style['margin-top'] = '60rem'
      //   }
      // },
      ...mapActions([
        'setAutoLogin'
      ])
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .wrapper
    background $color-background
    position absolute
    left 0
    right 0
    top 0
    bottom 1rem
    .header
      display flex
      align-items center
      flex-direction column
      width 100%
      height 4rem
      color #fff
      background-size contain
      background #d3272b
      position relative
      .background
        position absolute
        height 100%
        width 100%
        z-index -1
        img
          display block
          width 100%
          height 100%
      .img-wrapper
        height 1.4rem
        width 1.4rem
        margin-top 1.2rem
        border-radius 0.7rem
        box-sizing border-box
        border 3px solid #fff
        img
          display block
          width 100%
          height 100%
      .store-name
        margin-top 0.28rem
      .person
        margin-top 0.28rem
    .menu
      .list
        margin-top 0.2rem
        background #fff
        .item
          display flex
          align-items center
          justify-content space-between
          font-size $font-size-medium
          height 1.04rem
          box-sizing border-box
          margin-left 0.28rem
          padding-right 0.28rem
          border-bottom 1px solid #ededed
          i
            display flex
            position relative
            background url("~common/image/mine/right-arrow.png") no-repeat
            width 0.14rem
            height 0.22rem
            background-size contain
            &:before
              position absolute
              left -0.2rem
              right -0.2rem
              top -0.2rem
              bottom -0.2rem
              content ''
          &:last-child
            border-bottom none
      .reset-pwd
        background #fff
        display flex
        align-items center
        justify-content space-between
        font-size $font-size-medium
        height 1.04rem
        box-sizing border-box
        padding-left 0.28rem
        padding-right 0.28rem
        margin-top 0.3rem
        i
          display flex
          position relative
          background url("~common/image/mine/right-arrow.png") no-repeat
          width 0.14rem
          height 0.22rem
          background-size contain
          &:before
            position absolute
            left -0.2rem
            right -0.2rem
            top -0.2rem
            bottom -0.2rem
            content ''
      .change-account
        background #fff
        display flex
        height 1.04rem
        align-items center
        justify-content center
        font-size $font-size-medium
        color #808080
        margin-top 0.3rem

</style>

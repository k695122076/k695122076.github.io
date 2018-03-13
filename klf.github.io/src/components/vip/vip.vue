<template>
  <div>
    <div class="vip-content">
        <header>
          <p>会员功能</p>
          <span><i></i></span>
        </header>
        <div class="list-item">
          <ul>
            <li @click="goScanCode()">
              <i class="scancode"></i>
              <p>扫码支付</p>
            </li>
            <li @click="goPremium()">
              <i class="premium"></i>
              <p>权益金转余额</p>
            </li>
            <li @click="goShare()">
              <i class="share"></i>
              <p>分享券转余额</p>
            </li>
            <li @click="goTransfer()">
              <i class="transfer"></i>
              <p>余额转账</p>
            </li>
            <li @click="goWithdraw()">
              <i class="withdraw"></i>
              <p>余额提现</p>
            </li>
            <li @click="goDeal()">
              <i class="deal"></i>
              <p>交易记录</p>
            </li>
          </ul>
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
    created(){
      console.log(setLoginPage)
    },
    methods:{
      goScanCode(){
        this.$router.push({
          path: '/vip/scancode'
        })
      },
      goPremium(){
        this.$router.push({
          path: '/vip/premium'
        })
      },
      goShare(){
        this.$router.push({
          path: '/vip/share'
        })
      },
      goTransfer(){
        this.$router.push({
          path: '/vip/transfer'
        })
      },
      goWithdraw(){
        this.$router.push({
          path: '/vip/withdraw'
        })
      },
      goDeal(){
        this.$router.push({
          path: '/vip/deal'
        })
      },
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
  .vip-content
    width 100%
    position fixed
    top 0
    bottom 1.1rem
    header 
      height 0.88rem
      line-height 0.88rem
      background-color $color-header-background
      p
        text-align center
        font-size $font-size-large
        color $color-header-text
      span
        position absolute
        right 0.32rem
        top 0.22rem
        display block
        height 0.36rem
        background: url('~common/image/header/message.png') bottom no-repeat
        width: 0.34rem
        background-size: contain
        i
          display block
          position absolute
          right 0
          top 0
          width 0.12rem
          height 0.12rem 
          background-color $color-tab-text-active
          border-radius 50%
    .list-item 
      padding 0.4rem 0.42rem 0.18rem 0.42rem   
      ul 
        display flex
        flex-direction row 
        flex-wrap wrap
        align-content space-around
        align-items center
        li 
          width 3.1rem 
          height 3.1rem 
          background-color #ffffff
          flex-grow 1
          margin-bottom 0.4rem
          border-radius 0.06rem
          align-self center
          i
            display block 
            margin 0 auto 0.6rem
          .scancode
            width 0.96rem
            height 0.88rem
            background:url("~common/image/vip/scanCode.png") no-repeat
            background-size:contain
            margin-top 0.88rem
          .premium
            width 0.78rem
            height 0.81rem
            background:url("~common/image/vip/premium.png") no-repeat
            background-size:contain
            margin-top 0.88rem
          .share
            width 0.94rem
            height 0.76rem
            background:url("~common/image/vip/share.png") no-repeat
            background-size:contain
            margin-top 0.94rem
          .transfer
            width 0.68rem
            height 0.78rem
            background:url("~common/image/vip/transfer.png") no-repeat
            background-size:contain
            margin-top 0.93rem
          .withdraw
            width 0.99rem
            height 0.78rem
            background:url("~common/image/vip/withdraw.png") no-repeat
            background-size:contain
            margin-top 0.93rem
          .deal
            width 0.68rem
            height 0.87rem
            background:url("~common/image/vip/deal.png") no-repeat
            background-size:contain
            margin-top 0.88rem
          p 
            color #3d3d3d
            font-size 0.07rem
        li:nth-child(odd)
          margin-right 0.46rem
          
          

 
</style>

<template>
  <transition name="slide">
    <div class="vip-content">
      <div class="scancode-content">
          <header>
            <div class="back-btn" @click="returnBack">
              <i></i>
            </div>
            <p>扫码支付</p>
          </header>
          <div class="paymentBox">  
            <h2>
              <i></i>
              您正在向XXX商家付款
            </h2>
            <div class="payMoney">
              <div class="payBox">
                <input type="number" placeholder="请输入支付金额" />
              </div>
              <div class="payBox">
                <span>请选择支付方式</span>
                <i></i>
              </div>
            </div>
            <div class="submit">确认提交</div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'

  export default {
    data () {
      return {

      }
    },
    methods:{
      returnBack(){
        this.$router.go(-1)
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slide-enter,.slide-leave-to
    transform translate3d(100%,0,0)

  .slide-enter-active,.slide-leave-active
    transition all 0.3s
    
  .vip-content
    position fixed
    left 0
    right 0
    top 0
    bottom 1rem
    background-color #f3d066
    height 100%
    z-index 1000
  .scancode-content 
    width 100%
    position fixed
    top 0
    bottom 1.1rem
    header 
      height 0.88rem
      line-height 0.88rem
      background-color #f3d066
      position relative
      .back-btn
        position absolute
        top 0
        left 0
        width 0.16rem
        height 100%
        padding 0 0.3rem
        i 
          display inline-block
          width 0.36rem
          height 0.29rem
          background:url("~common/image/vip/wLeft.png") no-repeat
          background-size:contain
      p
        text-align center
        font-size $font-size-large
        color #ffffff
    .paymentBox
      width 6.9rem
      height 5.96rem
      background-color #ffffff
      border-radius 0.1rem
      margin 1.39rem auto 0
      text-align left
      h2 
        line-height 1rem
        background-color #f5f5f5
        font-size 0.3rem
        color #4d4d4d
        padding-left 0.8rem
        border-radius 0.1rem 0.1rem 0 0
      .payMoney
        padding 0.4rem 0.3rem
        font-size 0.28rem
        color #999999
        .payBox
          height 1.05rem
          line-height 1.05rem
          border-bottom 1px solid #e6e6e6
          input 
            width 100%
            height 100%
          i 
            display inline-block
            width 0.13rem
            height 0.22rem
            background:url("~common/image/vip/gRight.png") no-repeat
            background-size:contain
            float right 
            margin-top 0.415rem
      .submit
        margin 0.4rem auto 0
        width 5.7rem
        height 0.8rem
        line-height 0.8rem 
        background-color #eb4747
        font-size 0.36rem
        color #ffffff
        text-align center 
        border-radius 0.1rem
</style>

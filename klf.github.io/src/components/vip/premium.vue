<template>
  <transition name="slide">
    <div class="premium-content">
      <div class="vip-content">
        <header>
          <div class="back-btn" @click="returnBack">
            <i></i>
          </div>
          <p>权益金转余额</p>
        </header>
        <div class="premiumNum">
          <p><span>我的权益金</span><b>50000</b></p>
          <p><span>抗震捐款</span><em>5</em></p>
        </div>
        <div class="inputMoney">
          <p>转换金额（当前转换费率 0.1）</p>
          <div class="inputBox">
            <i></i>
            <input type="number" id="input"/>
          </div>
        </div>
        <div class="submit">确认提交</div>
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
    
  .premium-content
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color $color-background
    z-index 5
  .vip-content
    width 100%
    position fixed
    top 0
    bottom 1.1rem
    header 
      height 0.88rem
      line-height 0.88rem
      background-color $color-header-background
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
          width 0.16rem
          height 0.29rem
          background:url("~common/image/vip/bLeft.png") no-repeat
          background-size:contain
      p
        text-align center
        font-size $font-size-large
        color $color-header-text
    .premiumNum
      background-color #ffffff
      width 100%
      margin 0.2rem 0
      p 
        line-height 0.92rem
        padding 0 0.3rem
        text-align left
        span 
          color #808080
          font-size 0.28rem
          text-align left
        b 
          color #333333
          font-size 0.5rem
          float right
        em 
          float right
          font-style normal
          color #808080
    .inputMoney
      padding 0 0.3rem
      background-color #ffffff
      margin-bottom 0.61rem
      p 
        line-height 1.07rem
        font-size 0.28rem
        color #333333
        text-align left
      .inputBox
        height 0.9rem
        padding 0.1rem 0 0.32rem 0
        text-align left
        display flex
        i 
          display inline-block
          width 0.34rem
          height 0.44rem
          line-height 0.9rem
          background:url("~common/image/vip/money.png") no-repeat
          background-size:contain
          position relative
          top 0.23rem
          margin-right 0.24rem
        input 
          flex 1
          height 100%
          width 100%
    .submit
      margin 0 auto
      width 5.7rem
      height 0.8rem
      line-height 0.8rem 
      background-color #eb4747
      font-size 0.36rem
      color #ffffff
      text-align center 
      border-radius 0.1rem
</style>

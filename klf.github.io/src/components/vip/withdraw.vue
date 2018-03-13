<template>
  <transition name="slide">
    <div class="transfer-content">
      <div class="vip-content">
        <header>
          <div class="back-btn" @click="returnBack">
            <i></i>
          </div>
          <p>添加银行卡</p>
        </header>
        <div class="bankMsg">
          <div class="bankName">
            <span>银行</span>
            <input type="text" placeholder="请输入银行名称" />
          </div>
          <div class="bankName">
            <span>账户名</span>
            <input type="text" placeholder="请输入银行账户名" />
          </div>
          <div class="bankName">
            <span>银行账号</span>
            <input type="number" placeholder="请输入银行账号" />
          </div>
        </div>
        <div class="submit">确认</div>
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

  .transfer-content
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
    .bankMsg
      margin 0.2rem 0
      background-color #ffffff
      padding-left 0.3rem
      text-align left
      border-bottom 1px solid #e6e6e6
      .bankName
        border-bottom 1px solid #e6e6e6
        line-height 1.08rem
        display flex
        span 
          color #333333
          font-size 0.28rem
          display inline-block
          width 1.9rem
        input 
          flex 1
          color #999999
          font-size 0.28rem
      .bankName:last-child
        border-bottom none
    .submit
      margin 0.6rem auto 0
      width 5.7rem
      height 0.8rem
      line-height 0.8rem 
      background-color #eb4747
      font-size 0.36rem
      color #ffffff
      text-align center 
      border-radius 0.1rem
</style>

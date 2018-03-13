<template>
  <transition name="slide">
    <div class="wrapper">
      <div class="header">
        <i class="back" @click="back"></i>
        <span class="text">推荐码</span>
      </div>
      <div class="content-wrapper">
          <div class="content" ref="content">
            <div class="top">
              <div class="icon">
                <img src="~common/image/mine/logo.png" alt="">
              </div>
              <span class="text">美一天便利店</span>
            </div>
            <div class="qrcode-wrapper">
              <img src="~common/image/mine/qrcode.png" alt="">
            </div>
            <div class="bottom">
              我的推广二维码
            </div>
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
    created () {
      window.resize = () => {
        this._calcWidth()
      }
    },
    mounted () {
      this._calcWidth()
    },
    methods: {
      back() {
        this.$router.back()
      },
      _calcWidth() {
        let clientWidth = window.innerWidth
        let content = this.$refs.content
        let width
        if(clientWidth < 340) {
          width = 280
        } else {
          width = 320
        }
        content.style.width = `${width}rem`
      }
    },
    components: {
      Scroll,
      Slider
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .slide-enter,.slide-leave-to
    transform translate3d(100%,0,0)

  .slide-enter-active,.slide-enter-active
    transition all 0.3s
  .wrapper
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 1
    background $color-background
    .header
      position fixed
      height 0.88rem
      top 0
      left 0
      right 0
      background $color-header-background
      display flex
      justify-content center
      align-items center
      .back
        position absolute
        background url("~common/image/back.png") no-repeat
        background-size contain
        width 0.16rem
        height 0.3rem
        left 0.3rem
        top 0.3rem
        &:before
          position absolute
          left -0.2rem
          right -0.2rem
          top -0.2rem
          bottom -0.2rem
          content ''
      .text
        color $color-header-text
        font-size $font-size-large
        font-weight bold
    .content-wrapper
      position fixed
      left 0
      right 0
      top 0.88rem
      bottom 0
      z-index 1
      background $color-background
      display flex
      justify-content center
      align-items center
      .content
        width 6.4rem
        height 8.66rem
        background #fff
        display flex
        flex-direction column
        .top
          margin 0.6rem
          height 1.2rem
          display flex
          align-items center
          .icon
            width 1.2rem
            height 1.2rem
            img
              display block
              width 100%
              height 100%
          .text
            margin-left 0.48rem
            color $color-header-text
            font-size $font-size-large
        .qrcode-wrapper
          height 4.8rem
          width 4.8rem
          margin-left auto
          margin-right auto
          img
            display block
            width 100%
            height 100%
        .bottom
          margin-top 0.4rem
          font-size $font-size-medium
          color #808080
          height 0.48rem
          display flex
          align-items center
          justify-content center
</style>

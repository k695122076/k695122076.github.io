<template>
  <transition name="slide">
    <div class="wrapper">
      <div class="header">
        <i class="back" @click="back"></i>
        <span class="text">推荐会员</span>
      </div>
      <div class="content-wrapper">
        <scroll class="content">
          <ul class="list">
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>一级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>二级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>三级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>四级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>五级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>六级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>七级</span>
              </div>
            </li>
            <li class="item">
              <i class="icon"></i>
              <div class="detail">
                <div class="name">
                  <label>张三</label>(<span>12345</span>)
                </div>
                <p class="mobile">158894233235</p>
              </div>
              <div class="level">
                <label>推荐等级：</label>
                <span>八级</span>
              </div>
            </li>
          </ul>
        </scroll>
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
    methods: {
      back() {
        this.$router.back()
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
      .content
        width 100%
        height 100%
        overflow hidden
        margin-top 0.2rem
        .list
          background #fff
          .item
            display flex
            align-items center
            height 1.64rem
            border-bottom 1px solid #E6E6E6
            box-sizing border-box
            margin-right 0.28rem
            margin-left 0.36rem
            &:last-child
              border-bottom none
            .icon
              width 0.78rem
              height 0.72rem
              background url("~common/image/mine/star.png") no-repeat
              background-size contain
              margin-right 0.48rem
            .detail
              display flex
              flex 1
              flex-direction column
              .name
                font-size $font-size-medium-m
                color #333
                font-weight bold
              .mobile
                font-size $font-size-small-x
                color #666
                margin-top 0.32rem
            .level
              width 2rem
              min-width 2rem
              font-size $font-size-small-x
              display flex
              label
                color #666
              span
                color #000
                font-weight bold

</style>

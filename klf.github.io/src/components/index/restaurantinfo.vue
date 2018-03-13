<template>
  <transition name="slide">
    <div class="index-detail">
        <div class="wrapper">
          <div class="header">
            <div class="back-btn" @click="returnBack">
              <i></i>
            </div>
            <span>餐厅详情</span>
          </div>
          <div class="item">
              <div class="shopName">
                <div class="shopImg">
                  <img src="../../common/image/index/demo.png" alt="">
                </div>
                <div class="shopNum">
                  <h1>1号餐厅</h1>
                  <div class="phone">
                    <i></i>
                    <span>15813868156</span>
                  </div>
                  <div class="address">
                    <i></i>
                    <span>深圳市罗湖区体育场A-06</span>
                  </div>
                </div>
              </div>
          </div>
          <div class="intro">
            <div class="title">简介</div>
            <div class="content">
              <p>欢迎光临本店，您的支持是我们最大的前进动力，本店所有产品均低价销售，并且保证质量，需要的亲请放心购买，我们一定会给您一个最舒心的购物体验！</p>
              <p>本店所有的商品照片为专业摄影师拍摄，后期精心修制及色彩调整，尽量与实际商品保持一致，但由于拍摄时用光、角度、显示器色彩偏差、个人对颜色的认知等方面的差异，导致实物可能会与照片存在一些色差，最终颜色以实际商品为准。请在购买前与我们客服充分沟通后做出慎重选择。色差问题将不被我们认可当退换货的理由！</p>
            </div>
          </div>
        </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import {setLoginPage} from 'common/js/mixin'

  export default {
    mixins: [setLoginPage],
    data () {
      return {
        
      }
    },
    created () {
      
    },
    methods: {
      returnBack(){
        this.$router.go(-1)
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
    transition all 0.1s

  .index-detail
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color $color-background
    z-index 3
  .wrapper
    position fixed
    left 0
    right 0
    top 0
    .header
      position relative
      width 100%
      height 0.88rem
      background-color $color-header-background
      span 
        font-size $font-size-large
        color $color-header-text
        line-height 0.88rem
        display flex
        flex-direction column
        align-items center
      .back-btn 
        position absolute
        top 0
        left 0
        height 100%
        width 0.16rem
        padding 0 0.3rem
        i 
          display inline-block
          width 0.16rem
          height 0.29rem
          background:url("~common/image/vip/bLeft.png") no-repeat
          background-size:contain
          margin-top 0.3rem
    .item
          height 2.22rem
          width 100%
          padding-left 0.3rem
          box-sizing border-box
          background #fff
          margin-bottom 0.2rem
          border-radius 0.06rem
          box-shadow 0 0.08rem 0.3rem 0 rgba(219, 219, 219, 0.4)
          border-top 1px solid #ccc
          background:url("~common/image/index/bj.png") no-repeat
          background-size:contain
          .shopName
            width 100%
            display flex
            .shopImg
              width 1.64rem
              margin-right 0.74rem
              img 
                width 100%
                height 1.64rem
                margin-top 0.2rem
            .shopNum
              flex 1
              padding 0.3rem 0
              text-align left
              color #333
              i
                display inline-block
                width 0.2rem
                height 0.2rem
              h1 
                font-size $font-size-large
                font-weight 900
                line-height 0.44rem
              .phone 
                line-height 0.68rem
                font-size $font-size-small-x
                i
                  background:url("~common/image/index/phone.png") no-repeat
                  background-size:contain
              .address 
                font-size $font-size-small-x
                i
                  background:url("~common/image/index/adress.png") no-repeat
                  background-size:contain
    .intro
      padding 0.3rem
      margin-top 0.16rem
      background-color #ffffff
      color #333333
      .title 
        text-align left
        font-size 0.4rem
        line-height 0.44rem
      .content
        padding-top 0.08rem
        p 
          font-size 0.3rem
          line-height 0.52rem
          text-indent 0.6rem
          text-align left
</style>

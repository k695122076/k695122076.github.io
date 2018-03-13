<template>
  <transition name="slide">
    <div class="wrapper">
      <div class="header">
        <i class="back" @click="back"></i>
        <span class="text">基本信息</span>
      </div>
      <div class="content-wrapper">
        <scroll class="content">
          <div>
            <div class="slider-wrapper">
              <slider>
                <div v-for="item in imgList">
                  <img :src="item" />
                </div>
              </slider>
              <div class="store">
                <div class="img-wrapper">
                  <img src="~common/image/mine/logo.png" alt="">
                </div>
                <div class="text">
                  美一天便利店
                </div>
              </div>
            </div>
            <ul class="list">
              <li class="item">
                <div class="left alliance">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>是否联盟</span>
                </div>
                <div class="right">是</div>
              </li>
              <li class="item">
                <div class="left id">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>总店ID</span>
                </div>
                <div class="right">556</div>
              </li>
            </ul>
            <ul class="list">
              <li class="item">
                <div class="left total">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>应还账单总额</span>
                </div>
                <div class="right">6000.00</div>
              </li>
              <li class="item">
                <div class="left remain">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>剩余补贴额度</span>
                </div>
                <div class="right">200.00</div>
              </li>
              <li class="item">
                <div class="left period">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>订单结算周期</span>
                </div>
                <div class="right">一周</div>
              </li>
            </ul>
            <ul class="list">
              <li class="item">
                <div class="left person">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>联系人</span>
                </div>
                <div class="right">张三</div>
              </li>
              <li class="item">
                <div class="left mobile">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>联系电话</span>
                </div>
                <div class="right">18512345678</div>
              </li>
              <li class="item">
                <div class="left location start">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>联系地址</span>
                </div>
                <div class="right">广东省深圳市罗湖区罗湖体育馆123号</div>
              </li>
              <li class="item">
                <div class="lati left">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>经度</span>
                </div>
                <div class="right">东经E114°10′3.28″</div>
              </li>
              <li class="item">
                <div class="lati left">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>纬度</span>
                </div>
                <div class="right">北纬N22°33′45.51″</div>
              </li>
            </ul>
            <ul class="list">
              <li class="item">
                <div class="left bank start">
                  <div class="icon-wrapper">
                    <i></i>
                  </div>
                  <span>银行信息</span>
                </div>
                <div class="right">
                  <label>华夏银行</label>
                  <span>6228480402564890018</span>
                </div>
              </li>
            </ul>
            <div class="article">
              <h3>简介</h3>
              <div>
                <p>欢迎光临本店，您的支持是我们最大的前进动力，本店所有产品均低价销售，并且保证质量，需要的亲请放心购买，我们一定会给您一个最舒心的购物体验！</p>
                <p>本店所有的商品照片为专业摄影师拍摄，后期精心修制及色彩调整，尽量与实际商品保持一致，但由于拍摄时用光、角度、显示器色彩偏差、个人对颜色的认知等方面的差异，导致实物可能会与照片存在一些色差，最终颜色以实际商品为准。请在购买前与我们客服充分沟通后做出慎重选择。色差问题将不被我们认可当退换货的理由！</p>
              </div>
            </div>
          </div>
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
        imgList: []
      }
    },
    created() {
      this._getImgList()
    },
    methods: {
      back() {
        this.$router.back()
      },
      _getImgList() {
        for(let i = 0; i < 5; i++){
          this.imgList.push('https://y.gtimg.cn/music/photo_new/T003R720x288M000000yTU5u2XJFWh.jpg?max_age=2592000')
        }
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

  .slide-enter-active,.slide-leave-active
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
      bottom 0.2rem
      display flex
      .content
        width 100%
        height 100%
        overflow hidden
        .slider-wrapper
          width 100%
          position relative
          overflow hidden
          .store
            left 0.3rem
            bottom 0.3rem
            position absolute
            display flex
            .img-wrapper
              width 1.4rem
              height 1.4rem
              img
                display block
                width 100%
                height 100%
            .text
              color #fff
              font-size $font-size-large
              margin-left 0.3rem
              display flex
              align-items flex-end
        .list
          margin-top 0.2rem
          background #fff
          .item
            border-bottom 1px solid #e6e6e6
            padding-right 0.3rem
            margin-left 0.3rem
            display flex
            justify-content space-between
            line-height 0.84rem
            .left,.right
              font-size $font-size-medium
              color #3d3d3d
            .left
              text-align left
              display flex
              align-items center
              .icon-wrapper
                width 0.6rem
                display flex
              &.alliance i
                width 0.32rem
                height 0.32rem
                background url("~common/image/mine/alliance.png") no-repeat
                background-size contain
              &.id i
                width 0.36rem
                height 0.36rem
                background url("~common/image/mine/id.png") no-repeat
                background-size contain
              &.total i
                width 0.34rem
                height 0.28rem
                background url("~common/image/mine/total.png") no-repeat
                background-size contain
              &.remain i
                width 0.36rem
                height 0.28rem
                background url("~common/image/mine/alliance.png") no-repeat
                background-size contain
              &.period i
                width 0.32rem
                height 0.32rem
                background url("~common/image/mine/period.png") no-repeat
                background-size contain
              &.person i
                width 0.36rem
                height 0.28rem
                background url("~common/image/mine/person.png") no-repeat
                background-size contain
              &.mobile i
                width 0.3rem
                height 0.3rem
                background url("~common/image/mine/mobile.png") no-repeat
                background-size contain
              &.location i
                width 0.36rem
                height 0.36rem
                background url("~common/image/mine/location.png") no-repeat
                background-size contain
                margin-top 0.24rem
              &.lati i
                width 0.3rem
                height 0.3rem
                background url("~common/image/mine/lati.png") no-repeat
                background-size contain
              &.bank i
                width 0.4rem
                height 0.4rem
                background url("~common/image/mine/bank.png") no-repeat
                background-size contain
                margin-top 0.28rem
              &.start
                align-items flex-start
            .right
              text-align right
              font-weight bold
              max-width 3.2rem
              display flex
              flex-direction column
              justify-content center
              label,span
                font-weight bold
                max-width 4rem
            &:last-child
              border-bottom none
        .article
          margin-top 0.2rem
          margin-bottom 1.12rem
          background #fff
          box-sizing border-box
          padding-left 0.3rem
          padding-right 0.3rem
          padding-bottom 0.3rem
          line-height 0.5rem
          color #333
          font-size $font-size-medium-m
          h3
            height 0.96rem
            display flex
            align-items center
            font-size $font-size-large-m
            font-weight bold
          p
            text-indent 2em
</style>
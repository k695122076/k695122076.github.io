<template>
  <transition name="slide">
    <div class="transfer-content">
      <div class="vip-content">
        <header>
          <i @click="returnBack"></i>
          <p>选择银行卡</p>
          <i></i>
        </header>
        <div class="bankMsg">
          <ul>
            <li v-for="item in list">{{item.bankName}}</li>
          </ul>
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
        list:[
          {bankName:'中国银行储蓄卡（1109）'},
          {bankName:'中国建设银行储蓄卡（1109）'},
          {bankName:'中国农业银行储蓄卡（1109）'}
        ]
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
    bottom 1rem
    background-color $color-background
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
      i 
        display inline-block
        width 0.16rem
        height 0.29rem
        background:url("~common/image/vip/bLeft.png") no-repeat
        background-size:contain
        position absolute
        top 0.295rem
        left 0.3rem
      p
        text-align center
        font-size $font-size-large
        color $color-header-text
</style>

<template>
   <div class="wrapper" v-show="showFlag" @click.stop>
       <div class="alert">
           <p class="close">
               <i @click="hide"></i>
           </p>
           <div class="icon-wrapper">
               <img src="./error.png" class="error"/>
           </div>
           <div class="message" v-html="message"></div>
           <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        confirmBtnText: {
          type: String,
          default: '确定'
        },
        message: {
          type: String,
          default: '错误'
        }
      },
      data() {
        return {
          showFlag: false
        }
      },
      methods: {
        show() {
            this.showFlag = true
        },
        hide() {
            this.showFlag = false
        },
        confirm() {
            this.hide()
            this.$emit('confirm')
        }
      },
      components: {

      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .wrapper
    background: rgba(0,0,0,0.4)
    display flex
    align-items center
    justify-content center
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 999
    .alert
      width 280px
      min-height 200px
      background #fff
      border-radius: 3px;
      display flex
      flex-direction column
      justify-content: center;
      align-items: center;
      .close
        height 31px
        display flex
        justify-content flex-end
        align-items center
        width 100%
        i
          margin-right 10px
          height 11px
          width 11px
          background url("./close.png") no-repeat
          background-size contain
          position relative
          &:before
            position absolute
            left -10px
            right -10px
            top -10px
            bottom -10px
            content ''
      .icon-wrapper
        width 30px
        height 30px
        img
          display block
          width 100%
          height 100%
      .message
        color #333
        margin-top 24px
        margin-bottom 24px
        display flex
        flex-wrap wrap
        flex 1
        width 160px
        font-size $font-size-medium-m
        justify-content center
        align-items center
        text-align center
        line-height 24px
      .operate-btn
        color #fff
        font-size $font-size-medium
        display flex
        align-items center
        justify-content center
        width 160px
        height 34px
        border-radius 3px
        background-color #eb4747
        margin-bottom 24px

</style>

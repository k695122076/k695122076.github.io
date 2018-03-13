<template>
   <div class="wrapper" v-show="showFlag" @click.stop>
       <div class="alert">
           <p class="close">
               <i @click="hide"></i>
           </p>
           <div class="message" v-html="message"></div>
           <div class="operate-btn">
               <span class="btn cancel" @click="cancel">{{cancelBtnText}}</span>
               <span class="btn confirm" @click="confirm">{{confirmBtnText}}</span>
            </div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props: {
        cancelBtnText: {
          type: String,
          default: '取消'
        },
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
        cancel() {
            this.hide()
            this.$emit('cancel')
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
        display flex
        font-size $font-size-medium
        justify-content space-between
        margin-bottom 24px
        display flex
        width 100%
        box-sizing border-box
        .btn
          height 34px
          width 90px
          border-radius 3px
          box-sizing border-box
          display flex
          align-items center
          justify-content center
          &.confirm
            color #fff
            background-color #eb4747
            margin-right 40px
          &.cancel
            color #333
            background #fff
            border 1px solid #eb4747
            margin-left 40px

</style>

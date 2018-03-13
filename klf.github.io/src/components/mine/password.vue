<template>
  <transition name="slide">
    <div class="wrapper">
      <div class="header">
        <i class="back" @click="back"></i>
        <span class="text">修改密码</span>
      </div>
      <div class="content-wrapper">
        <ul class="content">
          <li class="item">
            <div class="text">
              <span>旧</span>
              <span>密</span>
              <span>码</span>
            </div>
            <div class="password">
              <input type="password" maxlength="16" placeholder="请输入旧密码" v-model="oldPassword"/>
            </div>
          </li>
          <li class="item middle">
            <div class="text">
              <span>新</span>
              <span>密</span>
              <span>码</span>
            </div>
            <div class="password">
              <input type="password" maxlength="16"placeholder="请输入新密码" v-model=" newPassword" />
            </div>
          </li>
          <li class="item">
            <div class="text">
              <span>确</span>
              <span>认</span>
              <span>密</span>
              <span>码</span>
            </div>
            <div class="password">
              <input type="password" maxlength="16" placeholder="请再次输入新密码" v-model="confirmNewPassword" />
            </div>
          </li>
        </ul>
        <div class="operate-btn" @click="submit">
          提交
        </div>
      </div>
      <alert ref="alert" :message="alertMsg"></alert>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Alert from 'base/alert/alert'

  export default {
    data () {
      return {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        alertMsg: ''
      }
    },
    methods: {
      showAlert() {
        this.$refs.alert.show()
      },
      back() {
        this.$router.back()
      },
      submit() {
        if(!this._check()){
          return
        }
      },
      _check() {
        let oldPassword = this.oldPassword
        let newPassword = this.newPassword
        let confirmNewPassword = this.confirmNewPassword
        if(!oldPassword){
          this.alertMsg = '请输入旧密码'
          this.showAlert()
          return false
        }
        if(!newPassword){
          this.alertMsg = '请输入新密码'
          this.showAlert()
          return false
        }
        if(!confirmNewPassword){
          this.alertMsg = '请再次输入新密码'
          this.showAlert()
          return false
        }
        if(newPassword !== confirmNewPassword) {
          this.alertMsg = '两次密码输入不一致，请重新输入'
          this.showAlert()
          return false
        }
        return true
      }
    },
    components: {
      Alert
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
        margin-top 0.2rem
        background #fff
        .item
          height 1.04rem
          display flex
          align-items center
          box-sizing border-box
          margin-left 0.3rem
          font-size $font-size-medium-m
          color #333
          &.middle
            border-top 1px solid #f2f2f2
            border-bottom 1px solid #f2f2f2
          .text
            display flex
            width 1.36rem
            align-items center
            justify-content space-between
            margin-right 0.3rem
          .password
            display flex
            flex 1
            height 100%
            input
              display block
              width 100%
              height 100%
              align-items center
              box-sizing border-box
              padding-left 0.3rem
              padding-right 0.3rem
              outline none
      .operate-btn
        margin-top 1.5rem
        height 0.8rem
        width 5.6rem
        display flex
        align-items center
        justify-content center 
        color #fff
        background #eb4747
        border-radius 5px
        margin-left auto
        margin-right auto

</style>

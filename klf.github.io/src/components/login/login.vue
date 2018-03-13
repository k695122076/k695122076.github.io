<template>
  <div>
    <div class="wrapper">
      <div class="logo">
        <img src="~common/image/logo-black.png" />
      </div>
      <div class="content">
        <div class="bar">
          <input type="text" placeholder="请输入用户名" maxlength="32" v-model="username"/>
        </div>
        <div class="bar">
          <input type="password" placeholder="请输入密码" maxlength="16" v-model="password"/>
        </div>
        <div class="bar">
          <input class="code" type="text" placeholder="请输入验证码" maxlength="6" v-model="captureCode"/>
          <div class="capture-wrapper">
            <img src="~common/image/login/capture.png" />
          </div>
        </div>
        <div class="operate">
          <div class="auto-login" @click="toggleAuto" ref="autoLogin">
            <i class="icon"></i>
            <span>下次自动登录</span>
          </div>
          <div class="forget-pwd">
            忘记密码
          </div>
        </div>
      </div>
      <div class="operate-btn active" @click="doLogin">
        登录
      </div>
    </div>
    <alert ref="alert" :message="alertMsg"></alert>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'
  import Alert from 'base/alert/alert'
  import {login} from 'api/login'
  import {ERR_CODE} from 'api/config'
  import {hasClass,addClass,removeClass} from 'common/js/dom'
  import {setUserInfo} from 'common/js/cache'

  export default {
    data() {
      return {
        username: '',
        password: '',
        captureCode: '',
        alertMsg: ''
      }
    },
    computed: {
      ...mapGetters([
        'isAutoLogin'
      ])
    },
    // keep-alive后每次进入改页面，都会触发activated
    // 不一定会触发created或者mounted
    activated () {
      this.setLoginPage(true)
      let autoLogin = this.$refs.autoLogin
      if(this.isAutoLogin){
        addClass(autoLogin, 'active')
        this.setAutoLogin(true)
      } else {
        removeClass(autoLogin, 'active')
        this.setAutoLogin(false)
      }
    },
    methods: {
      showAlert() {
        this.$refs.alert.show()
      },
      toggleAuto() {
        let autoLogin = this.$refs.autoLogin
        if(hasClass(autoLogin, 'active')){
          removeClass(autoLogin, 'active')
          this.setAutoLogin(false)
        } else　{
          addClass(autoLogin, 'active')
          this.setAutoLogin(true)
        }
      },
      doLogin() {
        if(!this._check()){
          return
        }
        let username = this.username
        let password = this.password
        let captureCode = this.captureCode
        login({
          username:username,
          password:password,
          captureCode:captureCode
        }).then((res)=>{
          if(res.errCode === ERR_CODE){
            if(this.isAutoLogin){
              this.setAutoLogin(true)
            } else {
              this.setAutoLogin(false)
            }
            setUserInfo({
              username:username,
              password:password
            })
            this.$router.push({
              path:'index'
            })
          } else {
            this.alertMsg = res.msg || '出错了，请稍后再试！'
            this.showAlert()
          }
        })
      },
      _check(){
        let username = this.username
        let password = this.password
        if(!username){
          this.alertMsg = '请输入用户名'
          this.showAlert()
          return false
        }
        if(!password){
          this.alertMsg = '请输入密码'
          this.showAlert()
          return false
        }
        return true
      },
      ...mapActions([
        'setLoginPage',
        'setAutoLogin'
      ]),
    },
    components: {
      Alert
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .wrapper
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #fff
    display flex
    flex-direction column
    align-items center
    .logo
      width 3.12rem
      height 2.12rem
      margin-top 1.44rem
      img
        display block
        width 100%
        height 100%
    .content
      width 5.6rem
      .bar
        height 0.78rem
        display flex
        align-items center
        margin-top 0.3rem
        border-bottom 1px solid #e6e6e6
        &:first-child
          margin-top 0.9rem
        input
          display flex
          align-items center
          height 100%
          width 5.12rem
          color #333
          font-size $font-size-medium-m
          outline none
        .code
          display flex
          height 100%
          width 4.48rem
          align-items center
          color #333
          font-size $font-size-medium-m
          outline none
        .capture-wrapper
          width 1.12rem
          height 0.42rem
          img
            display block
            width 100%
            height 100%
      .operate
        width 100%
        height 0.8rem
        display flex
        align-items center
        justify-content space-between
        color #808080
        font-size $font-size-small
        .auto-login
          display flex
          height 0.4rem
          align-items center
          .icon
            display flex
            margin-right 0.16rem
            width 0.2rem
            height 0.2rem
            &:before
              display flex
              background url("~common/image/login/square-gray.png") no-repeat
              background-size contain
              height 100%
              width 100%
              content ''
          &.active
            color #eb4747
            .icon
              position relative
              &:before
                background url("~common/image/login/square.png") no-repeat
                background-size contain
              &:after
                background url("~common/image/login/right.png") no-repeat
                background-size contain
                position absolute
                content ''
                width 0.12rem
                height 0.08rem
                margin-top 0.06rem
                margin-left 0.04rem
        .forget-pwd
          display flex
          align-items center
          height 0.4rem
    .operate-btn
      width 5.6rem
      height 0.8rem
      display flex
      justify-content center
      align-items center
      color #fff
      background #ccc
      border-radius 5px
      font-size $font-size-large
      margin-top 0.48rem
      &.active
        background #eb4747


</style>
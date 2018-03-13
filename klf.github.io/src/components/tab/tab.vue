<template>
    <div class="tab" v-show="!isLoginPage">
        <router-link tag="div" class="tab-item index" to="/index">
            <span>我的餐厅</span>
        </router-link>
        <router-link tag="div" class="tab-item vip" to="/vip">
            <span>会员功能</span>
        </router-link>
        <router-link tag="div" class="tab-item mine" to="/mine">
            <span>我的</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {

      }
    },
    created () {
        console.log(this.$store)
    },
    computed: {
      ...mapGetters([
        'isLoginPage'
      ]),
    },
    components: {

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .tab
      display:flex
      position:fixed
      left:0
      right:0
      bottom:0
      height: 1rem
      background:$color-tab-background
      font-size:$font-size-small
      .tab-item
        display:flex
        flex:1
        justify-content:center
        color:$color-tab-text
        span
          position:absolute
          top:30px
          height:14px
          display:flex
          align-items:center
        &:before
          position:absolute
          background-size:contain
          height:19px
          top:8px
          content:''
        &.index:before
          background:url("~common/image/tab/restaurant.png") no-repeat
          width:22px
          background-size:contain
        &.vip:before
          background:url("~common/image/tab/vip.png") no-repeat
          width:20px
          background-size:contain
        &.mine:before
          background:url("~common/image/tab/mine.png") no-repeat
          width:20px
          background-size:contain
        &.router-link-active
          color:$color-tab-text-active
          &.index:before
            background:url("~common/image/tab/restaurant-active.png") no-repeat
            width:22px
            background-size:contain
          &.vip:before
            background:url("~common/image/tab/vip-active.png") no-repeat
            width:20px
            background-size:contain
          &.mine:before
            background:url("~common/image/tab/mine-active.png") no-repeat
            width:20px
            background-size:contain
</style>

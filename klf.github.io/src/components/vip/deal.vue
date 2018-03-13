<template>
  <transition name="slide">
    <div class="transfer-content">
      <div class="vip-content">
        <header>
          <div class="back-btn" @click="returnBack">
            <i></i>
          </div>
          <p>交易记录</p>
        </header>
        <scroll class="wrapper">
          <div class="new-list">
            <ul>
              <li v-for="item in list">
                <div class="dealTitle">
                  <span class="date">{{item.date}}</span>
                  <span class="batch">{{item.deal}}</span>
                </div>
                <div class="dealMoney">
                  <span class="text">{{item.text}}</span>
                  <span class="deduct">{{item.num}}</span>
                  <span class="lastMoney">{{item.money}}</span>
                </div>
              </li>
            </ul>
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
        list:[
          {date:'2018-02-07',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-07',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-07',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'1000.00'},
          {date:'2018-02-08',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-08',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-09',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'5000.00'},
          {date:'2018-02-09',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-07',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-07',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-07',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'1000.00'},
          {date:'2018-02-08',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-08',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'},
          {date:'2018-02-09',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'5000.00'},
          {date:'2018-02-09',deal:'2018020710000',text:'扣除补贴:',num:'200.00',money:'2000.00'}
        ]
      }
    },
    methods:{
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

  .slide-enter-active,.slide-leave-active
    transition all 0.3s

  .transfer-content
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color $color-background
    z-index 5
    .vip-content
      width 100%
      position fixed
      top 0
      bottom 0
      header 
        position fixed
        top 0 
        width 100%
        height 0.88rem
        line-height 0.88rem
        background-color $color-header-background
        z-index 3
        .back-btn 
          position absolute
          top 0
          left 0
          width 0.16rem
          height 100%
          padding 0 0.3rem
          i 
            display inline-block
            width 0.16rem
            height 0.29rem
            background:url("~common/image/vip/bLeft.png") no-repeat
            background-size:contain
        p
          text-align center
          font-size $font-size-large
          color $color-header-text
          
      .wrapper 
        position fixed
        top 0
        width 100%
        height 100%
        padding-top 1.08rem
        box-sizing border-box
        .new-list
          padding-bottom 1.08rem
          ul 
            width 100%
            background-color #ffffff
            li 
              border-bottom 1px solid #e6e6e6
              padding 0.15rem 0
              .dealTitle
                padding 0 0.3rem
                height 0.49rem
                line-height 0.49rem
                color #a4a4a4
                font-size 0.24rem
                .date 
                  float left
                .batch
                  float right
              .dealMoney
                padding 0 0.3rem
                height 0.53rem
                line-height 0.53rem
                color #333333
                font-size 0.24rem
                .text 
                  float left
                .deduct 
                  float left
                  margin-left 0.16rem
                .lastMoney
                  float right
                  font-size 0.3rem
            li:last-child 
              border-bottom none
        

</style>

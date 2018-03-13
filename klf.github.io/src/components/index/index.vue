<template>
  <div>
    <div class="header">
      我的餐厅
    </div>
    <scroll class="wrapper">
      <div>
        <div class="news-list">
          <ul>
            <li class="item" v-for="(item,index) in list" @click="goInfo(index)">
              <div class="shopName">
                <div class="shopImg">
                  <img :src="item.img" alt="">
                </div>
                <div class="shopNum">
                  <h1>{{item.shopName}}</h1>
                  <div class="phone">
                    <i></i>
                    <span>{{item.phone}}</span>
                  </div>
                  <div class="address">
                    <i></i>
                    <span>{{item.address}}</span>
                  </div>
                </div>
              </div>
              <div class="shopIntro">
                <div class="introLeft">店家简介:</div>
                <div class="introRight">{{item.title}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import {setLoginPage} from 'common/js/mixin'

  export default {
    mixins: [setLoginPage],
    data () {
      return {
        list: []
      }
    },
    created () {
      this._getList()
    },
    methods: {
      selectItem(id){
        this.$router.push({
          path: `/index/${id}`,
        })
      },
      _getList() {
        for(let i = 0; i < 10; i++){
          let obj = {
            img: '../../common/image/index/demo.png',
            shopName: '1号餐厅',
            phone: '13525252525',
            address: '深圳市罗湖区体育场A-06',
            title: '欢迎光临本店，您的支持是我们最大的前进动力，本店所有产品均低价销售，并且保证质量，需要的亲品均低价销售，并且保证质量，需要的亲品均低价销售，并且保证质量，需要的',
            id: i + 1
          }
          this.list.push(obj)
        }
      },
      goInfo(index){
        console.log(index);
        this.$router.push({
          path: '/index/restaurantinfo'
        })
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .header
    width 100%
    height 0.88rem
    background-color $color-header-background
    font-size $font-size-large
    color $color-header-text
    line-height 0.88rem
    display flex
    flex-direction column
    align-items center
    position fixed
    top 0
    left 0
    z-index 3
  .wrapper
    position fixed
    left 0
    right 0
    top 0.88rem
    bottom 1rem
    .news-list
      padding-top 0.2rem
      ul
        padding-bottom 0.2rem
        .item
          height 3.24rem
          width 100%
          padding-left 0.3rem
          box-sizing border-box
          background #fff
          margin-bottom 0.2rem
          border-radius 0.06rem
          box-shadow 0 0.08rem 0.3rem 0 rgba(219, 219, 219, 0.4)
          .shopName
            height 2rem
            width 100%
            display flex
            border-bottom 1px dashed #e6e6e6
            .shopImg
              width 1.64rem
              height 2rem
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
          .shopIntro
            height 0.8rem
            padding 0.2rem 0
            width 100%
            display flex
            font-size $font-size-small
            .introLeft 
              width 1.4rem
              color #999
              line-height 0.4rem
            .introRight
              flex 1
              padding 0 0.26rem
              color #999
              line-height 0.4rem
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-align left

        

</style>

<template>
  <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <tab></tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from 'components/tab/tab'
  export default {
    name: 'App',
    created () {
      this.checkLogin()
    },
    methods: {
      checkLogin() {
        return true
      }
    },
    components: {
      Tab
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  @import "~common/stylus/variable"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
